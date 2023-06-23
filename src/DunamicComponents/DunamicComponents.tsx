import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
interface Data {
  label: string;
  toolTip: string;
  command: string;
  items: null;
}

interface DunamicComponentsProps {
  pageCouteData: Data[];
}

// label: "Программы планировщика",
// toolTip: "Программы планировщика",
// command: "CORE_SCHED_TASKS",
// items: null,

export function DunamicComponents({ pageCouteData }: DunamicComponentsProps) {
  const location = useLocation();
  return (
    <Routes location={location}>
      {pageCouteData?.map((item) => {
        const itemsElement = item;
        return (
          <Route
            key={item.command}
            path={item.command}
            element={<RouterDynamicComponents routeData={itemsElement} />}
          />
        );
      })}
    </Routes>
  );
}

const RouterDynamicComponents = ({ routeData }: any) => {
  useEffect(() => {
    console.log(routeData?.label, "render");
  }, [routeData?.label]);
  return (
    <div>
      <h2>{routeData?.label}</h2>
      <h2>{routeData?.toolTip}</h2>
      <h2>{routeData?.command}</h2>
    </div>
  );
};
