import React from "react";
import styles from "./Previewer.module.css";
class Previewer extends React.Component {
  render() {
    console.log("previewer: " + this.props.input);
    return (
      <div className={styles.previewerContainer}>
        <h1 id={styles["childTitle"]} className="text-lg">
          Hello this is the Previewer!
        </h1>
        <textarea
          className="form-control"
          id="previewer-textArea"
          placeholder={this.props.input}
          rows="25"
        ></textarea>
      </div>
    );
  }
}

export default Previewer;
