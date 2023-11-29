import { React, useEffect, useState } from 'react'
import styles from './EventsList.module.css'
import EventCard from './EventCard';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  // Fetching the data from local storage on loading of the page
  useEffect(() => {
    
    const storedEvents = JSON.parse(localStorage.getItem('newEvent')) || [];
    
    // Setting the state
    setEvents(storedEvents);

  }, []);


  return (
    <div>
      <h1 className={styles.heading}>Upcoming Events</h1>
      {events.length === 0 ? (
        <div className={`text-center conatiner ${styles.noevent}`}>
          <h1>No Events To Show</h1>
        </div>
      ) : (
        <div className="container">
          <div className={styles.eventcontainer + " row row-cols-1 row-cols-md-2 justify-content-center"}>
            {events.map((value) => (
              <div key={value.id} className={styles.events}>
                <EventCard value={value} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EventsList