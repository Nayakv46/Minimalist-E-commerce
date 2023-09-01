import React from 'react'
import { CategoriesHeader } from '../../components'
import { Newsletter } from '../../containers'
import { Outlet } from 'react-router-dom'
import './categories.css';


const Categories = () => {
  return (
    <>
    <CategoriesHeader />
    <section className="raouf__categoriesProducts">
        <div className="raouf__categoriesProducts-content">
            <Outlet />
        </div>
    </section>
    <Newsletter />
    </>
  )
}

export default Categories