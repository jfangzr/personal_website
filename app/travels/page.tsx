import {subtitle, title } from "@/components/primitives";

export default function TravelsPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>A tale of wanderlust</h1>
				<p className = "my-2">
					As someone who lived in four different countries, I have always been curious to discover the world. When I was young I travelled with my parents. Then I decided to study abroad in Lausanne, Switzerland. I was 18. Travelling to thirteen countries, mostly via rail, instead of 'fulfilling' the wanderlust, only has fuelled it further.
				</p>
				<br></br>
				<p>
					I travel for art, architecture, gastronomy, history, and people. As of today, I have visited 23 countries / regions spanning three continents. I hope to visit all seven continents, and visit at least 100 countries. 
				</p>
			</div>
		</div>

	);
}
