import { crearEmailModule } from "./src/moduloMailing/EmailModule.js";
import { crearDaoSolicitudesDeTurno } from "./src/persistencia/daos/daoSolicitudesDeTurno.js";
import { HabilitarSolicitud } from "./src/HabilitarSolicitud.js";

const yo = {
  nombre: "Sasha",
  apellido: "Berkowsky",
  edad: 20,
  dni: 42816270,
  email: "snberkowsky@gmail.com",
  antecedentes: "nada",
  foto: {
    root: "./uploads",
    fileName: "42816270 - Berkowsky Sasha.png",
    filePath: "./uploads/42816270 - Berkowsky Sasha.png",
    type: "image/png",
  },
};

const auth = {
  mail: "ort.proy.integrador.21@gmail.com",
  pass: "Ort123456",
};

async function test() {
  const emailModule = await crearEmailModule(auth, "s.nberkowsky@gmail.com");
  const daoSolicitudes = crearDaoSolicitudesDeTurno();
  const casoDeUso = HabilitarSolicitud(daoSolicitudes, emailModule);

  try {
    const solicitud = casoDeUso.ejecutar({ paciente: yo });
    console.log(solicitud);
  } catch (err) {
    console.error("Error habilitando paciente:", err.message);
  }
}

test();
