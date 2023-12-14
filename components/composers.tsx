import { useState } from "react";
import {Image} from "@nextui-org/react";
interface Props {
	source: string;
	caption: string;
    alt: string;
}

export const ComposersCard = ({source, caption, alt}: Props) => {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
	  setIsHovering(true);
	};
  
	const handleMouseOut = () => {
	  setIsHovering(false);
	};
    
    const hoverBrightness = () => {
        let className = 'rounded-md z-0'
        if (isHovering) {
            className += " brightness-50"
        }
        return className
    }

	return (
        <div className="max-w-xs sm:w-1/3 relative">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Image
                    className = {hoverBrightness()} 
                    alt= {alt} 
                    src = {source}
                />
            </div>
            {isHovering && 
                <p onMouseOver={handleMouseOver} className = "absolute text-white text-center italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    {caption}
                </p>
            }
        </div>
	);
};