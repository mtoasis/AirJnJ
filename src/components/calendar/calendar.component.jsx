import React, {useState, Fragment, useEffect} from 'react'
import Calendar from 'react-calendar'
import FormInput from '../form-input/form-input.component'
import { CalenderContainer } from './calendar.styles'

const CustomCalendar = ({value, setBookingInfo, bookingInfo, name, label}) => {
    
    const [calendarDisplay, setCalendarDisplay] = useState('none')

    useEffect(()=>{
        window.addEventListener('dblclick', ()=>{
            if(calendarDisplay === null){
                setCalendarDisplay('none')
            }
        })
    })

    const handleCalander = (date, name) => {
        setBookingInfo({ ...bookingInfo, [name]: JSON.stringify(date).slice(1, 11) })
        setCalendarDisplay('none')
    }

    const handleCalanderDisplay = () => {
        setCalendarDisplay(null)
    }

    return (
        <Fragment>
            <FormInput
                name={name}
                value={value}
                label={label}
                handleChange={()=>{}}
                handleCalander={handleCalanderDisplay}
                required
            />

            <CalenderContainer display={calendarDisplay}>
                <Calendar
                    onClickDay={(date)=>handleCalander(date, name)}                    
                />
            </CalenderContainer>
        </Fragment>
    )
}

export default CustomCalendar