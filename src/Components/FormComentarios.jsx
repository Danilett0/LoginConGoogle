import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import "../css/FormularioContacto.css";

function FormComentarios() {
  const [comentario, setComentario] = useState(false);
  const [aviso, setAviso] = useState(false);

  let UserName =
    JSON.parse(localStorage.getItem("DataUser"))
      .name.split(" ")[0]
      .toLowerCase() || "";

  const onSubmit = (data, e) => {
    if (localStorage.getItem("DataUser")) {
      setAviso(false);
      setComentario(true);

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          data,
          process.env.REACT_APP_PUBLI_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    } else {
      setAviso(true);
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
      {!comentario && (
        <>
          <h3>Deja un mensaje...</h3>

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
            <input className="Button" type="submit" />
          </div>
        </>
      )}

      {comentario && (
        <b>
          Gracias por dejar tu comentario {UserName}, este será enviado para
          revision!
        </b>
      )}
      {aviso && <b>Para enviar un comentario, debes iniciar secion primero!</b>}
    </form>
  );
}

export default FormComentarios;
