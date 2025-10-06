import styles from "./Contacto.module.css";

export default function Contacto() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("📨 Mensaje enviado a los moderadores. ¡Gracias por contactarnos!");
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>📬 Contacto</h2>

        <div className={styles.card}>
          <p>
            <strong>Dirección:</strong> Prontera Norte #9970
          </p>
          <p>
            <strong>Correo:</strong>{" "}
            <a href="mailto:kafra.runemidgard@ragnarok.com">
              kafra.runemidgard@ragnarok.com
            </a>
          </p>
          <p>
            <strong>Síguenos:</strong>{" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            ·{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            ·{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>

        {/* Formulario */}
        <section className={styles.formSection}>
          <h3 className={styles.subtitle}>📨 Enviar mensaje a los moderadores</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Nombre</label>
              <input type="text" required />
            </div>
            <div className={styles.field}>
              <label>Correo</label>
              <input type="email" required />
            </div>
            <div className={styles.field}>
              <label>Asunto</label>
              <input type="text" required />
            </div>
            <div className={styles.field}>
              <label>Localidad</label>
              <select required>
                <option value="">-- Selecciona tu ciudad --</option>
                <option>Prontera</option>
                <option>Geffen</option>
                <option>Payon</option>
                <option>Morroc</option>
                <option>Alberta</option>
                <option>Izlude</option>
                <option>Lutie</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Gremio / Clase</label>
              <select>
                <option value="">-- Selecciona gremio o clase --</option>
                <option>Knights of Prontera</option>
                <option>Assassins Guild</option>
                <option>Hunters Association</option>
                <option>Blacksmith Guild</option>
                <option>Wizard Academy</option>
                <option>Priesthood of Prontera</option>
                <option>Merchant Union</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea rows="4" required></textarea>
            </div>
            <button type="submit" className={styles.btnEnviar}>
              Enviar mensaje
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
