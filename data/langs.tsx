import {LCProps} from "@/components/languages"

const learningLangs: LCProps = {
    fluency: "Learning", 
    languages: ["Spanish / Español", "Italian / Italiano", "Polish / Polski"],
    avatarFnames: ["/flag-icons/es-square.png", "/flag-icons/it-square.png", "/flag-icons/pol-square.png"]
}

const fluentLangs: LCProps = {
    fluency: "Fluently", 
    languages: ["English", "Mandarin Chinese / 普通话中文", "French / Français"], 
    avatarFnames: ["/flag-icons/cn-square.png", "/flag-icons/en-square.png", "/flag-icons/fr-square.jpg"]
}


export const lcards = {
    "Fluently": fluentLangs,
    "Learning": learningLangs
}