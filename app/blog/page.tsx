import { title, subtitle} from "@/components/primitives";
import {Link} from "@nextui-org/react";

const BlogLinker = ({title, subpage}: {title: string, subpage: string}) => {
	const directTo = `/blog/${subpage}`
	return (
		<li><Link href = {directTo}>{title}</Link></li>
	)
}
export default function BlogPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>Welcome to my blog!</h1>
				<h2 className={subtitle()}>Here I post thoughts that hopefully inspire wisdom.</h2>
				<ul className="list-disc list-inside indent-4 my-4">
					<BlogLinker title="4. PrepStar AI is live!" subpage = "4"/>
					<BlogLinker title="3. Studying abroad: the preparation" subpage = "3"/>
					<BlogLinker title="2. Blessings from college rejections" subpage = "2"/>
					<BlogLinker title="1. Value of a credit hour" subpage = "1"/>
				</ul>
			</div>
		</div>
		
	);
}
