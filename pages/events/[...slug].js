import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const yearStr = filterData[0];
  const monthStr = filterData[1];

  const year = +yearStr; //The + sign convert the string to an integer
  const month = +monthStr;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: year,
    month: month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p> No Events found for the chosen dates</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Back to all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}
