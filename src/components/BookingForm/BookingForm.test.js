import { render, screen } from "@testing-library/react";
import {BookingForm} from "./BookingForm";
import {initializeTimes, updateTimes} from "../BookingPage/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

describe('Unit testing', () => {

    test('initializeTimes returns values', () => {
        const times = initializeTimes()
        expect(times).toBeTruthy()
    })

    test('updateTimes returns values', () => {
        const newTimes = updateTimes('test value', 'action')
        expect(newTimes).toEqual('test value')
    })
})