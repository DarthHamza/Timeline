import React from "react";
import Item from "./Item";
import timeline from "../timeline";

const List = () => {
  const events = timeline.map((event) => <Item key={event.id} event={event} />);
  return (
    <ul className="timeline">
      {events}
      <li className="timeline-inverted">
        <div className="timeline-image">
          <h4>
            Be Part <br /> Of My <br /> Story!
          </h4>
        </div>
      </li>
    </ul>
  );
};

export default List;
