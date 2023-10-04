import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement fro you to accept</p>
    </Modal>
  );

  return (
    <div>   
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies
        enim elit, nec commodo tortor finibus et. Ut laoreet tincidunt posuere.
        Fusce tellus leo, tempor ac molestie vel, pretium a nibh. Vestibulum
        placerat ante eros, vel vestibulum tortor lobortis eget. Nullam
        scelerisque ornare purus sit amet molestie. Ut venenatis venenatis
        risus, quis bibendum ligula finibus vitae. Duis venenatis pellentesque
        dolor, vitae vestibulum eros. Quisque et nibh lacinia, sagittis orci sit
        amet, mattis turpis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Fusce vulputate eros quam, at
        vulputate urna tempor venenatis. Proin at mattis magna. Aliquam erat
        volutpat. Sed at suscipit risus. Suspendisse id sollicitudin mi.
        Vestibulum dignissim, nisi id efficitur facilisis, ipsum dolor ultrices
        leo, eu laoreet leo turpis at ex.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies
        enim elit, nec commodo tortor finibus et. Ut laoreet tincidunt posuere.
        Fusce tellus leo, tempor ac molestie vel, pretium a nibh. Vestibulum
        placerat ante eros, vel vestibulum tortor lobortis eget. Nullam
        scelerisque ornare purus sit amet molestie. Ut venenatis venenatis
        risus, quis bibendum ligula finibus vitae. Duis venenatis pellentesque
        dolor, vitae vestibulum eros. Quisque et nibh lacinia, sagittis orci sit
        amet, mattis turpis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Fusce vulputate eros quam, at
        vulputate urna tempor venenatis. Proin at mattis magna. Aliquam erat
        volutpat. Sed at suscipit risus. Suspendisse id sollicitudin mi.
        Vestibulum dignissim, nisi id efficitur facilisis, ipsum dolor ultrices
        leo, eu laoreet leo turpis at ex.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies
        enim elit, nec commodo tortor finibus et. Ut laoreet tincidunt posuere.
        Fusce tellus leo, tempor ac molestie vel, pretium a nibh. Vestibulum
        placerat ante eros, vel vestibulum tortor lobortis eget. Nullam
        scelerisque ornare purus sit amet molestie. Ut venenatis venenatis
        risus, quis bibendum ligula finibus vitae. Duis venenatis pellentesque
        dolor, vitae vestibulum eros. Quisque et nibh lacinia, sagittis orci sit
        amet, mattis turpis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Fusce vulputate eros quam, at
        vulputate urna tempor venenatis. Proin at mattis magna. Aliquam erat
        volutpat. Sed at suscipit risus. Suspendisse id sollicitudin mi.
        Vestibulum dignissim, nisi id efficitur facilisis, ipsum dolor ultrices
        leo, eu laoreet leo turpis at ex.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies
        enim elit, nec commodo tortor finibus et. Ut laoreet tincidunt posuere.
        Fusce tellus leo, tempor ac molestie vel, pretium a nibh. Vestibulum
        placerat ante eros, vel vestibulum tortor lobortis eget. Nullam
        scelerisque ornare purus sit amet molestie. Ut venenatis venenatis
        risus, quis bibendum ligula finibus vitae. Duis venenatis pellentesque
        dolor, vitae vestibulum eros. Quisque et nibh lacinia, sagittis orci sit
        amet, mattis turpis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Fusce vulputate eros quam, at
        vulputate urna tempor venenatis. Proin at mattis magna. Aliquam erat
        volutpat. Sed at suscipit risus. Suspendisse id sollicitudin mi.
        Vestibulum dignissim, nisi id efficitur facilisis, ipsum dolor ultrices
        leo, eu laoreet leo turpis at ex.
      </p>

      
    </div>
  );
}

export default ModalPage;
