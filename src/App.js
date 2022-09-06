import logo from './logo.svg';
import './App.css';
import InputWithLabel from './InputWithLabel';
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  return (
    <div>
      <InputWithLabel id="location" type="text" label="Location:" value= onInputChange={handleInput} ></InputWithLabel>
      <InputWithLabel id="tank_size" type="number" label="Tank Size (L):" value= onInputChange={handleInput} ></InputWithLabel>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="fuel_type">
          Fuel Type:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Unleaded</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Diesel</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
    );
  }

export default App;
