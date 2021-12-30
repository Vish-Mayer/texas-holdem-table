export const formatHandDescription = handDescription => {
  const containsA = [
    "Royal Flush",
    "Straight Flush",
    "Full House",
    "Flush",
    "Straight",
    "Pair"
  ];

  if (containsA.includes(handDescription)) {
    return `a ${handDescription}`;
  } else {
    return handDescription;
  }
};

export const formatKickerDescription = (handDescription, kickers) => {
  const values = {
    2: "Deuce",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    T: "Ten",
    J: "Jack",
    Q: "Queen",
    K: "King",
    A: "Ace"
  };
  const arr = kickers.split("+");

  const plural = args => {
    if (args === "Six") {
      return `${args}es`;
    } else {
      return `${args}s`;
    }
  };

  const highCard = args => {
    return `${args} High`;
  };

  if (handDescription === "Royal Flush") return "";

  if (handDescription === "Straight Flush") return highCard(values[arr[0]]);

  if (handDescription === "Four Of A Kind") return `${plural(values[arr[0]])}`;

  if (handDescription === "Full House")
    return `${plural(values[arr[0]])} full of ${plural(values[arr[3]])}`;

  if (handDescription === "Flush") return highCard(values[arr[0]]);

  if (handDescription === "Straight")
    return `${values[arr[4]]} to ${values[arr[0]]}`;

  if (handDescription === "Three Of A Kind") return `${plural(values[arr[0]])}`;

  if (handDescription === "Two Pair")
    return `${plural(values[arr[0]])} and ${plural(values[arr[2]])}`;

  if (handDescription === "Pair") return `${plural(values[arr[0]])}`;

  if (handDescription === "High Card") return `${values[arr[0]]}`;
};
