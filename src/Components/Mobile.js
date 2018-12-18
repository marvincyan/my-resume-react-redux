import React, { Component } from 'react';

class Mobile extends Component {
    render() {
        let navigationItems;
        if(this.props.navigation){
            navigationItems = this.props.navigation.map(navigation => {
                return (
                    <li key={navigation.id} data-target={"#collapseContent"+navigation.id}>{navigation.title}</li>
                )
            })
        }
        return (
            <div>
                <button className="btn btn-outline-primary d-xs-block d-sm-none" id="mobileNavButton">menu</button>
                <div id="mobileNav" className="h-100 d-xs-block d-sm-none">
                    <button id="mobileNavClose" className="btn btn-outline-secondary float-right">close</button>
                    <ul>
                        <li>HOME</li>
                        {navigationItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Mobile;
