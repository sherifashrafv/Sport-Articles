<template>
  <BreadCrumb />
  <slot />
  <Sidemenu />
</template>

<script>
import Sidemenu from "../components/sideMenu.vue";
import BreadCrumb from "../components/CustomeNavBar.vue";
export default {
  name: "Deafult-LayOut",
  components: {
    Sidemenu,
    BreadCrumb,
  },
};
</script>

<style></style>
