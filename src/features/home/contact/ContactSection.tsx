import ContactHeader from "./header/ContactHeader";
import ContactLayout from "./layout/ContactLayout";

export default async function ContactSection() {
  // 👇 مستقبلاً هتجيب data من API هنا
  const contactData = {
    phone: "+20 100 000 0000",
    email: "info@nexera.com",
    address: "Cairo, Egypt",
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="relative py-12 md:py-16 xl:py-18 overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 max-w-7xl">
        <ContactHeader />
        <ContactLayout contact={contactData} />
      </div>
    </section>
  );
}
