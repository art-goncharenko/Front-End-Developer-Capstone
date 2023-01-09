import {render, screen} from "@testing-library/react";
import {BookingForm} from "./BookingForm";
import {initializeTimes, updateTimes} from "../BookingPage/BookingPage";
import userEvent from "@testing-library/user-event";

describe('Renders the BookingForm and check if heading is there', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

describe('Unit testing for functions', () => {

    test('initializeTimes returns values', () => {
        const times = initializeTimes()
        expect(times).toBeTruthy()
    })

    test('updateTimes returns values', () => {
        const newTimes = updateTimes('test value', 'action')
        expect(newTimes).toEqual('test value')
    })
})

describe('Test for BookingForm inputs to be required', () => {
    const inputDate = screen.getByLabelText('Choose date (required)')
    expect(inputDate).toBeRequired()

    const inputTime = screen.getByLabelText('Choose time (required)')
    expect(inputTime).toBeRequired()

    const inputGuests = screen.getByLabelText('Number of guests (required)')
    expect(inputGuests).toBeRequired()

    const inputOccasion = screen.getByLabelText('Occasion (required)')
    expect(inputOccasion).toBeRequired()
})

describe("Verify both valid and invalid states for inputs", () => {
    const inputDate = screen.getByLabelText('Choose date (required)')
    const inputTime = screen.getByLabelText('Choose time (required)')
    const inputGuests = screen.getByLabelText('Number of guests (required)')
    const inputOccasion = screen.getByLabelText('Occasion (required)')


    test('Date input is valid', () => {
        expect(inputDate.value).toEqual("")
        expect(inputDate).toBeInvalid()
        userEvent.type(inputDate, "2023-10-10")
        expect(inputDate).toBeValid()
    })

    test('Time input is valid', () => {
        expect(inputTime.value).toEqual("")
        expect(inputTime).toBeInvalid()
        expect(inputTime).toBeTruthy()
    })

    test('Guests input is valid', () => {
    expect(inputGuests.value).toEqual("")
    expect(inputGuests).toBeInvalid()
    userEvent.type(inputGuests, "2")
    expect(inputGuests).toBeValid()
    })

    test('Occasion input is valid', () => {
        expect(inputOccasion.value).toEqual("Birthday")
        expect(inputOccasion).toBeValid()
    })

    test('Form is valid', () => {
        userEvent.selectOptions(inputOccasion, "Anniversary")
        expect(inputOccasion).toBeValid()
    })

    test('Submit button testing', () => {
        const submitButton = screen.getByRole('submit')
        expect(submitButton).toBeInTheDocument()
    })

})