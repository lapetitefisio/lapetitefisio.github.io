async function logout() {
  if (!window.supabaseClient) {
    console.error("Supabase no inicializado")
    return
  }
  await window.supabaseClient.auth.signOut()
  window.location.href = "index.html"
}