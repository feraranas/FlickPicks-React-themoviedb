import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getRecommendations } from "services/movies/getMovies";
import {
     ShowsSlider,
     ShowsTitle,
     ShowsSliderContent,
     LabelWithTumbs,
     HomeWrapper,
     ShowDetails,
     DescriptionData,
     DescriptionDataTitle,
     DescriptionDataNumbers,
     Blocke,
     DescriptionDataGenres,
     DescriptionDataFavorite,
     DescriptionDescription,
     PosterImage,
     ShowBox,
     FavoriteButton
} from "./styles"
import { MovieCard } from "components/MovieCard";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PublicIcon from '@mui/icons-material/Public';
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
     const [favoriteIds, setFavoriteIds] = useState<any[]>(() => JSON.parse(localStorage.getItem('favorites') || '[]'))



     // ====================================> FUNCTIONS
     const goBack = () => {
          navigate(-1);
     }

     const addToFavorites = () => {
          const newFavoriteIds = [...favoriteIds, id]
          setFavoriteIds(newFavoriteIds);
          setFavorite(true);
          localStorage.setItem('favorites', JSON.stringify(newFavoriteIds));
     }

     const removeFromFavorites = () => {
          let remoteFavoriteIds = [...favoriteIds];
          remoteFavoriteIds = remoteFavoriteIds.filter((c) => c !== id);
          setFavoriteIds(remoteFavoriteIds);
          setFavorite(false);
          localStorage.setItem('favorites', JSON.stringify(remoteFavoriteIds));
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

          if (favoriteIds.includes(id)) {
               setFavorite(true);
          } else {
               setFavorite(false);
          }
               
          setTimeout(() => {
              getRecommendationsMovies();
          }, 1000)
      }, [id]);
      

     // ====================================> MAIN RENDER
     return(
          <HomeWrapper>
               <ShowDetails>
                    <ShowBox>
                         <PosterImage src={poster_img}></PosterImage>
                    </ShowBox>
                    <DescriptionData>
                         <DescriptionDataTitle>
                              {location.state.name}
                         </DescriptionDataTitle>

                         <DescriptionDataNumbers>
                              <Blocke><GroupsIcon/>{location.state.adult ? (<div>18-</div>) : (<div>18+</div>)}</Blocke>
                              <Blocke><ThumbUpIcon />{location.state.vote_average}</Blocke>
                              <Blocke><WatchLaterIcon />{location.state.release_date}</Blocke>
                              <Blocke><PublicIcon />{location.state.vote_count}</Blocke>
                         </DescriptionDataNumbers>
                         
                         <DescriptionDescription>
                         {location.state.overview}
                         </DescriptionDescription>

                         <DescriptionDataGenres>
                         <div>Genre ids: {location.state.genre_ids}</div>
                         </DescriptionDataGenres>

                         <DescriptionDataFavorite>
                              <div>Favorite</div>
                         { isFavorite ? (<FavoriteButton onClick={removeFromFavorites} color="d9534f"><StarIcon fontSize='small' />Remove from Favorites</FavoriteButton>
                                        ): (<FavoriteButton onClick={addToFavorites} color="5cb85c"><StarBorderIcon fontSize='small' />Add to Favorites</FavoriteButton>
                                        )
                         }
                         </DescriptionDataFavorite>

                    </DescriptionData>
               </ShowDetails>
               <ShowsSlider>
                    <ShowsTitle>Recommendations</ShowsTitle>
                    <ShowsSliderContent>
                    <LabelWithTumbs>
                         {!loadingRecommendations ? (
                                   <div>
                                   {recommendationsMovies.length > 0 ? (
                                        recommendationsMovies.map((movie) => (
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
                                   ) : (
                                        <div>
                                             I found no recommendations.
                                        </div>
                                   )}
                                   </div>
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