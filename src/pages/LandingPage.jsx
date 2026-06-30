import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import About from "../components/landing/About";
import WhyUs from "../components/landing/WhyUs";
import Features from "../components/landing/Features";
import Membership from "../components/landing/Membership";
import DashboardPreview from "../components/landing/DashboardPreview";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <About />

      <WhyUs />

      <Features />

      <Membership />

      <DashboardPreview />

      <Testimonials />

      <CTA />

      <Footer />
    </>
  );
}