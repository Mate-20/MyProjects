import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../utils/Constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {

    return (
        <div>
            <div className="container-fluid ">
                <div className="row flex-nowrap">
                    <div className="sidebar col-auto col-md-12 min-vh-100">                            
                            {categories.map((category)=>(
                                <div className={`sideitem ${selectedCategory === category.name ? 'selected' : ''}`}>
                                <Link className="nav-link text-white" onClick={()=>{
                                    setSelectedCategory(category.name)
                                }}>
                                    <i className={category.icon}></i><span className='fs-4 d-none d-sm-inline ms-2'>{category.name}</span>
                                </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar