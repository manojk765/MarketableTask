import FAQ from "../components/FAQ.jsx";
import Reviews from "../components/Reviews.jsx";
import Contact from "../components/Contact.jsx";
import Footer from '../components/Footer.jsx';
import Team from '../components/TeamSection.jsx';
import Features from '../components/WhyChooseUs.jsx';
import Demo from '../components/Demo.jsx';
import Course from '../components/Courses.jsx';
import Numbers from '../components/Numbers.jsx'

export default function Home() {
  return (
    <>
      <Numbers/>
      <Features />
      <Demo />
      <Course />
      <Team />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
