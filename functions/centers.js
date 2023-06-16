addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  let url = new URL(request.url)

  // Prepare the API URL
  let api_url = 'https://www.chabad.org/api/v2/chabadorg/centers/'

  // Prepare the headers
  let headers = new Headers(request.headers)

  // Check if the request method is GET
  if (request.method === 'GET') {
    let response = await fetch(api_url, {
      method: request.method,
      headers: headers
    })

    // Check if the API request is successful
    if (response.ok) {
      return response
    } else {
      return new Response('Error calling API', {status: response.status})
    }
  } else {
    // For non-GET requests, simply forward the request
    return await fetch(request)
  }
}
