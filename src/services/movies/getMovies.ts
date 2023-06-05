import httpInstance from "services/httpInstance";

// Función asíncrona
// Lo único que va cambiar es cómo manejamos la data
export const getPopular = async() => {
          
          let res: any;
          const endpoint = `popular?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
          
          // en vez de .get podemos pasarle un .put o .post
          await httpInstance
          .get(endpoint)
          .then((data) => {
               res = data;
          })
          .catch((err) => {
               res = err.response;
          })
          return res;
}

export const getTopRated = async() => {
     let res: any;
     const endpoint = `top_rated?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;;

     await httpInstance.get(endpoint)
                    .then((data) => {
                         res = data;
                    })
                    .catch((err) => {
                         res = err.response;
                    })
     return res;
}

export const getNowPlaying = async() => {
     let res: any;
     const endpoint = `now_playing?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;

     await httpInstance.get(endpoint)
                    .then((data) => {
                         res = data;
                    })
                    .catch((err) => {
                         res = err.response;
                    })
          
     return res;
}

export const getRecommendations = async(movieId: string | undefined) => {
     let res: any;
     const endpoint = `${movieId}/recommendations?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;

     await httpInstance.get(endpoint)
                    .then((data) => {
                         res = data;
                    })
                    .catch((err) => {
                         res = err.response;
                    })
          
     return res;
}

export const getMovieId = async(movieId: string | undefined) => {
     let res: any;
     const endpoint = `${movieId}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
     
     await httpInstance.get(endpoint)
                    .then((data) => {
                         res = data;
                    })
                    .catch((err) => {
                         res = err.response;
                    })
     return res;
}

/*
export const getPopular = async(data) => {
          let res: any;
          const endpoint = `popular?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
          await httpInstance.post(endpoint, {})
}
*/
