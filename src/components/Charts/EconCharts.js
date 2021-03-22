import {Line} from 'react-chartjs-2'
import {useInput} from '../MainStoreProvider'
import React, {useReducer} from 'react'
import {Grid} from '@material-ui/core';

const initialEcon = {
    
    EconomyData : 
        [
            ["GDP" , 0.02],
            ["Unempl" , 0.05],
            ["Confidence", 50],
            ["BalancePayment", 0.03],
            ["Currency", 1.6],
        ]

    ,

    FXChart : {
    
            FXdata : {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                {
                    label: "FX",
                    data: [33, 53, 85, 41, 44, 65],
                    fill: false,
                    borderColor: "silver",
                    pointRadius: 0,
                    borderWidth: 2,
                    backgroundColor: "darkgrey"


                }],

                options: {

                    animation: {
                        duration: 0 ,

                    },
                    

                }

                

            }

    }
    
    ,

    BondChart : {
    
        Bonddata : {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
            {
                label: "Rates",
                data: [1.2, .8, .9, 1.1, .7, .9],
                fill: false,
                borderColor: "silver",
                pointRadius: 0,
                borderWidth: 2,
                backgroundColor: "darkgrey"
            },

            ]

        }

        
    }
    ,

    EconNews : ["GDP 3%", "Unemployment 5%", "Consumer Conf 50%", "Debt 10%"],

}

const reducer__Econ = (state,action) => {
    switch(action.type) {

        case 'updateNews' :
            return(state)

        default: return(state)

    }
}

export function FXChart() {

    const {chartData, dispatch} = useInput()

    const [econData, dispatchEcon] = useReducer(reducer__Econ,initialEcon)

    return (
        <div className = 'Minor__Chart' >
             {/* <Grid item xl={14} lg={10} sm={10}  xs={12} > */}
                <Line data={econData.FXChart.FXdata}/>  
             {/* </Grid> */}
        </div>

    )
}

export function BondChart() {
    const {chartData, dispatch} = useInput()
    const [econData, dispatchEcon] = useReducer(reducer__Econ,initialEcon)

    return (
         <div className = 'Minor__Chart' >
             {/* <Grid item xl={14} lg={10} sm={10} xs={12} > */}
                <Line data={econData.BondChart.Bonddata}/>  
             {/* </Grid> */}
        </div>

    )

}


export function EconNews() {

    const {chartData, dispatch} = useInput()

    const [econData, dispatchEcon] = useReducer(reducer__Econ,initialEcon)

    const NewsArray = econData.EconNews.map(newsItem=><p>{newsItem}</p>)

    return (
         <div className="">

            {NewsArray}

        </div>

    )

}
