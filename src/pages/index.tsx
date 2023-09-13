import About from "@/components/views/About/About";
import Contact from "@/components/views/Contact/Contact";
import Hero from "@/components/views/Hero/Hero";
import Portfolio from "@/components/views/Portfolio/Portfolio";
import Pricing from "@/components/views/Pricing/Pricing";
import Resume from "@/components/views/Resume/Resume";
import Service from "@/components/views/Service/Service";
import Skill from "@/components/views/Skill/Skill";
import Testimonial from "@/components/views/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="lg:pr-16 2xl:pr-10  lg:pl-1">
      <Hero />
      <About />
      <Resume />
      <Service />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Pricing />
      <Contact />
    </div>
  );
}
