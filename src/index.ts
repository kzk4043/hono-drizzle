import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { db } from "./db/db";
import { todos } from "./db/schema";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/todos", (c) => {
  const allTodo = db.select().from(todos).all();
  return c.json({ allTodo });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
