import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>11. My beliefs on AI (and where it parallels the internet)</h1>
				<p className = "my-4 font-bold">
					1. It&apos;s transformational, but some predictions are overblown
				</p>
				<p className = "my-4">
					... Especially absolute beliefs about how all-encompassing AI would be. AI is very powerful, and it is 
					already changing the world faster than we believed or even sometimes can imagine. 
					My prediction is that AI is going to change the world the way that the Internet changed the world. Everyone&apos;s
					lives will certainly be affected in some way, because AI had affected some aspect in our lives, i.e. having some role 
					in the long supply train that make up much of the global trade today. However, just like with the Internet, people and 
					institutions are going to adopt it to varying degrees. 
				</p>
				<p className = "my-4">
					When we look at the people outside our immediate circle, especially if we look internationally, there are 
					people that don&apos;t use the Internet as much - sometimes not even using the computer itself. There are 
					many businesses throughout the entire world that rely on their community connections to find customers instead
					of the Internet, and people still operating business using pen and paper instead of a computer. 
				</p>
				<p className = "my-4">
					And a parallel argument for AI is that it is going to be useful for some people, and not others. AI is a very 
					knowledge-intensive tool that requires <span className="italic">a lot</span> of knowledge to both operate and use, 
					even though it is becoming easier and easier to use every day. But not everyone will see the value of AI in their lives, 
					and it is not going to be the silver bullet that will solve every single problem on the planet.
				</p>
				<p className = "my-4 font-bold">
					2. Existential crises are less of a problem than worsening inequality
				</p>
				<p className = "my-4">
					Just like the internet, the first people that are going to adopt AI are definitely going to be (large) businesses 
					that 1) see the scale and 2) have the means to build AI into their workflows and adopt. And what this means is that the cost savings and 
					extra money to be made are probably not going to be passed on to benefit society at large, and would make the 
					small number of already rich people even richer. The people that work for those rich people are going to get a 
					small slice of the pie, but everybody else might be left out. 
				</p>
				<p className = "my-4">
					It&apos;s a hard problem. The tools that make us more productive certainly have the potential to make all of us
					better off if the gains are distributed correctly, but, what&apos;s likely is that the already wealthy people 
					will gain even more power to influence public policy. My belief is that this is going to be hard to prevent without 
					discouraging innovation, but certain measures like better education so fewer people are going to be left out will 
					help mitigate some negative impacts of increasing inequality. 
				</p>
				<p className = "my-4 font-bold">
					3. AI will divide the world in some ways while bridge the world in others
				</p>
				<p className = "my-4">
					Just with the Internet creating information pockets, AI will allow corners of the world to create self-reinforcing 
					economic and information pockets. The most visible impact will certainly be seen on how AI affects labor, and 
					how it interacts with the globalized world. 
				</p>
			</div>
		</div>
	);
}
