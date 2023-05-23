import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button4;
  let button2;
  let button1;
  let button7;
  let button5;
  let button3;
  let buttonEqual;
  let buttonAdd;
  let buttonSubtract;
  let buttonDivide;
  let buttonClear;
  let buttonMultiply;
  let runningTotal;
  

  beforeEach(() => {
    container = render(<Calculator/>)
    button4 = container.getByTestId('number4');
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button7 = container.getByTestId('number7');
    button3 = container.getByTestId('number3');
    button5 = container.getByTestId('number5');
    buttonAdd = container.getByTestId('operator-add');
    buttonSubtract = container.getByTestId('operator-subtract');
    buttonMultiply = container.getByTestId('operator-multiply');
    buttonDivide = container.getByTestId('operator-divide');
    buttonClear = container.getByTestId('clear');
    runningTotal = container.getByTestId('running-total');
    buttonEqual = container.getByTestId('operator-equals');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("should be able to add numbers", () => {
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEqual);
    
    expect(runningTotal.textContent).toEqual('5');

  })

  it("should be able to subtract numbers", () => {
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEqual);
    
    expect(runningTotal.textContent).toEqual('3');

  })

  it("should be able to multiply numbers", () => {
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEqual);
    
    expect(runningTotal.textContent).toEqual('15');

  })

  it("should be able to divide numbers", () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEqual);
    
    expect(runningTotal.textContent).toEqual('3');

  })

  it("should be able to concatenate numbers", () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    
    expect(runningTotal.textContent).toEqual('217');

  })

  it("should be able to chain opeartions", () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button2);
    fireEvent.click(buttonEqual);

    
    expect(runningTotal.textContent).toEqual('6');
  })

  it("should be able to clear running total", () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEqual);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button2);
    fireEvent.click(buttonClear);
    fireEvent.click(button3);
    fireEvent.click(buttonEqual);

    
    expect(runningTotal.textContent).toEqual('9');
  })
})

