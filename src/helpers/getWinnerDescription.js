import {
  formatHandDescription,
  formatKickerDescription
} from "./formatWinnerDescription";

export const getWinnerDescription = x => {
  if (x) {
    if (x.splitPot.length > 0) {
      if (x.splitPot.length > 1) {
        let winners = "";
        for (let i in x.splitPot) {
          winners += `${x.splitPot[i].name}, `;
        }
        return `${winners}tie with ${formatHandDescription(
          x.splitPot[0].hand.rankDescription
        )}, ${formatKickerDescription(
          x.splitPot[0].hand.rankDescription,
          x.splitPot[0].hand.kicker
        )}`;
      }
    } else if (x.winner.length > 0) {
      return `${x.winner[0].name} wins with ${formatHandDescription(
        x.winner[0].hand.rankDescription
      )}, ${formatKickerDescription(
        x.winner[0].hand.rankDescription,
        x.winner[0].hand.kicker
      )}`;
    }
  }
};
