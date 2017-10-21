import React, { Component } from 'react';

class Header extends Component {

    render() {
        console.log(this.props)
        const myname = "Tossaphorn";
        return (
            <div>
               <h1>
                   Header {this.props.title}
               </h1>
            </div>
        );
    }

}


export default Header;