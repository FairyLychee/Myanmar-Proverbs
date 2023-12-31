<template>
  <!-- 8. is in the script block -->
  <div class="list-page-container">
    <div
      class="container mt-5 d-flex justify-content-between align-items-center"
    >
      <h2>{{ $route.params.name }} ( စကားပုံ )</h2>
      <router-link to="/" class="btn">Back</router-link>
    </div>

    <div class="container mt-5">
      <ul class="list-group my-5">
        <!-- 9. if list array is empty i want to show some text
        so I have to loop two times(for empty array and data array) -->

        <!-- Check if the entire list is empty -->
        <template v-if="getRelatedList.length === 0">
          <li class="list-group-item mt-5 py-4">
            <p class="nothing-text">
              " {{ $route.params.name }} " has nothing to show!
            </p>
          </li>
        </template>

        <!-- Loop through each item if the list is not empty -->
        <template v-else>
          <li
            class="list-group-item mb-3 py-4 d-flex justify-content-between align-items-center"
            v-for="list in getRelatedList"
            :key="list.ProverbId"
          >
            <div class="list-text">{{ list.ProverbName }}</div>
            <div class="text-end">
              <router-link
                :to="{
                  name: 'DetailPage',
                  params: {
                    id: list.TitleId,
                    provId: list.ProverbId,
                    detailName: list.ProverbName,
                  },
                }"
                class="btn"
                >Read More</router-link
              >
            </div>
          </li>
        </template>
        <!-- after creating router-link, I can go to Detail Page -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListPage",
  computed: {
    getRelatedList() {
      // 8. get the details data array from vuex and filter the array
      // which is equal to the clicked card's id. ('က' ဆို 'က'နဲ့ ပတ်သတ်တာတွေပဲကျ )
      const lists = this.$store.state.details;
      // router link က ပေးလိုက်တဲ့ id ကို ပြန်ယူသုံး

      const currentId = this.$route.params.id;
      //   console.log(currentId); worked

      const getList = lists.filter((item) => {
        return item.TitleId == currentId;
      });
      console.log(getList);
      return getList;
      // ‌after return the required data step 9. is in the template
    },
  },
};
</script>

<style scoped>
/* 
ECE3CE
739072
4F6F52
3A4D39
*/
.list-page-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: #ece3ce;
  color: #3a4d39;
}

.container h2 {
  font-weight: 600;
  font-size: 38px;
}

.btn {
  background: #3a4d39;
  border: 1px solid #3a4d39;
  color: #ece3ce;
  font-weight: 500;
  padding: 12px 32px;
}

.btn:hover {
  background: #4f6f52;
  border-color: #4f6f52;
  transition: 1s;
}

.list-group-item {
  background: #739072;
}

.list-group-item .list-text {
  font-weight: 600;
  font-size: 24px;
}

.nothing-text {
  font-size: 35px;
  text-align: center;
  color: #000;
}
</style>
