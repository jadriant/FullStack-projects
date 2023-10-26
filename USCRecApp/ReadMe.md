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