import classes from './EventItem.module.css';
import Button from '../ui/Button';

const EventItem = ({ id, image, title, location, date }) => {
  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
          <div className={classes.address}>
            <address>{location.replace(', ', '\n')}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={`/events/${id}`}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
