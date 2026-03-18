import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ProgressionOverview } from "./pages/progression/ProgressionOverview";
import { EarlyGame } from "./pages/progression/EarlyGame";
import { MidGame } from "./pages/progression/MidGame";
import { LateGame } from "./pages/progression/LateGame";
import { ClassesOverview } from "./pages/classes/ClassesOverview";
import { ClassDetail } from "./pages/classes/ClassDetail";
import { CombatPage } from "./pages/combat/CombatPage";
import { CraftingPage } from "./pages/crafting/CraftingPage";
import { SurvivalPage } from "./pages/survival/SurvivalPage";
import { BaseBuildingPage } from "./pages/base-building/BaseBuildingPage";
import { VehiclesPage } from "./pages/vehicles/VehiclesPage";
import { MapPage } from "./pages/map/MapPage";
import { LoreOverview } from "./pages/lore/LoreOverview";
import { FactionDetail } from "./pages/lore/FactionDetail";
import { LandsraadPage } from "./pages/landsraad/LandsraadPage";
import { ProTipsPage } from "./pages/pro-tips/ProTipsPage";
import { BeginnerPage } from "./pages/beginner/BeginnerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "progressao",
        children: [
          { index: true, element: <ProgressionOverview /> },
          { path: "inicio", element: <EarlyGame /> },
          { path: "meio", element: <MidGame /> },
          { path: "final", element: <LateGame /> },
        ],
      },
      {
        path: "classes",
        children: [
          { index: true, element: <ClassesOverview /> },
          { path: ":classId", element: <ClassDetail /> },
        ],
      },
      { path: "combate", element: <CombatPage /> },
      { path: "crafting", element: <CraftingPage /> },
      { path: "sobrevivencia", element: <SurvivalPage /> },
      { path: "base", element: <BaseBuildingPage /> },
      { path: "veiculos", element: <VehiclesPage /> },
      { path: "mapa", element: <MapPage /> },
      {
        path: "lore",
        children: [
          { index: true, element: <LoreOverview /> },
          { path: ":factionId", element: <FactionDetail /> },
        ],
      },
      { path: "landsraad", element: <LandsraadPage /> },
      { path: "pro-tips", element: <ProTipsPage /> },
      { path: "iniciante", element: <BeginnerPage /> },
    ],
  },
]);
