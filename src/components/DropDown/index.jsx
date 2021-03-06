import React from 'react'
import DropDownItems from './DropDownItems'
import DropDownButton from './DropDownButton';
import './index.css';

class DropDown extends React.Component {
    constructor(){
        super();
        this.state = {
            showDropDownItems: false
        }
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.onSelectOption = this.onSelectOption.bind(this);
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

    onSelectOption = (selectedOption) => {
        this.props.onOptionChange(selectedOption);
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
                ? <DropDownItems options={options} canCreateOption={canCreateOption} maximumDisplayOptions={maximumDisplayOptions} handleOptionSelect={this.onSelectOption} addNewOption={this.addAndSelectOption}/>
                : ''
                }   
            </div>
        )
    }
}

export default DropDown;