import MainLayout from "../Layout/MainLayout";
import Hero from "../components/Home/hero/Hero";
import Logos from "../components/Home/logos/Logos";
import AutoFeatures from "../components/Home/autoFeature/AutoFeatures";
import Features from "../components/Home/features/Features";
import Hero from "../sections/Home/hero/Hero";
import Logos from "../sections/Home/logos/Logos";
import AutoFeatures from "../sections/Home/autoFeature/AutoFeatures";
import FAQ from "../sections/Home/Faq/FAQ";



const Home = () => {
  return (
    <>

      <MainLayout>
        <Hero />
        <Logos />
        <AutoFeatures />
        <Features />
        <FAQ />
      </MainLayout>
    </>
  );
};

export default Home;
