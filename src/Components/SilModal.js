import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import { api } from "../api";

const SilModal = ({ yazi, push }) => {
  const [open, setOpen] = useState(false);
  const [hata, setHata] = useState("");
  const show = () => setOpen(true);
  const close = () => setOpen(false);

  const handleDelete = (id) => {
    console.log(id);
    api()
      .delete(`/posts/${id}`)
      .then(() => {
        console.log("sil");
        setHata("");
        close();
        push("/");
      })
      .catch(() => {
        setHata("Yazıyı silerken hata olustu");
      });
  };
  return (
    <React.Fragment>
      <Button color="red" onClick={show}>
        Sil
      </Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Bu yazıyı sil</Modal.Header>
        <Modal.Content>
          Bu yazıyı silmek istediğinizden emin misiniz?
          {hata && <p>{hata}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            İptal et
          </Button>
          <Button
            icon="delete"
            labelPosition="right"
            content="Evet,sil"
            onClick={() => handleDelete(yazi.id)}
          />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default SilModal;
