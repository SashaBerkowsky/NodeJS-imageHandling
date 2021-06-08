import { crearPaciente } from "./modelos/Paciente.js";

function HabilitarPaciente(daoPacientes, emailModule) {
  return {
    ejecutar: (datosPaciente) => {
      const paciente = crearPaciente(datosPaciente);
      const { added } = daoPacientes.addUnique(paciente, "dni");
      if (!added) {
        throw new Error("el paciente ya esta en la lista de espera");
      }
      emailModule.avisoAPaciente(paciente);
      emailModule.avisoAAdmin(paciente);
      return paciente;
    },
  };
}

export { HabilitarPaciente };
