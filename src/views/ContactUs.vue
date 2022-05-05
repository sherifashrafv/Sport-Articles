<template>
  <div>
    <div class="row">
      <div class="col-lg-5 p-0">
        <img
          class="w-100 h-100vh object-fit"
          src="../assets/images/Contact-Us/contact-Us.png"
          alt=""
        />
      </div>
      <div class="col-lg-7 overflowY-Scroll h-100vh">
        <div>
          <div class="position-relative w-100 text-center py-5 my-5">
            <h1 class="z-5 over-lay">تواصل معنا</h1>
            <h2 class="fw-bold">تواصل معنا</h2>
          </div>
          <p class="text-center px-5">
            إذا كنت بحاجة إلى مدرب شخصي ، أو مشورة مدرب لياقة ، أو مراجعة لمنتج
            حياة صحية ، فلا تتردد في الاتصال بي.
          </p>
          <div class="container">
            <form class="row my-5">
              <div class="col-6">
                <div class="form-group mb-4">
                  <input
                    :placeholder="$t('inputs.name')"
                    class="bg-white border-0 br-25 p-3 w-100 color-input"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group mb-4">
                  <input
                    :placeholder="$t('inputs.email')"
                    class="bg-white border-0 br-25 p-3 w-100 color-input"
                    type="email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group mb-4">
                  <input
                    :placeholder="$t('inputs.topic')"
                    class="bg-white border-0 br-25 p-3 w-100 color-input"
                    type="email"
                  />
                </div>
              </div>
              <div class="form-group mb-4">
                <textarea
                  class="w-100 px-4 pt-4 b-0 color-input"
                  id=""
                  rows="7"
                  :placeholder="$t('inputs.message')"
                ></textarea>
              </div>
              <div class="form-group col-md-12 text-center mt-4">
                <button
                  @click.prevent="cons"
                  class="btn br-50 py-2 px-4 second-bg text-white fw-bold"
                >
                  أرسل الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact-Us",
  methods: {
    cons() {
      let date = new Date("August 19, 2022 23:15:30 UTC");
      console.log(date.toJSON());
    },
  },
};
</script>

<style>
.color-input::placeholder {
  color: #b9b3ef !important;
  font-size: 20px;
  outline: none;
}
</style>
