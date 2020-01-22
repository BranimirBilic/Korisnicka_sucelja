import React, { Component } from 'react';
import {Link} from 'gatsby';

class NavLink extends Component {
    /*state = {  }*/
    render() { 
        return (            
                <Link to = {this.props.link.path} style = {linkItemStyle}> {this.props.link.title} </Link>                                         
         );
    }
}
 
const linkItemStyle = {
    display: "inline-block",
    color: "#645F5E",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "light",
    whiteSpace: "nowrap",
    letterSpacing: "tight",
    transition: "all 0.25s linear",
    margin: "0px 15px"
    
}

export default NavLink;