## catFact HUB

A simple RESTful API that returns your profile information along with a random cat fact fetched dynamically from the Cat Facts API Built with TypeScript, Express, and Axios.

# Features
 **Dynamic /me endpoint that returns**:
    - Your email, name, and backend stack
    - A timestamp (in UTC, ISO 8601 format)
    - A random cat fact on each request
    - Uses CORS for cross-origin access
    - Handles external API errors gracefully
    - Built with TypeScript for type safety

## API Documentation
GET /me
Returns your profile information along with a random cat fact.

# Example Request:

**GET** http://localhost:3000/me


# Example Response:

{
  "status": "success",
  "user": {
    "email": "temyl@example.com",
    "name": "Temyl Oteyola",
    "stack": "Node.js/Express + TypeScript"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}

# Error Handling

If the Cat Facts API fails, the endpoint responds with a fallback message:

{
  "status": "success",
  "user": { ... },
  "timestamp": "...",
  "fact": "Cat fact service unavailable. Please try again later."
}

## Tech Stack
- Node.js
- Express.js
- TypeScript
- Axios
- CORS
- Dotenv

 # Author

Temyl Oteyola

**Email**: your.email@example.com

**Stack**: Node.js / Express / TypeScript