
import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { useInput } from '../MainStoreProvider';
import NavBar from '../navBar/NavBar';


function DashBoard({ user }) {

  const { chartData, dispatch } = useInput();
  const [userData, setUserData] = useState();

  useEffect(() => {
    db.collection(`${user.uid}`)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((doc) => {
          return { ...doc.data() };
        });

        setUserData({ list })


      })

  }, [])

  // const tableData = userData.map((element) => (<p>{element.buyPrice}</p>))

  // console.log(user.uid)
  console.log(userData)


  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "black" }}
        xs={12}
        className="Home"
      >
        <Container maxWidth>
          <NavBar />
        </Container>
        {userData && <>
          <h3 style={{ margin: '1rem auto' }}>User Trade Data</h3>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
            <h3>Buy Price</h3>
            <h3>Sell Price</h3>
            <h3>Profit</h3>
          </div>
          {userData?.list?.map(data =>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
              <h6>{data?.buyPrice}</h6>
              <h6>{data?.sellPrice}</h6>
              <h6>{data?.profit}</h6>
            </div>
          )
          }
        </>}
      </Grid>
    </div>
  )
}

export default DashBoard
