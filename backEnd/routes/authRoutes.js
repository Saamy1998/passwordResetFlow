const express = require('express');
const {
  login,
  register,
  requestPasswordReset,
  resetPassword,
} = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/password-reset/request', requestPasswordReset);
router.post('/password-reset/reset', resetPassword);

module.exports = router;