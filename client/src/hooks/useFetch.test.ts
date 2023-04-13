/**
 * @jest-environment jsdom
 */

import { describe, it } from "vitest";
import { useFetch } from "./useFetch";
import { renderHook } from "@testing-library/react";

describe.concurrent("useFetch", () => {
  it("should pass", () => {
    console.log(true);
  });

  // it("should return valid initial values", ({ expect }) => {
  //   const { result } = renderHook(() => useFetch("example"));
  //   const out = result.current;
  //   expect(Object.hasOwn(out, "data"));
  //   expect(Object.hasOwn(out, "loading"));
  //   expect(Object.hasOwn(out, "error"));
  // });
});
