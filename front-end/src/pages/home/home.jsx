import Menu from "../../components/menu/menu";
import HomeCard from "../../components/homeCard/homeCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-column">
      <Menu title="Morslum" />

      <div className="flex justify-content-center align-items-center flex-1">
        <HomeCard />
      </div>
    </div>
  );
}
