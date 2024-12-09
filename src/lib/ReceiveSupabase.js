// import { useEffect, useState } from "react";
// import SupaBase from "./SupaBase";

// export const ReceiveData = async () => {
// 	const [movieData, setMovieData] = useState("");

// 	useEffect(() => {
// 		const FetchData = async () => {
// 			try {
// 				await SupaBase.from("Movies").select("id");
// 			} catch (error) {}
// 		};
// 	});
// 	return (
// 		<section>
// 			<ul>
// 				{Movies.map((Movies) => {
// 					<li key={Movies.id}></li>;
// 				})}
// 			</ul>
// 		</section>
// 	);
// };
