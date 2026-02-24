import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function HomeCardAnalisador() {
  const navigate = useNavigate();

  return (
    <Card title="Analisador Morfossintático" className="w-25rem text-center">
      <p>Analise frases com classificação e árvore sintática.</p>

      <Button
        label="Analisar Frase"
        icon="pi pi-sitemap"
        onClick={() => navigate("/analisador")}
      />
    </Card>
  );
}