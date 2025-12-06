import { WindowControls } from "@components";
import windowWrapper from "@hoc/windowWrapper"
import useWindowStore from "@store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const { name, imageUrl } = windows.imgfile.data || {};

    if (!windows.imgfile.data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name || 'Untitled Image'}</h2>
            </div>

            <div className="image-window p-4 flex justify-center items-center h-full">
                <img 
                    src={imageUrl} 
                    alt={name || 'Image preview'} 
                    className="max-w-full max-h-[calc(100%-50px)] object-contain rounded-lg"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/error-image.png'; // Fallback image
                    }}
                />
            </div>
        </>
    );
};

const ImageWindow = windowWrapper(Image, "imgfile");

export default ImageWindow;
