import React from 'react'
import Link from 'next/link'
import NavLink from './reusable/Link'


const navLinks = [
    {
        title: "About",
        path: '#about',
    },
    {
        title: "Contact",
        path: '#contact',   
    }
]

const Navbar = () => {
  return (
    <nav>
        <div>
<Link href={"/"}> Logo is here</Link>
<Link href={"/"}> About</Link>
<Link href={"/"}> Basic</Link>
<NavLink href='#about' title='Okay'/>
        </div>
<div>

  <NavLink href={'#about'} title={'Okay'}/>


</div>

        
    </nav>
  )
}

export default Navbar