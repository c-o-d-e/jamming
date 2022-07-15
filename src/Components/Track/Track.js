import React from "react";
import "./Track.css";

class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* <h3><!-- track name will go here --></h3> */}
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        </div>
        {this.renderAction()}
      </div>
    );
  }

  renderAction() {
    if (this.props.isRemoval) {
      <button className="Track-action">-</button>;
    } else {
      <button className="Track-action">+</button>;
    }
  }
}

export default Track;
