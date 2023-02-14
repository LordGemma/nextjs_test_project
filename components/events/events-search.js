import Button from "../ui/button";
import classes from "../../styles/events-search.module.css";
import { useRef } from "react";

const months = [
  { name: "January", order: 1 },
  { name: "February", order: 2 },
  { name: "March", order: 3 },
  { name: "April", order: 4 },
  { name: "May", order: 5 },
  { name: "June", order: 6 },
  { name: "July", order: 7 },
  { name: "August", order: 8 },
  { name: "September", order: 9 },
  { name: "October", order: 10 },
  { name: "November", order: 11 },
  { name: "December", order: 12 },
];

const years = ["2021", "2022"];

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = parseInt(yearInputRef.current.value);
    const selectedMonth = parseInt(monthInputRef.current.value);

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {months.map(({ name, order }) => (
              <option key={name} value={order}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <Button>Search Events</Button>
      </div>
    </form>
  );
}

export default EventsSearch;
