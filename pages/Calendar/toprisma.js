/*import { google } from 'googleapis';
import prisma from '../path/to/prismaInstance'; // Import your Prisma instance

// ... OAuth setup as mentioned earlier

// Fetch calendar events
const calendar = google.calendar({ version: 'v3', auth });
const calendarId = 'primary'; // Or your calendar ID
const response = await calendar.events.list({
  calendarId,
  timeMin: new Date().toISOString(),
  maxResults: 10,
  singleEvents: true,
  orderBy: 'startTime',
});
const events = response.data.items;

// Save events to Prisma
for (const event of events) {
  const start = event.start.dateTime || event.start.date;
  const end = event.end.dateTime || event.end.date;
  await prisma.calendarEvent.create({
    data: {
      summary: event.summary,
      start: new Date(start),
      end: new Date(end),
      // ... map other event properties to your Prisma model fields
    },
  });
}*/
