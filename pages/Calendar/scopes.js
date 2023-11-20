import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const auth = new google.auth.OAuth2({
  clientId: process.env.CALENDAR_CLIENT_ID,
  clientSecret: process.env.CALENDAR_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/auth/google/callback', // For web applications
});

// Generate a URL for the user to authorize the app
const authUrl = auth.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});
