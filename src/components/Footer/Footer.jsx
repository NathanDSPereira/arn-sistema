import "./Footer.css";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link
          className="brand"
          to="/"
          aria-label="ARN Tecnologia e Suporte, início"
        >
          <span className="brand__mark">ARN</span>
          <span className="brand__text">
            <strong>ARN TECNOLOGIA</strong>
            <small>&amp; SUPORTE</small>
          </span>
        </Link>
        <span>
          CNPJ <span data-config="cnpj">[CNPJ]</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
