import Styles from './Search.module.css'

// hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//components
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div>
        <h1 className={Styles.titleSearch}>Postagens sobre {search}</h1>
        <div>
            {posts && posts.length === 0 && (
                <div className={Styles.msg}>
                    <p>Não foram encontrados posts a partir da sua busca...</p>
                    <Link to="/">
                        Voltar
                    </Link>
                </div>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Search