"use server"; // lets NEXT.js know all the functions here are server actions

import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: formData.get("title"),
      userId: crypto.randomUUID(),
      completed: false,
    }),
  }).then((res) => res.json());

  revalidatePath("/");
}
