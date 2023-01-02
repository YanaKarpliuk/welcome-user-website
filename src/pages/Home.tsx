import MainScreen from "@mainScreen/MainScreen";
import Toolbar from "@toolbar/Toolbar";

export default function Home() {
  return (
    <div className="h-[100vh] font-display">
      <MainScreen />
      <Toolbar />
    </div>
  );
}
