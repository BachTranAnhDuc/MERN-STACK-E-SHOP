const createTokenUser = (user) => {
  return {
    name: user.name,
    email: user.email,
    password: user.password,
    userId: user._id,
    role: user.role,
  };
};

export default createTokenUser;
