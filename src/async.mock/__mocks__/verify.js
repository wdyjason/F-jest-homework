const verifyPassword = jest
  .fn()
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false);
const verifyUsername = jest
  .fn()
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false);

export { verifyPassword, verifyUsername };
