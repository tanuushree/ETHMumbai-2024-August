import './App.css';
import Website from './pages/website';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Website/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
