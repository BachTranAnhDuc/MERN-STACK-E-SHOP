import { StatusCodes } from 'http-status-codes';

class CustomAPI extends Error {
  constructor(msg) {
    super(msg);
  }
}

export default CustomAPI;
