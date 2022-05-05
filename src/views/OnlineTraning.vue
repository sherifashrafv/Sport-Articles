<template>
  <div>
    <div class="row">
      <div class="col-lg-5 p-0">
        <img
          class="w-100 h-100vh object-fit"
          src="../assets/images/OnlineTraning/online-train.png"
          alt=""
        />
      </div>
      <div class="col-lg-7 overflow-scroll h-100vh">
        <h4 class="py-5 fw-bold">تدريب عن بعد</h4>

        <div
          class="Follow-up-feeding px-5 d-flex flex-column justify-content-start"
        >
          <h1 class="fw-bold">متابعة التغذية</h1>
          <p class="fs-6">
            جميع برامج التغذية الفردية مصممة خصيصًا لك. بعد جمع معلومات الفحص
            الأولية حول وضع التدريب الحالي والتغذية والأهداف والتاريخ ، نقوم
            بكتابة برنامجك المخصص. تتضمن خطة التدريب هذه خطة غذائية لفقدانالوزن
            ،او ازيادة الكتلة العضلية او تحسين الأداء الرياضي.
          </p>
          <p>
            نحن نقوم بوضع خطط وجبات محددة بناءًا على احتياجاتك. التسجيل عبر
            الإنترنت ، وتحليل التقدم.
          </p>
          <p class="pb-4">
            يشتمل التدريب الاونلاين علي دعم غير محدود، والرد علي جميع اسألتك،
            وتغديلات في خطة التغذية، وتقييم اسبوعي للوزن والمقاسات ونسبة الدهون،
            ودعم دائم للظروف الطارئة.
          </p>
          <h1 class="fw-bold">
            متابعات التدريب ( كمال <br />
            الأجسام).
          </h1>
          <p>
            كل برامج التدريب مكتوبة خصيصا ليك انت بعد جمع المعلومات عنك ووضعك
            الحالي ومستواك التدريبي وهدفك وتغذيتك، بنصمم ليك برنامج تدريبي خاص
            بيك انت.
          </p>
          <p>
            المتابعة بتتضمن برنامج مفصل مكتوب، تقييم أداء عن طريق الفيديوهات، رد
            علي جميع استفساراتك عن طريق البريد الالكتروني او الواتس آب، تعديل
            علي البرنامج باستمرار حسب التغيرات في المستوي او الظروف الطارئة.
          </p>
          <h1 class="fw-bold">متابعات التأهيل والإصابات</h1>
          <p>
            عندك إصابة أو ألم مانعك دايما من التمرين؟ مش عارف تريح من التمرين أو
            تكمل؟ مش عارف إزاي تتغلب علي الألم ده؟
          </p>
          <p>
            عندك ألم مزمن بقاله فترة طويلة مش بيقل؟ أو بيقل مع الراحة وكل ما
            ترجع تتمرن تاني؟
          </p>
          <p>
            انصحك في الأول تقرا المقالات المكتوبة هنا علي الموقع بخصوص الألم
            وإزاي تتعامل معاه.
          </p>
          <p>
            وفي نفس الوقت احنا بنقدم استشارات مدفوعة عن طريق مكالمة صوتية بنناقش
            فيها حالتك وبقدملك نصايح وخطة تساعدك إنك تتغلب علي الألم ده.
          </p>
          <p>
            وكمان بنقدم خدمة متابعة التأهيل والتمرين مع وجود الإصابات مع دكتور
            أحمد الهواري المتخصص تحديدا في الإصابات والعلاج الطبيعي
          </p>
          <h4 class="fw-bold py-3">السعر</h4>
          <h3 class="fw-bold pb-2">كيفية الانضمام إلينا</h3>
          <p>
            يمكن التواصل معنا والاستفسار أكثر عن طريق إرسال رسالة علي بريد
            الموقع عن طريق إختيار "تواصل معنا" وسيتم الرد عليك في أقرب فرصة
          </p>
          <h4 class="fw-bold py-5">التحولات</h4>
        </div>
        <div class="container">
          <div class="row gy-4">
            <div
              v-for="(img, index) in imgs"
              :key="index"
              class="col-lg-6"
              @click="() => showImg(index)"
            >
              <img
                role="button"
                class="h-200 br-25 w-100 object-fit"
                :src="typeof img === 'string' ? img : img.src"
              />
            </div>

            <!-- all props & events -->
            <vue-easy-lightbox
              scrollDisabled
              escDisabled
              moveDisabled
              :visible="visible"
              :imgs="imgs"
              :index="index"
              @hide="handleHide"
            ></vue-easy-lightbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/images/OnlineTraning/img1.jpg";
import img2 from "../assets/images/OnlineTraning/img2.jpg";
import img3 from "../assets/images/OnlineTraning/img3.jpg";
import img4 from "../assets/images/OnlineTraning/img4.jpg";
import img5 from "../assets/images/OnlineTraning/img5.jpg";
import img6 from "../assets/images/OnlineTraning/img6.jpg";
import img7 from "../assets/images/OnlineTraning/img7.jpg";
import img8 from "../assets/images/OnlineTraning/img8.jpg";
export default {
  name: "Online-Traning",
  data() {
    return {
      imgs: [
        { title: "test img", src: img1 },
        { title: "test img", src: img2 },
        { title: "test img", src: img3 },
        { title: "test img", src: img4 },
        { title: "test img", src: img5 },
        { title: "test img", src: img6 },
        { title: "test img", src: img7 },
        { title: "test img", src: img8 },
      ], // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style>
.object-fit {
  object-fit: cover;
}
.h-100vh {
  height: calc(100vh - 70px) !important;
}
.h-200 {
  height: 200px;
}
.br-25 {
  border-radius: 25px;
}
</style>
