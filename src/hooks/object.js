import { useEffect, useState } from 'react'
import { createBucketClient } from '@cosmicjs/sdk'

export const useAPI = (slug) => {
   const [data, setData] = useState([])
   const cosmic = createBucketClient({
    bucketSlug: 'dev-blog-prod',
    readKey: REACT_APP_READ_KEY
   })

   useEffect(() => {
        !slug ? cosmic.objects
                      .find({ type: 'posts' })
                      .props(['title', 'slug', 'created_at'])
                      .then((posts) => setData(posts.objects))
              : cosmic.objects
                      .findOne({ type: 'posts', slug: slug })
                      .then((post) => setData([post.object]))
                      .catch((error) => window.location.href = '/posts')
    }, [slug])

   return data
}