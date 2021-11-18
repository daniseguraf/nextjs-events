import { getAllEvents } from './../../dummy-data';
import EventList from '../../components/events/EventList';

const EventsPage = () => {
  return (
    <div>
      <h1>All Events Page</h1>
      <EventList list={getAllEvents()} />
    </div>
  );
};

export default EventsPage;
