import { HabilitarPaciente } from "./src/HabilitarPaciente.js";
import { crearEmailModule } from "./src/moduloMailing/EmailModule.js";
import { crearDaoPacientes } from "./src/persistencia/daos/daoPacientes.js";

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
  const daoPacientes = crearDaoPacientes();
  const emailModule = await crearEmailModule(auth, "s.nberkowsky@gmail.com");
  const casoDeUso = HabilitarPaciente(daoPacientes, emailModule);

  try {
    const paciente = casoDeUso.ejecutar(yo);
    console.log(paciente);

    const pacienteErr = casoDeUso.ejecutar(yo);
    console.log("No se deberia mostrar este paciente:", pacienteErr);
  } catch (err) {
    console.error("Error habilitando paciente:", err.message);
  }
}

test();
