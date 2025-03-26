import { Link } from "react-router-dom";
import "./style.css"; 

const HomePage = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="photo.jpg" alt="KL Logo" className="project-image" />
          <h1 className="project-title">Product Management System</h1>
        </div>
        <div className="nav-right">
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <h2>Welcome to the Product Management System</h2>
        <p>
          Our system helps businesses and organizations efficiently manage their products.
          With user-friendly features, role-based access control (Admin/User), and secure
          authentication, you can track product details, inventory, and updates seamlessly.
        </p>
        <p>
          Get started by signing up as an admin or a user, and explore our powerful tools to
          streamline your product management workflow.
        </p>
      </div>
    </div>
  );
};

export default HomePage;