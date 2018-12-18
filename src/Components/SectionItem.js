import React, { Component } from 'react';
import Experiences from './Experiences';
import ContactForm from './ContactForm';

class SectionItem extends Component {
  render() {
      switch(this.props.section.title) {
        case 'About':
            return(
                <div className="collapse show" id={'collapseContent'+this.props.section.id} data-parent="#collapseContent"> 
                    <div className="row">
                        <div className="container">
                            <div className="col-12">
                                <div id="contentContainer">
                                    <p className="title">Welcome to my corner of the interwebs...</p>
                                    <p>You are currently viewing this site coded in <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> and <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux.js</a>. This is also using <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase's Firestore</a> as the database for the "RESUME" section. If you want to see the source code just <a href="https://github.com/marvincyan/my-resume-react-redux" target="_blank" rel="noopener noreferrer">click here</a>.</p>
                                    <p>If you want to see this site built on <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a>: [<a href="https://marvincyan.github.io/my-resume-react/" target="_blank" rel="noopener noreferrer">website</a>] [<a href="https://github.com/marvincyan/my-resume-react" target="_blank" rel="noopener noreferrer">source</a>].</p>
                                    <p>If you want to see this site built on <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a>: [<a href="http://www.marvinyan.com" target="_blank" rel="noopener noreferrer">website</a>] [<a href="https://github.com/marvincyan/my-resume-wordpress" target="_blank" rel="noopener noreferrer">source</a>].</p>

                                    <hr />

                                    <p className="title">A little something about me…</p>
                                    <p>Starting out as a Systems Administrator 20 some odd years ago, I made my way towards backend development and eventually frontend development where, in comparison, is what I enjoy the most. I am self-taught and love learning new languages to help companies achieve their goals.</p> 
                                    <p>I am currently teaching myself to code iOS apps in <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">Xcode/Swift</a>.</p>
                                    <p>To give my brain a break from coding, I'll usually do some sketching or head out and do some street photography.</p>
                                    <p>Head on over to my <a href="https://www.instagram.com/eviefied/" target="_blank" rel="noopener noreferrer">Instagram@eviefied</a> account if you want to see some of my sketchings.</p>
                                    <p>I have a separate website for my photography called <a href="http://themarvinyanprojects.com" target="_blank" rel="noopener noreferrer">The Marvin Yan Projects</a> as well as a separate <a href="https://www.instagram.com/MarvinYanProjx/" target="_blank" rel="noopener noreferrer">Instagram@MarvinYanProjx</a> account.</p>

                                    <hr />

                                    <p className="title">Fun Facts...</p>
                                    <ul id="aboutMeList">
                                        <li><span>Photography</span></li>
                                        <li>
                                            <ul>
                                                <li><span>Currently using:</span> Fuji X-T1, Fuji 23mm f2, Fuji 18-55mm</li>
                                                <li><span>Would like to upgrade:</span> Fuji X-E3, Summilux 21mm f2</li>
                                                <li><span>Also using:</span> Nikon FM10, Nikkor 18-55mm, Fuji Instax 90</li>
                                            </ul>
                                        </li>
                                        <li><span>Sketching</span></li>
                                        <li>
                                            <ul>
                                                <li><span>Currently using:</span> Pentel GraphGear 1000 0.5</li>
                                                <li><span>Would like to experiment with:</span> Gouache</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'Resume':
            return(
                <div className="collapse" id={'collapseContent'+this.props.section.id} data-parent="#collapseContent">
                    <Experiences />
                </div>
            );
        case 'Let\'s Talk':
            return(
                <div className="collapse" id={'collapseContent'+this.props.section.id} data-parent="#collapseContent">
                    <div className="row">
                        <div className="container">
                            <div className="col-xs-12 col-sm-8">
                            <div id="contactTitle">Got a project? Let's create something awesome together!</div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="col-xs-12 col-sm-8 float-left">
                                <ContactForm />
                            </div>
                            <div className="d-none d-sm-block col-4 float-left">
                            <div id="bringTitle">Bring me in for:</div>
                            <ul id="bringList">
                                <li>Pitchwork or projects</li>
                                <li>Ideas or concept development</li>
                                <li>Experience design</li>
                                <li>Art direction</li>
                                <li>Creative strategy</li>
                                <li>UX</li>
                                <li>Design</li>
                                <li>Illustration</li>
                                <li>Storyboarding</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            break;
      }
    return (
        <div></div>
    );
  }
}

export default SectionItem;