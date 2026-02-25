import { useState, useEffect } from "react";
import { type Task, loadTasks, saveTasks } from "../lib/storage";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTasks([...tasks, { id: crypto.randomUUID(), title: trimmed, completed: false }]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const pending = tasks.filter((t) => !t.completed);
  const completed = tasks.filter((t) => t.completed);

  return { tasks, pending, completed, addTask, toggleTask, deleteTask };
}
