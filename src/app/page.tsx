import Link from "next/link";
import { todo } from "node:test";
import React from "react";

async function getTodos() {
  const todos = fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return todos;
}

export default async function page() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <Link href={`todos/${todo.id}`}>{todo.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
