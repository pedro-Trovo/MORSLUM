import { Menubar } from "primereact/menubar";
import { Menu as PrimeMenu } from "primereact/menu";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./menu.css";

export default function Menu({ title }) {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const items = [
    { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
    { label: "Quiz", icon: "pi pi-pen-to-square", command: () => navigate("/quiz") },
    { label: "Analisador", icon: "pi pi-sitemap", command: () => navigate("/analisador") },
    { label: "Sobre", icon: "pi pi-info-circle", command: () => navigate("/sobre") }
  ];

  const start = (
    <Button
      icon="pi pi-bars"
      className="p-button-text"
      onClick={(e) => menuRef.current.toggle(e)}
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