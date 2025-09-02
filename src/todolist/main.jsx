import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import Container from "../hello-world/Container";
import HelloWorld from "../hello-world/HelloWorld";
import Table from "../table/Table";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
    </Container>
  </StrictMode>
);
