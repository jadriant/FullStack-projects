# USC Recreational Center Reservation App

An Android application tailored for USC students to make reservations at USC's recreational centers. Initially developed in response to the need during the pandemic, this app ensures a streamlined booking process, efficient capacity management, and timely reminders for all users.

## Technologies Used
* **Front-end**: `Android Studio`
* **Database**: `Firebase`
* **Authentication**: `Firebase` with `Google OAuth`

## Features
**Login Page**: Secure authentication using Firebase OAuth.\
<img src="img/login_page.png" alt="login page" width="300">

**Home Page**: Integrated with the Google Maps API to visualize the location of recreational centers. \
<img src="img/home_page.png" alt="home page" width="300">

**Booking Page**: Enables users to pick time slots for reservations and displays available capacity for each slot. \
<img src="img/booking_page.png" alt="booking page" width="300">

**My Bookings and Reminder Page**: A comprehensive overview of upcoming and past bookings. Additionally, it offers reminders for fully-booked slots. When a slot becomes available, a notification is sent to the user, ensuring they never miss out.

<img src="img/bookingsAndReminder_page.png" alt="my bookings page" width="300">

## Testing
### Black Box Testing w/ `AndroidJUnit4`
1. **Login with Valid Credentials Test**: This test verifies the ability of a user to log into the USCRecApp using valid credentials. 
2. **Login with Invalid Credentials Test**: This test verifies the behavior of the application when trying to log in with non-existent or invalid credentials.
3. **Map Swipe Functionality Test**: After logging in with valid credentials, this test evaluates the map's swipe functionality within the USCRecApp. The map is swiped left and right multiple times to ensure smooth navigation.
4. **New User Registration Test**: This test checks the new user registration feature of the USCRecApp.
5. **Recreation Centers Navigation Test**: After logging in with valid credentials, this test evaluates the app's navigation functionality related to different recreation centers.
6. **Navigation Check**: Verifies that the user can navigate to a specific feature and then return to the previous screen using the back button.
7. **Date Validation**: Validates that the app correctly displays the current date and the subsequent two days.
8. **Rec Center Navigation**: Ensures the user can navigate through various rec centers in the app and that their respective names are displayed correctly.
9. **Booking Verification**: Checks the booking functionality by selecting a time slot, making a booking, and then verifying that this booking is correctly reflected in the summary page.
10. **Reminder Functionality**: Tests the reminder feature by toggling it multiple times, making a booking, and then checking that the booking with its reminder status is correctly displayed in the summary page.
11. **Appointment Reminders Verification**: Logs into the system and checks if specific appointment reminders, based on date and capacity, are displayed correctly.
12. **Upcoming Appointments Check**: Logs into the system and verifies the display of upcoming appointments based on specific dates, times, and locations.
13. **Previous Appointments Verification**: After logging in, this test validates that the system correctly displays past appointments based on specific dates, times, and locations.
14. **Comprehensive Account Appointments Check**: Logs into a given account and verifies the display of both upcoming and past appointments across multiple dates and venues, ensuring consistency and accuracy.
15. **User Interface Navigation Validation**: Logs into the system, accesses the booking functionality, and then tests the navigation using various UI buttons to ensure a seamless user experience.

## Installation
1. Ensure you have `Android Studio` installed.
2. I recommend `Pixel 3 API 32 Google Play`. This phone has google play support which is important to see the map.
3. You may need our API Key for Google Maps. It is: `AIzaSyC-vXET_YKJrz1UisWeelIiHgRupySXyhM`

## Usage
1. Start the application and log in using your Google credentials via Firebase OAuth.
2. Navigate the different pages to book, view, or manage your reservations.
3. Receive notifications on booking availability directly on your device.

## Dependencies
* Android SDK
* Firebase SDK (Authentication, Database)
* Google Maps API
