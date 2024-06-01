import {Container, Row, Col} from "react-bootstrap";
import React, {useContext} from "react";
import abbottImg from "../assets/abbott-feature.png";
import hereImg from "../assets/here-feature.png";
import roviImg from "../assets/rovi-feature.png";

import {Context} from "../App"

export const HomeContent = () => {

    const [active, setActive] = useContext(Context);

    return (
            <Row className="align-items-left project-container">
                <Col xs={12} md={6} xl={7} className="project">
                <span><img src = {abbottImg} alt="Abbott Digital Health Solutions" fluid></img></span>
                <div>
                <h1>{'Enabling faster laboratory insights in a desperate time of need'}</h1>
                <p>Abbott Laboratories Digital Health Solutions needed an upgrade to their laboratory middleware system and STAT! In the heat of the COVID outbreak, we were able to deliver an all-in-one platformed solution in record time. </p>
                <button onClick={() => setActive("SecondView")}>Go to project</button>
                </div>
                </Col>
                <Col xs={12} md={6} xl={7} className="project">
                <span><img src = {hereImg} alt="HERE Technologies"></img></span>
                <div>
                <h1>{'Helping a location data services company find their way'}</h1>
                <p>HERE Technologies product line went from spin-offs and one-offs with a dispersed, disconnected set of product solutions to focusing on a comprehensive and connected platformed solution with products and solutions that serve broad market areas. </p>
                <button onClick={() => setActive("ThirdView")}>Go to project</button>
                </div>
                </Col>
                <Col xs={12} md={6} xl={7} className="project">
                <span><img src = {roviImg} alt="TiVo"></img></span>
                <div>
                <h1>{'Guiding entertainment data into a new era of television'}</h1>
                <p>In the advent of customizable and discoverable entertainment data, the Rovi R&D team paved the way for many of the personalized solutions you see today. Our work has created products and patents that are serving users to this day.</p>
                <button onClick={() => setActive("View")}>Go to project</button>
                </div>
                </Col>
            </Row>

    )
}