import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cczadyajcuskpdbrwvhh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjemFkeWFqY3Vza3BkYnJ3dmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMTY0NzMsImV4cCI6MjAxNjU5MjQ3M30.rYCnGp3ZCgoixc8sdSjB9Y6Wg6MKk_2F3EQ9RxZj6LY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
