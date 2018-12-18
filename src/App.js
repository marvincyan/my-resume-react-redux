import React, { Component } from 'react';
import Mobile from './Components/Mobile';
import VCard from './Components/VCard';
import Navigation from './Components/Navigation';
import Sections from './Components/Sections';
import Modals from './Components/Modals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faSmileBeam, faKeyboard, faComments } from '@fortawesome/free-regular-svg-icons';
import './App.css';
import './css/mobile.css';

require('./js/mobile.js');
require('./js/timeline.js');

library.add(far, faSmileBeam, faKeyboard, faComments);

class App extends Component {
  constructor() {
    super();
    this.state = {
      navigation: [],
      modals: {
        hire: false,
        thanks: false
      }
    }

    this.changeHireState = this.changeHireState.bind(this);
    this.changeThanksState = this.changeThanksState.bind(this);
  }

  componentWillMount(){
    this.setState({
      navigation: [
        {
          id: 1,
          title: 'About',
          icon: 'smile-beam'
        },
        {
          id: 2,
          title: 'Resume',
          icon: 'keyboard'
        },
        {
          id: 3,
          title: 'Let\'s Talk',
          icon: 'comments'
        }
      ]
    });
  }

  changeHireState() {
    this.setState({modals: {...this.state.modals, hire: !this.state.modals.hire}});
  }

  changeThanksState() {
    this.setState({modals: {...this.state.modals, thanks: !this.state.modals.thanks}});
  }

  render() {
    return (
      <div className="App">
        <div id="background"></div>
        <Mobile navigation={this.state.navigation} />
        <VCard changeHire={this.changeHireState} />
        <div className="col-right">
          <div className="container" id="collapseContent">
            <Navigation navigation={this.state.navigation} />

            <Sections sections={this.state.navigation} />
          </div>
        </div>

        <Modals modals={this.state.modals} changeHire={this.changeHireState} changeThanks={this.changeThanksState} />
      </div>
    );
  }
}

export default App;
