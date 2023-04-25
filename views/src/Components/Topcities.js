import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { aysnctop } from '../store/userAction';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topcities = () => {
    const [Firss, setFirss] = useState([]);
    const user = useSelector((state)=> state.user.user);
    console.log(user)
    console.log(user.length)
    const dispatch = useDispatch()
    const firsst = async ()=>{
       await setFirss(user)
    }
    useEffect(() => {
        dispatch(aysnctop())
        firsst()
    }, [dispatch])
    const navigate = useNavigate()
   
    const back = ()=>{
        navigate('/')
       }
    let load = <Spinner animation="grow" />;
    if(Firss.length > 0){
        load = Firss.map(uss =>  <tr key={uss._id}>
            <td>{uss.city}</td>
            <td>{uss.averageIncome}</td>
            <td>{uss.cityUsers}</td>
          </tr>)
    }
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mobilicis India Private Limited</Navbar.Brand>
          <Nav className="me-auto">
          <Button onClick={back} variant="warning">Home</Button>{' '}
          </Nav>
        </Container>
      </Navbar>
        
        <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>city</th>
        <th>Average income</th>
        <th>City users</th>
      </tr>
    </thead>
    <tbody>
     {load}
    </tbody>
  </Table>
  </div>
  )
}

export default Topcities