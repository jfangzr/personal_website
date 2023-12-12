"use client";
import { title, subtitle } from "@/components/primitives";
import {Image, Avatar} from "@nextui-org/react";
import {ComposersCard} from "@/components/composers"


export default function HobbiesPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>What do I do for fun, other than nerdy CS stuff?</h1>
				<h2 className={subtitle()}>Plenty of interesting things. Some nerdy as well.</h2>
				<p className = "my-1">
				I love playing piano, playing chess, cooking, working out, biking, hiking, travelling, and learning languages. Travelling and languages go hand-in-hand for me!
				</p>
				<br></br>
				<p className = "my-1">
				I often read Wikipedia articles when I am bored, on random topics I think about - in history, economics, politics, social currents, and philosophy.   
				</p>
			</div>
			
			<div className="my-8">
				<h1 className={title({size: "sm"})}>Languages I (want to) speak</h1>
				<h2 className={subtitle()}>Fluently</h2>
				<div className = "flex flex-col md:flex-row items-center">
					<div className="w-full md:w-2/5">
						<ul className="list-disc list-inside indent-4 my-2">
							<li>English</li>
							<li>Mandarin Chinese / 普通话中文 </li>
							<li>French / Français </li>
						</ul>
					</div>
					<div className="w-full md:w-3/5 flex gap-8 justify-center">
						<Avatar isBordered src="/flag-icons/cn-square.png" size="lg"/>
						<Avatar isBordered src="/flag-icons/en-square.png" size="lg"/>
						<Avatar isBordered src="/flag-icons/fr-square.jpg" size="lg"/>
					</div>
				</div>

				<h2 className={subtitle()}>Basics</h2>
				<div className = "flex flex-col md:flex-row items-center">
					<div className="w-full md:w-2/5">
						<ul className="list-disc list-inside indent-4 my-2">
							<li>Spanish / Español </li>
							<li>Italian / Italiano </li>
						</ul>
					</div>
					<div className="w-full md:w-3/5 flex gap-8 justify-center">
						<Avatar isBordered src="/flag-icons/es-square.png" size="lg"/>
						<Avatar isBordered src="/flag-icons/it-square.png" size="lg"/>
					</div>
				</div>

				<h2 className={subtitle()}>Learning</h2>
				<div className = "flex flex-col md:flex-row items-center">
					<div className="w-full md:w-2/5">
						<ul className="list-disc list-inside indent-4 my-2">
							<li>Polish / Polski </li>
							<li>Ukrainian / Українська </li>
						</ul>
					</div>
					<div className="w-full md:w-3/5 flex gap-8 justify-center">
						<Avatar isBordered src="/flag-icons/pol-square.png" size="lg"/>
						<Avatar isBordered src="/flag-icons/ukr-square.png" size="lg"/>
					</div>
				</div>


				
			</div>
			<div className="my-8">
				<h1 className={title({size: "sm"})}>My favorite composers</h1>
				<h2 className={subtitle()}>Well, I love classical-romantic piano music.</h2>
				<div className = "flex flex-row gap-4">
					<div className = "w-1/3 relative">
						<ComposersCard source="images/Liszt.png" caption = "Franz Liszt" alt = "Painting of Liszt"/>
					</div>

					<div className = "w-1/3">
						<Image
							className = "hover:brightness-50"
							alt="picture of Ludwig van Beethoven" 
							src = "images/Beethoven.png"/>
					</div>
					
					<div className = "w-1/3">
						<Image 
							className = "hover:brightness-50"
							alt="picture of Frederic Chopin" 
							src = "images/Chopin.png"/>
					</div>
				</div>
			</div>
		</div>
	);
}
