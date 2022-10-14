import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {StyledList} from './ImageGallery.styled'

export const ImageGallery = ({items}) => {
    return (
        <StyledList >
            {items.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                    key={id}
                    smallImgLink = {webformatURL}
                    largeImgLink={largeImageURL}
                    
                    />
                )
            }
                
               
            )}
        </StyledList>
    )
}
 














//  <ul>
//                 {items.hits?.map(({ previewURL: src}) => {
//                     return (
//                         <li  className="gallery-item">
//                             <img src={src} alt="" />
//                         </li>
//                     )
                    
//                 })}
//             </ul>