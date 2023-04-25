import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { aysnccarbrand, aysnclast, aysncphone } from '../store/userAction';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Phonepage = () => {
    const [Firss, setFirss] = useState([])
    const user = useSelector((state)=> state.user.user);
    console.log(user)
    console.log(user.length)
    const dispatch = useDispatch()
    const firsst = async ()=>{
       await setFirss(user)
    }
    useEffect(() => {
        dispatch(aysncphone())
        dispatch(aysnccarbrand())
        firsst()
    }, [dispatch])
    const navigate = useNavigate()
    const click = ()=>{
     navigate('/carbrands')
    }
    const back = ()=>{
        navigate('/')
       }
    let load = <Spinner animation="grow" />;
    if(Firss.length > 0){
        load = Firss.map(uss =>  <tr key={uss._id}>
            <td>{uss.id}</td>
            <td>{uss.first_name}</td>
            <td>{uss.last_name}</td>
            <td>{uss.email}</td>
            <td>{uss.gender}</td>
            <td>{uss.city}</td>
            <td>{uss.income}</td>
            <td>{uss.phone_price}</td>
            <td>{uss.quote}</td>
            <td>{uss.car}</td>
          </tr>)
    }
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mobilicis India Private Limited</Navbar.Brand>
          <Nav className="me-auto">
          <Button className='mx-3' onClick={click} variant="primary">Next</Button>{' '}
          <Button onClick={back} variant="warning">Home</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
        
        <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>email</th>
        <th>gender</th>
        <th>city</th>
        <th>income</th>
        <th>phone price</th>
        <th>quote</th>
        <th>car</th>
      </tr>
    </thead>
    <tbody>
     {load}
    </tbody>
  </Table>
  </div>
  )
}

export default Phonepage