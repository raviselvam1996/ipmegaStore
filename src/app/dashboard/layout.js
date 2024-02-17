"use client"

import React from 'react';
import './page.css';
import Link from 'next/link'


export default function DashboardLayout({children}){

    return (<>
      <div className='dashboard'>
    <aside className='sidebar'>
      <div className="profile-section">
        <h3>Ravi Selvam</h3>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link href="/dashboard/customer"> Customer Order</Link></li>
          <li><Link href="/dashboard/orderReport">Order Report</Link></li>
          <li><Link href="/dashboard/addProducts"> Products Report</Link></li>
          <li><Link href="/dashboard/addCompany">Company report</Link></li>
          <li><Link href="/dashboard/addCategory">Category report</Link></li>
    



          {/* Add additional menu items here */}
        </ul>
      </nav>
    </aside>
    <div className="main-content">
      <header className="topbar">
        <div className="topbar-left">
          <div className="logo">
            <strong>IPMEGA</strong>
          </div>
        </div>
        <div className="topbar-right">
          <button className='btn btn-sm btn-primary' >Logout</button>
        </div>
      </header>
      <div className="content">
        <div className='card mt-5' style={{ minHeight: '80vh' }}>
          <div className='card-body'>
            {/* Your main content goes here */}
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
    
    </>)
}