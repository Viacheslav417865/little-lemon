import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './components/Nav';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import './App.css';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <div className="layout">
      <Header className="header" />
      <Nav className="nav" />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer className="footer" />
    </div>
  );
}

export default App;
