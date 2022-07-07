$(document).ready(function() {
  $('#joke').click(function() {
    function getRandomInt() {
      let min = Math.ceil(0);
      let max = Math.floor(29780);
      return Math.floor(Math.random() * (max - min) + min);
    }
    fetch('./jokes.json')
    .then(results => results.json())
    .then(data => $('.output').text(data.results[test].Joke));
    let test = getRandomInt();
});
  
  $('#kanye').click(function() {
    console.log('kanye call');
    clearFields();
    makeApiCall();
  });
  $('#chuck').click(function() {
    console.log('chuck call');
    clearChucksFields();
    makeChucksApiCall();
  });
});

function clearFields() {
  $('.output').text("");
}

function getElements(response) {
  if (response.quote) {
    console.log(response.quote)
    $('.output').text(`${response.quote} `);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
    const response = await getKanye.kanyeQuote();
    getElements(response);
}

function clearChucksFields() {
  $('.oututput').text("");
}

function getChucksElements(response) {
  if (response.value) {
    console.log(response.value)
    $('.output').text(`${response.value} `);
  } else {
    $('.chucksShowErrors').text(`There was an error: ${response}`);
  }
}

async function makeChucksApiCall() {
  const response = await getChuck.chuckJoke();
  getChucksElements(response);
}

class getChuck {  
  static async chuckJoke() {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

class getKanye {  
  static async kanyeQuote() {
    try {
      const response = await fetch(`https://api.kanye.rest`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}