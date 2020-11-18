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
        this.hideDropDownItems = this.hideDropDownItems.bind(this);
    }
    toggleDropDown = () => {
        this.setState({
            showDropDownItems:!this.state.showDropDownItems
        });
    }

    hideDropDownItems = () => {
        this.setState({
            showDropDownItems: false
        });
    }

    onSelectItem = (selectedItem) => {
        this.props.onOptionChange(selectedItem);
        this.hideDropDownItems();
    }

    addAndSelectOption = (option) => {
        this.props.addNewOption(option);
        this.hideDropDownItems();
    }
    render(){
        const { options, label, maximumDisplayOptions, canCreateOption } = this.props;
        const { showDropDownItems } = this.state; 
        return(
            <div className="dropdown-div">
                <DropDownButton label={label} handleDropDownClick={this.toggleDropDown}/>
                { showDropDownItems
                ? <DropDownItems options={options} canCreateOption={canCreateOption} maximumDisplayOptions={maximumDisplayOptions} handleOptionSelect={this.onSelectItem} addNewOption={this.addAndSelectOption}/>
                : ''
                }   
            </div>
        )
    }
}

export default DropDown;