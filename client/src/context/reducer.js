const reducer = (state, action) => {
  throw new Error(`Can not find action ${action.type}`);
};

export default reducer;
