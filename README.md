# Password Reset Flow

This folder contains the implementation of the password reset functionality for the application. The password reset flow allows users to securely reset their passwords if they forget them.

## Features

- **Request Password Reset**: Users can request a password reset by providing their registered email address.
- **Email Verification**: A secure token is sent to the user's email for verification.
- **Reset Password**: Users can reset their password using the token and set a new password.

## Folder Structure

```
passwordResetFlow/
├── controllers/
│   └── passwordResetController.js
├── models/
│   └── userModel.js
├── routes/
│   └── passwordResetRoutes.js
├── services/
│   └── emailService.js
├── utils/
│   └── tokenGenerator.js
└── README.md
```

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd passwordResetFlow
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the root directory.
    - Add the following variables:
      ```
      EMAIL_SERVICE=<your-email-service>
      EMAIL_USER=<your-email-username>
      EMAIL_PASS=<your-email-password>
      TOKEN_SECRET=<your-secret-key>
      ```

4. Start the application:
    ```bash
    npm start
    ```

## API Endpoints

- **POST /request-reset**: Initiates the password reset process.
- **POST /verify-token**: Verifies the token sent to the user's email.
- **POST /reset-password**: Resets the user's password.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Nodemailer

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.