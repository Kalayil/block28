import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<div className="container home">Home Page</div>}
        />
        <Route
          path="/blue"
          element={<div className="container blue">Blue Page</div>}
        />
        <Route
          path="/red"
          element={<div className="container red">Red Page</div>}
        />
      </Routes>
    </>
  );
}

export default App;

