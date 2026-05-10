import { Menubar } from "primereact/menubar";
import { Menu as PrimeMenu } from "primereact/menu";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "./menu.css";

export default function Menu({ title }) {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
    { label: "Quiz", icon: "pi pi-pen-to-square", command: () => navigate("/quiz") },
    { label: "Analisador", icon: "pi pi-sitemap", command: () => navigate("/analisador") },
    { label: "Sobre", icon: "pi pi-info-circle", command: () => navigate("/sobre") }
  ];

  useEffect(() => {
    if (!menuOpen) return;

    const timer = setTimeout(() => {
      function handleClick(e) {
        menuRef.current?.hide(e);
        setMenuOpen(false);
      }
      document.addEventListener('mousedown', handleClick);
    }, 0);

    return () => clearTimeout(timer);
  }, [menuOpen]);

  const start = (
    <Button
      icon="pi pi-bars"
      className="p-button-text"
      onClick={(e) => {
        e.stopPropagation();
        menuRef.current.toggle(e);
        setMenuOpen(prev => !prev);
      }}
    />
  );

  return (
    <div className="menu-wrapper">
      <Menubar
        start={start}
        className="menu-bar-custom"
      />

      {/* Título central */}
      <span className="menu-title">
        {title}
      </span>

      <PrimeMenu model={items} popup ref={menuRef}/>
    </div>
  );
}