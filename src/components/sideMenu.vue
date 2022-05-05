<template>
  <div class="container-fluid">
    <div class="sideMenu">
      <div class="d-flex flex-row justify-content-center">
        <div class="image-sideMenu mt-5">
          <img class="mt-5 pt-3" src="../assets/images/logo.png" alt="" />
        </div>
      </div>
      <ul
        class="nav-items mt-5 d-flex gap-3 flex-column justify-content-center mt-4"
      >
        <router-link
          to="/"
          custom
          exact
          @keypress.enter="navigate"
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <li
            style="display: flex; flex-direction: row ; align-items-center; padding: 15px 0; position-relative"
            :class="{
              'active-link ': isActive,
              'exact-active-link ': isExactActive,
            }"
            @click="navigate"
            role="button"
          >
            <img src="../assets/images/Home.png" alt="" />
            <h3 class="text-white m-auto m-0 fs-4">الرئيسية</h3>
          </li>
        </router-link>
        <!-- subMenuToggle -->
        <li>
          <button
            @click="subMenu()"
            style="background: transparent"
            class="categories-list border-0 w-100 d-flex flex-row align-items-center position-relative justify-content-between py-2"
          >
            <img
              class="categories-img"
              src="../assets/images/categories.png"
              alt=""
            />
            <span class="m-auto fs-4 text-white">المقالات</span>
            <div ref="arrow" class="arrow-toggle">
              <i class="fas fa-angle-down text-white"></i>
            </div>
          </button>
        </li>
        <!-- UL-For-SubMenu -->
        <div>
          <ul ref="subMenu" class="categories-ul">
            <li class="text-center text-cat mb-3 px-5 fs-4 text-wrap m-auto">
              كمال الاجسام
            </li>
            <li class="text-center text-cat mb-3 px-5 fs-4 text-wrap m-auto">
              التغذية
            </li>
            <li class="text-center text-cat mb-3 px-5 fs-4 text-wrap m-auto">
              التاهيل والاصابات
            </li>
          </ul>
        </div>
        <!-- End-SubMenu -->

        <router-link
          to="/online-training"
          custom
          exact
          @keypress.enter="navigate"
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <li
            style="display: flex; flex-direction: row ; align-items-center; padding: 15px 0; position:relative;"
            :class="{
              'active-link ': isActive,
              'exact-active-link ': isExactActive,
            }"
            @click="navigate"
            role="button"
          >
            <img class="mt-1" src="../assets/images/onlineTrain.png" alt="" />
            <h3 class="text-white m-auto fs-4">تدريب عن بعد</h3>
          </li>
        </router-link>
        <router-link
          to="/about-us"
          custom
          exact
          @keypress.enter="navigate"
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <li
            style="display: flex; flex-direction: row ; align-items-center; padding: 15px 0; position:relative;"
            :class="{
              'active-link ': isActive,
              'exact-active-link ': isExactActive,
            }"
            @click="navigate"
            role="button"
          >
            <img src="../assets/images/about.png" alt="" />
            <h3 class="text-white m-auto fs-4">من نحن</h3>
          </li>
        </router-link>

        <router-link
          to="/Contact-Us"
          custom
          exact
          @keypress.enter="navigate"
          v-slot="{ navigate, isActive, isExactActive }"
        >
          <li
            style="display: flex; flex-direction: row ; align-items-center; padding: 15px 0; position:relative;"
            :class="{
              'active-link ': isActive,
              'exact-active-link ': isExactActive,
            }"
            @click="navigate"
            role="button"
          >
            <img src="../assets/images/contact.png" alt="" />
            <h3 class="text-white m-auto fs-4">تواصل معنا</h3>
          </li>
        </router-link>
      </ul>
      <div class="main">
        <div class="container">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-side",
  methods: {
    subMenu() {
      this.$refs.arrow.classList.toggle("active");
      this.$refs.subMenu.classList.toggle("active");
    },
  },
};
</script>

<style>
.active-link img,
.categories-img,
.nav-items li img {
  width: 25px;
  position: absolute;
  right: 11px;
}
.arrow-toggle {
  position: absolute;
  top: 50%;
  left: 15%;
  transition: 0.1s linear;
  transform: translate(-50%, -50%);
}
.arrow-toggle.active {
  transform: translate(-50%, -50%) rotate(180deg);
}
.arrow-toggle i {
  font-size: 25px;
  color: #ffff1f !important;
}
.text-cat {
  color: #677388;
}
.categories-ul li {
  text-align: center;
  transition: 0.5s ease-in-out;
}
.categories-ul {
  overflow: hidden; /* Hide the element content, while height = 0 */
  height: 0;
  opacity: 0;
  transition: height 0ms 400ms, opacity 400ms 0ms;
}
.categories-ul.active {
  height: auto;
  opacity: 1;
  transition: height 0ms 0ms, opacity 600ms 0ms;
}
.categories-ul li:hover {
  background: transparent !important;
  color: white !important;
}
.active-link {
  position: relative;
}
.active-link::after {
  content: "";
  position: absolute !important;
  background: #112052;
  top: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.active-link:hover::after {
  background: #1b2564;
}
.nav-items li:hover:not(.categories-ul) {
  background: #1b2564;
}
.active-link img,
.active-link h3 {
  filter: invert(55%) sepia(92%) saturate(6883%) hue-rotate(238deg)
    brightness(89%) contrast(89%);
}
/* .icon-router:first-child h3 {
  color: #574ad8 !important;
} */
/* .icon-router:first-child img {
  filter: invert(55%) sepia(92%) saturate(6883%) hue-rotate(238deg)
    brightness(89%) contrast(89%);
} */

/* .icon-router:first-child:hover::after {
  background: #1b2564;
} */
/* .active-link::after {
  content: "";
  position: absolute !important;
  background: #112052;
  top: 0%;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.active-link:hover::after {
  background: #1b2564;
}
.active-link:hover img,
.active-link:hover h3 {
  filter: invert(55%) sepia(92%) saturate(6883%) hue-rotate(238deg)
    brightness(89%) contrast(89%);
} */
.sideMenu {
  height: 100%;
  width: 0%;
  width: 17.5%;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: #061a3d;
  min-height: 100vh;
}
.image-sideMenu {
  max-width: 100px;
}
.image-sideMenu img {
  width: 100%;
}
.main {
  margin-right: 17.5%;
  transition: margin-left 0.5s;
  /* height: 100vh; */
  height: calc(100vh - 70px);
  position: fixed;
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden !important;
  width: calc(100% - 17.5%);
  left: 0;
}
</style>
