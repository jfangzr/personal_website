import { title, subtitle} from "@/components/primitives";
import Image from "next/image";
import { BlueLink } from "@/components/link";
export default function AboutPage() {
	return (
		<section>
			<div className="max-w-4xl mx-auto">
				{/* {<div className="flex flex-col gap-6 mt-16 mb-8">
					<h1 className={title()}>Summary of my work</h1>
					<p>
						I specialize in building functional, production-ready products in a short period of time. 
						In the past, I have transformed many applications from hard-coded, buggy prototypes to clean, performant, launch-ready products. 
						I am open to taking on novel projects as well and I am agile to learn new skills, tools, and frameworks. 
					</p>
					<p>
						Faithful to the term &quot;fullstack engineering&quot;, I have built end-to-end applications and features that involve engineering 
						frontend, backend, LLM/AI components, and infrastructure for both API-integrated and self-hosted services. For example, I have used OpenAI API with Pinecone vector databases
						in Rx Jot, and I have self-hosted OpenSearch + Qwen-2.5 VL + VLM embedding models on vLLM for an image + RAG application. <span className="italic">[The 
						startup on which I worked on the self-hosted multimodal pipeline is currently in stealth and has requested me to not disclose their name nor the domain of their product.]</span>
					</p>
					<p>
						I have worked on applications in a variety of industries, including healthcare (both physical and mental), education, industry, and AI 
						for hardware. I see fullstack engineering as both a science and an art form. Below is a non-exhaustive chart of tools I&apos;ve used recently: 
					</p>
					<Image src="/images/frameworks.png" height={800} width={1200} alt="Tools"/>
					<p>
						For any inquiries, please reach out to me via Twitter/X at <BlueLink href="https://x.com/polymath_james" newPage={true}>@polymath_james</BlueLink> or LinkedIn at <BlueLink href="https://www.linkedin.com/in/james-fang-uiuccs/">https://www.linkedin.com/in/james-fang-uiuccs/</BlueLink>.
					</p>
				</div>} */}
				<div className="flex flex-col gap-6 my-8">
					<h1 className={title()}>Resume</h1>
					<p>
						<BlueLink href={"/resume.pdf"} newPage={true}>Link to Resume</BlueLink>
					</p>
					
				</div>
				<div className="flex flex-col gap-6 my-8">
					<h1 className={title()}>Education</h1>
					<p>I did both my undergrad and master&apos;s degrees, in computer science, from the University of Illinois Urbana-Champaign (UIUC).</p>
					<ul className="list-disc list-outside ml-8 space-y-1">
						<li>Master&apos;s in Computer Science (MCS), UIUC, Aug 2024 to May 2025</li>
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
