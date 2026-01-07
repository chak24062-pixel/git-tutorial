import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("ダンス");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    addTask(title, category);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="タスクを入力"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="課題">課題</option>
        <option value="バイト">バイト</option>
        <option value="サークル">サークル</option>
        <option value="その他">その他</option>
      </select>

      <button type="submit">追加</button>
    </form>
  );
}

export default TaskForm;
