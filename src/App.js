import "./App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function App() {
//state
const [dis,setDis]=useState()
const [fue,setFue]=useState()
const[price,setPrice]=useState()
const[cos,setCos]=useState(0)
const [mil,setMil]=useState(0)
const [per,setPer]=useState(0)

// console.log(dis)
// console.log(fue)

const Mileage=(e)=>{
  e.preventDefault();
  
console.log(price);
  if(!dis || !fue   || !price){
    alert("enter the values")
  }else{
   let mile=(dis/fue)
   
    console.log(mile.toFixed(2))
    setMil(mile.toFixed(2))

    let cost=(fue*price)
    setCos(cost.toFixed(2))

    let p=(fue/dis)*price
    setPer(p.toFixed(2))
  }

}



  return (
    <div style={{height:'100vh'}} className="App d-flex justify-content-center align-items-center">
    <div className="">



    <Card className="glow" style={{ width: '18rem'}}>
      <Card.Body >
        <Card.Title className="text-center">Mileage Calculator</Card.Title>
        
      <Form className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Total Distance</Form.Label>
        <Form.Control value={dis} onChange={(e)=>setDis(e.target.value)} type="number" placeholder="total distance" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Fuel(in ltrs)</Form.Label>
        <Form.Control value={fue} onChange={(e)=>setFue(e.target.value)} type="number" placeholder="fuel in ltrs" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Price of Fuel(in ₹)</Form.Label>
        <Form.Control value={price} onChange={(e)=>setPrice(e.target.value)}  type="number" placeholder="fuel price" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <button onClick={Mileage}  class="btn  btn-success">Submit</button>


      </Form>
      <p className="text-center mt-3"> Mileage: {mil}</p>
      <p className="text-center mt-3">Total cost of the trip :{cos}</p>
      <p className="text-center mt-3">Fuel Expense /km :{per}</p>
      </Card.Body>
  
    
    </Card>
 




      </div>
      
    </div>
  );
}

export default App;
