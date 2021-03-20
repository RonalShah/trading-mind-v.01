import { Container } from '@material-ui/core'
import React from 'react'
import {AmberButton} from '../../buttons'


function UserInfo() {


    return (
        <div >
           
          <p><h2 className="userhead">John Smith</h2>
          <p className="details">Member Since: Jan 2021</p>
          
          <AmberButton style={{fontSize:12}}
                  className="btn__buysell"
              >Dashboard</AmberButton> </p>
         
    
        </div>

    )
}

export default UserInfo
