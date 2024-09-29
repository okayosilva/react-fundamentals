import { useState } from "react";
import { toast } from "react-toastify";
import { useTasks } from "../hooks/useTasks";

export function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { onAddNewTask } = useTasks();

  const reset = () => {
    setTitle("");
    setDescription("");
  };

  const validateFields = () => {
    if (!title.trim() || !description.trim()) {
      return toast.error("Preencha todos os campos!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) return;

    onAddNewTask(title, description);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 rounded-md bg-slate-200 p-6 shadow"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Digite o título da tarefa"
        className="rounded-md border border-slate-300 px-4 py-2 outline-slate-400"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite a descrição da tarefa"
        className="rounded-md border border-slate-300 px-4 py-2 outline-slate-400"
      />
      <button
        type="submit"
        className="rounded-md bg-slate-500 px-4 py-2 font-medium text-white"
      >
        Adicionar
      </button>
    </form>
  );
}
