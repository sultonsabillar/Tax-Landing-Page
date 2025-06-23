import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import TeamMembers from "./components/team-members";
import PricingPlans from "./components/pricing-plans";
import FaqSection from "./components/faq-section";
import ContactForm from "./components/contact-form";
import TrustSignals from "./components/trust-signals";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <TrustSignals />
        <Services />
        <PricingPlans />
        <TeamMembers />
        <Testimonials />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
