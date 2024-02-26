import Bookings from "@/components/Bookings/Bookings.jsx";
import Footer from "@/components/Footer/Footer";
import "./App.scss";
import Card from "../Card/Card";
import AppHeader from "../AppHeader/AppHeader.jsx";

const App = () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Footer />
  </div>
);



export default App;
