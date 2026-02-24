import { useState, useEffect } from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const STORAGE_KEY = "simple-tasks";

function loadTasks(): Task[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);
  const [input, setInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    const title = input.trim();
    if (!title) return;
    setTasks([...tasks, { id: crypto.randomUUID(), title, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Simple Tasks</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="タスクを入力..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            追加
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            未完了（{pending.length}件）
          </h2>
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
                className="text-gray-400 hover:text-red-500"
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className="text-sm font-semibold text-gray-500 mb-2 hover:text-gray-700"
          >
            完了済み（{completed.length}件）{showCompleted ? "▼" : "▶"}
          </button>
          {showCompleted &&
            completed.map((task) => (
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
                  className="text-gray-400 hover:text-red-500"
                >
                  🗑
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
