import React from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data as Todo);
}

export default async function Page() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todo List</h1>

      <form
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
    </>
  );
}
