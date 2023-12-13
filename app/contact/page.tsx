import { title, subtitle} from "@/components/primitives";
import {Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h2 className={subtitle()}>You can reach me by:</h2>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Email: zhengru3 [at] illinois [dot] edu</li>
					<li><Link href="https://www.linkedin.com/in/james-fang-uiuccs/" className = "m-0">LinkedIn</Link></li>
					<li><Link href="https://github.com/jamesdiplomat" className = "m-0" >Github</Link></li>
				</ul>
			</div>
		</div>
	);
}
