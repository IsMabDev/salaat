import React from "react";
import styles from "./Editor.module.css";
class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("maximize props: " + this.props.maximizeState);
    return (
      <div className={`${styles.editorContainer} ${styles.editorMaximized}`}>
        <div className={styles.previewHeader}>
          <h1 className={`text-sm ${styles.childTitle} `}>
            Hello this is the Editor!
          </h1>
          <button
            id="ButtonMinMaxEditor"
            className={`${styles.ButtonMax} btn ${
              this.props.maximizeState ? "btn-primary" : "btn-danger"
            }`}
            onClick={this.props.maximize}
          >
            {this.props.maximizeState ? (
              <i className="fa-solid fa-minimize"></i>
            ) : (
              <i className="fa-solid fa-maximize"></i>
            )}
          </button>
        </div>
        <p className={`${styles.infoForUser} text-lg`}>
          You can write here your markdown text
        </p>
        <textarea
          type="text"
          className={`"form-control" ${
            this.props.maximizeState
              ? styles.textareaMaximized
              : styles.textareaMinimized
          }`}
          onChange={this.props.handleChange}
          id="editor"
          // rows="10"
          defaultValue={this.props.input}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
