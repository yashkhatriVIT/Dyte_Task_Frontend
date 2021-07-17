import classes from './Button.module.css';
let Button = (props) => {
    // console.log(props);
    return(
        <button style= {{background: 'transparent', color: 'white'}} className = {classes.Button} onClick = {()=> props.enableView(props.toggle)}>
            {props.icons}
            <span>{props.title}</span>
        </button>
    );
    
} 

export default Button;