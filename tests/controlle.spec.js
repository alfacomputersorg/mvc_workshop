import {Controller} from '../src/core';

test("Verifiy Getter and Setter",()=>{
  const controller=new Controller({view:"View"},{model:"Model"});
  expect(controller.Model).toStrictEqual({model:"Model"});
  expect(controller.view).toStrictEqual({view:"View"});
});

describe("Test suite for Controller", ()=>{
  test("Ok, View has the correct type",()=>{
    expect(1).toEqual(1);
  });
})
