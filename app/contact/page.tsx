import { title, subtitle} from "@/components/primitives";
import {BlueLink as Link} from "@/components/link" ;
export default function ContactPage() {
	return (
		<div className="max-w-4xl mx-auto text-justify">
			<div className = "my-8 flex flex-col sm:flex-row gap-4 items-center">
				<div className = "w-80">
					<img
						alt="Me in Basel"
						width = {320}
						src="/images/photo-of-me.jpg"
					/>
					<div className = "text-center italic text-sm text-neutral-700 whitespace-pre-line">
						<p className="mt-2">
							Me drinking hot chocolate on an Erasmus daytrip with exchange student friends
						</p>
						<p className="mt-2">
							Basler Weihnachtsmarkt
						</p>
						<p>
							2022.12.10 // Basel, Switzerland
						</p>
					</div>
					
				</div>
				<ul className="list-disc list-inside indent-4 my-4">
					<h2 className={subtitle()}>You can reach me by:</h2>
					<li className="mt-8">Email: zhengru3 [at] illinois [dot] edu</li>
					<li><Link href="https://www.linkedin.com/in/james-fang-uiuccs/">LinkedIn</Link></li>
					<li><Link href="https://github.com/jfangzr">Github</Link></li>
					<li><Link href="https://x.com/polymath_james">Twitter / X</Link></li>
				</ul>
			</div>	
		</div>
	);
}
