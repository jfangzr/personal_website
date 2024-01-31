import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>8. Why Startups Draw Me</h1>
				<h1 className={subtitle()}>It&apos;s all about asking the &quot;what if...&quot; </h1>
				<p className = "my-4">
					The great beauty of startups is that you can work on anything. If your users love you enough and are willing to pay good money for it,
					congratulations, you have a workable business model! 
				</p>
				<p className = "my-4">
					The &quot;what do I work on part&quot;, however, is actually quite difficult to answer. And this is something that takes
					a lot of time and practice with a trained eye to spot these opportunities. There are infinitely many opportunities that
					are out there that will help somebody else save/make more money, time, get something that they want, or all three of the above. 
					In short, natural curiosity will be by far your best friend here. 
				</p>
				<p className = "my-4">
					But once you have an idea that your customers find useful, your potential is only measured by how many customers 
					you can reach. And if that market is big enough, it is a lot of potential right there. The scale and amount of 
					revenue you can create might be big enough that it would be difficult for you to understand. 
				</p>
				<p className = "my-4">
					When I was younger, a lot of the questions that I would ask are like &quot;how do I save myself and my classmates time&quot;.
					When I started coding, I built more and more tools that would allow me to automate things. I remembered that in college, 
					when my friends were doing cache calculations in computer architecture by hand, I was writing Python scripts to help me
					perform them a lot faster once I learned how to do them properly. 
				</p>
				<p className = "my-4">
					And that general mindset of coming up with ideas, thinking about &quot;what can I do differently&quot;, is something that 
					made the prospect of starting a business so attractive to me. 
				</p>
			</div>
		</div>
	);
}
