import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keywords=[
   'All',
   'Cricket',
   'Data Structures',
   'React.js',
   'Angular.js',
   'Vue.js',
   'Arijit Singh',
   'Redux',
   'Music',
   'Punjabi Songs',
   'Firebase',
   'Node.js',
   'Coding',
   'RCB',
   'Guitar',
   'Virat Kohli',
   'Use of API',
   'Javascript'
]

const CategoriesBar = () => {
   const [activeElement, setActiveElement] = useState('All')

   const dispatch = useDispatch()
   const handleClick = value => {
      setActiveElement(value)
      if (value === 'All') {
         dispatch(getPopularVideos())
      } else {
         dispatch(getVideosByCategory(value))
      }
   }

   return (
      <div className='categoriesBar'>
         {keywords.map((value, i) => (
            <span
               onClick={() => handleClick(value)}
               key={i}
               className={activeElement === value ? 'active' : ''}>
               {value}
            </span>
         ))}
      </div>
   )
}

export default CategoriesBar
