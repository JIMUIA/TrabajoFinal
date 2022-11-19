import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { Spinner } from "./Spinner";
import { get } from "./utils/httpClient";

//import { useQuery } from "./useQuery";

export function MovieDetails(){
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie ] = useState(null);
        

    useEffect(() => {
        setIsLoading(true);
        
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading){
        return <Spinner />;
    }
       
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <div className={styles.detailsContainer}>
        <img className={`${styles.columnas} ${styles.movieImage}` } src={imageUrl} alt={movie.title} />
        <div className={`${styles.columnas} ${styles.movieDetails}`}>
            <p className={'styles.firstItem'}>
            <strong>Titulo:</strong>  {movie.title}</p>
            <strong>Genero:</strong>{" "}
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            <p> <strong>Sinopsis:</strong> {movie.overview}</p>
        </div>
    </div>
    );
}