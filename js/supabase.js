// js/supabase.js
// Evitar redeclarar supabase si ya existe
if (typeof supabaseClient === "undefined") {
    const SUPABASE_URL = "https://cxxgshbnrwjapdifvnqv.supabase.co"
    const SUPABASE_ANON_KEY = "sb_publishable_Pg5Fm5LRVTsuVGwlLR-AdQ_RGZBU_eC"

    // Guardamos en una variable global única
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}