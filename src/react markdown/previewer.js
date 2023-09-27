import React from "react";
import styles from "./Previewer.module.css";
import ReactDOMServer from "react-dom/server";

class Previewer extends React.Component {
  render() {
    return (
      <div id={styles["preview"]} className="1container">
        <h1 id={styles["childTitle1"]} className="text-lg">
          Hello this is the Previewer!
        </h1>
        {/* <textarea>{this.props.input}</textarea> */}
        <div className={`${styles.previewerMarked} container`}>
          <div className="row">
            <div className="col">
              <div className="border p-3">
                <ConvertedToHTML textToConvert={this.props.input} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ConvertedToHTML extends React.Component {
  render() {
    // console.log("text to convert" + this.props.textToConvert);
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.textToConvert }}></div>
    );
  }
}

export default Previewer;
