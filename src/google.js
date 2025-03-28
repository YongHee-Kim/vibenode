const { google } = require('googleapis');
const path = require('path');

  // Load credentials from JSON key file
const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, '../secrets/googleauth.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

console.log(auth)