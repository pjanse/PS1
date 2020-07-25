import React from "react";

function Description(props) {
  return (
    <div className="content">
      <a className="header">{props.name}</a>
      <div className="meta">
        <span className="date">Joined {props.date}</span>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default Description;