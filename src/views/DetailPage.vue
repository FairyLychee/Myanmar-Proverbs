<template>
  <!-- step 10. in the script block -->

  <!-- step 12. after getting the correct object 
  just render the required data -->
  <div class="detail-page-container">
    <div>
      <h3>{{ getDetail.ProverbName }}</h3>
      <p>
        {{ getDetail.ProverbDesp }}
      </p>
      <div>
        <router-link
          :to="`/ListPage/${id}/${this.$route.params.name}`"
          class="btn"
          >Back</router-link
        >
        <!-- this is back btn -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  // 10. get the id and provId from the route as props
  // cuz i sent them along with the router link
  props: ["id", "provId"],

  // 11. check again if the clicked text is equal to the answer and retrun
  // answer object (which can resuable in the template)
  computed: {
    getDetail() {
      const details = this.$store.state.details;
      // console.log(details);
      const getDetails = details.find((item) => {
        return item.TitleId == this.id && item.ProverbId == this.provId;
      });
      // console.log(this.id);
      // console.log(this.provId);
      // console.log(getDetails);
      return getDetails ? getDetails : "No data";
    },
  },
};
</script>

<style scoped>
.detail-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ece3ce;
  color: #3a4d39;
}

.detail-page-container h3 {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
}

.detail-page-container p {
  font-weight: 500;
  margin: 10px 0 40px 0;
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
</style>
