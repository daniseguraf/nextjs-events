import { useRouter } from 'next/router';

import { getAllEvents } from './../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

const EventsPage = () => {
  const router = useRouter();

  const handleSearch = (year, month) => {
    router.push(`events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={handleSearch} />
      <EventList items={getAllEvents()} />
    </>
  );
};

export default EventsPage;
