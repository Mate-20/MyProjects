import { React, useState } from 'react';
import styles from './Addevent.module.css'
import defaultImage from '../Assets/Blue & Purple Gradient Music Event Instagram Post.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";

const AddEvent = () => {

    // Defining the States
    const [id, setId] = useState('');
    const [eventName, setEventName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [capacity, setCapacity] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [day, setDay] = useState('');
    const [image, setImage] = useState({
        placeHolder: defaultImage,
        file: null
    });

    const handleImageChange = (e) => {
        // Handle image upload and set state for image preview
        if (e.target.files[0].type === 'image/png' || e.target.files[0].type === 'image/jpg' || e.target.files[0].type === 'image/jpeg') {
            
            // Showing Pewiew of Image
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage({
                    placeHolder: event.target.result,
                    file: e.target.files[0]
                })
            };
            reader.readAsDataURL(e.target.files[0]);

        } else {
            toast.error("Wrong Image Type");
            image.file = null;
        }

    };

    // Converting HTML input time to 12 hr format
    const convertTo12HourFormat = (time) => {
        // Create a Date object to parse the time string
        const parsedTime = new Date(`2000-01-01T${time}`);

        // Get hours and minutes from the parsed time
        let hours = parsedTime.getHours();
        const minutes = parsedTime.getMinutes();

        // Determine AM or PM
        const amOrPm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        hours %= 12;
        hours = hours || 12; // '0' should be displayed as '12'

        const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;

        return formattedTime;
    };

    // Checking if price is numeric
    const handlePriceChange = (e) => {
        const input = e.target.value;
        // Check if the input is a valid number
        if (!isNaN(input)) {
            setPrice(input); // If it's a number, update the state
        }
    };

    // Checking if capacity is numeric
    const handleCapacityChange = (e) => {
        const input = e.target.value;
        // Check if the input is a valid number
        if (!isNaN(input)) {
            setCapacity(input); // If it's a number, update the state
        }
    };

    // Fetching day from the input Date
    const handleDayAndDate = (e) => {
        const input = e.target.value;
        setStartDate(input);
        const date = new Date(input); // Creating a Date object

        // Get the day of the week as a number (0 for Sunday, 1 for Monday, etc.)
        const dayOfWeekNumber = date.getDay();

        // Define an array to map day numbers to day names
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Get the day name using the day number
        const dayOfWeek = daysOfWeek[dayOfWeekNumber];
        setDay(dayOfWeek);
    }
    const handleSubmit = (e) => {
        // Calling 12 hr format time method
        const timeFormat = convertTo12HourFormat(startTime)
        e.preventDefault();

        // Fetching existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('newEvent')) || [];

        // Creating new object with entered fields
        const newEvent = {
            id: existingData.length + 1,
            eventName,
            startDate,
            endDate,
            day,
            startTime: timeFormat,
            endTime,
            location,
            price,
            capacity,
            image
        };

        // Updated data with new field
        const updatedData = [...existingData, newEvent]

        toast.success("Event Listed");

        // Storing data in local storage
        localStorage.setItem('newEvent', JSON.stringify(updatedData));

        // Setting all the fields to empty values
        setId("");
        setEventName("");
        setEndDate("")
        setStartDate("");
        setStartTime("");
        setEndTime("");
        setLocation("");
        setPrice("");
        setCapacity("");
        setImage({
            placeHolder: defaultImage,
            file: null
        })
    }

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <h1 className={`${styles.heading} text-center `}>List Your Event</h1>
            <div className={styles.myform + " container"}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.content + " d-flex"}>
                        <div className={styles.leftform}>
                            <div className="mb-3">
                                <input type="text" className={"form-control " + styles.eventname} value={eventName} onChange={(e) => setEventName(e.target.value)} required placeholder='Event Name' />
                            </div>
                            <div className={"d-flex "}>
                                <div className={styles.calender}>
                                    <BsCalendarDate />
                                </div>
                                <div>
                                    <div className="d-flex">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">Start Date</span>
                                            <input type="date" className="form-control" value={startDate} onChange={handleDayAndDate} required />
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">End Date</span>
                                            <input type="date" className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">Start Time</span>
                                            <input type="time" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">End Time</span>
                                            <input type="time" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className={styles.gmttext}>
                                        <p><TbWorld />&nbsp;GMT +05:30 Calcutta</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"d-flex "}>
                                <div className={styles.gps}>
                                    <CiLocationOn />
                                </div>
                                <div class="input-group mb-3 mt-3">
                                    <span class="input-group-text" id="basic-addon1">Location</span>
                                    <input type="text" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} required />
                                </div>
                            </div>
                            <div>
                                <h6>Event Options</h6>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><FaRupeeSign /> Price </span>
                                <input type="text" className="form-control" value={price} onChange={handlePriceChange} required />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><IoIosPeople />&nbsp;Capacity</span>
                                <input type="text" className="form-control" value={capacity} onChange={handleCapacityChange} required />
                            </div>
                            <button type="submit" className={styles.button+" btn btn-dark"}>ADD EVENT</button>
                        </div>
                        <div className='ms-3'>
                            <div className={styles.image + " mb-3"}>
                                <label className={styles.imagetext + " form-label"}><CiImageOn />&nbsp;Upload Your Image</label>
                                <input type="file" className="form-control" onChange={handleImageChange} required />
                                <img src={image.placeHolder} alt="" className={styles.image + " mt-3"} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEvent