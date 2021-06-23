import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Nav extends Component {
    render() {
        return (
            <div className="navi">
                <h1>{this.props.info.title}</h1>
                <hr />
                <br />
                <ul>
                    <li className="items"><Link to="/" id="link1" className="links" >
                        <i className="fas fa-home" style={{"marginRight":"5px"}}/>
                        Main</Link></li>
                    <li className="items"><Link to="/product" id="link2" className="links">
                        <i className="fas fa-boxes" style={{"marginRight":"5px"}}/>
                        Products</Link></li>
                    <li className="items"><Link to="/who-we-are" id="link3" className="links">
                        <i className="fas fa-question-circle" style={{"marginRight":"5px"}}/>
                        Who We Are</Link></li>
                    <li className="items"><Link to="/contact" id="link4" className="links">
                        <i className="fas fa-headset" style={{"marginRight":"5px"}}/>
                        Contact us</Link></li>
                </ul>
            </div>
        );
    }
}
export default Nav;