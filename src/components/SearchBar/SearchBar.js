"use client";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";
import styles from "./searchbar.module.css";

export default function SearchBar({ value, handleChange, handleSubmit }) {
	return (
		<section>
			<form onSubmit={handleSubmit} className={styles.searchBar}>
				<Input value={value} onChange={handleChange} />
				<Button type="submit">Search</Button>
			</form>
		</section>
	);
}
