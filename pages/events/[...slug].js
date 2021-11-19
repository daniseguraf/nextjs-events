import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventsPage = () => {
  const { query } = useRouter();

  if (!query.slug) {
    return <p className="center">Loading..</p>;
  }

  const year = +query.slug[0];
  const month = +query.slug[1];

  if (isNaN(year) || isNaN(month)) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({
    year: year,
    month: month,
  });

  console.log(events);

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </>
  );
};

export default FilteredEventsPage;
