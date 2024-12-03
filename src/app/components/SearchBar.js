"use client";
import { useState } from "react";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";

export default function SearchBar({ onSearch }) {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input value={value} onChange={handleChange} label="Search for Movies" />
			<Button type="submit">Search</Button>
		</form>
	);
}
