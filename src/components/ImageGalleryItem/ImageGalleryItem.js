import {StyledItem, StyledImage} from './ImageGalleryItem.styled'
import  Modal  from '../Modal/Modal';
import { useState } from 'react';


export function ImageGalleryItem ({ smallImgLink, tags, largeImgLink }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [largeImg, setLargeImg] = useState('')
  
  const openModal = e => {
    
    const largeImgLink = e.target.dataset.largeimglink;
   
     setLargeImg(largeImgLink);
     setIsOpenModal(true)
  };

  const closeModal = () => {
  setIsOpenModal(false)
    
  };



  return (
      <StyledItem>
        <StyledImage
          src={smallImgLink}
          alt={tags}
          data-largeimglink={largeImgLink}
          onClick={openModal}
        />
        {isOpenModal && (
          <Modal closeModal={closeModal} largeImg={largeImg} />
        )}
      </StyledItem>
  );
  

    };
    
