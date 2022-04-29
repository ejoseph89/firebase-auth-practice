import { Fragment, useContext } from "react"
import { Link, Outlet } from 'react-router-dom'
import { HiOutlineShare } from 'react-icons/hi'

import { signOutUser } from "../../utils/firebase/firebase.utils"

import './navigation.styles.scss'

import { UserContext } from "../../contexts/user.context"

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  
  const signOutHandler = async () => {
    await signOutUser()
  
  }

  return (
    <Fragment>
      <section className="navigation">
        <Link to='/' className="logo-container">
          <HiOutlineShare className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">
            Shop
          </Link>
          {
            currentUser ?
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span> :
            <Link to='/auth' className="nav-link">Sign In</Link>
          }
        </div>
      </section>
      <Outlet />
    </Fragment>
  )
}
export default Navigation

