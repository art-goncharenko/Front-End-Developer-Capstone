import {BookingForm} from "../BookingForm/BookingForm";
import "./BookingPage.css";
import {useReducer, useState} from "react";

export const BookingPage = () => {
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const initialState = { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };

    const reducer = (initialState, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return {
                    ...initialState,
                    availableTimes: action.payload
                };
            default:
                return initialState;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateTimes = (initialState, item) =>{
        if (initialState.includes(item)) {
            const index = initialState.indexOf(item);
            return initialState.slice(0, index).concat(initialState.slice(index + 1));
        }
        return initialState;
    }
    return (
        <>
            <h1 className="reserveHeader">Reserve a table</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </>
    );
}