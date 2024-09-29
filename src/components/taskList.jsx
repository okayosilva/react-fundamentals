import { TriangleAlert } from "lucide-react";
import { ItemTaskList } from "./itemTaskList";

export function TaskList(props) {
  return (
    <ul className="space-y-4 rounded-md bg-slate-200 p-6 shadow">
      {props.tasks.length === 0 ? (
        <div className="flex items-center justify-center gap-2">
          <TriangleAlert className="text-slate-500" />
          <p className="text-center text-slate-500">
            Nenhuma tarefa encontrada
          </p>
        </div>
      ) : (
        props.tasks.map((task) => <ItemTaskList key={task.id} task={task} />)
      )}
    </ul>
  );
}
