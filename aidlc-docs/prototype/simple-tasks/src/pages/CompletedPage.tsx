import { Link } from "react-router";
import { useTasks } from "../hooks/useTasks";

export default function CompletedPage() {
  const { completed, toggleTask, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            ← 戻る
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">完了済みタスク</h1>
        </div>

        {completed.length === 0 && (
          <p className="text-gray-400 text-sm">完了済みタスクはありません</p>
        )}
        {completed.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 py-2 px-3 bg-gray-100 rounded-lg mb-2"
          >
            <input
              type="checkbox"
              checked={true}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4"
            />
            <span className="flex-1 text-gray-400 line-through">
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-gray-400 hover:text-red-500 text-lg"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
