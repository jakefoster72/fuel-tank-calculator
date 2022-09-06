import logo from './logo.svg';
import './App.css';
import InputWithLabel from './InputWithLabel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  // const [inputData, setInputData] = useState({location: "", tankSize: "", fuelType: ""});
  const [location, setLocation] = useState("");
  const [tankSize, setTankSize] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [priceForTank, setPriceForTank] = useState("");

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const handleTankSize = (event) => {
    setTankSize(event.target.value);
  }

  const handleFuelType = (event) => {
    setFuelType(event.target.value);
  }

  const sendData = () => {
    // alert("hi");
    var url = `http://127.0.0.1:5000/fuel-prices?location=${location}&fuelType=${fuelType}&fuelTankSize=${tankSize}`
    const request = new Request(url, {
      method: 'GET'
    });

    fetch(request)
      .then((response) => response.json())
      .then(data => {
        console.log(data.priceForTank);
        setPriceForTank(data.priceForTank);
      });
  }

  // const handleInput = (event) => {
  //   setInputData(event.inputData)
  //   // //This won't be necessary in React 17
  //   // event.persist()
  //   // if(event.target.id === "email-input"){
  //   //   setUserData(prevState => {
  //   //     return {...prevState, email: event.target.value }
  //   //   });
  //   // } else if(event.target.id === "code-input"){
  //   //   setUserData(prevState => {
  //   //     return {...prevState, code: event.target.value }
  //   //   });
  //   // }

  // }

  return (
    <div>
      {/* <InputWithLabel id="location" type="text" label="Location:" value={location} onInputChange={handleLocation} ></InputWithLabel>
      <InputWithLabel id="tank_size" type="number" label="Tank Size (L):" value={tankSize} onInputChange={handleTankSize} ></InputWithLabel> */}
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="fuel_type">
          Fuel Type:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Unleaded</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Diesel</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <input id="location" value={location} onChange={handleLocation} />
      <input id="tankSize" value={tankSize} onChange={handleTankSize} />     
      <select name="fuelTypeBox" id="fuelTypeBox" onChange={handleFuelType}>
        <option value="Unleaded">Unleaded</option>
        <option value="Diesel">Diesel</option>
      </select>
      <Button id="submit" onClick={sendData} >Submit</Button>
      <p> Price for full tank: {priceForTank} </p>
      </div>
    );
  }

export default App;
