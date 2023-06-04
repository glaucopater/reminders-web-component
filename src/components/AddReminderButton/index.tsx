import { useState } from "react";
import Modal from "../ReminderModal";

const AddReminderButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
      {modalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default AddReminderButton;
