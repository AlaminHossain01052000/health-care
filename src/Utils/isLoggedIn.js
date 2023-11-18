

export  const isLoggedIn=()=>{
    const authToken = localStorage.getItem('authToken');
 
if (authToken) {
  // User is logged in
  // Set authentication state, load user data, etc.
  return authToken
} else {
  // User is not logged in
  return null
}
}
