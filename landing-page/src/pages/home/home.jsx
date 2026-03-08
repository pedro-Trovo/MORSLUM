import React from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/menu/menu";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

export default function Home() {
  return (
    <div className="min-h-screen surface-ground">
      <Menu title="MORSLUM" />
      
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-1">Bem-vindo ao MORSLUM</h1>
        <p className="text-xl text-gray-600 mb-3">
            MORphoSyntaxis LaboratoriUM — projeto de Iniciação Científica
        </p>

        
        <div className="mb-5 p-4 border-round border-2 border-gray-300 hover:border-blue-400 transition-all">
          <i className="pi pi-download text-4xl text-blue-500 mb-3"></i>
          <h2 className="text-2xl mb-3">Baixe o App Desktop</h2>
          <p className="text-gray-600 mb-4">
            Versão para computador com análise morfossintática completa 
            e quiz interativo. Baixe, instale e use — sem dependências externas.
          </p>
          
          <Button 
            label="Download para Windows"
            icon="pi pi-download"
            className="p-button-lg  mb-2"
            onClick={() => window.open('/downloads/MORSLUM Setup 1.0.0.exe')}
          />
          <p className="text-sm text-gray-500">
               Versão 1.0.0 • 535 MB • Windows 10/11
          </p>
        </div>


        <div className="text-center mt-4 mb-5">
        <Link to="/sobre" className="no-underline">
          <span className="text-blue-600 hover:text-blue-800 cursor-pointer flex align-items-center justify-content-center gap-2">
            <i className="pi pi-info-circle"></i>
            <span>Conheça mais sobre o projeto</span>
            <i className="pi pi-arrow-right text-sm"></i>
          </span>
        </Link>
      </div>
      </div>
      {/* Rodapé */}
         <div className="text-center text-gray-400 text-sm mt-auto py-3 border-top-1 surface-border">
          <p>© 2026 MORSLUM</p>
        </div>
    </div>
    
  );
}