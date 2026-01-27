import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  const [sortType, setSortType] = useState("date");
  if (tasks.length === 0) {
    return <p>お疲れ様です!現在タスクはありません</p>;
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortType === "date") {
      return new Date(a.date) - new Date(b.date);
    }

    if (sortType === "category") {
      return a.category.localeCompare(b.category);
    }

    return 0;
  });


  return (
    <>
      <div className="sort-area">
        <label>並び替え：</label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="date">日付順</option>
          <option value="category">カテゴリ順</option>
        </select>
      </div>

      <ul className="task-list">
        {sortedTasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
    </>
  );
}

export default TaskList;
