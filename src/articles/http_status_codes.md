# HTTP Status Codes

This is not a complete list. I'm just trying to list the most commonly used codes. The detail info comes from [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).

## Successful Responses

Code | Description | Detail
---- | ----------- | ------
200 | OK | The request succeeded. The result and meaning of "success" depends on the HTTP method: **GET:** The resource has been fetched and transmitted in the message body, **HEAD:** Representation headers are included in the response without any message body, **PUT or POST:** The resource describing the result of the action is transmitted in the message body, and **TRACE:** The message body contains the request as received by the server.
201 | Created | The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
202 | Accepted | The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
204 | No Content | There is no content to send for this request, but the headers are useful. The user agent may update its cached headers for this resource with the new ones.

## Client Error Responses

Code | Description | Detail
---- | ----------- | ------
400 | Bad Request | The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
401 | Unauthorized | Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
403 | Forbidden | The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.
404 | Not Found | The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
409 | Conflict | This response is sent when a request conflicts with the current state of the server. In WebDAV remote web authoring, 409 responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
422 | Unprocessable Entity | The request was well-formed but was unable to be followed due to semantic errors.

## Server Error Responses

Code | Description | Detail
---- | ----------- | ------
500 | Internal Server Error | The server has encountered a situation it does not know how to handle. This error is generic, indicating that the server cannot find a more appropriate `5XX` status code to respond with.
502 | Bad Gateway | This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
503 | Service Unavailable | The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After` HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
504 | Gateway Timeout | This error response is given when the server is acting as a gateway and cannot get a response in time.
