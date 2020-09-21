import axios from "axios";
import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({ data: {} });
    register("username", "password");
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(verifyPassword).toHaveBeenCalledWith("password");
    expect(verifyUsername).toHaveBeenCalledWith("username");
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const result = register("wrong username", "wrong password");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
