import classes from "../../styles/event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { id, image, title, date, location } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US");
  const exploreEventLink = `/events/${id}`;

  return (
    <li className={classes.item}>
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
        <div className={classes.actions}>
          <Button link={exploreEventLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
