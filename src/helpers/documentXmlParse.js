import { decode } from "html-entities";

const getImageUrl = (decodedContents) => {
  const images = decodedContents.match(/<img src="(.*?)"/m);

  return images ? images[1] : null;
};

const decodedContent = (markup) => {
  return decode(markup);
};

const removeAllTags = (content) => {
  return content.replace(/<(.|\n)*?>/g, " ");
};

export const getContent = (markup) => {
  const decodedContents = decodedContent(markup);
  const image = getImageUrl(decodedContents);
  const content = removeAllTags(decodedContents).slice(0, 700) + "...";

  return {
    image,
    content,
  };
};
