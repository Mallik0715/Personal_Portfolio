import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mallikarjun Milkuri </span>
            from <span className="purple">Hyderabad, India.</span>
            <br />
            I am looking for opportunities to work as a  software developer.
            <br />
            I hold a Bachelor’s degree in Computer Science (B.Tech) from MRITS, Hyderabad, Telangana.            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I don’t just write code; I build solutions that make a difference.{" "}
          </p>
          <footer className="blockquote-footer">Mallikarjun Milkuri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
