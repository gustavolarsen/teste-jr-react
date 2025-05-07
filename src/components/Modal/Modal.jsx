import "./Modal.css";

const UserModal = ({ user, onClose }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal">
        <h2>{user.name}</h2>
        <p>E-mail: {user.email}</p>
        <p>City: {user.address.city}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </>
  );
};

export default UserModal;
