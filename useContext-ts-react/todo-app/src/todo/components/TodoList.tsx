import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {
  const { todos, toggleTodo } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          style={{
            cursor: "pointer",
            textDecoration: todo.completed ? "line-through" : "",
          }}
          onDoubleClick={() => toggleTodo(todo.id)}
        >
          {todo.descripcion}
        </li>
      ))}
    </ul>
  );
};
