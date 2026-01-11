async function checkAuth() {
  if (!window.supabaseClient) {
    console.error("Supabase no inicializado")
    return window.location.href = "index.html"
  }

  const { data: { session } } = await window.supabaseClient.auth.getSession()

  if (!session) {
    window.location.href = "index.html"
  }
}

checkAuth()