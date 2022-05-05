<template>
  <div>
    <div class="row">
      <div class="col-lg-5 p-0">
        <img
          v-if="this.$route.params.id == 1"
          class="w-100 h-100vh object-fit"
          src="../assets/images/ArricelsId/1.jpg"
          alt=""
        />
        <img
          v-if="this.$route.params.id == 2"
          class="w-100 h-100vh object-fit"
          src="../assets/images/ArricelsId/2.jpg"
          alt=""
        />
        <img
          v-if="this.$route.params.id == 3"
          class="w-100 h-100vh object-fit"
          src="../assets/images/ArricelsId/3.jpeg"
          alt=""
        />
        <img
          v-if="this.$route.params.id == 4"
          class="w-100 h-100vh object-top"
          src="../assets/images/ArricelsId/4.jpg"
          alt=""
        />
      </div>
      <div class="col-lg-7 overflowY-Scroll h-100vh">
        <div class="px-5 py-5 mt-3">
          <h3 v-if="this.$route.params.id == 1" class="fw-bold pb-3">
            الالم اثناء التمرين
          </h3>
          <h3 v-if="this.$route.params.id == 2" class="fw-bold pb-3">
            أساسيات الضخامة العضلية
          </h3>
          <h3 v-if="this.$route.params.id == 3" class="fw-bold pb-3">
            مقدمة لعلم التغذية
          </h3>
          <h3 v-if="this.$route.params.id == 4" class="fw-bold pb-3">
            هل تني الضهر خطر عند رفع الأوزان؟ الجزء الأول
          </h3>
          <div class="d-flex justify-content-between pb-4 position-relative">
            <div>
              <div class="d-flex">
                <img
                  v-if="this.$route.params.id == 1"
                  class="user-image ms-2 mt-1"
                  src="../assets/images/User/dr1.jpg"
                  alt=""
                />
                <img
                  v-if="this.$route.params.id == 2"
                  class="user-image ms-2 mt-1"
                  src="../assets/images/User/dr2.jpg"
                  alt=""
                />
                <img
                  v-if="this.$route.params.id == 3"
                  class="user-image ms-2 mt-1"
                  src="../assets/images/User/dr3.jpeg"
                  alt=""
                />
                <img
                  v-if="this.$route.params.id == 4"
                  class="user-image ms-2 mt-1"
                  src="../assets/images/User/dr3.jpeg"
                  alt=""
                />
                <div class="ps-5">
                  <p class="fs-5 mb-1"><b>Dr Ahmed Hawary</b></p>
                  <p class="me-1">Fonder</p>
                </div>
                <div class="date ps-4">
                  <span class="my-4 d-block">
                    <i class="far fa-calendar pr-2"></i>
                    10 February, 2022
                  </span>
                </div>
              </div>
            </div>
            <div class="share">
              <button
                class="second-bg p-2 rounded text-center btn text-white fw-bold"
              >
                <img src="../assets/images/icons/share.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <!-- get-component-by-params-id -->
        <Artticel v-if="this.$route.params.id == 1" />
        <Arttice2 v-if="this.$route.params.id == 2" />
        <Arttice3 v-if="this.$route.params.id == 3" />
        <Arttice4 v-if="this.$route.params.id == 4" />
      </div>
    </div>
  </div>
</template>

<script>
import Artticel from "../components/Art-1.vue";
import Arttice2 from "../components/Art-2.vue";
import Arttice3 from "../components/Art-3.vue";
import Arttice4 from "../components/Art-4.vue";
export default {
  name: "Artticel:ID",
  methods: {
    cons() {
      let date = new Date("August 19, 2022 23:15:30 UTC");
      console.log(date.toJSON());
    },
  },
  components: {
    Artticel,
    Arttice2,
    Arttice3,
    Arttice4,
  },
};
</script>

<style>
.color-input::placeholder {
  color: #b9b3ef !important;
  font-size: 20px;
  outline: none;
}
.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.share {
  position: absolute;
  top: -10%;
  left: 0;
}
.share button {
  outline: none !important;
  box-shadow: none !important;
}
.ill-span {
  color: rgb(0, 176, 240);
}
.img-descrptoion-dr {
  width: 381px;
  margin: auto;
}
.object-top {
  width: 100%;
  object-fit: cover;
  object-position: top;
}
</style>
