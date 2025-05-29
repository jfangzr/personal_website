import { title, subtitle} from "@/components/primitives";
import Image from "next/image";
import {BlueLink as Link} from "@/components/link" ;

export default function AboutPage() {
	return (
		<section>
			<div className="max-w-4xl mx-auto">
				<div className="flex flex-col gap-6 my-16">
					<h1 className={title()}>A bit more about me</h1>
					<p> 
						As I stated in my <Link href="/">home page</Link>, I build for impact. I come from a background dominated by
						machine learning for bioinformatics and healthcare applications. 
					</p>
					<p>
						I&apos;ve been building fullstack applications for startups since December 2023. Prior to that 
						I have been coding for five years since I was a freshman in high school in May 2018. 
						I originally came from a machine learning (ML) background. Some of my earlier projects 
						include a CNN-based oracle for diagnosing and classifying cardiac arrhythmias, a chest 
						X-ray pneumonia classifier.
					</p>
					<p>On research, I have collaborated on projects such as:</p>
					<ul className="list-disc list-outside ml-8 space-y-1">
						<li>Detecting mutations from H&E biopsy slides of malignant tumors, with Prof. Aristotelis Tsirigos (NYU Medicine, Chair of Bioinformatics)</li>
						<li>Detecting kidney transplant complications using LSTMs, with Dr. Christopher Nguan (UBC Medicine)</li>
						<li>Computer vision to model pig brain segmentation, with Prof. Matthew Caesar (UIUC Computer Science)</li>
						<li className="ml-8">This project was presented at the Swine in Biomedical Research (SBR) conference in Madison, WI in June 2022.</li>
					</ul>
					<p>
						I am now open today on working on applied problems in a wide range of industries. 
						I build products with these three principles that I 
						achieve <span className="font-bold">in this order</span>:
					</p>
					<ul className="list-disc list-outside ml-8 space-y-1">
						<li>
							<span className="font-bold">Build it right.</span> I make sure the application works 
							reliably without bugs, and I set high standards for the code that I write. 
							I try to minimize tech debt and write modular, documented. 
							I very much enjoy taking a highly formal, top-down approach to writing my applications. 
						</li>
						<li>
							<span className="font-bold">Build it well.</span> I 
							listen to users, get feedback on features and UI/UX, and iteratively improve my applications. 
							At this point, the existing features are already reliable and performant.
						</li>
						<li>
							<span className="font-bold">Build it fast.</span> By then, I will have much practice building 
							high-quality applications. With modular, clear, well-documented code, working on focused problems,
							I become much faster at shipping features or even end-to-end applications. 
							The amount of time I take to build and ship features then range from a few hours to a few days. 
						</li>
					</ul> 
					<p>
						I find it <span className="italic">much</span> easier to achieve all three 
						principles in this order than the other way around. I have unfortunately seen too many teams 
						suffer from immense technical debt. I have seen promising startup ideas brought to screeching-halt feature velocity
						because they were servicing technical debt. While I am open to joining pre-established teams,
						I prefer to set technical standards as an early/founding engineer in a high-trust work environment. 
					</p>
				</div>
			</div>
		</section>
	);
}
