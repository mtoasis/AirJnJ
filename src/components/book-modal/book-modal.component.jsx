import React, { useState } from 'react'
import { BookModalContainer, ModalContainer, TitleTextContainer, FormContainer } from './book-modal.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
// import AutoCompleteInput from '../auto-complete-input/auto-complete-input.component'
// import Calendar from 'react-calendar'
import CustomCalendar from '../calendar/calendar.component'


const BookModal = () => {

    let todayDate = new Date()
    todayDate = JSON.stringify(todayDate).slice(1, 11);

    const [bookingInfo, setBookingInfo] = useState(
        {
            where: ``,
            checkIn: todayDate,
            checkOut: ``,
            guests: `1`,
        })

    const { where, checkIn, checkOut, guests } = bookingInfo;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setBookingInfo({ ...bookingInfo, [name]: value })
    }

    const handleValidation = () =>{
        if(new Date(checkIn) < new Date(checkOut)){
            return
        }
        return alert("Check-out date can't be prior to check-in date")
    }

    return (
        <BookModalContainer>
            <ModalContainer>
                <TitleTextContainer>
                    <h1>Book unique places to stay and things to do.</h1>
                </TitleTextContainer>

                <FormContainer>

                    {/* <AutoCompleteInput
                    name="where" 
                    value={where}
                    handleChange={handleChange}
                    /> */}

                    <FormInput
                        name="where"
                        value={where}
                        label="WHERE"
                        handleChange={handleChange}
                        required
                    />

                    <CustomCalendar
                        name="checkIn"
                        label="CHECK-IN"
                        value={checkIn}
                        bookingInfo={bookingInfo}
                        setBookingInfo={setBookingInfo}                      
                    />

                    <CustomCalendar
                        name="checkOut"
                        label="CHECK-OUT"
                        value={checkOut}
                        bookingInfo={bookingInfo}
                        setBookingInfo={setBookingInfo}                  
                    />

                    <FormInput
                        name="guests"
                        value={guests}
                        label="GUESTS"
                        handleChange={handleChange}
                        type="number"
                        min="1"                        
                        required
                    />
                    <CustomButton type="submit" onClick={handleValidation}>Search</CustomButton>
                </FormContainer>

            </ModalContainer>


        </BookModalContainer>
    )
}

export default BookModal