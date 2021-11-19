import { useRef, useEffect } from 'react';
import Button from '../ui/Button';
import classes from './EventsSearch.module.css';

import { useRouter } from 'next/router';

const EventsSearch = ({ onSearch }) => {
  // const router = useRouter();

  const yearRef = useRef();
  const monthRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const year = yearRef.current.value;
    const month = monthRef.current.value;

    onSearch(year, month);
    // router.push(`events/${year}/${month}`);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>

          <select ref={yearRef} id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="year">Month</label>

          <select ref={monthRef} id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
