import { getWinnerDescription } from "./getWinnerDescription";

describe("getWinnerDescrption", () => {
  it("returns a formatted version of the winning hand - case1", () => {
    const result = {
      splitPot: [],
      winner: [
        {
          name: "Player 4",
          hand: {
            kicker: "7+7+7+A+Q",
            rankDescription: "Three Of A Kind"
          }
        }
      ]
    };
    expect(getWinnerDescription(result)).toEqual(
      "Player 4 wins with Three Of A Kind, Sevens"
    );
  });

  it("returns a formatted version of the winning hand - case 2", () => {
    const result = {
      splitPot: [],
      winner: [
        {
          name: "Player 4",
          hand: {
            kicker: "A+A+K+9+7",
            rankDescription: "Pair"
          }
        }
      ]
    };
    expect(getWinnerDescription(result)).toEqual(
      "Player 4 wins with a Pair, Aces"
    );
  });

  it("returns a formatted version of the winning hand - case 4", () => {
    const result = {
      splitPot: [],
      winner: [
        {
          name: "Player 4",
          hand: {
            kicker: "A+A+A+9+(",
            rankDescription: "Full House"
          }
        }
      ]
    };
    expect(getWinnerDescription(result)).toEqual(
      "Player 4 wins with a Full House, Aces full of Nines"
    );
  });

  it("returns a formatted version of a split pot", () => {
    const result = {
      splitPot: [
        {
          name: "Player 1",
          hand: {
            kicker: "K+Q+J+T+9",
            rankDescription: "Straight"
          }
        },
        {
          name: "Player 4",
          hand: {
            kicker: "K+Q+J+T+9",
            rankDescription: "Straight"
          }
        }
      ],
      winner: []
    };
    expect(getWinnerDescription(result)).toEqual(
      "Player 1, Player 4, tie with a Straight, Nine to King"
    );
  });
});
