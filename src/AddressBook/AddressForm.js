import React, { useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  suburb: '',
  postcode: ''
};

function FormField({ fieldKey, value, onChange}) {
  return (
    <React.Fragment>
      <label>{fieldKey}: </label>
      <input type='text' id="{fieldKey}" name="{fieldKey}" size='30' value={value} onChange={e => onChange(fieldKey, e.target.value)} />
      <br/>
    </React.Fragment>
  );
}

function AddressForm({ saveHandler }) {

  const [address, setAddress] = useState(initialState);

  const onFieldUpdate = (key, value) => {
    const newAddress = {
      ...address,
      [key]: value
    }
    setAddress(newAddress);
  };

  const onCreate = () => {
    saveHandler({
      id: Math.round(Math.random()* 1e12).toString(),
      ...address
    });
    setAddress(initialState);
  };

  return (
    <div>
      <h4>Address:</h4>
      <form>
        {Object.keys(initialState).map(fieldKey => <FormField key={fieldKey} fieldKey={fieldKey} value={address[fieldKey]} onChange={onFieldUpdate} />)}
        <input type="button" value="Create" onClick={onCreate}></input>
      </form>
    </div>
  );
}

export default AddressForm;
