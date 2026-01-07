import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // タスク一覧の状態
  const [tasks, setTasks] = useState([]);

  // タスク追加
  const addTask = (title, category) => {
    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // 完了 / 未完了 切り替え
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // タスク削除
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
