import "./style.css"; // Import the same CSS file for styling consistency

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the <strong>Product Management System</strong>, a platform designed to help businesses efficiently 
        manage their products, inventory, and workflow.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our goal is to simplify product management by providing an intuitive and user-friendly 
        platform. Whether you're a small business or a large enterprise, our system ensures seamless 
        tracking, updates, and role-based access for better organization.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>📌 Role-based access control (Admin & User)</li>
        <li>📌 Secure authentication system</li>
        <li>📌 Easy product tracking and inventory updates</li>
        <li>📌 Clean and responsive user interface</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        We prioritize security, efficiency, and scalability to help businesses 
        streamline their product management process. Our system is continuously evolving to 
        meet industry demands and user feedback.
      </p>

      <p><strong>Thank you for choosing Product Management System! 🚀</strong></p>
    </div>
  );
};

export default AboutUs;