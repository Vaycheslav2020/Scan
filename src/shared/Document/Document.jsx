import style from "./Document.module.scss";
import Image from "./img.png";
import dateFormat from "dateformat";
import { getContent } from "../../helpers/documentXmlParse";

const Document = ({ data }) => {
  const {
    issueDate,
    url,
    source: { name: sourceName },
    attributes: { isTechNews, isAnnouncement, isDigest, wordCount },
    title: { text: title },
    content: { markup },
  } = data;

  const date = dateFormat(issueDate, "mm.dd.yyyy");
  const { image, content } = getContent(markup);

  return (
    <div className={style.wrapper_document}>
      <div className={style.document}>
        <div className={style.head}>
          <span>{date}</span>
          <a href={url}>{sourceName}</a>
        </div>
        <h5 className={style.title}>{title}</h5>
        <div className={style.mark}>
          <span>
            {isTechNews
              ? "Технические новости"
              : isAnnouncement
              ? "анонс"
              : isDigest
              ? "дайджест"
              : "новости"}
          </span>
        </div>
        <figure className={style.poster}>
          <img src={image ? image : Image} alt="Poster" />
        </figure>

        <p className={style.paragraph}>{content}</p>

        <div className={style.footerDocument}>
          <a href={url} className={style.sourceLink}>
            Читать в источнике
          </a>
          <span>{wordCount + " слов"}</span>
        </div>
      </div>
    </div>
  );
};
export default Document;
