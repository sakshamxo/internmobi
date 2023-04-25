import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { aysncphone, aysncuser } from '../store/userAction';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
const Mainpage = () => {
    const user = useSelector((state)=> state.user.user);
    console.log(user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(aysncuser())
    }, [dispatch])
   const navigate = useNavigate()
   const click = ()=>{
    navigate('/home')
   }
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mobilicis India Private Limited</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Assignment</Nav.Link>
            <Nav.Link href="/">for</Nav.Link>
            <Nav.Link href="/">Internship</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
      <Card className="col-md-5 mx-auto mt-5 p-2 " variant="dark" style={{ width: '50rem' , height:'30rem' }}>
      <Navbar className='mb-2' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Node.js & React.js assignement
          </Navbar.Brand>
        </Container>
      </Navbar>
      <h5>1.Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h5>
      <h5>2.Male Users which have phone price greater than 10,000.</h5>
      <h5>3.Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h5>
      <h5>4.Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h5>
    <h5>5.Show the data of top 10 cities which have the highest number of users and their average income.</h5>
      <Button className="col-md-5 mx-auto mt-5 p-2 " onClick={click} variant="outline-dark" style={{width:'30rem'}}>Task 1</Button>
    </Card>
    </Container>
    </div>
  )
}

export default Mainpage