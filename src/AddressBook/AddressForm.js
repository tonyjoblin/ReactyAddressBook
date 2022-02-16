import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { initialState, fieldDisplayNames } from './config';

function FormField({ fieldKey, value, onChange}) {
  return (
    <Form.Group>
      <Form.Label htmlFor={fieldKey}>{fieldDisplayNames[fieldKey]}:</Form.Label>
      <Form.Control id={fieldKey} type="text" value={value} onChange={e => onChange(fieldKey, e.target.value)}></Form.Control>
    </Form.Group>
  );
}

function AddressForm({ show, saveHandler, closeHandler }) {
  const [address, setAddress] = useState(initialState);

  const onFieldUpdate = (key, value) => {
    const newAddress = {
      ...address,
      [key]: value
    }
    setAddress(newAddress);
  };

  const handleClose = () => {
    console.log('handleClose');
    setAddress(initialState);
    closeHandler();
  }

  const onCreate = () => {
    saveHandler({
      id: Math.round(Math.random()* 1e12).toString(),
      ...address
    });
    handleClose();
  };

  const renderFormField = (fieldKey) => {
    return (
      <FormField key={fieldKey}
                 fieldKey={fieldKey}
                 value={address[fieldKey]}
                 onChange={onFieldUpdate} />
    );
  }

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {Object.keys(initialState).map(fieldKey => renderFormField(fieldKey))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onCreate}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddressForm;
