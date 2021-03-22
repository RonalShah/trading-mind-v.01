import {Line} from 'react-chartjs-2'
import {useInput} from '../MainStoreProvider'
import React from 'react'

import {BlueButton} from '../../buttons'
import {Container, Grid} from '@material-ui/core';
import {PlayCircleFilled} from '@material-ui/icons'

function MainAsset() {
    const {chartData, dispatch, starter} = useInput()


    return (

         <div className="MainChart">

            <Container maxWidth={false}>
                
            <Grid container 
                lg={12} sm={10} xl={12} xs={12} direction="column" spacing={2}>
                     
                    <Grid item >
                        {/* <BlueButton 
                        className = "btn__start"
                        >Start</BlueButton> */}
                              <PlayCircleFilled onClick={()=>starter()}
                              style={{color:"green", fontSize:"60px"}}/>
                    </Grid>

                    <Grid item sm={12}>
                        <Line className="MainAsset__Chart" data={chartData.mainChart.maindata}/>
                    </Grid>
                
                 </Grid>

            </Container>
        </div>

    )
}

export default MainAsset
