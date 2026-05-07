import "./Footer.css";

function Footer() {
  return (
    <footer className="presentation-footer">
      <div className="footer-glow"></div>

      <div className="footer-content">
        <p className="footer-label">End of Presentation</p>

        <h2>Thank You!</h2>

        <p className="footer-message">
          Thank you for listening to our presentation on AWS Serverless
          Architecture. We hope this helped explain how serverless applications
          work and why they are useful in modern cloud computing.
        </p>
      </div>
    </footer>
  );
}

export default Footer;