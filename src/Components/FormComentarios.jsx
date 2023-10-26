import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/FormularioContacto.css";

function FormComentarios(props) {

  // let imgAvatar = localStorage.getItem("Avatar-User") || "";
  const nameUser = localStorage.getItem("Name-User") || "";
  const emailUser = localStorage.getItem("Email-User") || "";

  const [comentario, setComentario] = useState(false);

  const onSubmit = (data) => {
    if (localStorage.getItem("Name-User")) {
      setComentario(true);
    } else {
      alert("Pleace login");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      style={{ position: "relative" }}
      className="FormContact"
      onSubmit={handleSubmit(onSubmit)}
    >
          <h3>Deja un mensaje...</h3>

      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Nombre"
            {...register("Nombre", {
              required: "Nombre requerido",
              value: nameUser,
              pattern: {
                value: /^[a-z\s]+$/i,
                message: "El nombre sólo puede contener letras",
              },
            })}
          />
          {errors.Nombre && <span>{errors.Nombre.message}</span>}
        </div>
      </div>

      <div className="Colx2">
        <div className="Col-1">
          <input
            placeholder="Correo Electronico"
            {...register("Email", {
              required: "El correo es requerido",
              value: emailUser,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "correo electrónico no válido",
              },
            })}
          />
          {errors.Email && <span>{errors.Email.message}</span>}
        </div>
      </div>

      <div className="Colx1">
        <textarea
          placeholder="Mensaje"
          name="mensaje"
          cols="5"
          rows="5"
          {...register("Mensaje", {
            required: "No olvides incluir un mensaje",
            minLength: {
              message: "El mensaje debe tener al menos 30 caracteres",
            },
          })}
        />
        {errors.Mensaje && <span>{errors.Mensaje.message}</span>}
      </div>

      <div className="Colx1">
        <input type="submit" />
      </div>

      {comentario && <b>Comentario enviado para revicion!</b>}
    </form>
  );
}

export default FormComentarios;
