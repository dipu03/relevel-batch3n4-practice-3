const authController = require('../controllers/auth.controller');
const {verifySignUp} = require('../middlewares/index');

module.exports = (app) => {

    app.post('/healthService/api/v1/auth/signup', [verifySignUp.validateSignUpRequestBody], authController.signup);

    app.post('/healthService/api/v1/auth/signin', [verifySignUp.validateSignInRequestBody], authController.signin);
};