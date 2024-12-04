import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import MovieList from "@/components/MovieList/MoveList";

export default function Home() {
	return (
		<>
			<SearchBar />
			<section>
				<MovieList />
			</section>
		</>
	);
}
