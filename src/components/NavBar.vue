<template>
  <div>
    <!-- Header -->
    <nav class="header">
      <div
        class="nav-bar position-fixed w-100 bg-white shadow-sm p-3 position-relative"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <router-link to="/" custom v-slot="{ navigate }">
                <p
                  class="text-center fw-bold fs-4"
                  @click="navigate"
                  @keypress.enter="navigate"
                  role="button"
                >
                  {{ $t("Home") }}
                </p>
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
                    <li @click="setLocale('en')" class="text-center">
                      <a class="dropdown-item p-3" href="#">{{
                        $t("languages.english")
                      }}</a>
                    </li>
                    <li @click="setLocale('ar')" class="text-center">
                      <a class="dropdown-item p-3" href="#">{{
                        $t("languages.arabic")
                      }}</a>
                    </li>
                  </ul>
                </div>
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
  data() {
    return {
      data: [],
    };
  },
  methods: {
    setLocale(locale) {
      localStorage.setItem("lang", locale);
      this.$i18n.locale = locale;
      window.location.reload();
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-bar {
  z-index: 9999;
}
.lang {
  background: none !important;
  color: black;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
.languages {
  position: absolute;
  top: 25%;
  right: 10%;
}
.lang {
  font-size: 20px;
}
.lang::after {
  position: absolute;
  left: -15%;
  top: 40%;
}

.router-view-exist {
  width: calc(100% - 17.5%);
  background: rebeccapurple;
  height: 100%;
}
</style>
