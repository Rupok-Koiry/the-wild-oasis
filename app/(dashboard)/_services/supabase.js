import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ycjfaxyxwecuifkwzwmi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljamZheHl4d2VjdWlma3d6d21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNzI5NTYsImV4cCI6MjAzMTk0ODk1Nn0.HxrP8NlqusHdlWsNm5xJzg-KftjLGmamssBS-i77Wh8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
