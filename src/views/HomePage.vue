<template>
  <div class="home-page-container container-fluid">
    <!-- 5. add the text for home page (6. is in the script block) -->
    <div class="container mt-5 py-2">
      <h1>{{ homePageTitle }}</h1>
      <p>{{ homePageDesc }}</p>
    </div>
    <!-- end of the home page texts and in the computed make new array for the carousel version-->

    <!-- 7. start looping -->
    <div class="container-fluid carousel-container mt-5">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="container">
          <div class="carousel-inner">
            <div
              v-for="(chunk, pageIndex) in paginatedTitles"
              :key="pageIndex"
              :class="{ 'carousel-item': true, active: pageIndex === 0 }"
            >
              <!-- Here I added classes dynamically cuz I have to check
            the first page to be active otherwise carousel will not be useable -->
              <div class="row">
                <!-- and then second looping started cuz 
                in paginatedTitles there are only arrays -->
                <div
                  class="col-lg-3 col-md-3 col-6 mb-4"
                  v-for="(title, index) in chunk"
                  :key="index"
                >
                  <!-- crate card for each column -->
                  <div class="card">
                    <div class="card-header">
                      <h5 class="text-center my-5">
                        {{ title.TitleName }}
                      </h5>
                    </div>
                    <div class="card-body">
                      <p>{{ title.TitleName }} နှင့်စသော စကားပုံများ</p>
                      <div>
                        <router-link
                          :to="{
                            name: 'ListPage',
                            params: {
                              id: title.TitleId,
                              name: title.TitleName,
                            },
                          }"
                          class="btn"
                          >Read More</router-link
                        >
                      </div>
                      <!-- after adding router-link, I can go to ListPage -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- carousel button section -->
        <div class="container-fluid custom-carousel-controls-container">
          <button
            class="carousel-control-prev custom-carousel-control"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next custom-carousel-control"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      homePageTitle: "မြန်မာအက္ခရာစဥ်ဇယား",
      homePageDesc:
        "မိမိကြည့်ရှုလိုသော သက်ဆိုင်ရာ အက္ခရာကိုနှိပ်၍ ရှာဖွေဖတ်ရှုနိုင်ပါသည်။",
    };
  },
  computed: {
    // 6. get the 4 items for row of carousel
    paginatedTitles() {
      // firstly make chunksize to be 4 cuz i want 4 items in a row
      const chunkSize = 4;
      // get the array data from the api using store (vuex)
      const titles = this.$store.state.titles;
      // console.log("All Titles:", titles);

      // create empty array to add the array that I want
      const chunks = [];

      // Start Looping...
      for (let i = 0; i < titles.length; i += chunkSize) {
        // since chunkSize is equal to 4, we slice (0, 0+4)
        // which mean we get the array[0] to array[3] and it goes to the end of the array
        chunks.push(titles.slice(i, i + chunkSize));
      }

      // console.log("Paginated Titles:", chunks);
      return chunks; // 7. is in the template
    },
  },
};
</script>

<style scoped>
/*  required colors codes 60 30 10 rule
163020
304D30
FFF7D4
EEF0E5
*/
.home-page-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: #163020;
  color: #eef0e5;
}

.home-page-container h1 {
  font-size: 60px;
  font-weight: 600;
  margin: 30px 0;
}

.home-page-container p {
  font-weight: 500;
  margin-top: 30px;
}

.card {
  background: #fff7d4;
  color: #163020;
}

.card-header h5 {
  font-size: 50px;
  font-weight: 600;
}

.card-body p {
  font-weight: 500;
}

.btn {
  background: #163020;
  color: #fff7d4;
}

.btn:hover {
  background: #fff7d4;
  border: 1px solid #163020;
  color: #000;
  transition: 1s;
}

/* I get this carousel buttons design form stack overflow */
.custom-carousel-controls-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.custom-carousel-control {
  width: 50px;
  height: 50px;
  background-color: #163020;
  border: none;
  border-radius: 50%;
  opacity: 0.8;
  color: #eef0e5;
}

.custom-carousel-control:hover {
  background-color: #304d30;
  opacity: 1;
}
</style>
