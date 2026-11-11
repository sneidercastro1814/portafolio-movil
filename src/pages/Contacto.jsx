const contactos = [
  { id: 1, texto: 'GitHub: sneidercastro1814', href: 'https://github.com/sneidercastro1814' },
  { id: 2, texto: 'Correo: jhonson123456789castro@gmail.com', href: 'mailto:jhonson123456789castro@gmail.com' },
  { id: 3, texto: 'WhatsApp: 311 518 1230', href: 'https://wa.me/573115181230' },
]

export default function Contacto() {
  return (
    <main className="screen">
      <h1 className="screen-title">Contacto</h1>
      <ul className="contact-list">
        {contactos.map((c) => (
          <li key={c.id}>
            <a className="contact-link" href={c.href} target="_blank" rel="noreferrer">
              {c.texto}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}