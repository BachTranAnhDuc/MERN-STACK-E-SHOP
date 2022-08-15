import { StatusCodes } from 'http-status-codes';

const ErrorHandle = (err, req, res, next) => {
  let defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || `Something went wrong!!`,
  };
  // let defaultError = {
  //   statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  //   msg: res.message,
  // };

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.values(err.keyValue)} has dupplicated!`;
  }

  if (err.name === 'ValidationError') {
    // defaultError.statusCode = StatusCodes.BAD_REQUEST;
    // defaultError.msg = `${err.errors
    //   .map((el) => Object.values(el.message))
    //   .join(', ')}`;
    // const re = err.errors.map((el) => Object.values(el.message));
    // console.log(re);

    const re = Object.values(err.errors).map((el) => el.message);

    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${re.join(', ')}`;
  }

  let { statusCode, msg } = defaultError;

  res.status(statusCode).json({ msg: msg, err: err });
};

export default ErrorHandle;
