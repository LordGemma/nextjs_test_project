import { Fragment } from "react";
import EventsList from "../../components/events/events-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-date";
import { useRouter } from "next/router";

function EventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function handleSearch(year, month) {
    const path = `/events/${year}/${month}`;

    router.push(path);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={handleSearch} />
      <EventsList list={allEvents} />
    </Fragment>
  );
}

export default EventsPage;
