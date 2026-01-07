function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}（{task.category}）
      </span>

      <button onClick={() => deleteTask(task.id)}>削除</button>
    </li>
  );
}

export default TaskItem;
