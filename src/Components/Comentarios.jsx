import React from "react";
import "../css/Comentarios.css";

function Comentarios() {
  return (
    <div className="Comentarios">
      <div className="Comentario">
        <div className="user">
          <img src="/images/avatar1.png" alt="" />
          <h3>Daniel Rivera</h3>
        </div>
        <div className="Text">
          Me encanta esta app, es muy útil para escuchar mis canciones favoritas
          y descubrir nuevas. Tiene una gran variedad de géneros y artistas, y
          la calidad del sonido es excelente. La recomiendo mucho.
        </div>
      </div>
      <div className="Comentario">
        <div className="user">
          <img src="/images/avatar2.png" alt="" />
          <h3>Claudia lopez</h3>
        </div>
        <div className="Text">
          Musicify es una app maravillosa, me ayuda a relajarme y a disfrutar de
          la música. Tiene una interfaz muy bonita y fácil de usar, y me permite
          crear mis propias listas de reproducción. Es la mejor app de música
          que he probado.
        </div>
      </div>
      <div className="Comentario">
        <div className="user">
          <img src="/images/avatar3.png" alt="" />
          <h3>Juan Camargo</h3>
        </div>
        <div className="Text">
          Esta app es increíble, tiene todo lo que necesito para escuchar
          música. Puedo buscar por canción, artista, álbum o género, y me
          sugiere canciones que me pueden gustar. También puedo descargar las
          canciones para escucharlas sin conexión.
        </div>
      </div>
    </div>
  );
}

export default Comentarios;
