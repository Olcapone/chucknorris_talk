export default function Api() {
  const BASE_URL = `https://api.chucknorris.io/jokes/random`;

  return fetch(BASE_URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(` Something wrong :( `));
  });
}
