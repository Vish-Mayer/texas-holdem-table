import {
  formatHandDescription,
  formatKickerDescription
} from "./formatWinnerDescription";

describe("formatHandDescription", () => {
  it("formats the hand description - case1", () => {
    const containsA = [
      "Royal Flush",
      "Straight Flush",
      "Full House",
      "Flush",
      "Straight",
      "Pair"
    ];

    for (let i in containsA) {
      expect(formatHandDescription(containsA[i])).toEqual(`a ${containsA[i]}`);
    }
  });

  it("formats the hand description - case2", () => {
    const doesNotContainsA = ["Four Of A Kind", "Three Of A Kind", "Two Pair"];

    for (let i in doesNotContainsA) {
      expect(formatHandDescription(doesNotContainsA[i])).toEqual(
        `${doesNotContainsA[i]}`
      );
    }
  });
});

describe("formatKickerDescription", () => {
  it("formats the kicker for a royal flush", () => {
    expect(formatKickerDescription("Royal Flush", "A+K+Q+J+T")).toEqual("");
  });

  it("formats the kicker for a straight flush", () => {
    expect(formatKickerDescription("Straight Flush", "T+9+8+7+6")).toEqual(
      "Ten High"
    );
  });

  it("formats the kicker for four of a kind", () => {
    expect(formatKickerDescription("Four Of A Kind", "T+T+T+T+6")).toEqual(
      "Tens"
    );
  });

  it("formats the kicker for a full house", () => {
    expect(formatKickerDescription("Full House", "3+3+3+T+T")).toEqual(
      "Threes full of Tens"
    );
  });

  it("formats the kicker for a flush", () => {
    expect(formatKickerDescription("Flush", "T+7+5+3+2")).toEqual("Ten High");
  });

  it("formats the kicker for a straight", () => {
    expect(formatKickerDescription("Straight", "T+9+8+7+6")).toEqual(
      "Six to Ten"
    );

    expect(formatKickerDescription("Straight", "6+5+4+3+2")).toEqual(
      "Deuce to Six"
    );
  });

  it("formats the kicker for three of a kind", () => {
    expect(formatKickerDescription("Three Of A Kind", "9+9+9+7+6")).toEqual(
      "Nines"
    );
  });

  it("formats the kicker for two pair", () => {
    expect(formatKickerDescription("Two Pair", "9+9+7+7+6")).toEqual(
      "Nines and Sevens"
    );
  });

  it("formats the kicker for a pair", () => {
    expect(formatKickerDescription("Pair", "6+6+A+T+2")).toEqual("Sixes");
    expect(formatKickerDescription("Pair", "A+A+J+T+2")).toEqual("Aces");
  });
});
