import React from "react";
import Editor from "./editor";
import Previewer from "./previewer";
import styles from "./MainApp.module.css";
class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: "Editor Input",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ editorInput: e.target.value });
    console.log("this.state.editorInput= " + this.state.editorInput);
  }

  render() {
    return (
      <div className={styles.MainAppContainer}>
        {" "}
        <Editor
          input={this.state.editorInput}
          handleChange={this.handleChange}
        />
        <h1>
          <Previewer input={this.state.editorInput} />
        </h1>
      </div>
    );
  }
}

export default MainApp;
