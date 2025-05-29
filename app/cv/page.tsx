import { title, subtitle} from "@/components/primitives";
import Image from "next/image";
import { BlueLink } from "@/components/link";
export default function AboutPage() {
	return (
		<section>
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-col gap-6 mt-16 mb-8">
					<h1 className={title()}>Resume</h1>
					<p>
						<BlueLink href={"/resume.pdf"} newPage={true}>Link to Resume</BlueLink>
					</p>
					
				</div>
				<div className="flex flex-col gap-6 my-8">
					<h1 className={title()}>Education</h1>
					<p>I did both my undergrad and master&apos;s degrees from University of Illinois Urbana-Champaign (UIUC).</p>
					<ul className="list-disc list-outside ml-8 space-y-1">
						<li>Master&apos;s in Computer Science (MCS), UIUC, Aug 2024 to Dec 2025</li>
						<li>Bachelor of Science (B.S.), Computer Science, UIUC, Aug 2021 to May 2023</li>
					</ul>
					<p>
						I graduated from Upper Saint Clair High School in June 2021. I was an exchange student at École 
						polytechnique fédérale de Lausanne (EPFL) in Lausanne, Vaud, Switzerland from September 2022 
						to February 2023.
					</p>
					<div className="flex flex-col md:flex-row gap-2">
						<div className="flex flex-col gap-2 w-1/2">
							<Image src="/schools/uiuc-snow-night.jpg" height={600} width={800} alt="UIUC"/>
							<p className="text-neutral-700 text-center">UIUC, Illinois, United States</p>
						</div>
						<div className="flex flex-col gap-2 w-1/2">
							<Image src="/schools/epfl.jpg" height={600} width={800} alt="UIUC"/>
							<p className="text-neutral-700 text-center">EPFL, Canton of Vaud, Switzerland</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
