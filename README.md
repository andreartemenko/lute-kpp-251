# lute-kpp-251


# <project> Application

## Overview
This application uses React, React Router (v6), and json-server to manage and display items. It supports full CRUD operations: Create, Read, Update, and Delete.

## Setup and Installation

### Requirements
- Node.js
- npm

### Getting Started
1. **Clone the repository:**
   ```
   git clone <repository-url> <project>
   cd <project>
   ```

2. **Install dependencies:**
   ```
   npm install
   npm install json-server react-router-dom
   ```

3. **Prepare the backend:**
   - Create a `db.json` file in the project root with the following content to simulate the backend:
     ```json
     {
       "items": [
         { "id": 1, "name": "Item 1" },
         { "id": 2, "name": "Item 2" },
         { "id": 3, "name": "Item 3" }
       ]
     }
     ```

4. **Run the json-server:**
   ```
   json-server --watch db.json --port 3000
   ```

5. **Start the React application:**
   ```
   npm start
   ```

## Functionality

- **ItemList:** Displays all items. Each item has links to view, edit, and delete.
- **ItemDetail:** Shows details of a single item.
- **CreateItem:** Allows users to add new items.
- **EditItem:** Allows users to edit existing items.

## Routing
- `/` - Home page, displays all items.
- `/item/:id` - Detailed view of a single item.
- `/edit/:id` - Edit form for a single item.
- `/create` - Form to create a new item.

## Project Structure
- `src/`:
  - `components/`:
    - `ItemList.js` - Component to list items.
    - `ItemDetail.js` - Component to display item details.
    - `CreateItem.js` - Component for creating items.
    - `EditItem.js` - Component for editing items.

## Testing
Ensure all functionalities are working as expected. Check that create, read, update, and delete operations function properly without errors.

## Documentation
For more details, refer to the component files where each part of the application logic is documented.

## Contribution
Feel free to fork this project and make your own changes. Pull requests are welcome.
