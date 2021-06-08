import { crearSolicitudDeTurno } from "./modelos/SolicitudDeTurno.js";

function HabilitarSolicitud(daoSolicitudesDeTurno, emailModule) {
  return {
    ejecutar: (datosSolicitud) => {
      const solicitud = crearSolicitudDeTurno(datosSolicitud);
      const fueAgregado = daoSolicitudesDeTurno.add(solicitud);
      if (!fueAgregado) {
        throw new Error("el paciente ya esta en la lista de espera");
      }
      emailModule.avisoAPaciente(paciente);
      emailModule.avisoAAdmin(paciente);
      return solicitud;
    },
  };
}

export { HabilitarSolicitud };
