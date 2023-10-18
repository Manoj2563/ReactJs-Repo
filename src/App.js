import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import { Link } from "react-scroll/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hello } from "./components/Helloworld/Helloworld";
import { Card } from "./components/congratscard/congratscard";
import { Superleague } from "./components/superleague/superleague";
import { Socialbutton } from "./components/socialbutton/socialbutton";
import { Notification } from "./components/Notification/Notification";
import { Login } from "./components/Login/Login";
import { Technologycard } from "./components/Technologycard/Technologycard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { Feedback } from "./components/Feedback/Feedback";
import { Feedbackopt } from "./components/Feedback/Feedbackopt";
import { Hookscounter } from "./components/Hooks/Hookscounter";
import { Fruits } from "./components/Hooks/Fruits";
import { DateFunction } from "./components/Hooks/DateFunction";
import { Jsondata } from "./components/Jsondata/Jsondata";
import { Details, Productdetails } from "./components/Jsondata/Productdetails";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Portfoliohome } from "./components/Portfolio/Portfoliohome";
import { Portfolioedu } from "./components/Portfolio/Portfolioedu";
import { Protfoliotech } from "./components/Portfolio/Portfoliotech";
import { Protfoliocertificate } from "./components/Portfolio/Portfoliocertificate";
import { Portfoliomap } from "./components/Portfolio/Portfoliomap";
import { Protfoliocontact } from "./components/Portfolio/Portfoliocontact";
import { Portfoliohtml } from "./components/Portfolio/Portfoliohtml";
import { Portfolicss } from "./components/Portfolio/Portfoliocss";
import { Portfolibootstrap } from "./components/Portfolio/Portfoliobootstrap";
import { Portfoliojavascript } from "./components/Portfolio/Portfoliojavascript";



function App() {
  return (
    <>
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element={[<Menu/>,<Hello/>]}/>
      <Route path="/card" element={[<Menu/>,<Card/>]}/>
      <Route path="/SuperoverLeague" element={[<Menu/>,<Superleague/>]}/>
      <Route path="/Socialbutton" element={[<Menu/>,<Socialbutton/>]}/>
      <Route path="/Notification" element={[<Menu/>,<Notification/>]}/>
      <Route path="/Login" element={[<Menu/>,<Login/>]}/>
      <Route path="/Technologycard" element={[<Menu/>,<Technologycard/>]}/>
      <Route path="/Feedback" element={[[<Menu/>,<Feedback/>]]}/>
      <Route path="/feedout" element={[[<Menu/>,<Feedbackopt/>]]}/>
      <Route path="/Hookscounter" element={[[<Menu/>,<Hookscounter/>]]}/>
      <Route path="/Fruits" element={[[<Menu/>,<Fruits/>]]}/>
      <Route path="/Date" element={[[<Menu/>,<DateFunction/>]]}/>
      <Route path="/Jsondata" element={[[<Menu/>,<Jsondata/>]]}/>
      <Route path="/details/:id" element={[[<Menu/>,<Details/>]]}/>
      <Route path="/Portfolio" element={[[<Portfolio/>,<Portfoliohome/>,<Protfoliocertificate/>,<Portfolioedu/>,<Protfoliotech/>,<Protfoliocontact/>]]}/>
      <Route path="/Portfoliohtml" element={[[<Portfolio/>,<Portfoliohtml/>]]}/>
      <Route path="/Portfoliocss" element={[[<Portfolio/>,<Portfolicss/>]]}/>
      <Route path="/Portfoliobootstrap" element={[[<Portfolio/>,<Portfolibootstrap/>]]}/>
      <Route path="/Portfoliojavascript" element={[[<Portfolio/>,<Portfoliojavascript/>]]}/>
      <Route path="/Menu" element={[[<Portfolio/>,<Menu/>]]}/>
      
   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
