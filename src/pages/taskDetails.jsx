import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

export function TaskDetails() {
  const [task, setTask] = useState();
  const { id: taskId } = useParams();

  const { onGetTaskById } = useTasks();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (taskId) {
      const task = onGetTaskById(taskId);
      setTask(task);
    }
  }, [taskId]);

  return (
    <section className="flex min-h-screen w-screen flex-col items-center bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <header className="relative flex w-full items-center justify-center gap-2 text-3xl font-bold text-slate-200">
          <button onClick={handleGoBack} className="absolute left-0">
            <ChevronLeft />
          </button>
          <h1>Detalhes da tarefa</h1>
        </header>
        <div className="h-auto space-y-4 rounded-md bg-slate-200 p-6 shadow">
          <h1 className="text-3xl font-bold text-slate-900">{task?.title}</h1>
          <p className="text-slate-600">{task?.description}</p>
        </div>
      </div>
    </section>
  );
}
