// pages/api/centers.js
export default async (request, response) => {
  // Prepare the API URL
  let api_url = 'https://www.chabad.org/api/v2/chabadorg/centers/'

  // Check if the request method is GET
  if (request.method === 'GET') {
    let apiResponse = await fetch(api_url, {
      method: request.method,
      headers: request.headers
    })

    // Check if the API request is successful
    if (apiResponse.ok) {
      const data = await apiResponse.json();
      response.status(200).json(data);
    } else {
      response.status(apiResponse.status).send('Error calling API');
    }
  } else {
    // For non-GET requests, simply respond with method not allowed
    response.status(405).send('Method not allowed');
  }
}
