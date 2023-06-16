// location.js
export async function onRequest(context) {
    let api_url = 'https://www.chabad.org/api/v2/chabadorg/centers/locations';
    const request = context.request;

    // Append the query string to the API URL
    const url = new URL(request.url);
    if (url.search) {
        api_url += url.search;
    }
    
    if (request.method === 'GET') {
        try {
            const apiRes = await fetch(api_url, {
                method: request.method,
                headers: request.headers
            });

            // Pass the response back to the browser
            return new Response(apiRes.body, {
                status: apiRes.status,
                statusText: apiRes.statusText,
                headers: apiRes.headers
            });

        } catch (error) {
            return new Response('Error calling API', { status: 500 });
        }
    } else {
        // If the method is not GET
        return new Response(`Method ${request.method} Not Allowed`, { status: 405 });
    }
}
