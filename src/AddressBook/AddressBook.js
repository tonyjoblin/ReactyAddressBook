import React, { useState } from 'react';
import './AddressBook.css'
import AddressForm from './AddressForm';

const fields = [
  'firstName', 'lastName', 'street', 'suburb', 'postcode'
];

function Address({ address, onRemove }) {
  return (
    <tr>
      {fields.map(field => <td key={field}>{address[field]}</td>)}
      <td key='remove'>
        <input type="button" value="Remove" onClick={() => onRemove(address.id)}/>
      </td>
    </tr>
  )
}

function AddressTable({ addresses, onRemove }) {
  return (
    <table>
      <thead>
        <tr>{fields.map(field => <th key={field}>{field}</th>)}</tr>
      </thead>
      <tbody>
        {addresses.map(address => <Address key={address.id} address={address} onRemove={onRemove} />)}
      </tbody>
    </table>
  )
}

function CompareDetails(lhs, rhs) {
  if (lhs.lastName < rhs.lastName) {
    return -1;
  }
  if (lhs.lastName > rhs.lastName) {
    return +1;
  }

  if (lhs.firstName < rhs.firstName) {
    return -1;
  }
  if (lhs.firstName > rhs.firstName) {
    return +1;
  }

  return 0;
}

function AddressBook({ data }) {
  const [addresses, setAddresses] = useState(data);

  const onCreateAddress = (newAddress) => {
    let newAddresses = addresses.concat(newAddress);
    newAddresses.sort(CompareDetails)
    setAddresses(newAddresses);
  };

  const onRemove = (id) => {
    const newAddresses = addresses.filter(address => address.id !== id);
    setAddresses(newAddresses);
  };

  return (
    <div className="AddressBook">
      <h2>Address Book</h2>
      <AddressForm saveHandler={onCreateAddress}/>
      <AddressTable addresses={addresses} onRemove={onRemove} />
    </div>
  );
}

export default AddressBook;
