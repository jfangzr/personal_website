import { title, subtitle} from "@/components/primitives";
import {Link} from "@nextui-org/react";
export default function BlogPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>Welcome to my blog!</h1>
				<h2 className={subtitle()}>Here I post thoughts that hopefully inspire wisdom.</h2>
				
			</div>
		</div>
		
	);
}
