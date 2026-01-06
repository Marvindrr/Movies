const APY_KEY = '44035542'

export const searchMovies = async ({search}) => {
    if (!search) return []

    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${APY_KEY}&s=${search}`)
        
        const json = await response.json()
        if (json.Response === 'False') return []

  
        return json.Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
  }))
    } catch(e){
        throw new Error('Error searching movies')
    }
}