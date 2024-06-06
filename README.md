# README

## Overview
This README provides an overview of a Node.js application that serves static files, handles different file types, and implements route handling and redirection. The application uses the Express framework to create a server and manage routes.

## Dependencies
The application requires the following npm packages:
- `express`: For creating and managing the HTTP server and routes.
- `path`: For handling and transforming file paths.

## Installation
No external installation is required beyond installing the necessary npm packages using the following command:
```bash
npm install express path
```

## Usage

### Running the Application
1. Navigate to the project directory in your terminal.
2. Run the following command to start the server:
   ```bash
   npm run dev
   ```
   The server will start listening on the specified port (default is 3500).

### Serving Static Files
The application serves static files from the root directory, which allows CSS, images, and other assets to be properly rendered when requested.

### Route Handling

#### Home and Index Page
- **Path**: `/`, `/index`, or `/index.html`
- **Description**: Matches the root URL and serves the `index.html` file.

#### My Page
- **Path**: `/my-page` or `/my-page.html`
- **Description**: Serves the `my-page.html` file.

#### Your Page Redirect
- **Path**: `/your-page` or `/your-page.html`
- **Description**: Redirects to `/my-page.html` with a 301 status code.

#### Home Page
- **Path**: `/home` or `/home.html`
- **Description**: Serves the `home.html` file.

#### Main Page Redirect
- **Path**: `/main` or `/main.html`
- **Description**: Redirects to `/home.html` with a 301 status code.

#### Subdir Page
- **Path**: `/subdir` or `/subdir/`
- **Description**: Serves the `index.html` file located in the `subdir` directory.

### Route Handlers

#### Hi Route
- **Path**: `/hi` or `/hi.html`
- **Description**: Logs a message and serves "Hello world".

#### Chain Route
- **Path**: `/chain` or `/chain.html`
- **Description**: Logs messages in sequence and serves "one, two, three".

### Error Handling
The application serves a custom 404 page for any unmatched routes.

#### 404 Page
- **Path**: Any unmatched path
- **Description**: Serves the `404.html` file.

### Conclusion
This README provides an overview of a Node.js application using Express to serve static files, handle different file types, implement routing and redirections, and manage custom route handlers. It covers the dependencies, installation, usage instructions, and the core functionality of the application.