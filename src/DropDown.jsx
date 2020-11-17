import React from 'react'
import './DropDown.css'
import Box from './Box'

class DropDown extends React.Component {
    render(){
        return(
            <>
            <Box countries={this.props.countries} />
            </>
        )
    }
}

export default DropDown;