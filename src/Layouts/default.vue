<template>
  <Header />
  <slot />
  <Sidemenu />
</template>

<script>
import Header from "../components/NavBar.vue";
import Sidemenu from "../components/sideMenu.vue";
export default {
  name: "Deafult-LayOut",
  components: {
    Header,
    Sidemenu,
  },
};
</script>

<style></style>
