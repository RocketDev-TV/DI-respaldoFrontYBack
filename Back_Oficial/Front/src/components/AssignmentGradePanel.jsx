import React from 'react';
import { fetchUsuarios } from '../services/authApi';
import { fetchAsignaciones } from '../services/contenidoApi';
import {
  fetchCalificacionesAsignacion,
  guardarCalificacionAsignacionRemota,
} from '../services/evaluacionApi';

const AssignmentGradePanel = () => {
  const [usuarios, setUsuarios] = React.useState([]);
  const [grupo, setGrupo] = React.useState('');
  const [parcial, setParcial] = React.useState(1);
  const [asignaciones, setAsignaciones] = React.useState([]);
  const [calificaciones, setCalificaciones] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const grupos = React.useMemo(() => {
    const unique = new Set(
      usuarios.filter((item) => item.tipo === 'alumno' && item.grupo).map((item) => item.grupo),
    );
    return Array.from(unique).sort();
  }, [usuarios]);

  const alumnos = React.useMemo(
    () => usuarios.filter((item) => item.tipo === 'alumno' && item.grupo === grupo),
    [grupo, usuarios],
  );

  React.useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsuarios();
        setUsuarios(data);
        const firstGroup = data.find((item) => item.tipo === 'alumno' && item.grupo)?.grupo || '';
        setGrupo(firstGroup);
      } catch (loadError) {
        setError(loadError.message || 'No fue posible cargar los usuarios.');
      }
    };

    loadUsers();
  }, []);

  React.useEffect(() => {
    if (!grupo) return;

    const loadAssignments = async () => {
      setLoading(true);
      setError('');
      try {
        const [asignacionesData, calificacionesData] = await Promise.all([
          fetchAsignaciones({ periodo: parcial, grupo }),
          fetchCalificacionesAsignacion({ periodo: parcial, grupo }),
        ]);
        setAsignaciones(asignacionesData.filter((item) => item.activa));
        setCalificaciones(calificacionesData);
      } catch (loadError) {
        setError(loadError.message || 'No fue posible cargar asignaciones.');
      } finally {
        setLoading(false);
      }
    };

    loadAssignments();
  }, [grupo, parcial]);

  const obtenerCalificacion = (estudianteId, asignacionId) =>
    calificaciones.find(
      (item) =>
        Number(item.alumnoId) === Number(estudianteId) &&
        Number(item.asignacionId) === Number(asignacionId),
    )?.calificacion ?? '';

  const handleGradeChange = async (estudianteId, asignacionId, value) => {
    const numericValue = value === '' ? '' : Number(value);
    if (numericValue !== '' && (Number.isNaN(numericValue) || numericValue < 0 || numericValue > 100)) {
      return;
    }
    if (numericValue === '') {
      return;
    }

    const calificacionGuardada = await guardarCalificacionAsignacionRemota({
      grupo,
      alumnoId: estudianteId,
      parcial,
      asignacionId,
      calificacion: numericValue,
      observaciones: '',
    });

    setCalificaciones((actuales) => {
      const sinActual = actuales.filter(
        (item) =>
          !(
            Number(item.alumnoId) === Number(estudianteId) &&
            Number(item.asignacionId) === Number(asignacionId) &&
            Number(item.parcial) === Number(parcial)
          ),
      );
      return [...sinActual, calificacionGuardada];
    });
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-bold text-gray-900">Calificación por asignación</h2>
        <p className="mt-1 text-sm text-gray-500">
          El administrador puede calificar cada entrega por parcial y por grupo.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <select
            value={grupo}
            onChange={(event) => setGrupo(event.target.value)}
            className="rounded-lg border border-gray-300 px-4 py-2"
          >
            {grupos.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            value={parcial}
            onChange={(event) => setParcial(Number(event.target.value))}
            className="rounded-lg border border-gray-300 px-4 py-2"
          >
            <option value={1}>Parcial 1</option>
            <option value={2}>Parcial 2</option>
            <option value={3}>Parcial 3</option>
          </select>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        {error && <p className="mb-4 text-sm text-red-700">{error}</p>}
        {loading ? (
          <p className="text-sm text-gray-500">Cargando asignaciones...</p>
        ) : asignaciones.length === 0 ? (
          <p className="text-sm text-gray-500">No hay asignaciones activas para este filtro.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-[0.2em] text-gray-400">
                  <th className="pb-3">Alumno</th>
                  {asignaciones.map((asignacion) => (
                    <th key={asignacion.id} className="pb-3 min-w-[180px]">
                      <div className="font-semibold text-gray-600">{asignacion.titulo}</div>
                      <div className="mt-1 text-[11px] normal-case tracking-normal text-gray-400">
                        {asignacion.porcentaje}% · {asignacion.videos?.length || 0} video(s)
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno) => {
                  return (
                    <tr key={alumno.id} className="border-b border-gray-100">
                      <td className="py-4 pr-4">
                        <div className="font-semibold text-gray-900">
                          {alumno.nombre} {alumno.apellido}
                        </div>
                        <div className="text-sm text-gray-500">{alumno.email}</div>
                      </td>
                      {asignaciones.map((asignacion) => (
                        <td key={asignacion.id} className="py-4 pr-4">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={obtenerCalificacion(alumno.id, asignacion.id)}
                            onChange={(event) =>
                              handleGradeChange(alumno.id, asignacion.id, event.target.value)
                            }
                            className="w-24 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                            placeholder="0-100"
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentGradePanel;
