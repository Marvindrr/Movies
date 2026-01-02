import './App.css'
import { useRef } from 'react'
import {Movies} from './components/movies'
import { useMovie } from './hooks/useMovies'

function App() {
  const {movies} = useMovie()
  const inputRef = useRef()

  const handleClick = () =>{
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }

  return (

    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input ref={inputRef} placeholder='Avengers, Starwars, The matrix ...'/>
          <button onClick={handleClick} type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
