"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/supabase/Server";

// login function
export async function login(formData) {
	const supabase = await createClient();
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const { error } = await supabase.auth.signInWithPassword(data);

	if (error) {
		console.error(error);
		redirect("/error");
	}
	revalidatePath("/", "layout");
	redirect("/protected");
}

// sign up function
export async function signup(formData) {
	const supabase = await createClient();
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const { error } = await supabase.auth.signUp(data);

	if (error) {
		console.error(error);
		redirect("/error");
	}
	revalidatePath("/", "layout");
	redirect("/");
}
