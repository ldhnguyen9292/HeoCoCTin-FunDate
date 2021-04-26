const initialState = {
  cardName: "?",
  cardNumber: 0,
  cardImg: { link: "./img/playing-cards.jpeg", id: "mau" },
};

const cardReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "heo_co":
      state.cardName = "Heo Cơ";
      state.cardNumber = 1;
      state.cardImg = {
        link: "./img/playing-cards.jpeg",
        id: "heo_co",
      };
      return {...state};
    default:
      return state;
  }
};

export default cardReducer;
