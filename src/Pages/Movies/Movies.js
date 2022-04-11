import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'
import { AxiosInstance } from '../../Network/AxiosInstance'
import { addToFavorites } from '../../store/actions/Favorites'

import { increaseCounter } from '../../store/actions/Counter'
import './Movies.css'
//fontawesome
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Movies() {
    //fontawesome
    const heart = <FontAwesomeIcon icon={faHeart} />
    //movies
    const [movies, setMovies]=useState([])

    //favorite movies
    const favorites_list = useSelector((state)=> state.favorites.favorites)
    
    //number of fav movies
    const counter = useSelector((state)=> state.counter.counter)
    //dispatch
    const dispatch = useDispatch();

    //getting movies API
    useEffect(()=>{
        let isMounted = true;
        AxiosInstance
        .get('popular?api_key=0635aa13dcf8f77aa3d3a659b24086cc')
        .then((res)=>setMovies(res.data.results))
        .catch((err)=>console.log(err))
        
        return () => { isMounted = false }; // cleanup toggles value, if unmounted
    }, []);


  return (
    <div className='container-fluid '>
        <h1 className='p-3'>Movies</h1>
            <div className='row d-flex justify-content-center '>
                {/* looping over the movies list */}
                {movies.map(movie => {

                    const found = favorites_list.includes(movie)? true:false
                    return (
                        // movieimage
                        <div className="card col-3 mx-2 my-2 movie-card-background " key={movie.id}>
                            <Link to={`/movie/${movie.id}`} >
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top movie-card" alt={movie.title} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>

                            {/* if the movie is already in the favorites */}
                                {found ? 
                                
                                <a  className='heart-red'
                                onClick =
                                {()=>{
                                    const index = favorites_list.indexOf(movie);
                                    favorites_list.splice(index, 1); // 2nd parameter means remove one item only
                                    const new_counter = counter-1
                                    dispatch(increaseCounter(new_counter))
                                }}>
                                   {heart}
                                </a>
                                // else
                                :
                                <a  className='heart-gray'
                                onClick=
                                {()=>{
                                    favorites_list.push(movie)
                                    dispatch(addToFavorites(favorites_list))
                                    const new_counter = counter+1
                                    dispatch(increaseCounter(new_counter))
                                }}>
                                   {heart}
                                </a>}
                            </div>
                            
                        </div>
                        
                    )
                })}
            </div>

    </div>
  )
}
