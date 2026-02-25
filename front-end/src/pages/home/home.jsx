
import { Link } from "react-router-dom";
import Menu from "../../components/menu/menu";
import HomeCard from "../../components/homeCard/homeCard";
import HomeCardAnalisador from "../../components/homeCard/HomeCardAnalisador";

import { Divider } from "primereact/divider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-column surface-ground">
      <Menu title="Home" />

      {/* Hero Section */}
      <div className="text-center mt-5 mb-3">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">MORSLUM</h1>
        <h3 className="text-2xl text-gray-600">Estudo Morfossintática Interativo</h3>
        <p className="text-gray-500 mt-2">Explore a estrutura da língua portuguesa com tecnologia PLN</p>
        <Divider className="w-6 mx-auto" />
      </div>

      {/* Cards das Funcionalidades Principais */}
      <div className="flex justify-content-center align-items-center flex-1 gap-5 px-4">
        <HomeCard />
        <HomeCardAnalisador />
      </div>

      {/* Link para Sobre */}
      <div className="text-center mt-4 mb-5">
        <Link to="/sobre" className="no-underline">
          <span className="text-blue-600 hover:text-blue-800 cursor-pointer flex align-items-center justify-content-center gap-2">
            <i className="pi pi-info-circle"></i>
            <span>Conheça mais sobre o projeto</span>
            <i className="pi pi-arrow-right text-sm"></i>
          </span>
        </Link>
      </div>

      {/* Rodapé*/}
      <div className="text-center text-gray-400 text-sm mt-auto py-3 border-top-1 surface-border">
        <p>MORSLUM © 2025-2026</p>
      </div>
    </div>
  );
}