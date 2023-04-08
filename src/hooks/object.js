import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAPI = (slug) => {
   const [data, setData] = useState([])
   const URL = !slug ? process.env.REACT_APP_BLOG_URL + '&props=title,slug,created_at' : process.env.REACT_APP_BLOG_URL

   useEffect(() => {
      axios.get(URL)
           .then((response) => {
               const { objects } = response.data
               !slug ? setData(objects) : setData(objects.filter((object) => object.slug === slug))
           })
           .catch((error) => {
               setData([])
               throw error
           }) 
   }, [URL, slug])

   return data
}