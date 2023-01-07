import "./BookingForm.css";
import {useState} from "react";

export const BookingForm = ({availableTimes, setAvailableTimes}) => {
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
    const [dateError, setDateError] = useState(false);

    if (
        new Date(date).getFullYear() < new Date().getFullYear() ||
        new Date(date).getMonth() < new Date().getMonth() ||
        new Date(date).getDate() < new Date().getDate() ||
        !new Date(date)
    ) {
        setDateError(true)
    }

    return (
        <>
            <form style={formStyle}>
                <label htmlFor="date">Choose date</label>
                <input required
                       name="date"
                       type="date"
                       value={date}
                       min={new Date().toISOString().split("T")[0]}
                       onChange={(e) => setDate(e.target.value)}
                       id="date"/>
                <label htmlFor="time">Choose time</label>
                <select required
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        id="time ">
                    {availableTimes.map((time, index) =>
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
                <input type="submit" value="Make Your reservation" className="btn"/>
            </form>
        </>
    )
}