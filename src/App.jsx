import { AddTask } from "./components/addTask";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";

function App() {
  const { tasks } = useTasks();

  return (
    <div className="flex min-h-screen w-screen justify-center bg-slate-500 p-6">
      <div className="w-[500px]">
        <h1 className="text-center text-3xl font-bold text-slate-100">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
