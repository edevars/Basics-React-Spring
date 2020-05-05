import React from "react";

export const Card = ({ title, image, description }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt={title} />
        </div>
        <div className="card-content teal">
          <span className="card-title white-text">
            {title}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal teal">
          <span className="card-title white-text">
            {title}<i className="material-icons right">close</i>
          </span>
          <p className="flow-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
