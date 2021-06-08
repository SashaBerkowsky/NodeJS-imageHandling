function crearDaoPacientes() {
  const pacientes = [];

  return {
    add: (paciente) => {
      pacientes.push(paciente);
    },
    addUnique: (paciente, clave) => {
      const existe = pacientes.some((p) => {
        return p[clave] === paciente[clave];
      });
      if (existe) {
        return { added: 0 };
      } else {
        pacientes.push(paciente);
        return { added: 1 };
      }
    },
    getAll: () => {
      return [...pacientes];
    },
    deleteByKey: (key, value) => {
      const indicePaciente = pacientes.findIndex((p) => p[key] == value);
      if (indicePaciente === -1) {
        return { deleted: 0 };
      } else {
        const paciente = pacientes[indicePaciente];
        pacientes.splice(indicePaciente, 1);
        return { deleted: 1, paciente };
      }
    },
  };
}

export { crearDaoPacientes };
