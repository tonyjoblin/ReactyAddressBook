import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './AddressBook.css'
import AddressForm from './AddressForm';
import AddressList from './AddressList';

function CompareDetails(lhs, rhs) {
  if (lhs.last_name < rhs.last_name) {
    return -1;
  }
  if (lhs.last_name > rhs.last_name) {
    return +1;
  }

  if (lhs.first_name < rhs.first_name) {
    return -1;
  }
  if (lhs.first_name > rhs.first_name) {
    return +1;
  }

  return 0;
}

function AddressBook({ data }) {
  const [addresses, setAddresses] = useState(data.sort(CompareDetails));
  const [showForm, setShowForm] = useState(false);

  const onCreateAddress = (newAddress) => {
    let newAddresses = addresses.concat(newAddress);
    newAddresses.sort(CompareDetails)
    setAddresses(newAddresses);
  };

  const onRemove = (id) => {
    const newAddresses = addresses.filter(address => address.id !== id);
    setAddresses(newAddresses);
  };

  const handleCloseModal = () => setShowForm(false);
  const handleOpenForm = () => setShowForm(true);

  return (
    <Container>
      <h2>Address Book</h2>
      <Row>
        <Col>
          <Button onClick={handleOpenForm} disabled={showForm}>Add new contact</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {addresses.length > 0 && <AddressList addresses={addresses} onRemove={onRemove} />}
          {addresses.length === 0 && <p>You have no contacts in your address book</p>}
        </Col>
      </Row>
      <AddressForm show={showForm} saveHandler={onCreateAddress} closeHandler={handleCloseModal} />
    </Container>
  );
}

export default AddressBook;
