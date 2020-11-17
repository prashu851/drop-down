import React from 'react'
import DropDown from './DropDown'

class Countries extends React.Component {
    constructor(){
        super();
        this.state={
            countries:['India','Australia','Newzealand','England','South Africa','USA','Russia','China','Japan','Germany']
        }

    }
    render(){
        return(
            <DropDown countries={this.state.countries} />
        )
    }

}

export default Countries;