import axios from "axios"
import{useState} from 'react'
import './App.css'

type GithubData= {
  name:string;
  bio:string;
  avatar_url:string;
}


function App() {
  const[username, SetUsername] = useState("")
  const[name, Setname] = useState("loading...")
  const[bio, Setbio] = useState("loading...")
  const[avatar_url, SetAvatarURL] = useState("loading...")

const Handlepesquisa = () =>{
  axios.get<GithubData>(`https://api.github.com/users/${username}`).then((response) => {
    Setname(response.data.name)
    Setbio(response.data.bio)
    SetAvatarURL(response.data.avatar_url)
  })

}
  
  return (
   <div className="container-geral">
    <div className="container">
      <header className="header-top">Projeto EMIDES2AM </header>

      <main>
        <div className="form">
          <h1>Consumindo Api do Github</h1>
          <input type="text"placeholder="Digite o Usuario"onChange={(e) => SetUsername(e.target.value)} />
          <button onClick={Handlepesquisa}>Consultar</button>
        </div>
        <div className="conteudo">
        <div>
          <img src = {avatar_url}/>
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
        </div>
      </main>
    </div>
   </div>
  )
}

export default App
