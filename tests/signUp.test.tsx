import React from "react";
import ReactDOM from "react-dom";
import Signup from "../components/signup/Signup";


import {render,cleanup,fireEvent,waitFor,screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

describe('Signup component test',()=>{

afterEach(cleanup);
it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Signup/> ,div);
    ReactDOM.unmountComponentAtNode(div);
})

it("dose it give error message for empty input",()=>{
    const signup= render(<Signup/>);
    fireEvent.click(signup.getByText('SIGN UP'));
    let expectedMessage = '<div data-testid="alert"><p>The Email is required</p><p>The User Name is required</p><p>The Password is required</p></div>';
    expect(signup.getByTestId('alert')).toContainHTML(expectedMessage);
})


it("dose it check for correct inputs format",()=>{
    const signup= render(<Signup/>);
    fireEvent.change(signup.getByTestId('username'), { target: { value: '123' } });
    fireEvent.change(signup.getByTestId('email'), { target: { value: '123' } });
    fireEvent.change(signup.getByTestId('password'), { target: { value: '123' } });
    fireEvent.change(signup.getByTestId('repPassword'), { target: { value: '123' } });
    fireEvent.click(signup.getByText('SIGN UP'));
    let expectedMessage = '<div data-testid="alert"><p>User Name should be at least 4 charachters</p><p>Email should be in this form: example@email.com</p><p>Password should contain one capital letter</p><p>Password should contain one small letter</p><p>Password should contain one digit</p><p>Password minimum length is 6</p></div>';
    expect(signup.getByTestId('alert')).toContainHTML(expectedMessage);
})

it("dose the api work and give rejection if the user is already in the database", async ()=>{
    const signup= render(<Signup/>);
    fireEvent.change(signup.getByTestId('username'), { target: { value: 'test' } });
    fireEvent.change(signup.getByTestId('email'), { target: { value: 'test@email.com' } });
    fireEvent.change(signup.getByTestId('password'), { target: { value: 'PassWord12' } });
    fireEvent.change(signup.getByTestId('repPassword'), { target: { value: 'PassWord12' } });
    await waitFor(()=> fireEvent.click(signup.getByText('SIGN UP')))
    let expectedMessage = '<div data-testid="alert"><p>User Name should be at least 4 charachters</p><p>Email should be in this form: example@email.com</p><p>Password should contain one capital letter</p><p>Password should contain one small letter</p><p>Password should contain one digit</p><p>Password minimum length is 6</p></div>'
    expect(signup.getByTestId('username')).toHaveValue("test");
   await waitFor(()=> expect(screen.getByTestId("alert")).toBeInTheDocument());
})
// the problem might be is that we dont have the api if we are not runniing the app
})