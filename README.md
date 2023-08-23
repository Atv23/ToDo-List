
# TODO List Web App

The ToDo List Web App is a task management application that helps users stay organized by allowing them to create, manage, and organize their tasks in various lists. The app is designed to be user-friendly and intuitive, providing a seamless experience for keeping track of tasks and staying productive.
It is a simple web application that allows users to manage their tasks by organizing them into different lists. The app is built using Node.js, Express.js, MongoDB, and EJS templating.

## Features

- Create and manage multiple lists, such as "Work List," "Movies List," "Subjects List," and a default "Today's List" with current day.
- Add tasks/items to each list.
- Check off tasks/items as they are completed.
- Delete tasks/items from the lists.
- Responsive navbar and user-friendly interface.

## Prerequisites

- Node.js and npm installed on your system.
- MongoDB server running locally or remotely.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Atv23/ToDo-List.git
   ```

2. Install the dependencies:

   ```bash
   cd ToDo-List
   npm install
   ```

3. Configure MongoDB connection:

   Open `index.js` and modify the MongoDB connection URL to match your configuration.

4. Start the application:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access the TODO List app.

## Screenshots

### Home Page
![Home Page](./public/images/Screenshot (76).png)

### Today's List
![Today's List](Screenshot (78).pn)

### Movies List
![Movies List](Screenshot (79).pn)

### Responsive navbar
![Responsive navbar](Screenshot (80).pn)


## Usage

- **Homepage:** Visit `http://localhost:3000` to access the default "Today's List."
- **Navigation:** Use the navigation links to access specific lists, like "Work List," "Movies List," and "Subjects List."
- **Add Items:** Enter a task/item in the input field and click the "+" button to add it to the current list.
- **Complete Items:** Check off items to mark them as completed.
- **Delete Items:** Click the delete button (🗑️) to remove an item from the list.


## Technologies Used

- **Node.js:** The app's backend is built using Node.js, which provides a robust and efficient runtime for server-side operations.

- **Express.js:** The web framework Express.js is used to handle routing, middleware, and simplify the development of the backend.

- **MongoDB:** The application uses MongoDB, a NoSQL database, to store lists and tasks. This allows for efficient data management and retrieval.

- **EJS Templating:** EJS (Embedded JavaScript) is used for rendering dynamic HTML templates, allowing for the dynamic display of data from the server.


## Contributing

Contributions are welcome! If you find any bugs, have suggestions, or want to improve the project, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Built with love by Atharva Shukla (https://github.com/Atv23).
- Thanks to [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), and [EJS](https://ejs.co/) for making this project possible.
