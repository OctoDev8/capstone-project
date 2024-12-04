import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const SupaBase = createClient(supabaseUrl, supabaseKey);

export default SupaBase;
