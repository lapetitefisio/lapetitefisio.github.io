async function logout() {
  await window.supabaseClient.auth.signOut()
  window.location.href = "index.html"
}