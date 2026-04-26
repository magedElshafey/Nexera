import OurStoryHeader from "./OurStoryHeader";
import StickyStory from "./StickyStory";
import { getLocale } from "next-intl/server";
export default async function OurStorySection() {
  const locale = await getLocale();
  const isArabic = locale === "ar";
  const steps = [
    {
      title: "The Challenge",
      desc: "Businesses struggled to maintain reliable, well-trained workforce teams across security, cleaning, and operations — leading to inefficiencies and risk.",
    },
    {
      title: "Our Vision",
      desc: "We envisioned a unified workforce solution where quality, training, and operational excellence are standardized across every service.",
    },
    {
      title: "Building Nexera",
      desc: "We built Nexera to deliver integrated services — from security guarding to facility management — powered by trained professionals and structured systems.",
    },
    {
      title: "Operational Excellence",
      desc: "Through strict training, supervision, and performance tracking, we ensure consistent quality and reliability across every project.",
    },
    {
      title: "Real Impact",
      desc: "Today, Nexera empowers businesses to focus on growth while we handle the people, processes, and operations behind the scenes.",
    },
  ];
  const arsteps = [
    {
      title: "التحدي",
      desc: "واجهت الشركات صعوبة في توفير عمالة مدربة وموثوقة في مجالات الحراسة والنظافة والتشغيل، مما أدى إلى ضعف الكفاءة وزيادة المخاطر.",
    },
    {
      title: "رؤيتنا",
      desc: "كانت رؤيتنا تقديم نموذج متكامل لإدارة العمالة يعتمد على الجودة والتدريب والاحترافية في جميع الخدمات.",
    },
    {
      title: "تأسيس Nexera",
      desc: "قمنا ببناء Nexera لتقديم خدمات متكاملة تشمل الحراسة، التشغيل والصيانة، وإدارة المرافق، من خلال فرق عمل مدربة وأنظمة تشغيل منظمة.",
    },
    {
      title: "التميز التشغيلي",
      desc: "نعتمد على التدريب المستمر والإشراف الدقيق وقياس الأداء لضمان تقديم أعلى مستوى من الجودة في كل مشروع.",
    },
    {
      title: "الأثر الحقيقي",
      desc: "اليوم تساعد Nexera الشركات على التركيز على نمو أعمالها، بينما نتولى نحن إدارة العمليات والكوادر بكفاءة واحترافية.",
    },
  ];

  return (
    <section
      aria-labelledby="our-story-heading"
      className="relative py-12 md:py-16 xl:py-18"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <OurStoryHeader />
        <StickyStory steps={isArabic ? arsteps : steps} />
      </div>
    </section>
  );
}
