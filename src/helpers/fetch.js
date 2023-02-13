export function callEndPoint (moeda) {
  return fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.base !== moeda) {
        throw new Error('Moeda não existe!');
      }
      return data;
    });
}
