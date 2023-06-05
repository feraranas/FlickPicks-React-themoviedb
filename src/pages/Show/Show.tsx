import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getRecommendations } from "services/movies/getMovies";
import {
     ShowsSlider,
     ShowsTitle,
     ShowsSliderContent,
     LabelWithTumbs,
     HomeWrapper,
     ShowDetails,
     ShowContainer,
     ShowRow,
     Col,
     PosterImage,
     ShowBox,
     ImageContainer,
     FavoriteButton
} from "./styles"
import { MovieCard } from "components/MovieCard";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { MovieContext } from "contexts/MovieContext";

const Show = () => {
     const { id } = useParams();
     const location = useLocation();
     const navigate = useNavigate();
     const [recommendationsMovies, setRecommendationsMovies] = useState<any[]>([]);
     const poster_img = "https://image.tmdb.org/t/p/w500" + location.state.poster;
     const [isFavorite, setFavorite] = useState(false);
     const { favoriteMovies, addFavoriteMovie, removeFavoriteMovie } = useContext(MovieContext);

     const goBack = () => {
          navigate(-1);
     }
 
     const addFavoritesButton = () => {
          if (!isFavorite) {
               setFavorite(true);
               addFavoriteMovie(id);
          } else {
               setFavorite(false);
               removeFavoriteMovie(id);
          }
     }

     useEffect(() => {
          const getRecommendationsMovies = async() => {
            await getRecommendations(id)
              .then((res) => {
                if (res && res.data) {
                  setRecommendationsMovies(res.data.results);
                }
            })
              .catch((err) => {
                console.log(err, 'err');
              })
          }
          
          getRecommendationsMovies();
     });

     useEffect(() => {
          // Compruebo en local storage si existe una película con 
          // el id que viene de useParams();

          setFavorite(true);
     }, [id]);

     return(
          <HomeWrapper>
               <ShowDetails>
                    <ShowContainer>
                         <ShowRow>
                              <Col size={3}>
                                   <ShowBox>
                                   <ImageContainer>
                                   <PosterImage src={poster_img}></PosterImage>
                                   </ImageContainer>
                                   </ShowBox>
                              </Col>
                              <Col size={9}>
                              <div>{location.state.name}</div>
                              {location.state.adult ? (<div>18-</div>) : (<div>18+</div>)}
                              <div>Vote Average: {location.state.vote_average}</div>
                              <div>Release date: {location.state.release_date}</div>
                              <div>Vote count: {location.state.vote_count}</div>
                              <div>Description: {location.state.overview}</div>
                              <div>Genre ids: {location.state.genre_ids}</div>
                              { !isFavorite ? (<FavoriteButton onClick={addFavoritesButton} color="5cb85c"><StarBorderIcon fontSize='small' />Add to Favorites</FavoriteButton>
                                             ) : (<FavoriteButton onClick={addFavoritesButton} color="d9534f"><StarIcon fontSize='small' />Remove from Favorites</FavoriteButton>)
                              }
                              </Col>
                         </ShowRow>
                    </ShowContainer>
               </ShowDetails>
               <ShowsSlider>
                    <ShowsTitle>Recommendations</ShowsTitle>
                    <ShowsSliderContent>
                    <LabelWithTumbs>
                    {recommendationsMovies?.length > 0 ? (
                         recommendationsMovies.slice(0,8).map((movie) => (
                         <MovieCard
                              key={movie.id}
                              path={movie.poster_path}
                              isAdult={movie.adult}
                              title={movie.title}
                              voteAverage={movie.vote_average}
                              genreId={Object.values(movie.genre_ids)}
                              movieId={movie.id}
                              releaseDate={movie.release_date}
                              voteCount={movie.vote_count}
                              description={movie.overview}
                         />
                         ))
                    ) : (<div>Fetching</div>)}
                    </LabelWithTumbs>
                    </ShowsSliderContent>
               </ShowsSlider>
          </HomeWrapper>
     )
}

export default Show;