import EventItem from "./event-item";
import classes from "../../styles/event-list.module.css";

function EventsList({ list }) {
  return (
    <ul className={classes.list}>
      {list.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}

export default EventsList;
