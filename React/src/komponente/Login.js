


const Login = ({imeKorisnika , setImeKorisnika, email, setEmail , kreirajKorisnikaFunc}) => {
 
  
 
 
 
 
 
    return (
    <div>
    <h2>Login Form</h2>
      <form onSubmit={(e)=> kreirajKorisnikaFunc(e)}>
        <label htmlFor="name">Vase Korisnicko ime:</label><br />
        <input
          type="text"
          id="name"
          value={imeKorisnika}
          onChange={(e)=>setImeKorisnika(e.target.value)}
        /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        /><br /><br />

        <button type="submit">Kreiraj profil</button>
      </form>

    
      
    </div>
  )
}

export default Login
