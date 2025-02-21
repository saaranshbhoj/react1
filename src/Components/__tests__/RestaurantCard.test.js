import React from "react";
import Rest1 from "../RestaurantCard";
import { render,screen } from "@testing-library/react";
import Rest1Mock from "../Mocks/Rest1Mock.json"
import "@testing-library/jest-dom"


test ("should load Rest1 component along with prop", () =>{
            render(<Rest1   resdata={Rest1Mock}/>)
            const name=screen.getByText("Pizza Hut")
            expect (name).toBeInTheDocument();
})