import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ExperienceItem from './ExperienceItem';
import '../css/timeline.css';

class Experiences extends Component {
  render() {
    let experienceItems;
    if(this.props.experiences){
        experienceItems = this.props.experiences.map(experience => {
            return (
                <ExperienceItem key={experience.id} experience={experience} />
            )
        })
    }

    return (
        <ul className="timeline">
            {experienceItems}
        </ul>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      experiences: state.firestore.ordered.experiences
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{collection: 'experiences', orderBy: ['id', 'desc']}]))(Experiences);
