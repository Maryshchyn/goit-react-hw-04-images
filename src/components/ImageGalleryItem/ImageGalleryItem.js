import {StyledItem, StyledImage} from './ImageGalleryItem.styled'
import  Modal  from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
    state = {
        isOpenModal: false,
        largeImg: '',
    };
    
  openModal = e => {
    
    const largeImgLink = e.target.dataset.largeimglink;
    this.setState({
      largeImg: largeImgLink,
      isOpenModal: true,
    });
  };

  closeModal = e => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { largeImg, isOpenModal } = this.state;
    const { smallImgLink, tags, largeImgLink } = this.props;

    return (
      <StyledItem>
        <StyledImage
          src={smallImgLink}
          alt={tags}
          data-largeimglink={largeImgLink}
          onClick={this.openModal}
        />
        {isOpenModal && (
          <Modal closeModal={this.closeModal} largeImg={largeImg} />
        )}
      </StyledItem>
    );
  }
}
