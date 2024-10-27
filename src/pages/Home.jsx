import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes } from '../redux/slices/recipeslice';
import Header from '../components/Header';
const Home = () => {

  


  const dispatch=useDispatch()
 const {allrecipes,loading,error}= useSelector(state=>state.recipeReducer)
//  console.log(allrecipes,loading,error);

const [currentPage,setCurrentPage]=useState(1)
  const recipePerPage=8
  const totalPage=Math.ceil(allrecipes?.length/recipePerPage)
  const currentPageLastRecipeIndex=currentPage* recipePerPage
  const currentPageFirstRecipeIndex=currentPageLastRecipeIndex- recipePerPage
  const visibleRecipe=allrecipes?.slice(currentPageFirstRecipeIndex,currentPageLastRecipeIndex)
 
  useEffect(()=>{
    dispatch(fetchAllRecipes())
  },[])

  const navigateToNextPage=()=>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPrevPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  
  return (
    <>
    <Header insideHome={true}/>
    <Container className="my-5">
    <Row>
      
    {loading ? (
          <div className='d-flex  justify-content-center align-items-center my-5'>
            <img width={'550px'} height={'550px'} src="https://htmlburger.com/blog/wp-content/uploads/2021/07/The-Best-50-Website-Preloaders-Around-the-Web-Example-07a.gif" alt="Loading..." />
          </div>
        ) 
        :
         (
          allrecipes?.length > 0 ? (
            visibleRecipe.map(recipes => (
              <Col key={recipes?.id} sm={6} md={4} lg={3} className="mb-4 d-flex">
                <Card className="w-100">
                  <Card.Img variant="top" src={recipes?.image} alt="no img" />
                  <Card.Body className='text-center'>
                    <Card.Title>{recipes?.name}</Card.Title>
                    <Card.Text>Cusine: {recipes?.cuisine}</Card.Text>
                    <Link style={{ textDecoration: 'none' }} to={`${recipes?.id}/view`}>
                      <Button variant="primary">View More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className='text-danger'>No Products</div>
          )
        )}
    </Row>

    <div  className="text-center fs-4 my-5">
      <span onClick={navigateToPrevPage} style={{cursor:'pointer'}}><i className="fa-solid fa-backward me-5"></i></span>
<span>{currentPage} of {totalPage}</span>
      <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className="fa-solid fa-forward ms-5"></i></span>
    </div>
  </Container>
  </>
  )
}

export default Home