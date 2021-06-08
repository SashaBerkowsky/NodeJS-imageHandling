import { createEmailComprobante } from "./EmailComprobante.js";

async function crearEmailModule(auth, adminEmail) {
  const emailComprobante = await createEmailComprobante(auth.mail, auth.pass);

  return {
    avisoAPaciente: (paciente) => {
      const mensaje = `${paciente.nombre} ${paciente.apellido} te avisamos que estas en la lista de espera para ser vacunado, te notificaremos cuando tengas un turno asignado`;

      const datosMail = {
        from: auth.user,
        to: paciente.email,
        asunto: "VACUNACION",
        mensaje: mensaje,
      };
      emailComprobante.send(datosMail);
    },
    avisoAAdmin: (paciente) => {
      const datosPaciente = `Nombre: ${paciente.nombre} ${paciente.apellido} <br/>
      Dni: ${paciente.dni} <br/>
      Edad: ${paciente.edad} <br/>
      Email: ${paciente.email} <br/>
      Antecedentes: ${paciente.antecedentes}`;
      const mensaje = `Nuevo paciente ingresado a la lista de espera, revise los datos y confirme su admision para asignarle un turno <br/> Datos del paciente: <br/>${datosPaciente}`;

      const datosMail = {
        from: auth.user,
        to: adminEmail,
        asunto: "Vacunatorio: Nuevo paciente ingresado",
        mensaje: mensaje,
        fileName: paciente.foto.fileName,
        root: paciente.foto.filePath,
        type: paciente.foto.type,
      };

      emailComprobante.sendWithImage(datosMail);
    },
  };
}

export { crearEmailModule };
