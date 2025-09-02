import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./TodoList";
import Container from "../hello-world/Container";
import HelloWorld from "../hello-world/HelloWorld";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Klik aku" message="Saya adalah upii" />
      <MyButton text={"Smash"} onSmash={() => alert("You smash me")} />
    </Container>
  </StrictMode>
);
