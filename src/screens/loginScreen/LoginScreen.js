import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'

import './loginScreen.scss'

const LoginScreen = () => {
   const dispatch = useDispatch()

   const accessToken = useSelector(state => state.auth.accessToken)

   const handleLogin = () => {
      dispatch(login())
   }

   const history = useHistory()

   useEffect(() => {
      if (accessToken) {
         history.push('/')
      }
   }, [accessToken, history])

   return (
      <div className='login'>
         <div className='login__container'>
            <h2>YOUTUBE CLONE</h2>
            <img
               src="https://p.kindpng.com/picc/s/22-229417_youtube-logo-royal-blue-hd-png-download.png"  alt="yt-logo"
            />
            <button onClick={handleLogin}>Login With google</button>
            <p>This Project is made by HARSH RAJ AMBASTHA using YOUTUBE DATA API .To view this project ,you need to login.</p>
         </div>
      </div>
   )
}

export default LoginScreen
