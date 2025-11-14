import React, { useState } from "react";
import conferencias from "../../utils/data/conferencias.json";

const colores = {
  "23 de Junio del 2025": {
    boton: "#C73A86",
    categoria: "#C73A86",
    inputText: "#ad026b",
    texto: "#fff",
  },
  "24 de Junio del 2025": {
    boton: "#5CB4E1",
    categoria: "#5CB4E1",
    inputText: "#0593a7",
    texto: "#222",
  },
  "25 de Junio del 2025": {
    boton: "#EBB929",
    categoria: "#EBB929",
    inputText: "#d7a600",
    texto: "#222",
  },
  "26 de Junio del 2025": {
    boton: "#6FB4AD",
    categoria: "#6FB4AD",
    inputText: "#333",
    texto: "#fff",
  },
  "27 de Junio del 2025": {
    boton: "#743984",
    categoria: "#743984",
    inputText: "#333",
    texto: "#fff",
  },
};

const ordenarFechas = (a, b) => {
  const parse = (str) => {
    const [dia, , mes, , anio] = str.split(" ");
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    return new Date(
      parseInt(anio),
      meses.indexOf(mes.toLowerCase()),
      parseInt(dia)
    );
  };
  return parse(a) - parse(b);
};

const ordenarHoras = (a, b) => {
  const to24 = (hora) => {
    let [h, mrest] = hora.split(":");
    let [m, ap] = mrest.split(" ");
    h = parseInt(h);
    m = parseInt(m);
    ap = ap.toLowerCase();
    if (ap === "pm" && h !== 12) h += 12;
    if (ap === "am" && h === 12) h = 0;
    return h * 60 + m;
  };
  return to24(a.hora) - to24(b.hora);
};

const fechasUnicas = [...new Set(conferencias.map((c) => c.categoria))].sort(
  ordenarFechas
);

const ServiciosPage = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(fechasUnicas[0]);

  const conferenciasPorFecha = conferencias
    .filter((c) => c.categoria === fechaSeleccionada)
    .sort(ordenarHoras);
  function hexToRGBA(hex, alpha = 0.17) {
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = "0x" + hex[1] + hex[1];
      g = "0x" + hex[2] + hex[2];
      b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
    }
    return `rgba(${+r},${+g},${+b},${alpha})`;
  }
  function getFechaHoy(fechasUnicas) {
    const hoy = new Date();
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const dia = hoy.getDate();
    const mes = meses[hoy.getMonth()];
    const anio = hoy.getFullYear();

    const hoyStr = `${dia} de ${
      mes.charAt(0).toUpperCase() + mes.slice(1)
    } del ${anio}`;
    const encontrada = fechasUnicas.find(
      (f) =>
        f.toLowerCase().startsWith(`${dia} de ${mes}`) && f.endsWith(`${anio}`)
    );
    return encontrada || fechasUnicas[0];
  }
  return (
    <d
      className="py-5"
      style={{
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div className="">
        {/* Botones de fecha */}
        <h1 className="text-center mb-4">CONFERENCIAS POR DÍA</h1>
        <div className="d-flex gap-3 justify-content-center mb-4 flex-wrap">
          {fechasUnicas.map((fecha) => (
            <button
              key={fecha}
              className="btn btn-lg fw-bold"
              style={{
                borderRadius: 16,
                minWidth: 180,
                marginBottom: 10,
                fontSize: 18,
                color:
                  fecha === fechaSeleccionada
                    ? colores[fecha]?.texto || "#fff"
                    : colores[fecha]?.boton || "#347cf6",
                background:
                  fecha === fechaSeleccionada
                    ? colores[fecha]?.boton || "#347cf6"
                    : "#fff",
                border: `2px solid ${colores[fecha]?.boton || "#347cf6"}`,
                transition: "all .2s",
              }}
              onClick={() => setFechaSeleccionada(fecha)}
            >
              {fecha}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="row g-4 p-5">
          {conferenciasPorFecha.length === 0 ? (
            <div className="col-12 text-center text-muted">
              <i className="bx bx-calendar-x" style={{ fontSize: 48 }}></i>
              <p className="mt-3">No hay conferencias para esta fecha</p>
            </div>
          ) : (
            conferenciasPorFecha.map((c, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div
                  className="card h-100 shadow-lg"
                  style={{
                    borderRadius: "24px",
                    background: "#fff",
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 10px 40px rgba(64,40,120,0.25)",
                  }}
                >
                  <div className="card-body d-flex flex-column">
                    {/* Categoría e icono */}
                    <div className="d-flex align-items-center mb-3 justify-content-between">
                      <span
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: 44,
                          height: 44,
                          background: "rgba(255,255,255,0.07)",
                          borderRadius: 12,
                        }}
                      >
                        <i
                          className="bx bx-video"
                          style={{
                            fontSize: 28,
                            color: colores[c.categoria]?.categoria,
                          }}
                        ></i>
                      </span>
                      <span
                        style={{
                          background: colores[c.categoria]?.categoria,
                          color: colores[c.categoria]?.texto || "#fff",
                          borderRadius: 8,
                          fontWeight: 600,
                          fontSize: 13,
                          padding: "4px 16px",
                        }}
                      >
                        {c.categoria}
                      </span>
                    </div>

                    {/* Título y hora */}
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h3
                          className="fw-bold mb-1"
                          style={{ fontSize: 18, color: "#222" }}
                        >
                          {c.titulo}
                        </h3>
                        <p
                          style={{
                            color: "#000",
                            marginBottom: 18,
                            fontSize: 15,
                          }}
                        >
                          {c.descripcion}
                        </p>
                      </div>
                      <div className="text-end" style={{ minWidth: 90 }}>
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 21,
                            lineHeight: 1,
                            color: "#000",
                          }}
                        >
                          {c.hora}
                        </div>
                        <div style={{ fontSize: 13, color: "#000" }}>
                          {c.duracion}
                        </div>
                      </div>
                    </div>

                    {/* Ponente */}
                    <div className="mb-2">
                      <div
                        className="d-flex align-items-center"
                        style={{ fontSize: 15 }}
                      >
                        <i
                          className="bx bx-user me-2"
                          style={{ color: "#000", fontSize: 25 }}
                        />
                        <b style={{ color: "#000" }}>{c.ponente}</b>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label mb-1"
                        style={{ color: "#000", fontSize: 13 }}
                      >
                        Enlace de la conferencia:
                      </label>
                      <div className="input-group gap-2">
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          style={{
                            background: colores[c.categoria]?.inputBg,
                            color: colores[c.categoria]?.inputText || "#333",
                            border: `2px solid ${
                              colores[c.categoria]?.categoria
                            }`,
                            fontFamily: "monospace",
                            fontSize: 14,
                            borderRadius: 7,
                            fontWeight: 600,
                            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
                          }}
                          value={c.enlace}
                        />

                        <button
                          className="btn"
                          style={{
                            fontWeight: 600,
                            fontSize: 13,
                            borderRadius: 7,
                            background: colores[c.categoria]?.boton,
                            color: colores[c.categoria]?.texto || "#fff",
                            border: `2px solid ${colores[c.categoria]?.boton}`,
                            transition: "all .2s",
                          }}
                          onClick={() => {
                            navigator.clipboard.writeText(c.enlace);
                          }}
                        >
                          Copiar
                        </button>
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="d-flex align-items-center gap-2 mt-4">
                      <a
                        href={c.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn flex-grow-1 d-flex align-items-center justify-content-center"
                        style={{
                          background: colores[c.categoria]?.boton,
                          color: colores[c.categoria]?.texto || "#fff",
                          fontWeight: 600,
                          borderRadius: 8,
                          fontSize: 15,
                          minHeight: 42,
                          border: "none",
                          boxShadow: "0 2px 8px rgba(54,185,252,0.13)",
                        }}
                      >
                        <i
                          className="bx bx-calendar-event me-2"
                          style={{ fontSize: 18 }}
                        />
                        Unirse a la Conferencia
                      </a>
                      <button
                        className="btn d-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          borderRadius: 8,
                          minHeight: 42,
                          width: 42,
                          color: "#d5c7ee",
                          fontSize: 19,
                          border: "none",
                        }}
                      >
                        <i className="bx bx-time-five" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* VIDEO FUERA DEL CONTENEDOR */}
      <div
        className="video-container full-width"
        style={{ marginTop: "100px", marginBottom: "-25px" }}
      >
        {/* Video de fondo */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/uploads/maquilas-y-suplementos.mp4" type="video/mp4" />
          <source
            src="/uploads/maquilas-y-suplementos.webm"
            type="video/webm"
          />
          <source src="/uploads/maquilas-y-suplementos.ogg" type="video/ogg" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Fondo oscuro semitransparente */}
        <div className="video-overlay"></div>
        {/* Contenido */}
        <div className="content">
          <div className="title-container">
            <h3 className="title"></h3>
          </div>
          <div className="subheading">
            <h1 className="subheading-text"></h1>
          </div>
          <div className="description">
            <p className="description-text"></p>
          </div>
          <div className="button">
            <a
              href="https://share.hsforms.com/1HupIgxJyRuK3lu6qDPtB7gq5t92"
              target="_blank"
              className="button-link"
            >
              Inscribirse
            </a>
          </div>
        </div>
      </div>
    </d>
  );
};

export default ServiciosPage;
