import React, { Component } from 'react';
import Moment from 'react-moment';

class ExperienceItem extends Component {
  render() {
    var direction = this.props.experience.id%2 ? "dr" : "dl";
    let descItems;
    descItems = this.props.experience.jobDescription.map(desc => {
      return(
        <p key={desc}>{desc}</p>
      )
    });

    return (
      <li className={direction}>
        <svg>
          <circle cx="10" cy="11" r="5" fill="#004165" />
        </svg>
        <div className="time-wrapper">
          <div className="time">
            <Moment unix format="MMM YYYY">{this.props.experience.startDate.seconds}</Moment> - <Moment unix format="MMM YYYY">{this.props.experience.endDate.seconds}</Moment>
          </div>
        </div>
        <div className="flag-wrapper">
          <div className="arrow-box d-none d-sm-block"></div>
          <p>
            <span className="flag">{this.props.experience.companyName}</span>
          </p>
          <div className="clearfix"></div>
        </div>
        <div className="desc">
          <div className="jobTitle">{this.props.experience.jobTitle}</div>
          {descItems}
        </div>
      </li>
    );
  }
}

export default ExperienceItem;