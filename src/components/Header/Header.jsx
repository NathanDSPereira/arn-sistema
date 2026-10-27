// import { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <header className="container header">
      <a
        className="brand"
        href="#inicio"
        aria-label="ARN Tecnologia e Suporte, início"
      >
        <span className="brand__mark">ARN</span>
        <span className="brand__text">
          <strong>ARN TECNOLOGIA</strong>
          <small>&amp; SUPORTE</small>
        </span>
      </a>
      <nav className="nav" aria-label="Principal">
        <a href="#servicos">Nosso Serviço</a>
        <a href="#quem-somos">Quem Somos</a>
        <a href="#contato">Contato</a>
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
