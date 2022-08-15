import { StatusCodes } from 'http-status-codes';
import CustomAPI from './custom-api.js';

class Unauthentication extends CustomAPI {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default Unauthentication;
