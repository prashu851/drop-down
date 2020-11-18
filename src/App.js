import logo from './logo.svg';
import Countries from './components/Countries'
import './App.css';
import Cities from './components/Cities';

function App() {
  return (
    <div className="add-locations">
      <Countries />
      <Cities />
    </div>
  );
}

export default App;
