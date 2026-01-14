# Copilot Instructions for AI Coding Agents

## Project Overview
This project is a simple JavaScript codebase focused on practicing destructuring and object/array manipulation. The main file is `script.js`.

## Key Patterns & Conventions
- **Data Structure:**
  - The core data is an array of `students` objects, each with `id`, `name`, `scores` (array), and `address` (object or null).
  - Example:
    ```js
    {
      id: 101,
      name: "Alice Johnson",
      scores: [78, 85, 92],
      address: { city: "New York", zip: 10001 }
    }
    ```
- **Null Handling:**
  - Some fields (e.g., `address`) may be `null` or missing properties. Use optional chaining and default values when destructuring.
- **Destructuring:**
  - Use ES6 destructuring for objects and arrays throughout. Example:
    ```js
    const { name, scores, address = {} } = student;
    const [firstScore, ...restScores] = scores;
    ```

## Developer Workflow
- There are no build tools, tests, or external dependencies. All logic is in `script.js`.
- Run and debug using Node.js:
  ```bash
  node script.js
  ```

## File Structure
- `script.js`: Main and only code file. All logic and data are here.

## Recommendations for AI Agents
- Focus on clear, idiomatic JavaScript (ES6+).
- When adding features, keep all logic in `script.js` unless otherwise specified.
- If adding new data or patterns, follow the structure of the existing `students` array.
- Document any new conventions directly in this file or update this instructions file.

---
For questions or unclear conventions, ask for clarification or propose a pattern in your PR.
