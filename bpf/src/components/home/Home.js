import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown, Carousel } from "react-bootstrap";
import img1 from '../../assets/images/img1.png'; // Replace with your image paths
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import "./Home.css"; // Import your custom CSS file
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  // Simulate authentication status
  const isAuthenticated = true;
  const name = "User"; // Simulate a user name

  const handleLogout = () => {
    // Simulate logout
    console.log("Logging out...");
    // Redirect to signin pag
  };

  return (
    <div className="home-wrapper">
     
      <header className="header">
     
          <div className="header-branding">
            <img
              src="http://www.bestpracticesfoundation.org/images/logo.jpg"
              alt="ABC Foundation Logo"
              className="header-logo"
            />
            <span className="header-title">Best Practices Foundation</span>
          </div>
          <div className="header-actions">
            <Link to="/signin" className="btn-custom">
              Sign In
            </Link>
          </div>
     
      </header>

      {/* Navbar */}
      <Navbar expand="lg" variant="dark" className="navbar">
    
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                List of Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/faqs">
                FAQs
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Our Mission</h3>
            <p>
              To capture the vast and diverse knowledge emerging from the
              development community, facilitate sharing and cross-fertilization
              of knowledge, and create innovations that address identified gaps.
              Towards this end, BPF strives to improve the quality of life for
              poor and marginalized communities through documentation,
              innovation, implementation, and dissemination of best practices.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Our Vision</h3>
            <p>
              The Best Practices Foundation envisions widespread identification
              and institutionalization of best practices in the fields of
              development, particularly in livelihoods, governance, and gender
              equity. To fulfill this mandate, BPF aims to become an agile,
              knowledge-based innovation agency and a network hub for the
              institutionalization of best practices through multi-sector
              partnerships.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Guiding Principles</h3>
            <p>
              Commitment to the ground: We seek participation, listen to voices,
              and build innovations together with the communities to ensure
              their relevance. Dynamic, flexible, and multi-disciplinary
              approaches: We believe that for new solutions to emerge,
              cross-learning that arises from synergies across disciplines and
              actors is vital.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Values</h3>
            <p>
              Teamwork and effective collaborations: We encourage diversity and
              creatively use it to spread and adapt our innovations by fostering
              partnerships towards inclusive development. Quality and integrity:
              We are committed to these values, which reflect in our work
              through our investment and critical reflection in both process and
              outcome.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Main Content */}
      <div className="main-content">
       
          <h2>Welcome to Best Practices Foundation</h2>
          <p>
            

Best Practices Foundation (BPF) is a Bangalore-based NGO founded in 1999, to improve the quality of life for poor and marginalised communities through participatory approaches to co-create innovations that are pro-poor, inclusive and gender sensitive.

Our grassroots branch, BPF Dharwad, has been an incubation site for new ideas and innovations aimed at empowering the poor since 2005.

Our Market Oriented Value Enhancement (MOVE) innovation is a unique participatory, demand-driven livelihood training model that that been very successful in empowering participants - rural and semi-urban youth, men, women, the landless and illiterate, sexual minorities and stigmatised communities below the poverty line - to break free from poverty and social marginalisation by setting up and sustaining their own entrepreneurial ventures.

Our core strength is our research and documentation capacity. We strive to build a strong knowledge base in partnership with government and other institutions by developing innovations, producing toolkits to scale up initiatives, influencing policy, documenting case studies, conducting action research and programme evaluations, and publishing books and compendiums on best practices for sustainable development. We identify gaps and best practices through participatory monitoring and evaluation in the field. We are constantly innovating to engender development initiatives.

BPF is a permanent partner of the Huairou Commission's Governance campaign and a research partner of Social Sector Development Strategies, Boston.
          </p>
        
      </div>

      {/* Footer */}
      <footer className="footer">
      
          <p>&copy; 2024 Best Practices Foundation. All rights reserved.</p>
    
      </footer>
    </div>
  );
};

export default Home;