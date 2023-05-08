import style from "./HomePage.module.scss";
// component
import SectionHead from "./sections/SectionHead/SectionHead";
import SectionInfo from "./sections/SectionInfo/SectionInfo";
import SectionImage from "./sections/SectionImage/SectionImage";
import SectionTariff from "./sections/SectionTariff/SectionTariff"

const HomePage = () => {
  return (
    <main>
      <SectionHead />
      <SectionInfo />
      <SectionImage />
      <SectionTariff />
    </main>
  );
};

export default HomePage;
