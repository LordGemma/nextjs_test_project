import classes from "../../../styles/event-item.module.css";
import AddressIcon from "../../icons/address-icon";
import DateIcon from "../../icons/date-icon";

function EventDetail(props) {
  const { id, image, title, date, location, description } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US");

  return (
    <div className={classes.item}>
      <img src={`/${image}`} />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{location}</address>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default EventDetail;
