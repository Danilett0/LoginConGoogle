import React from "react";
import '../css/Comentarios.css'

function Comentarios(props) {
  let imgAvatar = localStorage.getItem("Avatar-User") || "";

  return (
    <div className="Comentarios">
      <div className="Comentario">
        <div className="user">
          <img src={imgAvatar} alt="" />
          <p>claudia lopez</p>
        </div>
        <div className="Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          reiciendis eius eum atque neque dolorem, molestias dignissimos sed
          possimus corporis quia perspiciatis modi in facere dolor? Tempora
          ratione voluptatibus at?
        </div>
      </div>
      <div className="Comentario">
        <div className="user">
          <img src={imgAvatar} alt="" />
          <p>claudia lopez</p>
        </div>
        <div className="Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          reiciendis eius eum atque neque dolorem, molestias dignissimos sed
          possimus corporis quia perspiciatis modi in facere dolor? Tempora
          ratione voluptatibus at?
        </div>
      </div>
      <div className="Comentario">
        <div className="user">
          <img src={imgAvatar} alt="" />
          <p>claudia lopez</p>
        </div>
        <div className="Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          reiciendis eius eum atque neque dolorem, molestias dignissimos sed
          possimus corporis quia perspiciatis modi in facere dolor? Tempora
          ratione voluptatibus at?
        </div>
      </div>
    </div>
  );
}

export default Comentarios;
