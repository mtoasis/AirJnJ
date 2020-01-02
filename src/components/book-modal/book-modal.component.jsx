import React, { useState } from 'react'
import { BookModalContainer, ModalContainer, TitleTextContainer, FormContainer } from './book-modal.styles'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const BookModal = () => {

    const [bookingInfo, setBookingInfo] = useState(
        {
            where: ``,
            checkIn: ``,
            checkOut: ``,
            guests: ``,
        })

    const { where, checkIn, checkOut, guests } = bookingInfo;

    const handleChange = (event) => {
        const { value, name } = event.target;
        setBookingInfo({ ...bookingInfo, [name]: value })
    }

    return (
        <BookModalContainer>
            <ModalContainer>
                <TitleTextContainer>
                    <h1>Book unique places to stay and things to do.</h1>
                </TitleTextContainer>

                <FormContainer>
                    <FormInput
                        name="where"
                        value={where}
                        label="WHERE"
                        handleChange={handleChange}
                        required
                    />

                    <FormInput
                        name="checkIn"
                        value={checkIn}
                        label="CHECK-IN"
                        handleChange={handleChange}
                        required
                    />

                    <FormInput
                        name="checkOut"
                        value={checkOut}
                        label="CHECK-OUT"
                        handleChange={handleChange}
                        required
                    />

                    <FormInput
                        name="guests"
                        value={guests}
                        label="GUESTS"
                        handleChange={handleChange}
                        required
                    />
                    <CustomButton>Search</CustomButton>
                </FormContainer>

            </ModalContainer>
        </BookModalContainer>
    )
}

export default BookModal