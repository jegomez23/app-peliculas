export async function getMovies() {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=es-ES`)
        const objeto = await respuesta.json()
        return objeto
    }

export async function getTopRated() {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=es-ES`)
        const objeto = await respuesta.json()
        return objeto
    }

export async function getRevenue() {
        const respuesta = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=es-ES&sort_by=revenue.desc`)
        const objeto = await respuesta.json()
        return objeto
    }

export async function fetchPeli(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
    const data = await res.json()
    console.log(data)
    return data
}


// Trae los vídeos de las pelis
export async function fetchPeliTrailer(idPeli) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${idPeli}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos`,
    );
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    const allTrailers = data.videos.results;
    // Pilla el primer trailer que encuentres
    const trailer = allTrailers.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    return trailer;
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}



export async function fetchBusqueda(query) {
  try {
    // Punto de aprendizaje: encodeURIComponent para que los caracteres especiales (espacios, acentos) no rompan la URL.
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=es-ES`
    );
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    const data = await res.json();
    console.log(data) // Siempre nos va a dar 20 resultados como máximo
    return data; // { results: [], total_results: N, ... }
  } catch (error) {
    console.error("Error en la búsqueda:", error);
  }
}
