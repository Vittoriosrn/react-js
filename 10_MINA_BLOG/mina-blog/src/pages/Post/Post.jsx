import styles from './Post.module.css'

//hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const {id} = useParams()
    const {document: post} = useFetchDocument("posts", id)
    const {loading} = useFetchDocument()

  if (!post) {
    return null // garantir que post esteja definido
  }

  // Divide o corpo do post em linhas separadas
  const lines = post.body.split('\n')
  // Mapeia as linhas para elementos <p> dentro de um array
  const formattedLines  = lines.map((line, index) => (
    <p key={index} className={styles.postContent}>{line}</p>
  ))

  return (
    <div>
      {loading && <p>Carregando post...</p>}
        {post && (
          <>
            <div className={styles.post}>
              <div>
                  <h2>{post.title}</h2>
                  <div className={styles.authorPost}>
                    <span><img src='../src/assets/userIcon.svg' ></img></span>
                    <p>{post.createBy}</p>
                  </div>
              </div>
              <img src={post.image} alt={post.title}></img>
              <div>
              {formattedLines}
              </div>
              <div className={styles.tags}>
                  {post.tagsArray.map((tag) => (
                      <p className={styles.tag} key={tag}><span>#</span>{tag}</p>
                  ))}
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default Post