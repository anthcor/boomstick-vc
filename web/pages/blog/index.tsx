import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
import styles from '../../styles/Home.module.css'



const Index = (props: Props) => {
    const { posts = [] } = props
    return (
      <div className={styles.container}>
        <h1>Words of wisdom</h1>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </div>
    )
}

Index.getInitialProps = async () => ({
    posts: await client.fetch(groq`
      *[_type == "post" && _updatedAt < now()]|order(_updatedAt desc)
    `)
})

export default Index
