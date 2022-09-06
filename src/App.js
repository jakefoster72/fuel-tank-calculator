import logo from './logo.svg';
import './App.css';
import InputWithLabel from './InputWithLabel';

function App() {
  return (
    <div>
      <InputWithLabel id="location" label="Location:" value={userData.email} onInputChange={handleInput} ></InputWithLabel>
      <InputWithLabel id="code-input" type="number" label="Code:" value={userData.code} onInputChange={handleInput} ></InputWithLabel>
    </div>
  );
}

export default App;
