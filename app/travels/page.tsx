"use client"
import { useState } from 'react';
import {subtitle, title } from "@/components/primitives";
import Image from "next/image";
import * as c from "@/data/countries.json"

type Continent = "Europe" | "Asia" | "North America"

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
		<div className='flex flex-col gap-2 rounded-lg bg-white p-2 border-neutral-300 border-2'>
			<Image src={`/country-photos_processed/${imageCode}`} style={{objectFit: "cover"}} className="rounded-lg" height={800} width={400} alt={country}/>
			<p className=''>{country} {flag}</p>
		</div>
	)
}

const ContinentButton = ({continent, setViewContinent}: {continent: Continent, setViewContinent: (_: Continent) => void}) => {
	return (<button className={`px-2 py-1 bg-blue-500 text-white rounded hover:opacity-90`} onClick={() => setViewContinent(continent)}>
		{continent}
	</button>)
}


export default function TravelsPage() {
	const [viewContinent, setViewContinent] = useState<Continent>("Europe");

	return (
		<div className="max-w-4xl mx-auto text-justify">
			<div className="flex flex-col gap-6 mt-16 mb-8">
				<h1 className={title()}>A Tale of Wanderlust</h1>
				<p className="">
					I&apos;ve lived in four different countries and I&apos;ve always been curious to discover the world. When I was younger, before high school, 
					I travelled with my parents. When I turned 18, in undergrad, I decided to study abroad in Lausanne, Switzerland. 
					I especially have fond memories of travelling by rail to a dozen different countries during my student exchange.
				</p>
				<p>
					I travel for art, architecture, gastronomy, history, and people. As of today, I have visited 23 countries/regions spanning three continents. I hope to visit all seven continents, and visit at least 100 countries. 
				</p>
			</div>
			<div className="flex flex-col gap-6 my-8">
				<h1 className={title()}>Countries/Regions Visited</h1>
				{<div className = "flex flex-row gap-2">
					<ContinentButton continent={"Europe"} setViewContinent={setViewContinent}/>
					<ContinentButton continent={"Asia"} setViewContinent={setViewContinent}/>
					<ContinentButton continent={"North America"} setViewContinent={setViewContinent}/>
				</div>}
				<h2 className={subtitle()}>{`${viewContinent}: ${c[viewContinent].length} countries/regions visited`}</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{c[viewContinent].map((item: string[]) => (
						<CountryCard key={item[0]} country={item[0]} imageCode={item[1]} />
					))}
				</div>
			</div>
		</div>

	);
}
