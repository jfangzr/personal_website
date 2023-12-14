import {subtitle } from "@/components/primitives";
import {Avatar} from "@nextui-org/react";

export class LCProps {
	fluency: string;
	languages: string[];
    avatarFnames: string[];

    constructor(fluency: string, languages: string[], avatarFnames: string[]) {
        this.fluency = fluency;
        this.languages = languages;
        this.avatarFnames = avatarFnames;
    }
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
                <div className="w-full md:w-3/5 my-4 md:my-0 flex gap-8 justify-center">
                    {lcp.avatarFnames.map((item) => (<Avatar isBordered src={item} key={item} size = "lg"/>))}
                </div>
            </div>
        </div>
    );
};