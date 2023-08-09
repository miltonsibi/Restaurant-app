import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, ListGroup } from 'react-bootstrap';
import RestOp from '../RestOp/RestOp';
import RestReview from '../RestReview/RestReview';

function View() {
//to hold particular details
    const [RestDetails,setRestDetails]=useState([])
//get particular id from the restuarant
    //const pathParameter= useParams()
    //console.log(pathparameter.id)
//destructuring
    const {id} = useParams()
    console.log(id);//2
//api call for fetch particular resutarant details
    const fetchData=async()=>{
        const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data);
        setRestDetails(data)
    }
    console.log(RestDetails);
//function call
useEffect(()=>{
    fetchData();
},[])
  return (
    <>
        <Row>
            <Col sm={12} md={3}>
            {/* {Image} */}
            <Image src={RestDetails.photograph} fluid/>
            </Col>
            <Col>
            {/* {content} */}
            <h2 className='text-center m-4'>{RestDetails.name}</h2>
            <div className="container w-50 mb-5">
                <ListGroup className='shadow'>
                    <ListGroup.Item>Neighborhood:{RestDetails.neighborhood}</ListGroup.Item>
                    <ListGroup.Item>Cuisine type{RestDetails.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item>Address:{RestDetails.address}</ListGroup.Item>
                    <ListGroup.Item><RestOp op={RestDetails.operating_hours}/></ListGroup.Item>
                    <ListGroup.Item><RestReview re={RestDetails.review}/></ListGroup.Item>
                </ListGroup>
            </div>
            </Col>
        </Row>
    </>
  )
}

export default View