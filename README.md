# Eventura

Eventura is a platform dedicated to the management and booking of events (All categories). It aims to provide an optimal user experience for participants, organizers, and administrators alike.

# UI/UX
https://www.figma.com/file/Jtw3gktsv37AKKHTuN6AGQ/NftUnity?type=design&node-id=0%3A1&mode=design&t=4Abvyr8W1bEpo3u5-1

## Features

### Users

- **Registration:** Users can sign up on the platform by providing their name, email address, and password.
- **Login:** Users can log in to their accounts using their credentials.
- **Password Reset:** Users can reset their passwords in case they forget by receiving a password reset email.
- **Event Discovery:** Users can browse through a list of available events with pagination for easy navigation.
- **Event Filtering:** Users can filter events by category.
- **Event Search:** Users can search for events by title.
- **Event Details:** Users can view detailed information about an event, including its description, date, location, and available seats.
- **Seat Reservation:** Users can reserve a seat for an event.
- **Payemnt:** Users can reserve a seat for an event.




### Organizers

- **Event Creation:** Organizers can create a new event by specifying its title, description, date, location, category, and the number of available seats.
- **Event Management:** Organizers can manage their events.
- **Reservation Statistics:** Organizers can access statistics on the reservations for their events.
- **Reservation Handling:** Organizers can choose between automatic acceptance of reservations or manual validation.

### Administrators

- **User Management:** Administrators can manage users by restricting their access.
- **Category Management:** Administrators can manage event categories by adding, modifying, or deleting categories.
- **Event Validation:** Administrators can validate events created by organizers before they are published on the platform.
- **Statistics:** Administrators can access platform-wide statistics.

### Developers

- **Payment Integration:** Developers can integrate a payment system for event reservations, allowing users to make payments securely for their bookings.

## Tech Stack

- **Frontend:** React
- **Backend:** Laravel
- **Database:** MySQL (or your preferred database system)

## Installation

To run Eventura locally, follow these steps:

### Frontend (React)

1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Set up your environment variables if necessary.
4. Run the development server: `npm start`.

### Backend (Laravel)

1. Navigate to the `backend` directory: `cd backend`.
2. Install dependencies: `composer install`.
3. Set up your environment variables by copying `.env.example` to `.env` and configuring it.
4. Generate an application key: `php artisan key:generate`.
5. Run migrations to create the necessary tables: `php artisan migrate`.
6. Serve the application: `php artisan serve`.

## Contributing

Contributions are welcome! If you'd like to contribute to Eventura, please follow these steps:

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
