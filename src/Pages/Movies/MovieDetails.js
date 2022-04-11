import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../../Network/AxiosInstance";
import './Movies.css'

export default function MovieDetails() {
  const [movie, setMovieDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    let isMounted = true;
    AxiosInstance.get(`${params.id}?api_key=0635aa13dcf8f77aa3d3a659b24086cc`)
      .then((res) => {
        if (isMounted) setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
    return () => {
      isMounted = false;
    }; // cleanup toggles value, if unmounted
  }, []);

  return (
    <div className ="container">
      <div className ="card mb-3 m-5">
        <div className ="row g-0" >
          <div className ="col-md-4" >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              className ="img-fluid rounded-start movie-card"
              alt={movie.title}
            />
          </div>
          <div className ="col-md-8">
            <div className ="card-body">
              <h3 className ="card-title">{movie.title}</h3>
              <p className ="card-text">{movie.overview}</p>
              <p className ="card-text">
                <small className ="text-muted">
                  <small>{movie.release_date}</small>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
