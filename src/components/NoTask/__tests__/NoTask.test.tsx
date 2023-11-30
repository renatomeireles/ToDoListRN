import React from "react"
import { render } from "@testing-library/react-native"
import NoTask from "@components/NoTask"

describe("NoTask", () => {
  it("should render the NoTask component correctly", () => {
    const { getByText } = render(<NoTask />);
    expect(getByText("Não há tarefas")).toBeDefined();
  });
})