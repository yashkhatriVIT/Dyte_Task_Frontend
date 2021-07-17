import React, { Fragment, Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import SidebarData from './SidebarData';
import classes from './Sidebar.module.css';
import { IconContext } from 'react-icons';
import Button from '../Button/Button';


class Sidebar extends Component {
    state = {
        sidebar: false
    }
    ToggleSideBar = () => {
        this.setState((prevState) => ({
            sidebar: !prevState.sidebar
        }));
    }
      
    createLink = () => {
        let request = new XMLHttpRequest();
        request.open("POST", "https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function() {
            if(request.readyState === 4 && request.status === 200) {
                alert(`This is your sharable link ${request.responseText}`);
            }
        }
        request.send(`api_dev_key=${process.env.REACT_APP_API_KEY}&api_option=paste&api_paste_private=0&api_paste_name=myname.js&api_paste_expire_date=10M&api_paste_format=javascript&api_paste_code=${this.props.content}`);
    }
    render() {
        let classesInNav = [classes.nav_menu];
        if(this.state.sidebar){
            classesInNav.push(classes.active);
        }
        return (
            <Fragment>
                 <IconContext.Provider value={{ color: '#fff' }}>
                    <div className={classes.navbar}>
                        <button style= {{border: 'none',
                        cursor: 'pointer'}}className = {classes.menu_bars}>
                            <FaIcons.FaBars onClick = {this.ToggleSideBar}/>
                        </button>
                        <h2 style = {{color: 'white'}}>ALL IN ONE</h2>
                        <button style = {{
                            border: 'none',
                            background: 'none',
                            fontWeight: 'bold',
                            color: 'white',
                            height: '32px',
                            marginRight: '28px'
                        }} className = {classes.share} onClick = {this.createLink}>
                            Share
                        </button>
                    </div>
                    <nav className = {classesInNav} style = {{background: '#060b26'}}>
                        <ul className = {classes.nav_menu_items}>
                            {SidebarData.map((item, ind) => {
                                return (
                                    <li key = {ind} className = {item.cName}>
                                         <Button {...item} view = {this.state.view} enableView = {this.props.enableView} ></Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </Fragment>
        )
    }
}
export default Sidebar

