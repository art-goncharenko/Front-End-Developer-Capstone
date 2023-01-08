import "./BookingForm.css";
import {useState} from "react";
import {ACTION_TYPES} from "../../actionsData";
import {submitAPI} from "../../api";

export const BookingForm = ({availableTimes, setAvailableTimes, submitForm}) => {
    const formStyle = {
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
        marginLeft: "250px"
    }
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const changeTimeSlots = (e) => {
        setDate(e.target.value)
        setAvailableTimes({
            type: ACTION_TYPES.DATE_CHANGE,
            payload: e.target.value,
        })
    }

    return (
        <>
            <h1 className="reserveHeader">Reserve a table</h1>
            <form onSubmit={submitForm}
                  preventdefault="true"
                  style={formStyle}>
                <label htmlFor="date">Choose date</label>
                <input required
                       name="date"
                       type="date"
                       value={date}
                       min={new Date().toISOString().split("T")[0]}
                       // onChange={(e) => setDate(e.target.value)}
                    onChange={changeTimeSlots}
                       id="date"/>
                <label htmlFor="time">Choose time</label>
                <select required
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        id="time">
                    {availableTimes?.map((time, index) =>
                        <option key={index} value={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input required
                       type="number"
                       name="guests"
                       value={guests}
                       onChange={(e) => setGuests(e.target.value)}
                       placeholder="1"
                       min="1"
                       max="10"
                       id="guests"/>
                <label htmlFor="occasion">Occasion</label>
                <select required
                        name="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit"
                       aria-label="submit reserve table"
                       value="Make Your reservation"
                       className="btn"/>
            </form>
        </>
    )
}