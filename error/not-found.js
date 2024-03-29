import { StatusCodes } from 'http-status-codes';
import CustomAPI from './custom-api.js';

class NotFound extends CustomAPI {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFound;
