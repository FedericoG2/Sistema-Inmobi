import { useState } from 'react';

export function FormReclamo() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nroContrato: '',
    area: '',
    descripcion: '',
    archivo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'archivo') {
      setFormData({ ...formData, archivo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del Reclamo:", formData);
    alert("Formulario enviado correctamente.");
  };

  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
  const inputStyle = { width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} required />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Apellido</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} style={inputStyle} required />
        </div>
      </div>

      <label style={labelStyle}>Correo Electrónico</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />

      <label style={labelStyle}>Número de Contrato</label>
      <input type="text" name="nroContrato" value={formData.nroContrato} onChange={handleChange} style={inputStyle} required />

      <label style={labelStyle}>Área de Reclamo</label>
      <select name="area" value={formData.area} onChange={handleChange} style={inputStyle} required>
        <option value="">Seleccione un área...</option>
        <option value="Administración">Administración</option>
        <option value="Ventas">Ventas</option>
        <option value="Mantenimiento">Mantenimiento</option>
        <option value="Legales">Legales</option>
      </select>

      <label style={labelStyle}>Descripción del Reclamo</label>
      <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="4" style={inputStyle} required />

      <label style={labelStyle}>Adjuntar Archivos (Fotos/Documentos)</label>
      <input type="file" name="archivo" onChange={handleChange} style={{ ...inputStyle, border: 'none' }} />

      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Enviar Formulario
      </button>
    </form>
  );
}