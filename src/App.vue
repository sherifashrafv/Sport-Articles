<template>
  <div>
    <component :is="layout"> </component>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const defaultLayout = "default";
    const { currentRoute } = useRouter();
    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );
    return {
      layout,
    };
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: block !important;
  width: 5px !important;
}

::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffff1f;
}
::-webkit-scrollbar-thumb {
  background: #574ad8;
}
</style>
