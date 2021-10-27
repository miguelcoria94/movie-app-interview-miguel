import React from "react";
import "./Movie.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(222, 184, 135, 0)",
  },
};

Modal.setAppElement("#root");

function Movie({ movieDetails, modalIsOpen, setIsOpen }) {
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>I am a modal</div>
        <form>
          <button onClick={closeModal}>close</button>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <div className="movie__container" data-aos="fade-in" onClick={openModal}>
        <div className="movie__image-container">
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />
        </div>
        <div className="movie__details">
          <div>
            <span className="movie__rating">
              <span className="fas fa-star movie__rating-icon"></span>{" "}
              {movieDetails.vote_average}
            </span>
            <span className="movie__vote-count">
              <span className="fas fa-user movie__vote-count-icon"></span>{" "}
              {movieDetails.vote_count}
            </span>
            <span className="movie__name">{movieDetails.original_title}</span>
          </div>
          <span className="movie__overview">{movieDetails.overview}</span>
        </div>
      </div>
    </>
  );
}

export default Movie;
