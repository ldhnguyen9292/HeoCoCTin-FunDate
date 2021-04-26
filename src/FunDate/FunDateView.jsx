import React, { Component } from "react";
import { connect } from "react-redux";
import "./funDateView.scss";

class FunDateView extends Component {
  handleClick = () => {
    const { changeCard } = this.props;
    changeCard();
  };

  render() {
    const { cardName, cardNumber, cardImg } = this.props;
    return (
      <div id="date_view" className="container text-center p-5">
        <h1>Bạn sẽ hẹn hò với ai?</h1>
        <button id="card_img" onClick={this.handleClick}>
          <img id={cardImg.id} src={cardImg.link} />
        </button>
        <h1>Tên: {cardName}</h1>
        <h1>Số: {cardNumber}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { cardName, cardNumber, cardImg } = state.cards;
  return {
    cardName,
    cardNumber,
    cardImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCard: () => {
      const action = {
        type: "heo_co",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FunDateView);
