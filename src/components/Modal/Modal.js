import { useEffect } from "react";
import { StyledOverlay, StyledModal, StyledImg } from './Modal.styled';
import { createPortal } from "react-dom";


const madalRoot = document.querySelector('#modal-root');

export function Modal({largeImg, closeModal}) {
  useEffect(() => {
const onClickEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
 
    
    window.addEventListener('keydown', onClickEsc);
    window.removeEventListener('keydown', onClickEsc);

    }, [closeModal]);

 const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
return createPortal(
            <StyledOverlay
                onClick={handleOverlayClick}>
            <StyledModal>
                
                <StyledImg src={largeImg} alt="" />
            </StyledModal>
        </StyledOverlay>, madalRoot);
  }

