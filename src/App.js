import logo from './logo.svg';
import './App.css';
import Link from './Compnents/Link';
import Label from './Compnents/Label';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link/>
        <Label/>
      </header>
    </div>
  );
}

export default App;
