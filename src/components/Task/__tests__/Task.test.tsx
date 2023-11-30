import React from "react"
import { render } from "@testing-library/react-native"
import Task from "@components/Task"

describe("Task", () => {
  it("should render the Task component correctly", () => {
    const { getByTestId } = render(<Task id={""} task={""} done={false} onTaskDone={function (id: string): void {
      throw new Error("Function not implemented.");
    } } onTaskDelete={function (id: string): void {
      throw new Error("Function not implemented.");
    } } />);
    expect(getByTestId("task-component")).toBeDefined();
  });
})