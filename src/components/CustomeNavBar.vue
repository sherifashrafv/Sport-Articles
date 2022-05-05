<template>
  <div>
    <!-- Header -->
    <nav class="header">
      <div
        class="nav-bar position-fixed w-100 bg-white shadow-sm p-3 position-relative"
      >
        <span v-if="this.$route.name == 'online-training'"></span>

        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <router-link to="/" custom v-slot="{ navigate }">
                <div
                  class="d-flex flex-row justify-content-center align-items-center"
                >
                  <p
                    class="text-center fw-bold fs-4"
                    @click="navigate"
                    @keypress.enter="navigate"
                    role="button"
                  >
                    {{ $t("Home") }}&ensp;-
                  </p>
                  <p
                    v-if="this.$route.name == 'ArticlesId'"
                    class="text-center fw-bold fs-4"
                  >
                    &ensp;{{ $t("routers.injuries") }}&ensp; -&ensp;
                  </p>
                  <p
                    class="bread-crumb text-center fs-4 fw-bold"
                    v-if="this.$route.name == 'online-training'"
                  >
                    {{ $t("routers.onlineTraining") }}
                  </p>
                  <p
                    class="bread-crumb text-center fs-4 fw-bold"
                    v-if="this.$route.name == 'aboutus'"
                  >
                    {{ $t("routers.aboutUs") }}
                  </p>
                  <p
                    class="bread-crumb text-center fs-4 fw-bold"
                    v-if="this.$route.name == 'Contact-Us'"
                  >
                    {{ $t("routers.contactUs") }}
                  </p>
                  <p
                    class="bread-crumb text-center fs-4 fw-bold"
                    v-if="this.$route.name == 'ArticlesId'"
                  >
                    {{ $t("routers.information") }}
                  </p>
                </div>
              </router-link>
              <!-- Languages-DropDown-Menu -->
              <div class="languages">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle lang"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span v-if="$i18n.locale === 'ar'"> العربية </span>
                    <span v-else> الانجليزية </span>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li class="text-center" @click="setLocale('en')">
                      <a class="dropdown-item p-3" href="#">{{
                        $t("languages.english")
                      }}</a>
                    </li>
                    <li class="text-center" @click="setLocale('ar')">
                      <a class="dropdown-item p-3" href="#">{{
                        $t("languages.arabic")
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div @click="back" class="backArrow">
                <img src="../assets/images/Custome-Header/arrow.png" alt="" />
              </div>
            </div>
          </div>
          <!-- To Home -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Custome-NavBar",
  methods: {
    setLocale(locale) {
      localStorage.setItem("lang", locale);
      this.$i18n.locale = locale;
      window.location.reload();
      this.$router.push({
        params: { lang: locale },
      });
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.bread-crumb {
  color: #574ad8;
}
.backArrow {
  position: absolute;
  top: 25%;
  left: 5%;
}
.backArrow img {
  width: 25px !important;
}
</style>
