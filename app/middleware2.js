import { NextResponse } from "next/server";
import { createClient } from "@/supabase/Client";

export async function middleware(req) {
	const supabase = createClient();
	const { data, error } = await supabase.auth.getUser();

	if (error || !data?.user) {
		return NextResponse.redirect(new URL("/", req.url)); // Redirect to home if not authenticated
	}

	return NextResponse.next(); // Proceed if authenticated
}

export const config = {
	matcher: ["/protected"], // Apply this to the /protected route
};
