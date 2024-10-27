import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchRecipes } from '../redux/slices/recipeslice';

const Header = ({insideHome}) => {
  
    const dispatch=useDispatch()
  
  // const dispatch=useDispatch()
  return (
    <>
    <Navbar style={{zIndex:'1'}}  className='container-fluid position-fixed px-5' bg="warning" expand="lg">
    <Link style={{textDecoration:'none'}} to={'/'}><Navbar.Brand className='fw-bolder' href="">Foodiee</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="fw-bold me-auto">
        <Link style={{textDecoration:'none'}} to={'/'}><Nav.Link href="home">Home</Nav.Link></Link>
        <Nav.Link href="#link">Features</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav>
      <Form className="d-flex w-25">
        {
          insideHome &&
          <FormControl
        onChange={e=>dispatch(searchRecipes(e.target.value.toLowerCase()))}
          type="search"
          placeholder="Search your products by cusine"
          className="me-2"
          aria-label="Search"
        />}
        
      </Form>
    </Navbar.Collapse>
  </Navbar>

  { insideHome && <div className="position-relative " style={{ height: '700px', overflow: 'hidden' }}>
            <img className='img-fluid' height={'500px'}  src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" alt="Store" />
            <div className='position-absolute text-black top-50 start-50 translate-middle text-white text-center'>
              <h1 className='display-4 fw-bold text-black  font-weight-bold'>Welcome to Our Store</h1>
              <h6 className='text-black  mt-2'>Discover the taste of our recipes just for you!</h6>
              <Link className='btn btn text-black  mt-4' >
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>}
  </>
  )
}

export default Header