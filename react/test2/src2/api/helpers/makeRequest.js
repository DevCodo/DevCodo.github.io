
let baseUrl = '/reactcourseapi/';

export default function makeRequest(url, options = {}, baseUrl = baseUrl) {
  return fetch(baseUrl + url, options).then( response => {
    if(response.status !== 200) {
      return response.text().then( text => {
        throw new Error(text);
      })
    }

    return response.json();
  })
};

// пример использования
// makeRequest('/abracadabra/abc.php')
//   .then( data  => console.log(data))
//   .catch( err => console.log(err))