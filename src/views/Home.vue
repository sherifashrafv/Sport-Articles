<template>
  <div class="h-100vh pt-2">
    <h1 class="text-end pe-3 pr-1 py-3">اكثر المقالات قراءة</h1>
    <Carousel :data="artticels" />
    <h1 class="text-end">تدريب عن بعد</h1>
    <div class="default-bg br-50 my-5">
      <div class="row">
        <div class="col-lg-7">
          <div class="d-flex flex-column text-white justify-content-start">
            <div class="w-100 text-end pe-5 mt-5">
              <!-- عن بعد -->
              <span class="yellow pr-1 fw-bold fs-2"> تدريب عن بعد </span>
              <h4 class="fs-17 my-3">
                جميع برامج التغذية الفردية مصممة خصيصًا لك. بعد جمع معلومات
                الفحص الأولية حول وضع التدريب الحالي والتغذية والأهداف والتاريخ
              </h4>
              <router-link
                to="/"
                custom
                @keypress.enter="navigate"
                v-slot="{ navigate }"
              >
                <button
                  class="btn br-50 second-bg px-3 text-white fw-bold border-none outline-none py-2"
                  @click="navigate"
                >
                  اقرأ المزيد حول ذلك
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="d-flex flex-row justify-content-start">
            <img
              class="onlineTrain h-250"
              src="../assets/images/Arrticels/online.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
export default {
  name: "Home-Vue",
  setup() {
    const artticels = ref([]);
    return { artticels };
  },
  components: {
    Carousel,
  },
  methods: {
    getArtt() {
      axios.get("arrticels").then((res) => {
        this.artticels = res.data;
      });
    },
  },
  mounted() {
    this.getArtt();
    console.log(this.artticels);
  },
};
</script>

<style>
.default-bg {
  background: #061a3d;
}
.onlineTrain {
  width: 50%;
  object-position: top;
}
.h-250 {
  height: 250px;
  object-fit: cover;
}
.yellow {
  color: #ffff1f;
}
.second-bg {
  background-color: #574ad8 !important;
}
.fs-17 {
  font-size: 17px;
}
</style>
