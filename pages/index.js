import { getFeaturedEvents } from './../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <EventList list={featuredEvents} />
    </div>
  );
};

export default HomePage;
