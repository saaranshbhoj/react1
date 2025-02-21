//Testing our Header Component;
import Header from "../Header"
import { render,screen,fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react"
import { Provider } from "react-redux"
import AppStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"


test ("Should render Header with Login Button", () =>{
    
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

const loginbutton=screen.getByRole("button",{name :"Login"})
expect (loginbutton).toBeInTheDocument();

});

test ("Should render Header with Cart Button", () =>{
    
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

const loginbutton=screen.getByText("🛒0")
expect (loginbutton).toBeInTheDocument();

});

test ("Should change Login to LogOut onclick", () =>{
    
    render(
        <BrowserRouter>
        <Provider store={AppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

const loginbutton=screen.getByRole("button",{name :"Login"})

//Fire an Event
fireEvent.click(loginbutton)

const logOutbutton=screen.getByRole("button",{name :"LogOut"})
expect (logOutbutton).toBeInTheDocument();

});