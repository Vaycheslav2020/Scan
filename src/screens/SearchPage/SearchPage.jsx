import style from "./SearchPage.module.scss";
// components
import SectionForm from "./sections/SectionForm/SectionForm";
import SectionImage from "./sections/SectionImage/SectionImage";

const SearchPage = () => {
  return (
    <main className={style.main + " container"}>
      <SectionForm />
      <SectionImage />
    </main>
  );
};

export default SearchPage;
