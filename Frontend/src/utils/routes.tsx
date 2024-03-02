import FullLayout from "../components/layouts/fullLayout";
import { Navigate } from "react-router-dom";
import TaskList from "@/pages/task/taskList";

const Routes = [
  {
    path: "/",
    element: (
        <FullLayout />
    ),
    children: [
      {
        path: "/",
        element: <TaskList />,
      },
      {
        path: "tasks",
        element: <TaskList />,
      },
      { path: "*", element: <Navigate to="/tasks" /> },
    ],
  },
];

export default Routes;
