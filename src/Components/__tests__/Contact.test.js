import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import React from "react";
import "@testing-library/jest-dom"

//We can also group our Test-Cases according to what they are testing;
describe("Collection of all test-cases for Contact Component", () =>{
//First Test-Case;
test("Should load Contact.js Component", () => {
    render(<Contact />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(3); // Expecting two headings
});

//Second Test-Case;
test("Button should load inside Contact Component", () =>{
    render(<Contact/>)
    const button=screen.getByRole("button")
    console.log(button);
    //Assertion;
    expect(button).toBeInTheDocument();
})

});



