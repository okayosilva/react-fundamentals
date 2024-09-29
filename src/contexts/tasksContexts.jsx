import { createContext, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React com o curso da Rocketseat",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Next.js",
      description:
        "Estudar Next.js com o curso da Rocketseat e criar um projeto do zero",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar TypeScript",
      description:
        "Estudar TypeScript com o curso da Rocketseat e criar um projeto do zero e subir no GitHub",
      isCompleted: false,
    },
  ]);

  const validateExistTask = (taskId) => {
    const taskValidate = tasks.find((task) => task.id === taskId);

    if (!taskValidate) return console.log("error, task not exist");
  };

  const onTaskClickChangeCompleted = (taksId) => {
    if (validateExistTask(taksId)) return;

    const updateTaskCompleted = tasks.map((task) => {
      if (task.id === taksId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(updateTaskCompleted);
  };

  const onDeletedTaksById = (taksId) => {
    if (validateExistTask(taksId)) return;

    const updatedTaskList = tasks.filter((task) => task.id !== taksId);
    setTasks(updatedTaskList);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, onTaskClickChangeCompleted, onDeletedTaksById }}
    >
      {children}
    </TasksContext.Provider>
  );
}
