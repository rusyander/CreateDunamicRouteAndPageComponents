import { Link, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import { DunamicComponents } from "./DunamicComponents/DunamicComponents";

function App() {
  const pageCouteData = [
    {
      label: "Лог входа в систему",
      toolTip: "Лог входа в систему",
      command: "CORE_AUDIT_LOGIN",
      items: null,
    },
    {
      label: "Лог входа в формы",
      toolTip: "Лог входа в формы",
      command: "CORE_AUDIT_FORMS",
      items: null,
    },
    {
      label: "Лог действий в формах",
      toolTip: "Лог действий в формах",
      command: "CORE_AUDIT_ACTIONS",
      items: null,
    },
    {
      label: "Текущие сеансы",
      toolTip: "Текущие сеансы",
      command: "CORE_AUDIT_SESSIONS",
      items: null,
    },
    {
      label: "Установка аудита форм и действий",
      toolTip: "Установка аудита форм и действий",
      command: "CORE_SET_FORM_ACTION_AUDIT",
      items: null,
    },
    {
      label: "Параметры системы",
      toolTip: "Параметры системы",
      command: "CORE_SYS_PARAMS",
      items: null,
    },
    {
      label: "Планировщик заданий",
      toolTip: "Планировщик заданий",
      command: "CORE_SCHEDULER_ADMIN",
      items: null,
    },
    {
      label: "Пользователи",
      toolTip: "Пользователи",
      command: "CORE_USERS",
      items: null,
    },
    {
      label: "Программы планировщика",
      toolTip: "Программы планировщика",
      command: "CORE_SCHED_TASKS",
      items: null,
    },
  ];

  const location = useLocation();
  return (
    <>
      <h1>Generate Page Components</h1>
      <div className="linkItems">
        {pageCouteData.map((item) => {
          return (
            <NavLink
              key={item.command}
              to={item.command}
              className={
                location.pathname === item.command ? "active" : "inactive"
              }
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
      <DunamicComponents pageCouteData={pageCouteData} />
    </>
  );
}

export default App;
