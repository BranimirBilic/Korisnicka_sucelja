import React, { Component } from 'react';
import {Link} from 'gatsby';

class NavLink extends Component {
    /*state = {  }*/
    render() { 
        return (
            <div> 
                <Link to = {this.props.link.path} style = {linkItemStyle}> {this.props.link.title} </Link>                             
            </div>     
         );
    }
}
 
const linkItemStyle = {
    display: "inline-block",
    color: "primary",
    textDecoration: "none",
    textTransform: "uppercase",
    fontWeight: "light",
    whiteSpace: "nowrap",
    letterSpacing: "tight",
    transition: "all 0.25s linear",
    margin: "0px 15px"
}

export default NavLink;