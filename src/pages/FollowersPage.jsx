import React, { useState, useEffect } from 'react'
import Follower from '../components/Followers/Follower'

const USER_API = 'https://dummyjson.com/users'

function Followers() {
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const numberOfFollowers = [5, 6, 7, 10]

    const data = await fetch(USER_API);
    const users = await data.json();
    const div = numberOfFollowers[Math.floor(numberOfFollowers.length * Math.random())];
    const followerData = users.users.filter(user => user.id % div === 0);
    setFollowers(followerData)
  }



  return (
    <div className='followers-container'>
      {
        followers?.length > 0 && followers?.map(follower => {
          return <Follower follower={follower} key={follower.id} />
        })
      }
    </div>
  )
}

export default Followers