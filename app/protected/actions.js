"use server";
import { createClient } from "@/supabase/Server";
import { redirect } from "next/navigation";

export async function checkAuthentication() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		redirect("/login");
	}
	return data?.user;
}
