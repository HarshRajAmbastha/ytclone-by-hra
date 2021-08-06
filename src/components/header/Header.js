import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }
   const user = useSelector(state => state.auth?.user)

   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
         />

         <img
            src="https://p.kindpng.com/picc/s/22-229417_youtube-logo-royal-blue-hd-png-download.png"  alt="yt-logo"
            className='header__logo'
         />

         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src={user?.photoURL} alt='profile-pic' />
         </div>
      </div>
   )
}

export default Header
