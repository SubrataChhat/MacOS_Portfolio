import { WindowControls } from "@components";
import windowWrapper from "@hoc/windowWrapper"
import useWindowStore from "@store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const { name, image, subtitle, description } = windows.txtfile.data || {};

    if (!windows.txtfile.data) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name || 'Untitled'}</h2>
            </div>

            <div className="text-window p-4">
                {image && (
                    <div className="mb-4 flex justify-center">
                        <img 
                            src={image} 
                            alt={name || 'Preview'} 
                            className="max-w-full h-auto rounded-2xl object-contain"
                        />
                    </div>
                )}
                
                {subtitle && <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>}
                
                <div className="text-content">
                    {Array.isArray(description) ? (
                        description.map((paragraph, index) => (
                            <p key={index} className="mb-3">{paragraph}</p>
                        ))
                    ) : (
                        <p>{description || 'No content available'}</p>
                    )}
                </div>
            </div>
        </>
    );
};

const TextWindow = windowWrapper(Text, "txtfile");

export default TextWindow;
