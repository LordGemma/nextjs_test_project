import { useRouter } from "next/router";
import EventDetail from "../../components/events/event-detail/event-detail";
import { getEventById } from "../../dummy-date";

function EventPage() {
  const { query } = useRouter();
  const event = getEventById(query.eventId);

  return (
    <div>
      <EventDetail {...event} />
    </div>
  );
}

export default EventPage;
