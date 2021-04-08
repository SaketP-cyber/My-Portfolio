import React from "react";
import Gallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import "./ImageGallery.css"
const ImageGallery=(props)=>{
    const ImageList=props?.images.map((image)=>{
        return {
            original:image,
            thumbnail:image,
        };
    });
   return (
       <div>
           <Gallery items={ImageList} showBullets={true}/>
       </div>
   )
}
export default ImageGallery;