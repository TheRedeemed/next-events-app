import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList events={allEvents} />
    </>
  );
}
