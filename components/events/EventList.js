import EventItem from './EventItem';
import classes from './EventList.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((el) => (
        <EventItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default EventList;
