"use client"
import { useState } from 'react';
import {subtitle, title } from "@/components/primitives";
import {Button, Image, Card, CardBody, CardFooter} from "@nextui-org/react";
import * as c from "@/data/countries.json"


function getFlagText(setFlag: (flag: string) => void, country: string){
	const cname = country.toLowerCase()
	return fetch(`https://studies.cs.helsinki.fi/restcountries/api/name/${cname}`)
				.then(response => response.json())
				.then(data => setFlag(data.flag))
}



const CountryCard = ({imageCode, country}: {imageCode: string, country: string}) => {
	const [flag, setFlag] = useState('');
	const flag_ = getFlagText(setFlag, country)
	return (
		<div>
			<Card>
				<CardBody>
					<Image src={`https://source.unsplash.com/${imageCode}`} alt={`hPicture of ${country}`}/>
				</CardBody>
				<CardFooter>
					<p>{country} {flag}</p>
				</CardFooter>
			</Card>
		</div>
	)
}


export default function TravelsPage() {
	const [viewContinent, setViewContinent] = useState<string>("Europe");

	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>A tale of wanderlust</h1>
				<p className = "my-2">
					As someone who lived in four different countries, I have always been curious to discover the world. When I was young I travelled with my parents. Then I decided to study abroad in Lausanne, Switzerland. I was 18. Travelling to thirteen countries, mostly via rail, instead of fulfilling the wanderlust, only has fuelled it further.
				</p>
				<br></br>
				<p>
					I travel for art, architecture, gastronomy, history, and people. As of today, I have visited 23 countries/regions spanning three continents. I hope to visit all seven continents, and visit at least 100 countries. 
				</p>
			</div>
			<div className="my-8">
				<h1 className={title()}>Countries/Regions Visited</h1>
				<div className = "flex flex-row gap-4 m-2">
					<Button radius = 'full' color = "primary" onPress = {() => setViewContinent("Europe")}>Europe</Button>
					<Button radius = 'full' color = "success" onPress = {() => setViewContinent("Asia")}>Asia</Button>
					<Button radius = 'full' color = "secondary" onPress = {() => setViewContinent("North America")}>North America</Button>
				</div>
				<h2 className={subtitle()}>{`${viewContinent}: ${(c as any)[viewContinent].length} countries/regions visited`}</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{(c as any)[viewContinent].map((item: string[]) => (
						<CountryCard key={item[0]} country={item[0]} imageCode={item[1]} />
					))}
				</div>
			</div>
		</div>

	);
}
