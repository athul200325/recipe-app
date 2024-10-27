import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllRecipes } from '../redux/slices/recipeslice';
import { all } from 'axios';
import Header from '../components/Header';

const View = () => {

  const {id}=useParams()
  console.log(id);


  const [recipe,setRecipe]=useState({})
  useEffect(()=>{
    if(sessionStorage.getItem("allRecipes")){
      const allRecipes=JSON.parse(sessionStorage.getItem("allRecipes"))
        setRecipe(allRecipes?.find(item=>item.id==id))
    }
  },[])

  console.log(recipe);
  
  return (
    <>
    <Header/>
      <Container style={{paddingTop:'120px'}} className="pb-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={recipe?.image} />
          </Card>
        </Col>
        <Col className='m-auto' md={6}>
          <h5>Product ID: {recipe?.id}</h5>
          <h2 className='fw-bold'>{recipe?.name}</h2>
          <h4>Cuisine: {recipe?.cuisine}</h4>
          <h6><h6 className='fw-bold '>Ingredients:</h6> {recipe?.ingredients}</h6>
          <h6><h6 className='fw-bold '>Instructions:</h6> {recipe?.instructions}</h6>
          <Button variant="primary m-2" >
            Add to Cart
          </Button>
          <Button variant="secondary" className="ml-2 m-2" >
            Add to Wishlist
          </Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default View