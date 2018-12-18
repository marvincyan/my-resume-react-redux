import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
  render() {
    let navigationItems;
    if(this.props.navigation){
        navigationItems = this.props.navigation.map(navigation => {
            return (
                <NavigationItem key={navigation.title} navigation={navigation} />
            )
        })
    }
    return (
        <div className="row d-none d-md-block" id="navContainer">
            <p id="nav">
                {navigationItems}
            </p>
        </div>
    );
  }
}

export default Navigation;
