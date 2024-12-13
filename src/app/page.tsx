import { revalidatePath } from "next/cache";
import React from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getTodos() {
  return fetch("http://localhost:3001/todos")
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

export default async function Page() {
  const todos = await getTodos();
  const completed = true;

  async function createTodo(formData: FormData) {
    "use server";

    await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.get("title"),
        userId: crypto.randomUUID(),
        completed: completed,
      }),
    }).then((res) => res.json());

    revalidatePath("/");
  }

  return (
    <>
      <h1>Todo List</h1>
      {/* <TodoForm /> */}
      <form
        action={createTodo}
        style={{
          display: "flex",
          gap: ".25rem",
          flexDirection: "column",
          maxWidth: "200px",
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
