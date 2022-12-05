/**
 * The **corsSettings** module contains the settings for CORS
 *
 * @author [Hoang Le Chau](https://github.com/hoanglechau)
 */

// add all registered URLs of the project to 'allowedCors' later
const allowedCors = ['https://wtwr-app-production.up.railway.app/', 'http://localhost:3000', '*'];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
