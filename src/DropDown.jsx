import React from 'react'
import './DropDown.css'
import DropDownItems from './DropDownItems'
import DropDownButton from './DropDownButton';

class DropDown extends React.Component {
    constructor(){
        super();
        this.state = {
            showDropDownItems: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
    }
    toggleDropDown = () => {
        this.setState({
            showDropDownItems:!this.state.showDropDownItems
        });
    }

    onSelectItem = (selectedItem) => {
        this.setState({
            showDropDownItems: false
        });
        this.props.onOptionChange(selectedItem);
    }
    render(){
        const { options, label } = this.props;
        const { showDropDownItems } = this.state; 
        return(
            <div className="dropdown-div">
                <DropDownButton label={label} handleDropDownClick={this.toggleDropDown}/>
                { showDropDownItems
                ? <DropDownItems options={options} handleOptionSelect={this.onSelectItem}/>
                : ''
                }   
            </div>
        )
    }
}

export default DropDown;