import {subtitle } from "@/components/primitives";
import Image from "next/image";

export interface LCProps {
	fluency: string;
	languages: string[];
    avatarFnames: string[];
}

export const LanguagesCard = ({lcp}: {lcp: LCProps}) => {
    return (
        <div>
            <h2 className={subtitle()}>{lcp.fluency}</h2>
            <div className = "flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/5">
                    <ul className="list-disc list-inside indent-4 my-2">
                        {lcp.languages.map((item) => (<li key={item}>{item}</li>))}
                    </ul>
                </div>
                {<div className="w-full md:w-3/5 my-4 md:my-0 flex gap-8 justify-center">
                    {lcp.avatarFnames.map((item) => (
                        <div key={item} className="w-16 h-16 border-neutral-600 border-2 rounded">
                            <Image src={item} height={64} width={64} alt="country"/>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
};