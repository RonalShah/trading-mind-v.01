
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { useInput } from '../MainStoreProvider';


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
        console.log(userData)


      })

  }, [])

  // const tableData = userData.map((element) => (<p>{element.buyPrice}</p>))

  console.log(user.uid)


  return (
    <div>
      {/* {tableData} */}
    </div>
  )
}

export default DashBoard
