export function alphabeticalOrder(list) {
  if (list.some((item) => !item.hasOwnProperty("name"))) {
    throw new Error("La lista contiene objetos sin la propiedad name");
  }

  if (list.some((item) => item.name === null || item.name === undefined)) {
    throw new Error(
      "La lista de entrada contiene objetos con la propiedad name nula o indefinida"
    );
  }
  return list.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
}
