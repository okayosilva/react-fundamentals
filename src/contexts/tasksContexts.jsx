import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { getTasks } from "../service/getTasks";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  const validateExistTask = (taskId) => {
    const taskValidate = tasks.find((task) => task.id === taskId);

    if (!taskValidate) return toast.error("Tarefa não encontrada");
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

  const onGetTaskById = (taskId) => {
    if (validateExistTask(taskId)) return;

    const task = tasks.find((task) => task.id === taskId);

    return task;
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    getTasks()
      .then((data) => setTasks(data))
      .catch(() => toast.error("Erro ao carregar suas tarefas"));
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        onAddNewTask,
        onTaskClickChangeCompleted,
        onDeletedTaksById,
        onGetTaskById,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
