import styles from './PostDetail.module.css'

import { Link } from 'react-router-dom'

function PostDetail({post}) {
  return ( 
    <div className={styles.post}>
      <img src={post.image} alt={post.title}></img>
      <div>
          <h2>{post.title}</h2>
          <div className={styles.authorPost}>
            <span><img src='../src/assets/userIcon.svg' ></img></span>
            <p>{post.createBy}</p>
          </div>
      </div>
      <div className={styles.tags}>
          {post.tagsArray.map((tag) => (
              <p className={styles.tag} key={tag}><span>#</span>{tag}</p>
          ))}
      </div>
      <Link className={styles.moreButton} to={`/posts/${post.id}`}>Ler mais</Link>
    </div>
  )
}

export default PostDetail