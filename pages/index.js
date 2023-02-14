import EventsList from "../components/events/events-list";
import { getFeaturedEvents } from "../dummy-date";

function MainPage() {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList list={featureEvents} />
    </div>
  );
}

export default MainPage;
