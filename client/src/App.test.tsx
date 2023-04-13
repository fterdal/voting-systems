import { describe, it } from "vitest";
describe("nothing", () => {
  it.concurrent("should pass", ({ expect }) => {
    expect(true);
  });
});
