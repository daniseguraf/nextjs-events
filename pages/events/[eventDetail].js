import { useRouter } from 'next/router';
import { getEventById } from './../../dummy-data';

const EventDetailPage = () => {
  const { query } = useRouter();
  const event = query && getEventById(query.eventDetail);

  if (!event) {
    return <p>Not event found!</p>;
  }

  return <h1>Event Detail Page {event && event.title}</h1>;
};

export default EventDetailPage;
