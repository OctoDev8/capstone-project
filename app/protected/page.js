"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import MovieList from "@/components/MovieList/MovieList";
import { createClient } from "@/supabase/Client";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

export async function getServerSideProps() {
	return { props: {} };
}

export default function ProtectedPage() {
	const supabase = createClient();
	const [loading, setLoading] = useState(true);

	async function checkLoggedIn() {
		const { data, error } = await supabase.auth.getUser();
		if (error === null || !data?.user) {
			redirect("/");
		} else {
			setLoading(false);
		}
		console.log(data);
	}

	async function logOut() {
		let { error } = await supabase.auth.signOut();
		console.log(error);
		if (!error) {
			redirect("/");
		}
	}

	useEffect(() => {
		checkLoggedIn();
	}, []);

	if (loading) {
		return (
			<section className="flex justify-center items-center h-screen">
				<CircularProgress />
			</section>
		);
	}

	return (
		<>
			<header>
				<Link href="/">Go back home</Link>
				<button
					onClick={logOut}
					className="bg-amber-400 px-4 py-2 rounded-md m-4 w-fit"
				>
					Logout
				</button>
			</header>
			<main>
				<MovieList />
			</main>
		</>
	);
}
