import { Fragment } from "react"
import { Link, Outlet } from 'react-router-dom'
import { HiOutlineShare } from 'react-icons/hi'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to='/' className="logo-container">
          <HiOutlineShare />
        </Link>
        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">
            Shop
          </Link>
          <Link to='/auth' className="nav-link">Sign In</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation

