import React, {Fragment, Component} from 'react';
import './App.css'

// Local imports dfetching the editors
import HtmlEditor from './Editors/HtmlEditor';
import CssEditor from './Editors/CssEditor';
import JsEditor from './Editors/JsEditor';
import Sidebar from './Sidebar/Sidebar';

class App extends Component{
  // State maintaing the content in the respective files and their respective views
  state = {
    html: '',
    css: '', 
    js: '',
    htmlView: false,
    cssView: false,
    jsView: false,
  }
  EnableMyView = (type) => {
    if(type === "html"){
      this.setState((prevState)=> ({
        htmlView: true,
        cssView: false,
        jsView: false
      }))
    }
    else if(type === "css"){
      if(type === "css"){
        this.setState((prevState)=> ({
          htmlView: false,
        cssView: true,
        jsView: false
        }))
      }
    }
    else{
      if(type === "js"){
        this.setState((prevState)=> ({
          htmlView: false,
          cssView: false,
          jsView: true
        }))
      }
    }

  }
  ChangeInputHandlerHTML = (value) => {
    this.setState({
      html: value
    });
  }
  ChangeInputHandlerCSS = (value) => {
    this.setState({
      css: value
    });
  }
  ChangeInputHandlerJS = (value) => {
    this.setState({
      js: value
    });
  }
  render(){
    // Doc to make the file connected
    let srcDoc = `
      <html>
        <body>${this.state.html}</body>
        <style>${this.state.css}</style>
        <script>${this.state.js}</script>
      </html>
    `;
    let content = {
      HTML: this.state.html, 
      CSS: this.state.css, 
      JS: this.state.js
    }
    return (
      <Fragment>
        <Sidebar enableView = {this.EnableMyView} content = {content}/>
      <div className = "pane top-pane">
        {/* Options satisfying the configuration of the code editor and passing the content handler*/}
        <HtmlEditor 
          language="xml" 
          displayName="index.html"
          value = {this.state.html}
          onChange = {this.ChangeInputHandlerHTML} 
          view = {this.state.htmlView}/>
        <CssEditor 
          language="css" 
          displayName="index.css"
          value = {this.state.css}
          onChange = {this.ChangeInputHandlerCSS} 
          view = {this.state.cssView}/> 
          <JsEditor 
          language="js" 
          displayName="index.js"
          value = {this.state.js}
          onChange = {this.ChangeInputHandlerJS} 
          view = {this.state.jsView}/>
      </div>
      <div className = "pane">
        {/* An iframe which showed the rendered web content */}
        <h4>Live Window</h4>
        <iframe 
          srcDoc = {srcDoc}
          title="output" 
          sandbox = "allow-scripts"
          frameBorder = "0"
          width = "100%"
          height = "100%"/>
      </div>

    </Fragment>
    );
  }
}

export default App;