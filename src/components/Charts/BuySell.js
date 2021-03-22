import React from 'react'
import {useInput} from '../MainStoreProvider'
import {BlueButton, GreenButton, RedButton, ResetButton} from '../../buttons'
import { BluePaper } from '../../styledComponents'



function BuySell() {

    const {chartData, dispatch} = useInput()
    

    return (
        <div>
            <BluePaper><h2 > Trader </h2></BluePaper>
            
            <h3 className="userhead" >Price : {chartData.currentPrice} </h3>
            <div>
                <GreenButton onClick={()=>dispatch({type:"buy"})}
                className="btn__buysell"
                >Buy</GreenButton>

                <RedButton onClick={()=>dispatch({type:"sell"})}
                    className="btn__buysell"
                    >Sell</RedButton>

                <ResetButton onClick={()=>dispatch({type:"reset"})}
                    className="btn__buysell"
                    >Reset</ResetButton>
            </div>      
            <div>
                <p className="details"> Buy Price : {chartData.buyPrice} </p>   
                <p className="details"> Sell Price : {chartData.sellPrice} </p>
                
                <p className="details"> Profit / Loss : {chartData.profit} </p>
                
                <h6 className="details"> Today's Profit : {chartData.todayProfit}</h6>

            </div>


        </div>
    )
}

export default BuySell
