import {alphabeticalOrder} from "../helpers/alphabeticalOrder";

describe("helpers/alphabeticalOrder", () => {
  it("Debera retornar una función", () => {
    expect(typeof alphabeticalOrder).toBe("function");
  });

  it('Debera retornar una lista ordenada alfabeticamente por el nombre', () => {
    const list = [
      { name: 'John' },
      { name: 'Alice' },
      { name: 'Bob' }
    ];

    const result = alphabeticalOrder(list);

    expect(result).toEqual([
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'John' }
    ]);
  });

  it('Debera retornar una lista de vacia', () => {
    const list = [];

    const result = alphabeticalOrder(list);

    expect(result).toEqual([]);
  });


  it('Debera retornar la misma lista con un unico objeto', () => {
    const list = [{ name: 'John' }];

    const result = alphabeticalOrder(list);

    expect(result).toEqual([{ name: 'John' }]);
  });

  it('Debera retornar un error de la lista qu', () => {
    const list = [{ age: 25 }, { age: 30 }];

    expect(() => alphabeticalOrder(list)).toThrowError('La lista contiene objetos sin la propiedad name');
  });

  it('Debera retornar un error si la lista contiene objetos con la propiedad name como nula o indefinida', () => {
    const list = [{ name: null }, { name: undefined }];

    expect(() => alphabeticalOrder(list)).toThrowError('La lista de entrada contiene objetos con la propiedad name nula o indefinida');
  });
});
