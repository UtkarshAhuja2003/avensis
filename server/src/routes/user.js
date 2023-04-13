// Import required modules
const express = require('express');
const passport = require('passport');

// Create the router
const router = express.Router();

// Define the route handler for /api/current_user
router.get('/api/current_user', (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Return the user's name and email
    console.log("called")
    res.json({ name: req.user.name, email: req.user.email });
  } else {
    // If the user is not authenticated, return an empty object
    res.json({});
  }
});

// Export the router
module.exports = router;
