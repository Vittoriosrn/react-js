// CSS
import styles from './Home.module.css'

// hooks
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

// components
import PostDetail from '../../components/PostDetail'

const Home = () => {
  const [query, setQuery] = useState("")
  const {documents: posts, loading} = useFetchDocuments("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
        <form className={styles.formSearchTags} onSubmit={handleSubmit}>
          <input type='text' placeholder='Busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
          <button className={styles.btn_search}><img src="src\assets\searchIcon.svg"></img></button>
        </form>
        <div>
          {loading && <p>Carregando...</p>}
          {posts && posts.map((posts) => (
            <PostDetail key={posts.id} post={posts} />
          ))}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link className={styles.btn} to="/posts/create">Seja o primeiro a criar um post!</Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home