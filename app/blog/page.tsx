import { title, subtitle} from "@/components/primitives";
import {Link} from "@nextui-org/react";

const BlogLinker = ({title, subpage}: {title: string, subpage: string}) => {
	const directTo = `/blog/${subpage}`
	return (
		<li><Link href = {directTo}>{subpage}. {title}</Link></li>
	)
}

const blogTitles: string[] = [
	"Value of a credit hour",
	"Blessings from college rejections",
	"Studying abroad: the preparation",
	"PrepStar AI is live!",
	"Exponential Growth",
	"Reforming American College Admissions: Part I",
	"Reforming American College Admissions: Part II",
	"Why Startups Draw Me", 
	"A Massive Romantic European Itinerary",
	"How to find and listen to good advice",
	"My beliefs on AI",
	"How a college student like me shop at Costco",
	"What I learned about cancer treatment as a biomedical software engineer"
]

export default function BlogPage() {
	const btr = blogTitles.slice().reverse();
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>Welcome to my blog!</h1>
				<h2 className={subtitle()}>Here I post thoughts that hopefully inspire wisdom.</h2>
				<ul className="list-disc list-inside indent-4 my-4">
					{btr.map((item, idx) => 
						<BlogLinker title={item} subpage={String(btr.length - idx)} key={idx}/>)}
				</ul>
			</div>
		</div>
		
	);
}
