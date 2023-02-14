import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-date";
import EventsList from "../../components/events/events-list";

function SlugPage() {
  const { query } = useRouter();
  const filteredDate = query.slug;

  if (!filteredDate) {
    return <p className="center">Loading...</p>;
  }

  const dateObject = {
    year: parseInt(filteredDate[0]),
    month: parseInt(filteredDate[1]),
  };
  const filteredEvents = getFilteredEvents(dateObject);

  return (
    <div>
      <EventsList list={filteredEvents} />
    </div>
  );
}

export default SlugPage;
