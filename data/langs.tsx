import {LCProps} from "@/components/languages"

export const lcards = {
    "Fluently":  new LCProps("Fluently", 
                                ["English", 
                                 "Mandarin Chinese / 普通话中文", 
                                 "French / Français"], 
                                 ["/flag-icons/cn-square.png", 
                                  "/flag-icons/en-square.png", 
                                  "/flag-icons/fr-square.jpg"]), 
    "Basic": new LCProps("Basic", 
                        ["Spanish / Español", 
                         "Italian / Italiano"], 
                        ["/flag-icons/es-square.png", 
                         "/flag-icons/it-square.png"]),
    "Learning": new LCProps("Learning", 
                                ["Polish / Polski", 
                                 "Ukrainian / Українська"], 
                                ["/flag-icons/pol-square.png", 
                                 "/flag-icons/ukr-square.png"])
}