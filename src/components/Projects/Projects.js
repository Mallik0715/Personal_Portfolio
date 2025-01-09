import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ems from "../../Assets/Projects/ems.jpg"
import password from "../../Assets/Projects/Password.png";

import ecom from "../../Assets/Projects/ecom.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="Employee-Management-System"
              description=
              "Employee-Management-System
This Employee Management System project showcases your ability to develop a full-stack web application that integrates both back-end and front-end technologies. The system is built with secure role-based access control, real-time updates (if implemented), and efficient handling of employee data. The use of Spring Boot REST APIs for the back-end ensures scalability and robustness, while React.js on the front-end guarantees a dynamic and responsive user interface. The integration of Axios for API requests between the front-end and back-end streamlines data flow, making the application seamless for both users and administrators.."
ghLink="https://github.com/Mallik0715/Employee_Management_System"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce-Website"
 
 
              description={`
                An e-commerce platform developed to learn how online stores operate and enhance my skills in building interactive, full-stack applications with Spring Boot and React.js.
                
                Tech Stack
                Frontend: React.js, Redux Toolkit, Tailwind CSS, Shadcn/UI for styling and state management.  
                Backend: Spring Boot, Java, MySQL for data handling.  
                APIs: RESTful APIs for communication between frontend and backend.  
                Tools: Postman for testing APIs.  
            
                Features
                - User-friendly and responsive interface.  
                - Product catalog with search and filter options.  
                - User authentication for customers and admins.  
                - Shopping cart for users to add and review items.  
                - Order management with order tracking.  
                - Admin functionalities to manage products, users, and orders.  
                - Real-time notifications for order updates and product availability.  
                
                This project showcases my understanding of e-commerce systems and strengthens my ability to create scalable, full-stack web applications.
              `}
              ghLink="https://github.com/Mallik0715/EcomProject"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Random-Password-Genereator"
              description={`An interactive web-based tool designed to generate strong, random passwords, built using modern frontend technologies to enhance my skills in creating engaging and user-friendly experiences.
  
  Tech Stack:
  Frontend: Tailwind CSS, Shadcn/UI for sleek and responsive styling.  
  React.js for building interactive components.  
  APIs: RESTful APIs for fetching random password generation logic.

  Features:
  - Responsive and sleek design created using Tailwind CSS for a visually appealing experience.  
  - Password customization to adjust length, character types, and complexity.  
  - Real-time password generation based on user preferences.  
  - Copy to clipboard functionality for easy use.  
  - User-friendly interface with intuitive controls.

  This project showcases my ability to create practical, engaging, and visually appealing web tools with a focus on user experience using modern frontend technologies.`
  }
     ghLink="https://github.com/Mallik0715/Random_Password_Generaotor"
            />
     </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Library_Management_App}
              isBlog={false}
              title="Library Management App"
              description=
              "A personal project built using the MERN stack, this Library Management App streamlines the management of students and books. It includes a Student Page for entering student details and a Book Library Page for cataloging books. All data is stored securely in MongoDB and managed through a Node.js backend, making the app fast and reliable. The Library Page integrates all entries, displaying student and book information in one place for easy tracking and management. Designed for functionality and ease of use, this app showcases skills in full-stack development with a focus on efficient data handling."
              ghLink="https://github.com/karunakarusala/Library-Management-Application"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */} 

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
