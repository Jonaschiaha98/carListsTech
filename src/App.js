import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import DonationBox from './DonationBox';
import Doings from './Doings';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <DonationBox />
      <Doings />
      <Footer />
    </div>
  );
}

export default App;
