import React, { useState } from 'react'
import PlaceAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import FormInput from '../form-input/form-input.component'

const AutoCompleteInput = () => {

    const [address, setAddress] = useState("")

    const handleChange = event =>{
        setAddress(event.target)
    }

    const handleSelect = async value =>{}

    return (
        <PlaceAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
        >
            {
                ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({placeholder:"type address"})} name="where" value={address}/>
                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(({id, descriptions}) => {

                                // console.log(suggestions)
                                return (
                                    <div {...getSuggestionItemProps(suggestions)} key={id}>
                                        {descriptions}
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                )
            }
        </PlaceAutocomplete>
    )
}

export default AutoCompleteInput