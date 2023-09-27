import React from "react";
import styles from "./Editor.module.css";
class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.input);
    return (
      <div className={styles.editorContainer}>
        <h1 id={styles["childTitle"]}>Hello this is the Editor!</h1>
        <textarea
          type="text"
          className="form-control"
          onChange={this.props.handleChange}
          id={styles["editor"]}
          // placeholder={this.props.input}
          rows="10"
        >
          {this.props.input}
        </textarea>
      </div>
    );
  }
}

export default Editor;
