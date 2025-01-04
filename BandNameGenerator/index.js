import express from 'express'; // Express Library
import bodyParser from 'body-parser'; // Middleware to parse incoming request bodies
import { dirname } from 'path'; // Utility to work with the file paths
import { fileURLToPath } from 'url'; // Utility to work with the file URLS

// Creating a constant __dirname that represents the directory name of the current module
// This is important for resolving file paths (since ES modules don't provide __dirname)
const __dirname = dirname(fileURLToPath(import.meta.url));

// Intialize an express application
const app = express();

// Set the server port to 3000;
const port = 3000;

// Variable to store the generated band name
let bandName = '';

// Middleware to serve static files from the 'public' folder (CSS, JS, and Imgages)
app.use(express.static('public'));

// Middleware to parse URL-encoded data from the request body (for the submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// A custom middleware function to generate a band name from the request body
// It takes data from the form inputs and combines the 'street' and 'pet' fields to generate name
const bandNameGenerator = (req, res, next) => {
  // Log the incoming data from the request body for debugging
  console.log(req.body);

  // Combine the street and pet fields from the request body to create the band name
  bandName = req.body['street'] + req.body['pet'];

  next(); // Call the next middleware
};

// Use the bandNameGenerator middleware globally it will run for every request
app.use(bandNameGenerator);

// Define the route (GET request to '/') that serves the index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define the '/submit' route to handle the form submission (POST request)
app.post('/submit', (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
