import React, {Component} from 'react';
class Nav extends Component {
    render() {
        return (
            <div className="navi">
                <h1>{this.props.info.title}</h1>
                <hr/>
                <br/>
                <ul>
                    <li className="items"><a href="/" id="link1" className="links" >Lorem.</a></li>
                    <li className="items"><a href="/" id="link2" className="links">Expedita!</a></li>
                    <li className="items"><a href="/" id="link3" className="links">Blanditiis.</a></li>
                    <li className="items"><a href="/" id="link4" className="links">Nobis.</a></li>
                </ul>
            </div>
        );
    }
}
export default Nav;