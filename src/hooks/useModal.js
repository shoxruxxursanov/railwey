import React from "react";

export function useModal() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const CloseModal = () => setModal(false);
  const OpenModal = () => setModal(true);
  return { toggleModal, modal, CloseModal, OpenModal };
}
