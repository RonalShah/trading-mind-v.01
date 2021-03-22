import { yellow } from '@material-ui/core/colors'
import React, {createContext, useReducer, useContext, useEffect, useState} from 'react'
import {BS, Rounder} from './FinMath'


export const InputContext = createContext()
export function useInput() { return (useContext(InputContext))}



const initialState = {

            user : null,

            dataPoints : 100,
            firstPoint : 100,
            r : 0.01,
            vol : .20,
            t: 252,
            
            x: 0,
            labelData: [],
            assetData: [],

            currentPrice : 100,
            buyPrice : "-",
            sellPrice : "-",
            bought : false,
            sold : false,
            profit: 0,
            todayProfit : 0,

            lineColor: "silver",

            //Main Asset Chart Data
            mainChart : {        

                maindata : {

                    labels: [],
                    datasets: [
                        {
                            label: "Asset Price",
                            data: [],

                            
                        }

                    ],

                    options: {
                        responsive: true,
                    }

                }
            
            }
        
  }



const reducer__Chart = (state, action) => {


    switch (action.type) {

                
        case "SET_USER":
            console.log("Login Reducer Called")
            return {
                ...state,
                user: action.user,
            };
            

        case 'initialise' :

            state.assetData=[]
            state.labelData=[]
            
            state.assetData[0]=state.firstPoint
            state.labelData[0]=1

            for (state.x=1; state.x<state.dataPoints; state.x++) {
                state.labelData[state.x]=state.x+1
                state.assetData[state.x]=BS(state.assetData[state.x-1],state.r, state.vol, state.t)
            }
            
            return ({
                ...state,
            
                mainChart : {        

                    maindata : {
    
                        labels: state.labelData,
                        datasets: [
                            {
                                label: state.mainChart.maindata.datasets[0].label,                            
                                data: state.assetData,

                                borderColor: state.lineColor,    
                                lineTension: .2,
                                pointRadius: 0,
                                fill: false,
                                
                            }
    
                        ],
                        options: {
                                animation: {
                                    duration: 0 ,

                                },
                                

  
                            
                            }


                        }
                        
                    },

                currentPrice : state.assetData[state.dataPoints-1]

                
                    }
                
                 
                     )

        case 'tick' :

            state.assetData=[]
            state.labelData=[]

            state.assetData=[...state.mainChart.maindata.datasets[0].data.slice(1,state.dataPoints),
                BS(state.mainChart.maindata.datasets[0].data[state.dataPoints-1],state.r,state.vol,state.t)]
            state.labelData=[...state.mainChart.maindata.labels.slice(1,state.dataPoints),
                                state.mainChart.maindata.labels[state.dataPoints-1]+1]



            
            return ({
                ...state,
            
                mainChart : {        

                    maindata : {
    
                        labels: state.labelData,
                        datasets: [
                            {
                                label: state.mainChart.maindata.datasets[0].label,
                                data: state.assetData,
                                borderColor: state.lineColor,


                                
                            }
    
                        ],

                        options: {
                                animation: {
                                    duration: 0 ,

                                },


                            
                            
                            }
                        }
                    },
                
                    currentPrice : state.assetData[state.dataPoints-1]

                    }
                     )

        case 'buy': 
            if (state.bought === false) {
            
                return({
                ...state,
                buyPrice: state.currentPrice,
                bought : true,

                 })
                } else {
                    return(state)
                }

        case 'sell': 
            if (state.sold === false && state.bought===true) {
            
                return({
                ...state,
                sellPrice: state.currentPrice,
                sold : true,
                profit: Rounder((state.currentPrice - state.buyPrice),2),
                todayProfit: Rounder(state.todayProfit + (state.currentPrice - state.buyPrice),2),

                 })
                } else {
                    return(state)
                }

        case 'reset':
            if (state.sold && state.bought) {
                
                return({
                    ...state,
                    buyPrice: "-",
                    sellPrice: "-",
                    profit: 0,
                    bought: false,
                    sold: false


                })

            } else {
                return(state)
            }
        
        case 'set__r':
            return({
                ...state,
                r : action.payload
            })    
        
        case 'set__vol':
            return({
                ...state,
                vol : action.payload
            })    
            
        default:
                return state
    }

}



export function MainStoreProvider({children}) {

    const [chartData, dispatch] = useReducer (reducer__Chart, initialState)

    const [started, setStarted] = useState(false)

    const starter = () => {
        if (!started) {
            setStarted(true)
            setInterval(
                () => {dispatch({type:'tick'})},
                1000
            )
        }
    }

    useEffect(() => {
        dispatch({type:'initialise'})
    }, [])


    return (

        <InputContext.Provider value = {{chartData:chartData , dispatch:dispatch, starter:starter}}>
            {children}
        </InputContext.Provider>


    )
}


