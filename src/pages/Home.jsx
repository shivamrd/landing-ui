import MainLayout from "../Layout/MainLayout";
import Hero from "../sections/Home/Hero";
import Logos from "../sections/Home/Logos";
import AutoFeatures from "../sections/Home/AutoFeatures";
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
