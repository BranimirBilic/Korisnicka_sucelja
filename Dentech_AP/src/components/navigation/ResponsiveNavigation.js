/*import React, { useState } from 'react';
import { Link } from 'gatsby';

function ResponsiveNavigation({ background, hoverBackground, linkColor, navLinks, logo }) {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        <nav
            className="responsive-toolbar"
            style={{ background: background }}>
            <ul
                style={{ background: background }}
                className={ navOpen ? 'active' : '' }
            >
                <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <img src={ logo } height="40px" width="40px" alt="toolbar-logo" />
                </figure>
                { navLinks.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}
                        >   { link.text }
                            <i className={ link.icon } />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation
*/

import React , { useState }  from 'react';
import {Link} from 'gatsby';
import navStyles from './responsivenavigation.module.css';


const ResponsiveNavigation = ({navLinks}) =>{
    //const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        
        <nav className = {navStyles.navigation}>
            <ul>
                {
                    navLinks.map((navLink,index) => (
                        <li 
                        key = {index}             
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? ('#ddd' || '#999') : '' }}
                        /*style={hoverIndex === index ? liStyleHover : liStyle }*/
                        >
                            <Link to = {navLink.path} /*style = {linkStyle}*/>{navLink.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        
    );   
}
 /*
const navStyle = {
    background: 'none',
    height: '60px',
    width: '100%',
    position: 'fixed',
    boxShadow: '2px 0px 2px #ccc',


    marginTop:'60px',

}

const ulStyle = {
    background: 'none',
    display: 'flex',
    justifyContent:'flex-end',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    paddingInlineStart: 0,
    height: '100%',
    alignItems: 'center',
    boxShadow: '2px 2px 2px #ccc',
}

const liStyle = {
    listStyleType: 'none',
    padding: '10px 20px',
}

const liStyleHover = {
    listStyleType: 'none',
    padding: '10px 20px',
    background:'#EAE5E4',
}

const linkStyle = {
    color: 'grey',
    textTransform: "uppercase",
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
}

*/


export default ResponsiveNavigation;

