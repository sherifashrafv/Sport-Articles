<template>
  <div>
    <div class="row">
      <div class="col-lg-5 p-0">
        <img
          class="w-100 h-100vh object-fit"
          src="../assets/images/AboutUs/img1.jpeg"
          alt=""
        />
      </div>
      <div class="col-lg-7 overflowY-Scroll h-100vh">
        <div>
          <div class="position-relative w-100 text-center py-5 my-5">
            <h1 class="z-5 over-lay">من نحن</h1>
            <h2 class="fw-bold">من نحن</h2>
          </div>
          <h5 class="dr-color text-center fw-bold">دكتور أحمد الهواري</h5>
          <div class="px-5 py-5">
            <p>دكتور علاج طبيعي جامعة القاهرة.</p>
            <p>
              دكتوراة مهنية في العلاج الطبيعي لإصابات العظام، كلية العلاج
              الطبيعي جامعة القاهرة.
            </p>
            <p>
              مدرب للحالات الطبية الخاصة معتمد من المنظمة الأمريكية للرياضة.
            </p>
            <p>اختصاصي تغذية رياضيين معتمد من الرابطة الدولية لعلوم الرياضة</p>
            <p>أخصائي تأهيل إصابات ملاعب.</p>
            <p>مدرب كمال أجسام.</p>
            <p>مدرب اونلاين.</p>
          </div>

          <div class="container">
            <div class="row py-5">
              <div class="col-4">
                <div class="bg-white py-5 h-100 text-center br-25">
                  <h3 class="text-color-1 fw-bold fs-1">
                    <vue3-autocounter
                      ref="counter"
                      :startAmount="0"
                      :endAmount="1"
                      :duration="6"
                      separator=","
                      :decimals="0"
                      :autoinit="true"
                    />
                  </h3>
                  <p>المدربين</p>
                </div>
              </div>
              <div class="col-4">
                <div class="bg-white py-5 h-100 text-center br-25">
                  <h3 class="text-color-1 fw-bold fs-1">
                    <vue3-autocounter
                      ref="counter"
                      :startAmount="0"
                      :endAmount="200"
                      :duration="3"
                      separator=","
                      :decimals="0"
                      :autoinit="true"
                    />
                  </h3>
                  <p>الطلاب المتخرجين</p>
                </div>
              </div>
              <div class="col-4">
                <div class="bg-white py-5 h-100 text-center br-25">
                  <h3 class="text-color-1 fw-bold fs-1">
                    <vue3-autocounter
                      ref="counter"
                      :startAmount="0"
                      :endAmount="100"
                      :duration="3"
                      separator=","
                      :decimals="0"
                      :autoinit="true"
                    />
                  </h3>
                  <p>الدورات المتاحة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-us",
};
</script>

<style>
.how-us-overlay {
}
.over-lay {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  color: #e4e2f2;
  font-size: 98px;
  top: 40%;
  font-weight: bold;
  font-style: italic;
  width: 100%;
}
.dr-color {
  color: #0000ff;
}
.overflowY-Scroll {
  overflow-y: scroll;
}
.text-color-1 {
  color: #574ad8;
}
</style>
