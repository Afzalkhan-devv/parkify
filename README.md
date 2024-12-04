# parkify
![image](https://github.com/user-attachments/assets/ae4a0806-14d9-4571-b463-6112dd0fa7cc)
Parkify is a web-based application designed to help users find and book parking spaces in real-time. This application leverages modern technologies such as React, Spring Boot, Hibernate, and MySQL to provide a smooth and efficient parking experience.

## Features

- **Real-time parking availability**: Users can view available parking spots.
- **Instant booking**: Reserve parking spaces online.
- **Payment integration**: Secure online payment options for bookings.
- **User accounts**: Register and manage personal details and parking history.
- **Admin panel**: Admins can manage parking areas and user data.

## Technologies Used

- **Backend**: 
  - Spring Boot
  - Hibernate
  - MySQL
  
- **Frontend**:
  - React
  - HTML, CSS, JavaScript
  - Bootstrap

## Requirements

- **Software**:
  - Eclipse with Spring Tool Suite (STS) Plugin
  - Apache Tomcat 7.0.67 (or higher)
  - MySQL
  - Chrome/Firefox/IE browser
  
- **Hardware**:
  - Processor: Intel Core 2 Duo or higher
  - RAM: 2GB or higher

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/parkify.git
   ```

2. Navigate to the project directory and install the frontend dependencies:

   ```bash
   cd parkify/frontend
   npm install
   ```

3. Set up the backend by configuring the MySQL database and updating `application.properties` in the Spring Boot project.

4. Run the Spring Boot application:

   ```bash
   mvn spring-boot:run
   ```

5. Start the React development server:

   ```bash
   cd frontend
   npm start
   ```

6. Access the web app at `http://localhost:3000`.

## Future Improvements

- Integration with Google Maps for better location handling.
- Mobile app version for enhanced accessibility.

