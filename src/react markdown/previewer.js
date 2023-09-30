import React from "react";
import styles from "./Previewer.module.css";
import { marked } from "marked";

class Previewer extends React.Component {
  markedString = () => {
    const option = {
      gfm: true,
      breaks: true,
    };
    return marked(this.props.input, option);
  };
  render() {
    return (
      <div
        id="preview"
        className={`${styles.previewContainer} "container" ${
          styles.previewMarked
        } ${this.props.editorMaximizeState ? styles.previewHide : ""}`}
        dangerouslySetInnerHTML={{
          __html: this.markedString(),
        }}
      ></div>
    );
  }
}

export default Previewer;
