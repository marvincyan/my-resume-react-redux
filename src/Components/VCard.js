import React, { Component } from 'react';
import pdf from '../files/MarvinYanResumeNoRef.pdf'

class VCard extends Component {
  render() {
    return (
      <header>
        <div className="col-10 offset-md-1 vCard">
          <div id="hi">Hi, I'm</div>
          <div id="fullName">MARVIN YAN</div>
          <div id="jobTitle">CREATOR, WEB DEVELOPER</div>
          <div id="objTitle">Objective:</div>
          <div id="objective">To provide the best service I can and produce a great product. Collaboration is key to any endeavor and there's nothing more invigorating than collaborating together to make a better future.</div>
          <button type="button" className="btn btn-outline-light" id="hireMe" data-toggle="modal" data-target="#hireMeModal" onClick={this.props.changeHire}>HIRE ME</button>
          <hr />
          <div id="download"><a download href={pdf} title="Marvin Yan Resume">Download CV</a></div>
        </div>
      </header>
    );
  }
}

export default VCard;
