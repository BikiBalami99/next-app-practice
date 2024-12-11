import { notFound } from "next/navigation";

function getTodo(id: string) {
  const todos = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => res.json()
  );
  return todos;
}

export default async function page({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);

  if (todo.title == null) return notFound();
  return <div>{todo.title}</div>;
}
