import { Check, ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

export function ItemTaskList(props) {
  const { id, title, isCompleted } = props.task;
  const { onTaskClickChangeCompleted, onDeletedTaksById } = useTasks();

  const navigate = useNavigate();
  const handleClickTaskDetails = () => {
    navigate(`/task/${id}`);
  };

  return (
    <li className="flex items-center gap-2">
      <button
        onClick={() => onTaskClickChangeCompleted(id)}
        className={`flex flex-1 items-center gap-2 rounded-md bg-slate-400 p-2 text-left text-white ${isCompleted && "line-through"}`}
      >
        {isCompleted && <Check className="text-slate-100" />}
        {title}
      </button>
      <button
        onClick={handleClickTaskDetails}
        className="rounded-md bg-slate-400 p-2 text-white"
      >
        <ChevronRightIcon />
      </button>
      <button
        onClick={() => onDeletedTaksById(id)}
        className="group rounded-md bg-slate-400 p-2 text-white"
      >
        <Trash2 className="group-hover:animate-shake" />
      </button>
    </li>
  );
}
