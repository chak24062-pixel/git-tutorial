import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("ダンス");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([
    "課題",
    "バイト",
    "サークル",
    "その他",
  ]);

  // 新しく追加するカテゴリ
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    addTask(title, category, date);
    setTitle("");
    setDate("");
  };

  const addCategory = () => {
    if (newCategory.trim() === "") return;
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
    setNewCategory("");
  };

  const deleteCategory = (catToDelete) => {
    setCategories(
      categories.filter((cat) => cat !== catToDelete)
    );

    // 今選択中のカテゴリを消した場合の対策
    if (category === catToDelete) {
      setCategory("");
    }
  };

    return (
    <form onSubmit={handleSubmit} className="task-form">
      {/* タスク名 */}
      <input
        type="text"
        placeholder="タスクを入力"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* 日付 */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* カテゴリ選択 */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <ul className="category-list">
        {categories.map((cat, index) => (
          <li key={index}>
            {cat}
            <button
              type="button"
              onClick={() => deleteCategory(cat)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>


      {/* カテゴリ追加 */}
      <div className="category-add">
        <input
          type="text"
          placeholder="カテゴリを追加"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="button" onClick={addCategory}>
          追加
        </button>
      </div>

      <button type="submit">タスク追加</button>
    </form>
  );
}

export default TaskForm;

