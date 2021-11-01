import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" />
         Developed by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/kalubekalu"
          aria-label="My GitHub"
        >
          Kalkidan Bekalu{" "}
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted"></small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
