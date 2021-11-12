import EventItem from './EventItem';

const EventList = ({ list }) => {
  return (
    <ul>
      {list.map((el) => (
        <EventItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default EventList;
