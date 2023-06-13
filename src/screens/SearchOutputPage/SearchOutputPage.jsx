import style from "./SearchOutputPage.module.scss";
// Component
import Document from "../../shared/Document/Document";
import Button from "../../shared/Button/Button";
import SectionHead from "./sections/SectionHead/SectionHead";
import SectionGeneralSummary from "./sections/SectionGeneralSummary/SectionGeneralSummary";
//
import { useEffect, useRef, useState } from "react";
import { objectSearch } from "../../service/api";
import { useSelector } from "react-redux";

const SearchOutputPage = () => {
  const page = useRef(null);
  const { documentsID } = useSelector((state) => state.documentsID);
  const { documentsItem } = useSelector((state) => state.documentsItem);
  // state
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [showBtn, setShowBtn] = useState(true);
  //
  const sss = () => {
  page.current.scrollIntoView({
    behavior: "smooth",
    top: 0
  });}
  useEffect(()=>{
    sss()
  },[])

  useEffect(() => {
    if (documentsID.length > documentsItem.length) {
      setShowBtn((showBtn) => (showBtn = false));
    } else {
      setShowBtn((showBtn) => (showBtn = true));
    }
  }, [documentsID, documentsItem]);

  useEffect(() => {
    if (documentsID.length) {
      objectSearch.getDocuments(documentsID.slice(start, end));
      setStart((start) => (start += 10));
      setEnd((end) => (end += 10));
    }
  }, [documentsID]);

  const handleGetDoc = () => {
    objectSearch.getDocuments(documentsID.slice(start, end));
    setStart((start) => (start += 10));
    setEnd((end) => (end += 10));
  };
  return (
    <main ref={page} className={style.main}>
      <SectionHead />
      <SectionGeneralSummary />
      <div className="container">
        <h3 className={style.titleList}>Список документов</h3>
        <div className={style.documentList}>
          {documentsItem
            ? documentsItem.map((card) => {
                return <Document key={card?.ok.id} data={card?.ok} />;
              })
            : null}
        </div>
        <Button
          isShow={showBtn}
          onSend={handleGetDoc}
          className={style.buttonList}
        >
          Показать больше
        </Button>
      </div>
    </main>
  );
};
export default SearchOutputPage;
