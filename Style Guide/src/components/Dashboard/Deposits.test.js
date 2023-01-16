import { render } from '@testing-library/react';
import Deposits from './Deposits';

// test('teste numero', () => {
//   render(<Deposits />);
//   const testNumero = document.querySelector('.Deposits h4');
//   expect(testNumero).toMatch(new RegExp(/(R\$).\d{1,3}[\,\.]{1}\d{1,3}[\,\.]{1}\d{2}/))
// });

// test('teste numero', () => {
//   render(<Deposits />);
//   const testeNumero = document.querySelector('.Deposits h4');
//   expect(testeNumero).toHaveTextContent(/R\$/)
// });

// describe("Tem Valor", () => {
//   render(<Deposits />)
//   const valor = new RegExp(/(R\$).\d{1,3}[\,\.]{1}\d{1,3}[\,\.]{1}\d{2}/)

//   it('Confere') () => {
//     expect(Deposits).toEqual(valor)
//   }
// })

test('teste classe', () => {
  render(<Deposits />);
  const testeClasse = document.querySelector('.Deposits');
  expect(testeClasse).toHaveClass('Deposits')
});