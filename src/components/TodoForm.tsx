"use client";

import React, { useRef } from "react";
import { createTodo } from "@/actions/todos";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action={async (formData) => {
        await createTodo(formData);
        if (inputRef.current != null) {
          inputRef.current.value = "";
        }
      }}
      style={{
        display: "flex",
        gap: ".25rem",
        flexDirection: "column",
        maxWidth: "200px",
      }}
    >
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" ref={inputRef} />
      <button>Add</button>
    </form>
  );
}
