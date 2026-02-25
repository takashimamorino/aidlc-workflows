export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const STORAGE_KEY = "simple-tasks";

export function loadTasks(): Task[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
