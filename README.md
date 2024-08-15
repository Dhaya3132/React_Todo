## Todo List Application

## Introduction :
This Todo List application is built using React and Vite, with Tailwind CSS for styling. It allows users to manage tasks with features such as adding, editing, searching, completing, deleting, and notifications. The application is responsive and uses nanoid for generating unique IDs for each task.

## Features : 
- **Add Tasks**: Users can add new tasks to their todo list.
- **Edit Tasks**: Users can edit existing tasks.
- **Search Tasks**: Users can search for tasks in their list.
- **Complete Tasks**: Users can mark tasks as complete.
- **Delete Tasks**: Users can remove tasks from their list.
- **Notifications**: Users receive notifications for task updates.
- **Responsive Design**: The application is fully responsive and works on various screen sizes.
- **Unique ID Generation**: Each task is assigned a unique ID using nanoid

## Project Structure : 

src/
|-- components/
|   |-- AddField.jsx
|   |-- Notification.jsx
|   |-- SearchField.jsx
|   |-- TodoItem.jsx
|   |-- TodoList.jsx
|   |-- Header.jsx
|   |-- DeleteNotification.jsx
|-- styles/
|   |-- App.css
|-- App.jsx
|-- main.jsx
|-- index.html

## Components : 

**TodoItem**
It handles displaying the task, marking it as complete, editing, and deleting the task.

**TodoList**
The TodoList component displays a list of TodoItem components. It manages the overall state of the todo items and handles the addition, editing, completion, and deletion of tasks.

Props
tasks (array): List of tasks.
onComplete (function): Callback to mark a task as complete.
onDelete (function): Callback to delete a task.
onEdit (function): Callback to edit a task.

**SearchField**
The Search component allows users to search for tasks in their todo list.

Props
onSearch (function): Callback to filter tasks based on search input.

**AddField**
The AddTodo component provides a form to add new tasks to the list.

Props
onAdd (function): Callback to add a new task.

**Notification**
The Notification component displays notifications for task completion and deletion.

## Styling :

This application uses a Tailwind CSS.

## nanoid() : 

The application uses nanoid to generate unique IDs for each task. 
Install nanoid with: 
1 - npm i nanoid
2 - Import nano id.
3 - use the nano id by calling.

## Responsive Design : 

The application is designed to be responsive, ensuring it works well on both desktop and mobile devices. Use Tailwind CSS classes to create a responsive layout.

## Running the application : 

Run the command in the terminal npm run dev, before running ensure the node modules are installed.

