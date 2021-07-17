import React, { Component } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/css/css'
import classes from './style.module.css';
import {Controlled as ControlledEditor} from 'react-codemirror2';

class CssEditor extends Component{
    state = {
        open: true
    }
    handleChange = (editor, data, value) => {
        this.props.onChange(value);
    }
    handleClick = ()=>{
        this.setState((prevState) => ({
            open : !prevState.open
        }));
    }
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
