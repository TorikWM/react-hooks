import MovieCard from './MovieCard'
import './MovieCard.css'


export default function MovieList({Movies , title , rate}) {
  return (
        <div className='cards'>
          {Movies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase().trim())&& movie.rate>=rate)
          .map((movie , i) => ( <MovieCard movie={movie} key={movie.id} /> ))}
        </div>
  )
}
