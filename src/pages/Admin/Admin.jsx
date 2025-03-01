import React from 'react'
import { useAuthentication } from '../../store/Authentication'
import { NavLink, Outlet } from 'react-router-dom'
import "./Admin.css"

const Admin = () => {

  const { authorizedUser } = useAuthentication();

  return (
    <main className='admin-main-container'>
      <nav className='admin-nav-container'>
        <ul className='admin-nav-division'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notactive")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/users" className={({ isActive }) => (isActive ? "active" : "notactive")}>Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/contacts" className={({ isActive }) => (isActive ? "active" : "notactive")}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/admin/courses" className={({ isActive }) => (isActive ? "active" : "notactive")}>Courses</NavLink>
          </li>
        </ul>
      </nav>
      <section className="admin-section">
        <Outlet />
      </section>
    </main>
  )
}

export default Admin
