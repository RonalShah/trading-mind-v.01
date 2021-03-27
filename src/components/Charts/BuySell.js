import React from "react";
import { useInput } from "../MainStoreProvider";
import {
  StartButton,
  GreenButton,
  RedButton,
  ResetButton,
} from "../../buttons";
import { BluePaper } from "../../styledComponents";
import { auth, db } from "../../firebase";
import firebase from "firebase";

function BuySell() {
  const { chartData, dispatch } = useInput();

  const lastDay = { day: 7, today: false };

  const storevaluesFirebase = () => {
    if (!lastDay.today) {
      lastDay.day = lastDay.day + 1;
      lastDay.today = true;
    }

    // alert (auth.UserProfile(DisplayName)) How DO I Create A User Profile?

    db.collection(`${chartData.user.uid}`)
      .doc("LastDay")
      .set({ day: lastDay.day });

    db.collection(`${chartData.user.uid}`)
      .doc(`Day ${lastDay.day}`)
      .set({
        // How do I make 13 = lastDay.day
        13: {
          buyPrice: chartData.buyPrice,
          sellPrice: chartData.sellPrice,
          profit: chartData.todayProfit,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
      });
  };

  return (
    <div>
      <BluePaper>
        <h2> Trader </h2>
      </BluePaper>

      <h3 className="userhead">Price : {chartData.currentPrice} </h3>
      <div>
        <GreenButton
          onClick={() => dispatch({ type: "buy" })}
          className="btn__buysell"
        >
          Buy
        </GreenButton>

        <RedButton
          onClick={() => dispatch({ type: "sell" })}
          className="btn__buysell"
        >
          Sell
        </RedButton>

        <ResetButton
          onClick={() => dispatch({ type: "reset" })}
          className="btn__buysell"
        >
          Reset
        </ResetButton>

        <ResetButton
          onClick={() => storevaluesFirebase()}
          className="btn__buysell"
        >
          Store
        </ResetButton>
      </div>
      <div>
        <p className="details"> Buy Price : {chartData.buyPrice} </p>
        <p className="details"> Sell Price : {chartData.sellPrice} </p>
        <p className="details"> Profit / Loss : {chartData.profit} </p>
        <h6 className="details"> Today's Profit : {chartData.todayProfit}</h6>
      </div>
    </div>
  );
}

export default BuySell;
