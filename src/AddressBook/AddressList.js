import React from 'react';
import { Table, CloseButton } from 'react-bootstrap';
import './AddressBook.css'
import { fields, fieldDisplayNames  } from './config';

function Address({ address, onRemove }) {
  return (
    <tr>
      {fields.map(field => <td key={field}>{address[field]}</td>)}
      <td key='remove'>
        <CloseButton onClick={() => onRemove(address.id)}/>
      </td>
    </tr>
  )
}

function AddressTable({ addresses, onRemove }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>{fields.map(field => <th key={field}>{fieldDisplayNames[field]}</th>)}</tr>
      </thead>
      <tbody>
        {addresses.map(address => <Address key={address.id} address={address} onRemove={onRemove} />)}
      </tbody>
    </Table>
  )
}

export default AddressTable;
