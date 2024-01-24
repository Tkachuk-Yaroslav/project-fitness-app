// import React from "react";
// import Modal from "react-modal";

// import { ButtonCloseModal, ModalStyles } from "./ModalOrder.styled";

// const ModalOrder = ({ isOpen, closeModal }) => {
//   return (
//     <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
//       {/* <ModalContent closeModal={closeModal} /> */}

//       <div>
//         <ButtonCloseModal onClick={closeModal}></ButtonCloseModal>
//         <h2>Order now</h2>
//         <p>Текст модального окна</p>
//         <form class="form js-speaker-form" autocomplete="on">
//           <div class="form-contacts">
//             <div class="form-field">
//               <label for="username" class="form-label">
//                 Name
//               </label>
//               <div class="input-wrap">
//                 <input
//                   class="form-input"
//                   type="text"
//                   name="username"
//                   id="username"
//                 />
//                 <svg class="icon-form" width="18" height="24">
//                   <use href="./images/icons.svg#icon-name"></use>
//                 </svg>
//               </div>
//             </div>

//             <div class="form-field">
//               <label for="e-mail" class="form-label">
//                 Email
//               </label>
//               <div class="input-wrap">
//                 <input
//                   class="form-input"
//                   type="email"
//                   name="e-mail"
//                   id="e-mail"
//                 />
//                 <svg class="icon-form" width="15" height="12">
//                   <use href="./images/icons.svg#icon-email"></use>
//                 </svg>
//               </div>
//             </div>

//             <div class="form-field">
//               <label for="phone_number" class="form-label">
//                 Phone
//               </label>
//               <div class="input-wrap">
//                 <input
//                   class="form-input"
//                   type="tel"
//                   name="phone_number"
//                   id="phone_number"
//                 />
//                 <svg class="icon-form" width="13" height="13">
//                   <use href="./images/icons.svg#icon-phone"></use>
//                 </svg>
//               </div>
//             </div>
//             <div class="form-field">
//               <label for="comment" class="form-label">
//                 Comment
//               </label>
//               <textarea
//                 class="form-textarea"
//                 name="comment"
//                 id="comment"
//                 rows="10"
//                 placeholder="Text input"
//               ></textarea>
//             </div>
//           </div>
//           <button type="submit" class="form-btn">
//             Send
//           </button>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default ModalOrder;

import React from "react";
import Modal from "react-modal";
import { ButtonCloseModal, ModalStyles } from "./ModalOrder.styled";

const ModalOrder = ({ isOpen, closeModal }) => {
  return (
    <Modal style={ModalStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <div>
        <ButtonCloseModal onClick={closeModal}></ButtonCloseModal>
        <h2>Order now</h2>
        <p>Текст модального окна</p>
        <form class="form js-speaker-form" autocomplete="on">
          {/* ... (rest of the form code) */}
          <button type="submit" class="form-btn">
            Send
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalOrder;
