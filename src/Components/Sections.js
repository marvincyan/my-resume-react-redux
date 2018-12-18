import React, { Component } from 'react';
import SectionItem from './SectionItem';

class Sections extends Component {
  render() {
    let sectionItems;
    if(this.props.sections){
        sectionItems = this.props.sections.map(section => {
            return(
                <SectionItem key={section.title} section={section} />
            )
        });
    }
    return (
        <div>
            <div className="row clearfix"></div>
            <div className="collapseContentRow">
                {sectionItems}
            </div>
        </div>
    )
  }
}

export default Sections;
