import React from "react";
import { Link } from "react-router-dom";
import DataPicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const EventCreate = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [budget, setBudget] = useState("");
    const [minPeople, setMinPeople] = useState(""); // State for minimum people
    const [maxPeople, setMaxPeople] = useState(""); // State for maximum people

    const handleBudgetChange = (event) => {
        setBudget(event.target.value); // Update budget state
    };

    const handleMinPeopleChange = (event) => {
        setMinPeople(event.target.value); // Update min people state
    };

    const handleMaxPeopleChange = (event) => {
        setMaxPeople(event.target.value); // Update max people state
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Create the data object to send to the backend
        const eventData = {
            date: startDate,
            budget,
            minPeople,
            maxPeople,
        };
        try {
            // Send the data to the backend (replace with your API endpoint)
            const response = await fetch("http://localhost:5000/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const responseData = await response.json();
            console.log("Success:", responseData);
            // Optionally, reset form fields here or navigate to another page

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Create Event</h1>

            <div>
                <label htmlFor="datePicker">Select Date and Time:</label>
                <DataPicker id="datePicker" 
                selected={startDate}
                onChange={date => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                />
            </div>
            <div>
                <label htmlFor="budgetInput">Enter Budget:</label>
                <input
                    type="number" // Budget input as a number
                    id="budgetInput"
                    value={budget}
                    onChange={handleBudgetChange}
                    placeholder="Enter budget"
                />
            </div>
            <div>
                <label htmlFor="minPeopleInput">Minimum Attendees:</label>
                <input
                    type="number" // Min people input as a number
                    id="minPeopleInput"
                    value={minPeople}
                    onChange={handleMinPeopleChange}
                    placeholder="Min attendees"
                    style={{ marginLeft: '10px', marginBottom: '10px' }} // Optional styling
                />
            </div>

            <div>
                <label htmlFor="maxPeopleInput">Maximum Attendees:</label>
                <input
                    type="number" // Max people input as a number
                    id="maxPeopleInput"
                    value={maxPeople}
                    onChange={handleMaxPeopleChange}
                    placeholder="Max attendees"
                    style={{ marginLeft: '10px' }} // Optional styling
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit Event</button> {/* Submit button */}
            
            <Link to="/">Go to Main Page</Link>
        </div>
    );
}

export default EventCreate;