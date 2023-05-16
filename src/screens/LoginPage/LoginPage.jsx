import style from "./LoginPage.module.scss";
// components
import SectionTitle from "./sections/SectionTitle/SectionTitle";
import SectionForm from "./sections/SectionForm/SectionForm";

const LoginPage = () => {
  return (
    <main className="container">
      <div className={style.wrapper}>
        <SectionTitle />
        <SectionForm />
      </div>
    </main>
  );
};
export default LoginPage;
