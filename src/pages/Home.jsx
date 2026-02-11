import MainLayout from "../Layout/MainLayout";
import Hero from "../sections/Home/hero/Hero";
import Logos from "../sections/Home/logos/Logos";
import AutoFeatures from "../sections/Home/autoFeature/AutoFeatures";
const Home = () => {
  return (
    <>

      <MainLayout>
        <Hero />
        <Logos />
        <AutoFeatures />
      </MainLayout>
    </>
  );
};

export default Home;
