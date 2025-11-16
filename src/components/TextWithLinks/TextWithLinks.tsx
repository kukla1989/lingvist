import styles from "./TextWithLinks.module.scss";
import { removeBraces } from "../../_utils/helpers.ts";

interface TextWithLinksProps {
  text: string;
}

// "a {a_link|exotic} movie "
function TextWithLinks({ text }: TextWithLinksProps) {
  const msg = removeBraces(text);
  console.log(msg);
  return (
    // <>{msg.split(/\{[^|}]+\|([^}]+)\}/g)
    <>{msg.split(/\{(?:a_link|sx)[^|}]*\|([^}|]+)[^}]*}/g)
      .map((text, ind) => {
        return ind % 2 === 0
          ? text
          : <span className={styles.word} key={ind}>{text}</span>
      })
    }</>
  );
}

export default TextWithLinks;
