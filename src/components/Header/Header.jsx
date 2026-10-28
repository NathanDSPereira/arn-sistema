// import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="container header">
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
      <nav className="nav" aria-label="Principal">
        <Link to="/">Início</Link>
        <Link to="/servicos">Nosso Serviço</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      <a
        className="btn btn--orange btn--sm"
        data-whatsapp
        data-msg="Olá, ARN! Preciso de ajuda."
      >
        Chamar no WhatsApp
      </a>
    </header>
  );
}

export default Header;
