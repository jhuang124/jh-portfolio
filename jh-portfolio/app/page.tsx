import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to main content</a>
      <div className="site-layout">
        <Sidebar />
        <main className="main-scroll">
          <About />
          <hr className="section-divider" />
          <Timeline />
          <hr className="section-divider" />
          <CaseStudies />
          <hr className="section-divider" />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
