import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/Modal";
import Slider from "../../components/Slider";

import { getMovies, getTopMovies } from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Info, Poster, Container } from "./styles";

function Movie() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([getMovies(), getTopMovies()])
        .then(([movie, topMovies]) => {
          setMovie(movie);
          setTopMovies(topMovies);
        })
        .catch((error) => console.error(error));
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </Info>
            <Poster>
              <img alt="capa do filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
    </>
  );
}
export default Movie;
