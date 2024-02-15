import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom"

// hooks
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useDeleteDocument } from "../../hooks/useDeleteDocument"

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

  const { deleteDocument } = useDeleteDocument("posts")

  return (
    <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <p>Gerencie os seus posts</p>
        <div className={styles.managePosts}>
          <h2>Suas ultimas postagens</h2>
          {posts && posts.lengh === 0 ? (
            <div className={Styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create">Criar Post</Link>
            </div>
            ) : (
              <div className={styles.postsArea}>
                {posts && posts.map((post) => (
                <div key={post.id} className={styles.postArea}>
                  <h4>{post.title}</h4>
          
                  <div className={styles.buttonsArea}>
                    <Link className={styles.button} to={`/posts/${post.id}`}>
                      <span class="material-symbols-outlined">
                        visibility
                      </span>
                    </Link>
                    <Link className={styles.button} to={`/posts/edit/${post.id}`}>
                      <span class="material-symbols-outlined">
                        edit
                      </span>
                    </Link>
                    <button className={styles.buttonRemove} onClick={() => deleteDocument(post.id)}>
                      <span class="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
                ))}
          
              </div>
            )}
        </div>
    </div>
  )
}

export default Dashboard