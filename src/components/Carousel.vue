<template>
  <div class="w-100 mt-5">
    <swiper
      id="articlesSlider"
      :slidesPerView="3"
      :spaceBetween="30"
      :modules="modules"
      :centeredSlides="false"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="art in data" :key="art.id">
        <router-link
          class="text-decoration-none"
          @click="relode()"
          :to="`/articles/${art.id}`"
        >
          <div
            class="br-50 bg-white text-black p-4 d-flex flex-column justify-content-end"
          >
            <div class="br-25">
              <img
                class="img-fluid w-100 h-300 br-25"
                :src="require(`../assets/images/Arrticels/${art.img}`)"
              />
            </div>
            <div class="date-art text-end w-100">
              <span class="d-block my-4">
                <i class="far fa-calendar pr-2"></i>
                {{ art.date }}
              </span>
              <h4 class="fw-bold">{{ art.title.slice(0, 20) }}...</h4>
              <span> {{ art.decription.slice(0, 81) }}.. </span>
            </div>
          </div>
        </router-link>
      </swiper-slide>

      <!-- <swiper-slide>
        <div class="br-50 bg-white p-4 d-flex flex-column justify-content-end">
          <div class="image-artticels br-25">
            <img
              class="img-fluid w-100 h-300 br-25"
              src="../assets/images/Arrticels/art2.jpg"
              alt=""
            />
          </div>
          <div class="date-art text-end">
            <span class="d-block my-4">
              <i class="far fa-calendar pr-2"></i>
              10 February, 2022
            </span>

            <h3 class="fw-bold">الألم أثناء التمرين</h3>
            <span>
              عاش والله .. قررت تغير من عاداتك للأحسن وتتمرن .. واشتريت لبس
              الجيم ودفعت الاشترك ..
            </span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="br-50 bg-white p-4 d-flex flex-column justify-content-end">
          <div class="image-artticels br-25">
            <img
              class="img-fluid w-100 h-300 br-25"
              src="../assets/images/Arrticels/art3.jpeg"
              alt=""
            />
          </div>
          <div class="date-art text-end">
            <span class="d-block my-4">
              <i class="far fa-calendar pr-2"></i>
              10 February, 2022
            </span>

            <h3 class="fw-bold">الألم أثناء التمرين</h3>
            <span>
              عاش والله .. قررت تغير من عاداتك للأحسن وتتمرن .. واشتريت لبس
              الجيم ودفعت الاشترك ..
            </span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="br-50 bg-white p-4 d-flex flex-column justify-content-end">
          <div class="image-artticels br-25">
            <img
              class="img-fluid w-100 h-300 br-25"
              src="../assets/images/Arrticels/art4.jpg"
              alt=""
            />
          </div>
          <div class="date-art text-end">
            <span class="d-block my-4">
              <i class="far fa-calendar pr-2"></i>
              10 February, 2022
            </span>

            <h3 class="fw-bold">الألم أثناء التمرين</h3>
            <span>
              عاش والله .. قررت تغير من عاداتك للأحسن وتتمرن .. واشتريت لبس
              الجيم ودفعت الاشترك ..
            </span>
          </div>
        </div>
      </swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
import "swiper/css";

import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Pagination } from "swiper";

export default {
  props: {
    data: {
      type: Object,
      name: "artticels",
    },
  },
  name: "Carousel-Sports",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods: {
    relode() {
      setTimeout(() => {
        window.location.reload();
      }, 50);
    },
  },
};
</script>

<style>
.br-50 {
  border-radius: 50px !important;
}
.h-300 {
  height: 300px !important;
  object-fit: cover;
}
.br-25 {
  border-radius: 25px;
}
.line-2 {
  line-height: 2;
}
#articlesSlider {
  padding-right: 40px !important;
}
>>> #articlesSlider > .swiper-wrapper > .swiper-slide,
>>> #categoriesSlider > .swiper-wrapper > .swiper-slide {
  width: 380px !important;
}
</style>
