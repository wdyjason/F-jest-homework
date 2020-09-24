import axios from "axios";
import { register } from "../user";
import { verifyUsername, verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({ data: {} });
    const result = register("username", "password");
    // expect(axios.post).toHaveBeenCalledTimes(1);
    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    verifyPassword.mockReturnValue(true);

    await expect(register()).rejects.toThrow(Error);
  });
});
