import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return (
    <div className="App">
     Hello {name} Age: {age - 4}
     <br></br>
     <Hello firstName = {name} />
    </div>
  );
}

export default App;
