import './App.css';
import React, {useState, createContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './components/View';
import { HomeContent } from './pages/HomeContent';
import {NavBar} from './components/NavBar';
import {Nav, Container, Row, Col, NavItem, NavLink, Dropdown} from "react-bootstrap";
import Data from "./Data";
import Resume from "./docs/AmandaMallardo-2023.pdf";

export const Context = createContext();
export const BackToHome = createContext();

function App() {
  const [active, setActive] = useState("FirstView");
  const TITLE = "Amanda Mallardo - Sr. Product Designer"
  return (
    <div className="App">
      <NavBar />
  
      <div className='subNav'>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>All Projects</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setActive("SecondView")} eventKey="link-1" className="navbar-link">AlinIQ Laboratory Insights</Dropdown.Item>
            <Dropdown.Item onClick={() => setActive("ThirdView")} eventKey="link-1" className="navbar-link">HERE Traffic Viewer</Dropdown.Item>
            <Dropdown.Item onClick={() => setActive("FourthView")} eventKey="link-1" className="navbar-link">Jarvish Smart Helmet</Dropdown.Item>
            <Dropdown.Item onClick={() => setActive("FifthView")} eventKey="link-1" className="navbar-link">HERE Venues</Dropdown.Item>
            <Dropdown.Item onClick={() => setActive("SixthView")} eventKey="link-1" className="navbar-link">Voice Cable Guidance</Dropdown.Item>
            <Dropdown.Item onClick={() => setActive("SeventhView")} eventKey="link-1" className="navbar-link">Personalized Recommendations</Dropdown.Item>
            <Dropdown.Item onClick={() => setActive("EighthView")} eventKey="link-1" className="navbar-link">TV Microsites</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      <Nav.Link href={Resume} className="navbar-link">Resume</Nav.Link>
      </div>

      {/* <Nav defaultActiveKey="/home" className="flex-column side-menu" >
        <h5>Showcase</h5>
        <Nav.Link onClick={() => setActive("SecondView")} eventKey="link-1" className="navbar-link">AlinIQ Lab Insights</Nav.Link>
        <Nav.Link onClick={() => setActive("ThirdView")} eventKey="link-1" className="navbar-link">HERE Traffic Viewer</Nav.Link>
        <Nav.Link onClick={() => setActive("FourthView")} eventKey="link-1" className="navbar-link">Jarvish Smart Helmet</Nav.Link>
        <Nav.Link onClick={() => setActive("FifthView")} eventKey="link-1" className="navbar-link">HERE Venues</Nav.Link>
        <Nav.Link onClick={() => setActive("SixthView")} eventKey="link-1" className="navbar-link">Voice Cable Guide</Nav.Link>
        <Nav.Link onClick={() => setActive("SeventhView")} eventKey="link-1" className="navbar-link">Personalized Recommendations</Nav.Link>
        <Nav.Link onClick={() => setActive("EighthView")} eventKey="link-1" className="navbar-link">TV Microsites</Nav.Link>
        <h5>About Me</h5>
        <h5>Resume</h5>
      </Nav> */}

      <Context.Provider value={[active, setActive]}>
      <div className="content">
        {active === "FirstView" && <HomeContent />}
        {active === "SecondView" && <View data={Data} viewIndex={1} />}
        {active === "ThirdView" && <View data={Data} viewIndex={2} />}
        {active === "FourthView" && <View data={Data} viewIndex={3} />}
        {active === "FifthView" && <View data={Data} viewIndex={4} />}
        {active === "SixthView" && <View data={Data} viewIndex={5} />}
        {active === "SeventhView" && <View data={Data} viewIndex={6} />}
        {active === "EighthView" && <View data={Data} viewIndex={7} />}
      </div>
      </Context.Provider>

    </div>
  );
}

export default App;
