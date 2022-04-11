import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'

export default function Favorites() {
  //favorite movies state
    const favorite_movies = useSelector((state)=> state.favorites.favorites)
    const counter = useSelector((state)=> state.counter.counter)


  return (
    <div className='container-fluid '>
    <h1 className='p-3'>Favorite Movies</h1>
    {counter === 0 && <h2 className='container text-center py-5 nav-link disabled'>No Favorite Movies Yet</h2>}

        <div className='row d-flex justify-content-center '>
            {/* looping over the movies list */}
            {favorite_movies.map(movie => {
                return (
                    <div className="card col-3 mx-2 my-2 movie-card-background " key={movie.id}>
                        <Link to={`/movie/${movie.id}`} >
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top movie-card" alt={movie.title} />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                          
                        </div>
                        
                    </div>
                    
                )
            })}
        </div>

</div>
  )
}
