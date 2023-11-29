import React from 'react'
import styles from './Eventcard.module.css'
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const EventCard = ({ value }) => {
    return (
        <div className={styles.events}>
            <div>
                <div className={styles.date}><MdDateRange />{value.startDate}</div>
                <div className={styles.day}>{value.day}</div>
            </div>
            <div className="container">
                <div className={styles.mycard + " card"}>
                    <div className="card-body d-flex">
                        <div className="flex-grow-1">
                            <div className={styles.time}><CiClock2 />{value.startTime + " (IST)"}</div>
                            <h2 className="card-title">{value.eventName}</h2>
                            <p className="card-subtitle mb-1 "><CiLocationOn />{value.location}</p>
                            <p className="card-subtitle mb-1"><MdCurrencyRupee />{value.price}</p>
                            <Link to={`/view/${value.id}`} className={styles.viewbtn + " btn"}>View Event</Link>
                        </div>
                        <div>
                            <img height={110} width={110} src={value.image.placeHolder} className={styles.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard