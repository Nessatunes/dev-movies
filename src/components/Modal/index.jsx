import { useEffect, useState } from "react";
import { Container, Background, CloseButton } from "./styles";
import { getMovieVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideos(movieId));
    }
    getMovies();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Background onClick={handleCloseModal}>
      {movie && (
        <Container onClick={(e) => e.stopPropagation()}>
          <iframe
            src={`https://www.youtube.com/embed/${movie[0].key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
          <div>{movieId}</div>
        </Container>
      )}
    </Background>
  );
}
export default Modal;
