# Missing Error Handling in Express.js Route

This repository demonstrates a common error in Express.js applications: missing error handling for invalid input and insufficient error messages. The bug involves a route that fetches a user by ID. If the ID is invalid or the user is not found, the application returns a generic 404 error without providing further details. This makes debugging difficult for clients and developers alike.

## Bug Description:

The `/users/:id` route does not handle the following scenarios gracefully:

1. **Invalid User ID:** If the `id` parameter is not a number, `parseInt(userId)` will return `NaN`, leading to an incorrect search and a generic 404.
2. **User Not Found:** When the user is not found, the application returns only a 404 status code without providing information about the cause (e.g., invalid ID).

## Solution:

The solution involves adding comprehensive error handling that:

1. Validates user IDs before searching.
2. Returns specific HTTP status codes and descriptive error messages, aiding in debugging and user feedback.

## How to reproduce

1. Clone this repository
2. Install dependencies using `npm install`
3. Run `node bug.js`
4. Send request to `http://localhost:3000/users/abc` or `http://localhost:3000/users/100`
5. Observe the responses and compare with the solution in `bugSolution.js`