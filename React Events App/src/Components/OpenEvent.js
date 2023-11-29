import React, { useEffect, useState } from 'react'
import styles from './Openevent.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import defaultImage from '../Assets/Blue & Purple Gradient Music Event Instagram Post.png'
import { CiCalendarDate } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

const OpenEvent = () => {

    // Fetching id from the url
    const { id } = useParams();

    const [event, setEvent] = useState({
        image: {
            placeHolder: defaultImage,
        }
    }
    )
    const navigate = useNavigate();

    useEffect(() => {

        // Fetching data from local storage
        const eventsData = JSON.parse(localStorage.getItem('newEvent')) || [];

        // Fetching particular data with the help of ID
        const selectedEvent = eventsData.find(e => String(e.id) === String(id));

        setEvent(selectedEvent)

    }, [])

    // Deleting Function
    const handleDelete = () => {

        // Fetching data from local storage
        const eventsData = JSON.parse(localStorage.getItem('newEvent')) || [];

        // Filtering the data with selected ID (Deleting)
        const updatedData = eventsData.filter(event => String(event.id) !== id);

        // Updating
        localStorage.setItem('newEvent', JSON.stringify(updatedData));

        // Navigating back to Home/Userlist Page
        navigate('/')
    }

    return (
        <div>
            <h1 className={styles.heading + " text-center"}>Your Event</h1>
            <div className={styles.mycard + " card container"}>
                <div className="card-body d-flex">
                    <div className={styles.leftcontent}>
                        <h1 className={styles.eventname}>{event.eventName}</h1>
                        <div className={styles.datetime + " d-flex"}>
                            <div className={styles.calender}>
                                <CiCalendarDate />
                            </div>
                            <div>
                                <h4 className='card-text'>{event.startDate}</h4>
                                <h5 className='card-text'>{event.startTime}</h5>
                            </div>
                        </div>
                        <p className='mt-4'>Details</p>
                        <div className={styles.details + " d-flex"}>
                            <h6 className='card-text'><FaRupeeSign />{event.price} &nbsp;&nbsp;</h6>
                            <h6 className='card-text'><IoIosPeople />{event.capacity}&nbsp;&nbsp;</h6>
                            <h6 className='card-text'><IoLocation />{event.location}</h6>
                        </div>
                        <button className='btn btn-danger mt-3' onClick={handleDelete} >Delete</button>
                    </div>
                    <div className={styles.rightcontent}>
                        <img src={event.image.placeHolder} className={styles.image} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenEvent