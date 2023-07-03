async function fetchAPI(query) {

  //     fetch("https://catfact.ninja/fact")
  //   .then((res) => {return res.json();})
  //   .then((json) => console.log(json));

  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );

  const data = await response.json();
//   

  return data.results;

}

export default fetchAPI;
