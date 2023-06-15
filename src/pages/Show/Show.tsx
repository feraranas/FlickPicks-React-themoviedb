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
import { CircularProgress } from "@mui/material";
import { IMAGE_SOURCE } from "constants/moviesMock";

const Show = () => {
     // ====================================> HOOKS
     const { id } = useParams();
     const location = useLocation();
     const navigate = useNavigate();
     const poster_img = IMAGE_SOURCE + location.state.poster;
     
     // ====================================> STATES
     const [loadingRecommendations, setLoadingRecommendations] = useState(false);
     const [isFavorite, setFavorite] = useState(false)
     const [recommendationsMovies, setRecommendationsMovies] = useState<any[]>([]);
     const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

     // ====================================> FUNCTIONS
     const goBack = () => {
          navigate(-1);
     }

     const addToFavorites = () => {
          const updatedIds = [...favoriteIds, parseInt(id!)]
          setFavoriteIds(updatedIds);
          setFavorite(true);
          localStorage.setItem('favorites', JSON.stringify(updatedIds));
     }

     const removeFromFavorites = () => {
          const currentIds = [...favoriteIds]
          setFavoriteIds(currentIds);
          setFavorite(false);
          localStorage.setItem('favorites', JSON.stringify(currentIds));
     }

     // ====================================> API CALLS
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
            setLoadingRecommendations(false);
        }

     // ====================================> USE EFFECT
     useEffect(() => {         
          setLoadingRecommendations(true);
          setTimeout(() => {
               getRecommendationsMovies();
          }, 1000)
     });

     // ====================================> MAIN RENDER
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
                              { !isFavorite ? (<FavoriteButton onClick={removeFromFavorites} color="5cb85c"><StarBorderIcon fontSize='small' />Add to Favorites</FavoriteButton>
                                             ) : (<FavoriteButton onClick={addToFavorites} color="d9534f"><StarIcon fontSize='small' />Remove from Favorites</FavoriteButton>)
                              }
                              </Col>
                         </ShowRow>
                    </ShowContainer>
               </ShowDetails>
               <ShowsSlider>
                    <ShowsTitle>Recommendations</ShowsTitle>
                    <ShowsSliderContent>
                    <LabelWithTumbs>
                         {!loadingRecommendations ? (
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
                         ) : (<div
                         style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100vh",
                         }}
                    >
                         <CircularProgress />
                    </div>)}
                    </LabelWithTumbs>
                    </ShowsSliderContent>
               </ShowsSlider>
          </HomeWrapper>
     )
}

export default Show;