import { proyectos } from '../data/proyectos'

export default function Proyectos() {
  return (
    <main className="screen">
      <h1 className="screen-title">Proyectos</h1>
      <div className="card-list">
        {proyectos.map((p) => (
          <article key={p.id} className="card">
            <h2>{p.nombre}</h2>
            <p className="card-text">{p.descripcion}</p>
            <ul className="tag-list">
              {p.tecnologias.map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  )
}