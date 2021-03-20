import { Container } from '@material-ui/core'
import React from 'react'
import { auth, db } from '../../firebase';
import {RedButton, AmberButton} from '../../buttons'


function UserInfo() {
 
  const handleSignOut = () => {
    auth.signOut();
  }

    return (
        <div >
           
          <p><h2 className="userhead">John Smith</h2>
          <p className="details">Member Since: Jan 2021</p>
          
          <AmberButton style={{fontSize:12}}
                  className="btn__buysell"
                  disabled
              >Dashboard</AmberButton>
         
         <RedButton style={{fontSize:12}}
                  className="btn__buysell"
                  onClick={handleSignOut}
              >Log Out</RedButton> </p>
    
        </div>

    )
}

export default UserInfo
