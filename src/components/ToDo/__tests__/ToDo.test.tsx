import React from "react";
import { render } from "@testing-library/react-native";
import ToDo from "@components/ToDo";

describe("ToDo", () => {
  it("should render the ToDo component correctly", () => {
    const { getByTestId } = render(<ToDo />);
    
    expect(getByTestId("todo-component")).toBeDefined();
  });

  it("should render the ToDo component correctly", () => {
   const { getByPlaceholderText } = render(<ToDo />);

    expect(getByPlaceholderText("Escreva suas tarefas")).toBeTruthy();
  });
});