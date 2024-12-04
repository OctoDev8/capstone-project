import { MovieCard } from "@/components/MovieCard/MovieCard";

const MovieList = ({ movies }) => {
	if (!movies || movies.length === 0) {
		return <p>No movies found, try a different movie!</p>;
	}

	return (
		<section>
			{movies.map((movie) => {
				return (
					<MovieCard
						key={movie.imdbID}
						title={movie.Title}
						poster={movie.Poster}
						year={movie.Year}
					/>
				);
			})}
		</section>
	);
};

export default MovieList;
