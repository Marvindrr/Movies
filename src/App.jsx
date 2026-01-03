import './App.css'
import { useEffect, useRef, useState } from 'react'
import {Movies} from './components/movies'
import { useMovie } from './hooks/useMovies'
import console, { error } from 'node:console'

  function useSearch() {
    const [search,updateSearch] = useState('')
    const [error, setError] = useState(null)

      useEffect(() => {
        if(newQuery === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (newQuery.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(newQuery.length < 3 ){
      setError('La busqueda debe tener al menos  caracteres')
      return
    }

    setError(null)
  }, [query])
  return {search, updateSearch, error}
  }

function App() {
  const {movies} = useMovie()
  const {search, updateSearch, error} = useSearch() 

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log({search})
  }
 
  const handleChange = (event) =>{
    updateSearch(event.target.value)
  }



  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Starwars, The matrix ...'/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
