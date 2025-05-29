"use client"
import { title, subtitle } from "@/components/primitives";
import {BlueLink as Link} from "@/components/link" ;

export default function Home() {
  	return (
    <section>
		<div className="max-w-4xl mx-auto">
			<div className="flex flex-col gap-6 my-16">
				<h1 className={title()}>Hi, I am James!</h1>
				<p>I&apos;m a fullstack engineer.  
          My favorite part of fullstack engineering is probably system design, as I love architecting end-to-end
          applications and taking ownership of projects. I am primarily interested in building LLM-based tools. My
          second favorite part about fullstack engineering is about making LLMs, both general-purposed and fined-tuned models, 
          generate truly useful output. 
        </p>
        <p>
          These problems involve gathering high-quality inputs and contexts, 
          giving LLMs clear instructions, and structuring algorithmic/agentic workflows. 
          My hope is that the outputs produced from LLMs 1) opens up novel, valuable applications and/or 
          2) matches that of highly-trained, highly-skilled humans. 
        </p>
        <p>
          My current tech stack primarily is NextJS, TypeScript, TailwindCSS, though I especially am open to 
          experimenting with different tools and languages (i.e. Scala, ProtoBuf) to introduce or 
          strengthen correctness guarantees on my work. I often think about the social and economic impact of my applications.
          I want to build things that help people and society. 
        </p>
				<p> 
          As a fullstack engineer, I am interested in learning and researching other disciplines that make 
          fullstack applications performant, reliable, adaptable, and scalable. These disciplines include:
        </p>
        <ul className="list-disc list-outside ml-8 space-y-1">
          <li>Software Engineering Practices</li>
          <li>Machine Learning</li>
          <li className="ml-8">Natural Language Processing / LLMs</li>
          <li className="ml-8">Computer Vision</li>
          <li>Data Science</li>
          <li>Computer Security</li>
          <li>UI / UX and Graphic Design</li>
          <li>
            Theoretical Computer Science
          </li>
          <li className="ml-8">Algorithms and Data Structure Design</li>
          <li>Programming Languages (i.e. functional programming)</li>
        </ul>
        <p>
          I enjoy startups for their dynamism. I love the freedom to set as high technical bars as I want for my work and pick problems that I find interesting.
          I love approaching problems from a very formal and theoretical manner. I especially am open to experimenting with different tools and languages (i.e. Scala) to introduce or strengthen correctness guarantees on my work.
        </p>
        <p>
          In the past, I built multiple startup applications, where I performed all of the technical work. Among them were:
        </p>
        <ul className="list-disc list-outside ml-8 space-y-1">
          <li>
            <Link href="https://rxjot.com" newPage={true}>Rx Jot</Link>, a LLM-based tool for doctors to write medical necessity and appeal letters for prior authorization
          </li>
          <li>
            <Link href="https://prepstar.io" newPage={true}>PrepStar</Link>, a LLM-based tool to help students with practicing for AP exams
          </li>
          <li>
            <Link href="https://trialslookup.com" newPage={true}>TrialsLookup</Link>, a semantic search engine for doctors to find clinical trials for their patients
          </li>
        </ul>
        
			</div>

		</div>
    </section>
 	);
}