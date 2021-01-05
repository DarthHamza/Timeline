import React from "react";

const Item = ({ event }) => {
  const inverted = event.id % 2 ? "timeline-inverted" : "";
  return (
    <li className={inverted}>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={event.image} alt="" />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{event.date}</h4>
          <h4 className="subheading">{event.title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{event.content}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;
