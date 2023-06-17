import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
//
import { setAccountData } from "../../../store/accountData";
//
import style from "./LimitInfoBlock.module.scss";
//
import Loader from "../../../shared/Loader/Loader";

const LimitInfoBlock = () => {
  const { isAuth } = useSelector((state) => state.isAuth);
  const { accountData } = useSelector((state) => state.accountData);
  const [dataPrevious, setDataPrevious] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accountData) {
      setDataPrevious((dataPrevious) => (dataPrevious = false));
    } else {
      setDataPrevious((dataPrevious) => (dataPrevious = true));
    }
  }, [accountData]);

  useEffect(() => {
    if (isAuth === true) {
      axios
        .get("https://gateway.scan-interfax.ru/api/v1/account/info", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data.eventFiltersInfo;
            dispatch(setAccountData(data));
          }
        });
    }
  }, [isAuth]);

  return (
    <div className={style.box}>
      {dataPrevious ? <Loader /> : null}
      <div className={style.textWrapper}>
        <p className={style.text}>Использовано компаний</p>
        <span className={style.used}>{accountData?.usedCompanyCount}</span>
      </div>
      <div className={style.textWrapper}>
        <p className={style.text}>Лимит по компаниям</p>
        <span className={style.limit}>{accountData?.companyLimit}</span>
      </div>
    </div>
  );
};
export default LimitInfoBlock;
