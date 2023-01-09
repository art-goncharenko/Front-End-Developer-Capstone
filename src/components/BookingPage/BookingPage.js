import {BookingForm} from "../BookingForm/BookingForm";
import "./BookingPage.css";
import { useReducer} from "react";
import {fetchAPI, submitAPI} from "../../api";
import { useNavigate} from "react-router-dom";
import {ACTION_TYPES} from "../../actionsData";

export const initializeTimes = () => {
    return fetchAPI(new Date());
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.DATE_CHANGE:
            return fetchAPI(new Date(action.payload));

        case ACTION_TYPES.ADD_BOOKING:
            return state.filter((time) => time.value !== action.payload)

        default:
            return state
    }
}

export const BookingPage = () => {

    const [availableTimes, setAvailableTimes] = useReducer(
        updateTimes,
        initializeTimes(),
    )
    const navigate = useNavigate()

    const submitForm = (formData) => {
        setAvailableTimes({
            type: ACTION_TYPES.ADD_BOOKING,
            payload: formData.time,
        })

        const response = submitAPI(formData)
        if (response) {
            navigate("/Confirmation")
        }
    }

    return (
        <>
            <BookingForm submitForm={submitForm}
                         availableTimes={availableTimes}
                         setAvailableTimes={setAvailableTimes}/>
        </>
    );
}