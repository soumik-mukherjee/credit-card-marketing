import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { AuthContext } from '../api/AuthContext'

const Header = ({ siteTitle }) => {
  const auth = useContext(AuthContext)
  return (
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={styles.headerTitle}>
            {siteTitle}
          </Link>
        </h1>
        {auth.isSignedIn && (
          <p>{`Welcome ${auth.attributes.email}`}</p>
        )}
        {auth.isSignedIn && (
          <p
            onClick={() =>
              auth.signOut()
              /*Auth.signOut()
                .then(logout(() => navigate('/app/login')))
                .catch(err => console.log('eror:', err))*/
            }
            style={styles.link}
          >
            Sign Out
          </p>
        )}
      </div>
    </div>
  )
}

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline',
  },
}

export default Header
