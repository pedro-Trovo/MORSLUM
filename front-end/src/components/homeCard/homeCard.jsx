import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export default function HomeCard() {
  const navigate = useNavigate();

  return (
    <Card title="Quiz" className="w-25rem text-center">
      <p>Teste seus conhecimentos de análise morfossintática com perguntas geradas automaticamente.</p>

      <Button
        label="Começar Quiz"
        icon="pi pi-play"
        onClick={() => navigate("/quiz")}
      />
    </Card>
  );
}
