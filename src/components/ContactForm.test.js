import 'mutationobserver-shim';
import React from "react";
import { render } from "@testing-library/react";
import App from "./ContactForm";




test("Get First Name By Text", () => {
    const { getByText } = render(<App />);  
    getByText(/First Name/i);    
});

/*
test("Get Last Name Label", () => {   
    const { getByLabelText } = render(<App />);
    getByLabelText('Last Name');
});
*/




test("Get Last Name by Placeholder Text", () => {   
    const { getByPlaceholderText } = render(<App />);
    getByPlaceholderText('luo');
});

test("Get Email  By ID", () => {
    const { getByTestId } = render(<App />);
    getByTestId(/email/i);
});

describe("Find the Title of different Fields", () => {

    it('Finds Email title', () => {
        const {getByTestId} = render(<App />);
        const elem = getByTestId('email');
        expect(elem.innerHTML).toBe('Email*');
    })
    
    it('Finds Message title', () => {
        const {getByTestId} = render(<App />);
        const elem = getByTestId('message');
        expect(elem.innerHTML).toBe('Message');
    })

});



// test("Get Firstt Name By Label Text", () => {
//     const { getByLabelText } = render(<App />);
//     getByLabelText(/firstName/i);
// });