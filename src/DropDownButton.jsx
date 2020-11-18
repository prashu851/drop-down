import { Class } from '@material-ui/icons';
import React from 'react'
import DropDown from './DropDown';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './DropDownButton.css'

const DropDownButton = ({label, handleDropDownClick}) => {
    return(
            <div className="dropdown-btn">
                <Button
                    variant="contained"
                    color="default"
                    endIcon={<ExpandMoreIcon />}
                    className="select-btn"
                    onClick={handleDropDownClick}
                >
                    {label}
                </Button>
            </div>
    )
}

export default DropDownButton;