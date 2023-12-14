"use client";
import { title, subtitle } from "@/components/primitives";
import {ComposersCard} from "@/components/composers"
import {LCProps, LanguagesCard} from "@/components/languages"


export default function HobbiesPage() {
	const flcp = new LCProps("Fluently", ["English", "Mandarin Chinese / 普通话中文", "French / Français"], ["/flag-icons/cn-square.png", "/flag-icons/en-square.png", "/flag-icons/fr-square.jpg"])
	const blcp = new LCProps("Basic", ["Spanish / Español", "Italian / Italiano"], ["/flag-icons/es-square.png", "/flag-icons/it-square.png"])
	const llcp = new LCProps("Learning", ["Polish / Polski", "Ukrainian / Українська"], ["/flag-icons/pol-square.png", "/flag-icons/ukr-square.png"])

	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>What do I do for fun, other than nerdy CS stuff?</h1>
				<h2 className={subtitle()}>Plenty of interesting things. Some nerdy as well.</h2>
				<p className = "my-1">
				I love playing piano, playing chess, cooking, working out, biking, hiking, attending cultural events, travelling, and learning languages. Travelling and languages go hand-in-hand for me!
				</p>
				<br></br>
				<p className = "my-1">
				I often read Wikipedia articles when I am bored, on random topics I think about - in history, economics, politics, social currents, and philosophy.   
				</p>
			</div>
			
			<div className="my-8">
				<h1 className={title({size: "sm"})}>Languages I (want to) speak</h1>
				<LanguagesCard lcp={flcp}/>
				<LanguagesCard lcp={blcp}/>
				<LanguagesCard lcp={llcp}/>
			</div>
			<div className="my-8">
				<h1 className={title({size: "sm"})}>My favorite composers</h1>
				<h2 className={subtitle()}>Well, I love classical-romantic piano music.</h2>
				<div className = "flex flex-col sm:flex-row gap-4 justify-center items-center">
					<ComposersCard source="images/Liszt.png" caption = "Franz Liszt" alt = "Painting of Liszt"/>
					<ComposersCard source="images/Chopin.png" caption = "Frédéric Chopin" alt = "Painting of Chopin"/>
					<ComposersCard source="images/Beethoven.png" caption = "Ludwig van Beethoven" alt = "Painting of Beethoven"/>
				</div>
			</div>
		</div>
	);
}
