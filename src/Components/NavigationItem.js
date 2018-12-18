import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationItem extends Component {
  render() {
    return (
        <button className="btn btn-secondary btn-outline-light" type="button" data-toggle="collapse" data-target={'#collapseContent'+this.props.navigation.id} aria-expanded="false">
            <FontAwesomeIcon icon={['far', this.props.navigation.icon]} size="3x" />
            <div className="title">{this.props.navigation.title}</div>
            <div className="plus">+</div>
        </button>
    );
  }
}

export default NavigationItem;