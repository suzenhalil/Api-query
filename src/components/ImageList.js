import ImageItem from "./ImageItem";

function ImageList({imagePlaceHolder}) {
    return ( <div className="imageList">
        {imagePlaceHolder.map((image,index)=>{
return <ImageItem key={index} image={image}/>;
        })}
    </div> );
}

export default ImageList;