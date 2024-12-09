import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function SaveMovieToSupabase() {
	const supabase = createClient(
		"https://ulnjfmxpfutsmdhxgvpj.supabase.co",
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
	);
	const [movie, setMovies] = useState([]);

	useEffect(() => {
		async function setMovie() {
			try {
				const { data } = await supabase.from("movies").insert({
					id: 3,
					imdbID: "tt1375666",
					poster: "https://example.com/poster.jpg",
					title: "Inception",
				});
				console.log(data);
				setMovies(data);
			} catch (error) {
				console.error("Something went wrong!");
				console.log(error);
			}
		}
		setMovie();
	}, []);
}
