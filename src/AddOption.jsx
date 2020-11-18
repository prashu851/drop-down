import React from 'react'
import './AddOption.css'

const AddOption = ({searchTerm, canCreateOption, addNewOption}) => {
    return(
        <div className="add-option-div">
            {searchTerm} not found
            {canCreateOption && <button className="add-btn" onClick={()=>addNewOption(searchTerm)}>Add and Select</button>}
        </div>
    )
}
export default AddOption;