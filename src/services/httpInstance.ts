import axios from "axios";
import Config from "config";

// headers que ya tengamos predefinidos
// el timeout
// en general todo lo que se pueda configurar en una petición http

// por el momento solo configuramos la url base

// si va a salir una petición es un interceptor tipo request. Si vamos a enviar es un interceptor tipo response.


// por ejemplo si escribimos la linea:
// newConfig.headers.Authorization = `Bearer ${jwtToken}`;
// newConfig.headers["X-Version"]
// antes de que salga el request se modifica y luego sale toda la nueva configuación.


const httpInstance = axios.create({
          baseURL: Config.API_URL,
});

// Add a request interceptor
httpInstance.interceptors.request.use(
          async (config) => {
               const newConfig = { ...config };
               return newConfig;
          },
          (error) => {
               return Promise.reject(error);
          }
);

// Add a response interceptor
httpInstance.interceptors.response.use(
          async (response) => {
               return response;
          },
          (error) => {
               return Promise.reject(error);
          }
);

export default httpInstance;