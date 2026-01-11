async function checkAuth() {
  const { data: { session } } = await window.supabaseClient.auth.getSession()

  if (!session) {
    window.location.href = "index.html"
  }
}

checkAuth()