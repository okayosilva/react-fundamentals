import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Estudar React",
      description: "Estudar React com o curso da Rocketseat",
      isCompleted: false,
    },
    {
      id: uuid(),
      title: "Estudar Next.js",
      description:
        "Estudar Next.js com o curso da Rocketseat e criar um projeto do zero",
      isCompleted: false,
    },
    {
      id: uuid(),
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

  const onAddNewTask = (title, description) => {
    const newTask = {
      id: uuid(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        onAddNewTask,
        onTaskClickChangeCompleted,
        onDeletedTaksById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
