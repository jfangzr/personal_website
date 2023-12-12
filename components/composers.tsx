import { useState } from "react";
import { render } from "react-dom";

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
  
	return (
        <div>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img 
                    className = "hover:brightness-50" 
                    alt= {alt} 
                    src = {source}
                />
            </div>
            {isHovering && 
                <p className = "absolute text-white italic top-2 left-2">
                    {caption}
                </p>
            }
        </div>
	);
};