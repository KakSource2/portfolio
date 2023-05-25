import "./Contact.css";

const Contact = ({ english }: { english: boolean }) => {
  return (
    <article className="Contact">
      <h3>{english ? "CONTACT ME" : "CONTACTO"}</h3>
      <form>
        <label>
          <p>{english ? "Name" : "Nombre"}</p>
          <input type="text" />
        </label>
        <label>
          <p>Email</p>
          <input type="text" />
        </label>
        <label>
          <p>{english ? "Message" : "Mensaje"}</p>
          <textarea></textarea>
        </label>
        <button>{english ? "Send" : "Enviar"}</button>
      </form>
    </article>
  );
};

export default Contact;
