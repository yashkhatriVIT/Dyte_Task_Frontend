import classes from './Button.module.css';
// Basic UI element to design the side bar ehich fetches my files
let Button = (props) => {
    return(
        <button style= {{background: 'transparent', color: 'white'}} className = {classes.Button} onClick = {()=> props.enableView(props.toggle)}>
            {props.icons}
            <span>{props.title}</span>
        </button>
    );
    
} 

export default Button;