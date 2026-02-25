import { useState } from "react";
import { Link } from "react-router";
import { useTasks } from "../hooks/useTasks";

export default function TaskListPage() {
  const { pending, completed, addTask, toggleTask, deleteTask } = useTasks();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Simple Tasks</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="タスクを入力..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            disabled={!input.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            追加
          </button>
        </div>

        <div className="mb-6">
          {pending.length === 0 && (
            <p className="text-gray-400 text-sm">タスクはありません</p>
          )}
          {pending.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 py-2 px-3 bg-white rounded-lg mb-2 shadow-sm"
            >
              <input
                type="checkbox"
                checked={false}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4"
              />
              <span className="flex-1 text-gray-800">{task.title}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-gray-400 hover:text-red-500 text-lg"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4">
          <Link
            to="/completed"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            完了済みを見る ({completed.length}件) →
          </Link>
        </div>
      </div>
    </div>
  );
}
