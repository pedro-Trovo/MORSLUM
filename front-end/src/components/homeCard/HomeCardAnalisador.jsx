import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function HomeCardAnalisador() {
  const navigate = useNavigate();

  return (
    <Card title="Analisador Morfossintático" className="w-25rem text-center">
      <p>Digite qualquer frase e veja os detalhes de sua classificação morfossintática e árvore de dependência.</p>

      <Button
        label="Analisar Frase"
        icon="pi pi-sitemap"
        onClick={() => navigate("/analisador")}
      />
    </Card>
  );
}