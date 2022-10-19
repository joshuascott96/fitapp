import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Success from './pages/Success'
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/success' element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
