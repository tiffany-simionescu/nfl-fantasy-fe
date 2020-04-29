import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import styled from "styled-components"; 

// mockdata for now 
// const promises = ['Tom Brady', 'Aaron Donald', 'Drew Brees', 'Khalil Mack', 'Pat Mahomes' ];

// for app.js 
//  {/* <Mockautocomplete
//                 options={[
//                     'Tom Brady',
//                     'Aaron Donald',
//                     'Drew Brees',
//                     'Khalil Mack',
//                     'Pat Mahomes'
//                 ]}
//                 />  */}

export class Mockautocomplete extends Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired }; 
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    };

    onChange = (event) => {
        console.log('Mockautocomplete.js: onChanges');

        const { options } = this.props;
        const userInput = event.currentTarget.value;

        const filteredOptions = options.filter(
            (optionName) => 
            optionName.toLowerCase().indexOf(userInput.toLowerCase()) -1
        );
        
        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: event.currentTarget.value
        });
    };

    onClick = (event) => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: event.currentTarget.innerText
        });
    };

    onKeyDown = (event) => {
        const { activeOption, filteredOptions } = this.state;

        if(event.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (event.keyCode === 38) {
            if (activeOption === 0 ) {
                return; 
            }
            this.setState({ activeOption: activeOption -1 });
        } else if (event.keyCode === 40) {
            if (activeOption === filteredOptions.lenght -1 ) {
                console.log('Mockautocomplete.js:', activeOption);
                return; 
            }
            this.setState({ activeOption: activeOption + 1 });
        }
    };
    
    render() {
        const {
            onChange,
            onClick,
            onKeyDown,

            state: {
                activeOption, filteredOptions, showOptions, userInput }
        } = this;
        let optionList; 
        if (showOptions && userInput ) {
            if (filteredOptions.length) {
                optionList = (
                    <ListUL className = "options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'option-active';
                            }
                            return (
                                <Listed className={className} key={optionName} onClick={onClick}>
                                </Listed>
                            );
                        })}
                    </ListUL>
                );
            } else {
                optionList = (
                    <RandomDiv className="no-options">
                        <Emm> No Options!</Emm>
                    </RandomDiv>
                );
            }
        }
        return (
            <React.Fragment>
                <SearchDiv className='search-box'>
                    <TypedInput
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        />
                    <SubmitInput 
                        type="submit" 
                        value="" 
                        className="search-btn" 
                        />
                </SearchDiv>
                {optionList}
            </React.Fragment>
        );
    }
}

const TypedInput = styled.input`
color: black; 
background: white; 
border: 1px solid blue; 
padding: 1.5rem; 
`

const SubmitInput = styled.input`
border: 2px solid yellow; 
height: 30px;
width: 40px; 
`

const SearchDiv = styled.div`
border: 2px solid red; 
width: 80%;
`

const ListUL = styled.ul`
color: black;
`

const Listed = styled.li`
color: black; 
`

const RandomDiv = styled.div`
color: black; 
`

const Emm = styled.em`
color: black; 
`
export default Mockautocomplete; 
