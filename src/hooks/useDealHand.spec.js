import { act, renderHook } from "@testing-library/react-hooks";
import { useDealHand } from "./useDealHand";

const getControlledPromise = () => {
  let deffered;
  const promise = new Promise((resolve, reject) => {
    deffered = { resolve, reject };
  });
  return { deffered, promise };
};

describe("useCharacter", () => {
  it("fetches a character by the url", async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => useDealHand()));

    expect(global.fetch).toBeCalledWith(
      "https://texas-holdem-hand-generator.herokuapp.com/api/deal-texas-holdem?players=8"
    );
  });

  it("handles loading state while fetching data", async () => {
    const { deffered, promise } = getControlledPromise();
    global.fetch = jest.fn(() => promise);
    const { result, waitForNextUpdate } = renderHook(useDealHand);

    expect(result.current.isLoading).toBe(true);
    deffered.resolve();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });

  it("handles handles error state correctly", async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        throw "Fetch Error";
      });
    });

    const { result, waitForNextUpdate } = renderHook(useDealHand);
    await act(async () => waitForNextUpdate);

    expect(result.current.error).toStrictEqual("Fetch Error");
  });
});
