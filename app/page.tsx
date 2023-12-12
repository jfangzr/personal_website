import { title, subtitle } from "@/components/primitives";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <section>
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>Hi, I am Zhengru (James) Fang!</h1>
				<h2 className={subtitle()}>I am a prospective Masters of Computer Science student at UIUC.</h2>
				
			</div>

			<div className = "w-full md:w-3/4 mx-auto my-8">
					<Image
						alt="Snowy UIUC Night"
						src="/images/uiuc-snow-night.jpg"
					/>
					<p className = "text-center italic text-neutral-700">
						Welcome to my university. Looking south from University of Illinois Urbana-Champaign (UIUC) in winter at night. From near to far, Illini Union, Main Quad, Foellinger Auditorium, South Quad, and Bell Tower. Isn't it pretty?
					</p>
			</div>
			
			<div className="my-8">
				<h1 className={title({ size: 'sm' })}>Current Work</h1>
				<p className="my-4">
					I am working on Bioimedge (pronounced bio-image), a zero- and low-code platform for computer vision for biomedical and healthcare purposes. 
				</p>
			</div>

			<div className="my-8">
				<h1 className={title({ size: 'sm' })}>Education</h1>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Master of Computer Science (MCS), UIUC, Jan 2024 - May 2025</li>
					<li>Bachelor of Science (B.S.), Computer Science, UIUC, Aug 2021 - May 2023</li>
				</ul>
				<div className = 'flex flex-col md:flex-row gap-4 items-center'>
					<div className = "w-full md:w-1/2 ">
						<p>
							I graduated from Upper Saint Clair High School in June 2021. I was an exchange student at École polytechnique fédérale de Lausanne (EPFL) in Lausanne, Vaud, Switzerland from September 2022 to February 2023, pictured on the right.
						</p>
					</div>
					<div className = "w-full md:w-1/2">
						<Image
							alt="EPFL Campus"
							src="/images/epfl.png"
						/>
					</div>
				</div>
			</div>

			<div className="my-8">
				<h1 className={title({ size: 'sm' })}>Interests</h1>
				<p className="my-4">
					I am specifically interested in machine learning, specifically computer vision, for bioinformatics and healthcare purposes. My other interests also include:
				</p>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Medical data science (i.e. preprocessing, mining)</li>
					<li>General-purpose computer vision (i.e. architectures and training/validation optimizations for time & performance)</li>
					<li>Algorithmic & mathematical theory (i.e. combinatorics)</li>
					<li>Web/frontend development</li>
					<li className = "indent-12">Still trying to get better at it, this personal page is my exercise!</li>
				</ul>
			</div>
		</div>
    </section>
  );
}