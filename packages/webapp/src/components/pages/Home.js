import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { AuthContext } from '../../api/AuthContext'
import { MuiSignOutButton } from '@project/ui-components';

const Home = () => {
  const auth = useContext(AuthContext)
  return (
    <div>
      <h1>Home</h1>
      <p>{`Hello ${auth.attributes.email}`}</p>
      <p>
        You are now logged in! <Link to="/app/profile">View profile</Link>
      </p>

      <MuiSignOutButton
        onSignOutClick={() => {
          auth.signOut()
        }}
        color="primary"
        size="medium"
      />
    </div>
  )
}

export default Home
