require('dotenv').config();

// Access and store the environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true', // Convert string to boolean
};
if ( process.env.IS_KALVIAN === 'true'){
console.log("goodevening folks")
}
// Export the config object
module.exports = config;

// Optional: Log the variables for verification during development
console.log('Configuration Loaded:', config);