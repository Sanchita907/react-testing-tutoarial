import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionElement).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const titleElement = screen.getByTitle("Close");
    expect(titleElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jonLocationElement = screen.getByRole("combobox");
    expect(jonLocationElement).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    const termElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termElement2).toBeInTheDocument();
  });
});
