import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import AxiosT from './axio';
// import './axio.css'; // Import CSS file

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #666666;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Hint = styled.p`
  font-size: 12px;
  color: #888888;
  margin-top: 5px;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-top: 5px;
`;

const DurationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DurationButton = styled.button`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: ${props => (props.selected ? '#4CAF50' : '#ffffff')};
  color: ${props => (props.selected ? '#ffffff' : 'initial')};
  cursor: pointer;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`;

const Warning = styled.p`
  font-size: 12px;
  color: #ff0000;
  margin-bottom: 20px;
`;

const ContinueButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const AddressForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  z-index: 2;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ff0000;
  color: #ffffff;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #4CAF50;
  color: #ffffff;
`;

const ManualEntryLink = styled.a`
  cursor: pointer;
  color: #0000ff;
  text-decoration: underline;
`;

function MainForm() {
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [savedAddress, setSavedAddress] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [houseName, setHouseName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [street, setStreet] = useState('');
    const [townCity, setTownCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [duration, setDuration] = useState('');
    const [errors, setErrors] = useState({});

    const clearError = (field) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    };

    const handleSaveAddress = () => {
        const alphaPattern = /^[A-Za-z\s]+$/;
        const houseNumberPattern = /^[A-Za-z0-9\s\-\#]+$/;
        const alphaNumericPattern = /^[A-Za-z0-9\s]+$/;
        const numericPattern = /^\d{6}$/;

        let isValid = true;
        const newErrors = {};

        if (!houseName || !alphaPattern.test(houseName)) {
            newErrors.houseNameError = 'House name must be alphabetical only';
            isValid = false;
        }

        if (!houseNumber || !houseNumberPattern.test(houseNumber)) {
            newErrors.houseNumberError = 'House number must be alphanumeric or special characters';
            isValid = false;
        }

        if (!street || !alphaNumericPattern.test(street)) {
            newErrors.streetError = 'Street name must be alphanumeric';
            isValid = false;
        }

        if (!townCity || !alphaPattern.test(townCity) || townCity.length < 3) {
            newErrors.townCityError = 'Town or city must be alphabetical and at least 3 characters long';
            isValid = false;
        }

        if (!postcode || !numericPattern.test(postcode)) {
            newErrors.postcodeError = 'Postcode must be exactly 6 digits';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            const address = `${houseName}, ${houseNumber}, ${street}, ${townCity}, ${postcode}`;
            setSavedAddress(address);
            setShowAddressForm(false);
            setAddressInput('');
        }
    };

    const handleRemoveAddress = () => {
        setSavedAddress('');
    };

    const handleEditAddress = () => {
        setShowAddressForm(true);
    };

    const handleSelectDuration = (duration) => {
        setDuration(duration);
        clearError('durationError');
    };

    const handleValidateAndContinue = () => {
        let isValid = true;
        const newErrors = {};

        if (!duration) {
            newErrors.durationError = 'Please select a duration';
            isValid = false;
        }

        if (!savedAddress && !addressInput) {
            newErrors.addressError = 'Please enter or search for an address';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <Heading>02 Home address</Heading>
                <Paragraph>Please provide your current Indian residence address</Paragraph>

                {savedAddress && (
                    <div id="savedAddress" className="saved-address">
                        <Paragraph>{savedAddress}</Paragraph>
                        <ManualEntryLink onClick={handleRemoveAddress}>Remove address</ManualEntryLink>
                        <ManualEntryLink onClick={handleEditAddress}>Change address </ManualEntryLink>
                    </div>
                )}

                {!savedAddress && (
                    <FormGroup id="searchAddressGroup">
                        {/* <Label htmlFor="address">SEARCH FOR YOUR ADDRESS</Label>
                        <Input
                            type="text"
                            id="address"
                            value={addressInput}
                            placeholder="Type address or postcode"
                            onChange={(e) => {
                                setAddressInput(e.target.value);
                                clearError('addressError');
                            }}
                        /> */}
                        <AxiosT/>
                        <Hint>Please enter an address or enter manually using the link below</Hint>
                        <ManualEntryLink onClick={() => setShowAddressForm(true)}>Prefer to enter address manually </ManualEntryLink>
                        <ErrorMessage id="addressError">{errors.addressError}</ErrorMessage>
                    </FormGroup>
                )}

                <FormGroup>
                    <Paragraph>HOW LONG HAVE YOU LIVED AT THIS ADDRESS?</Paragraph>
                    <Paragraph>If less than 6 months, we'll also need details of your previous address.</Paragraph>
                    <DurationButtons>
                        <DurationButton
                            selected={duration === '6 months or more'}
                            onClick={() => handleSelectDuration('6 months or more')}
                        >
                            6 months or more
                        </DurationButton>
                        <DurationButton
                            selected={duration === 'Less than 6 months'}
                            onClick={() => handleSelectDuration('Less than 6 months')}
                        >
                            Less than 6 months
                        </DurationButton>
                    </DurationButtons>
                    <ErrorMessage id="durationError">{errors.durationError}</ErrorMessage>
                </FormGroup>

                <Warning>Please check your details above. You won't be able to change them once you click continue.</Warning>

                <ContinueButton onClick={handleValidateAndContinue}>Continue</ContinueButton>

                {showAddressForm && (
                    <>
                        <Overlay />
                        <AddressForm>
                            <Heading>Manual Address Entry</Heading>
                            <FormGroup>
                                <Label htmlFor="houseName">House Name</Label>
                                <Input
                                    type="text"
                                    id="houseName"
                                    value={houseName}
                                    onChange={(e) => {
                                        setHouseName(e.target.value);
                                        clearError('houseNameError');
                                    }}
                                />
                                <ErrorMessage id="houseNameError">{errors.houseNameError}</ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="houseNumber">House Number</Label>
                                <Input
                                    type="text"
                                    id="houseNumber"
                                    value={houseNumber}
                                    onChange={(e) => {
                                        setHouseNumber(e.target.value);
                                        clearError('houseNumberError');
                                    }}
                                />
                                <ErrorMessage id="houseNumberError">{errors.houseNumberError}</ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="street">Street</Label>
                                <Input
                                    type="text"
                                    id="street"
                                    value={street}
                                    onChange={(e) => {
                                        setStreet(e.target.value);
                                        clearError('streetError');
                                    }}
                                />
                                <ErrorMessage id="streetError">{errors.streetError}</ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="townCity">Town/City</Label>
                                <Input
                                    type="text"
                                    id="townCity"
                                    value={townCity}
                                    onChange={(e) => {
                                        setTownCity(e.target.value);
                                        clearError('townCityError');
                                    }}
                                />
                                <ErrorMessage id="townCityError">{errors.townCityError}</ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="postcode">Postcode</Label>
                                <Input
                                    type="text"
                                    id="postcode"
                                    value={postcode}
                                    onChange={(e) => {
                                        setPostcode(e.target.value);
                                        clearError('postcodeError');
                                    }}
                                />
                                <ErrorMessage id="postcodeError">{errors.postcodeError}</ErrorMessage>
                            </FormGroup>
                            <ButtonGroup>
                                <CloseButton onClick={() => setShowAddressForm(false)}>Close</CloseButton>
                                <SubmitButton onClick={handleSaveAddress}>Save</SubmitButton>
                            </ButtonGroup>
                        </AddressForm>
                    </>
                )}
            </Container>
        </>
    );
}

export default MainForm;
