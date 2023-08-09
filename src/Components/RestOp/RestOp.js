import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function RestOp({op}) {
    // console.log(op);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Opertaing Hours
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday:{op?.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday:{op?.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday:{op?.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday:{op?.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Friday:{op?.Tuesday}</ListGroup.Item>
                    </ListGroup>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default RestOp