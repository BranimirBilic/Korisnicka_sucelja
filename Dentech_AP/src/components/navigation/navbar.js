import React, { Component } from 'react';
import Navlink from './navlink.js'

class NavBar extends Component {
    state = {  
        visibility:true
    }
    
    render() { 
        return (
            <div style ={navBarStyle}>
                {
                    this.props.navlinks.map((navlink) => (                 
                             <Navlink link = {navlink}/>                                          
                    ))
                }
            </div>
        );
    }
}
 
const navBarStyle = {
    display:"flex",
    boxSizing: "border-box",
    height: "80px", 
    alignItems:"center",
    justifyContent : "flex-end",
    margin:"0px",
    m:0,
    width:"100%",

    /*
    display: "flex",
    boxSizing: "border-box",
    justifyContent: "flex-end",
    flex: "auto",
    ml: [3, 4],
    overflowX: "auto",
    */
}

export default NavBar;

