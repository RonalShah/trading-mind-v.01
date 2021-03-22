import { Avatar, Box, Paper } from '@material-ui/core'
import React from 'react'
import { auth, db } from '../../firebase';
import {RedButton, AmberButton} from '../../buttons'
import { BluePaper,} from '../../styledComponents';


function UserInfo() {
 
  const handleSignOut = () => {
    auth.signOut();
  }

    return (
        <Box >

          <BluePaper>
            <h2 >John Smith</h2>
          </BluePaper>

          {/* <Avatar alt="Ronal Shah" src="../../images/screenshot.jpg" 
          style={{width:"60px"}}/> */}
          

          <p className="details userhead">Member Since: Jan 2021</p>
          
          <AmberButton style={{fontSize:12}}
                  className="btn__buysell"
                  disabled
              >Dashboard</AmberButton>
         
          <RedButton style={{fontSize:12}}
                  className="btn__buysell"
                  onClick={handleSignOut}
              >Log Out</RedButton> 
    
        </Box>

    )
}

export default UserInfo
