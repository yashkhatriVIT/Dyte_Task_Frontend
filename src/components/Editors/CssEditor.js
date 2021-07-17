import React, { Component } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
// Code mirror for css
import 'codemirror/mode/css/css'
import classes from './style.module.css';
import {Controlled as ControlledEditor} from 'react-codemirror2';

class CssEditor extends Component{
     /* 
        This function will enable and disable the current window and will show the clicked file editor
        the function in turn will call the onChange function passed in the props 
        which will allow user to manage the view for the file to be fetched
    */
   handleChange = (editor, data, value) => {
       this.props.onChange(value);
    }
    /* 
        This is the editor set up which we have to do, so this is CSS editor
    */
    render(){
        return (
            <div className = {`${classes.editor_container} ${this.props.view ? classes.Show : classes.Hide}`}>
                <div className={classes.editor_title}>
                    {this.props.displayName}
                </div>
                <ControlledEditor
                    onBeforeChange = {this.handleChange}
                    value = {this.props.value}
                    className = {classes.code_mirror_wrapper}
                    options = {{
                        lineWrapping: true,
                        lint: true,
                        mode: this.props.language,
                    }}
                />
            </div>            
        );
    }
    
}
export default CssEditor;
