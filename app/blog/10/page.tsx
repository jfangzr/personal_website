import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>10. How to find and listen to good advice</h1>
				<h2 className={subtitle()}>How can someone separate the gold from the snake oil?</h2>
				<p className = "my-4">
					Again, this blog post will be updated with time. Everyday we all deal with different problems, and in my case, 
					I am trying to figure out sales for my startup. There&apos;s a lot of advice out there about these, some of them 
					designed to sell useless &quot;masterclasses&quot; that would leave me ten squares behind where I started. Finding 
					people and resources that are genuinely trying to give me useful advice, such as <Link href="https://youtu.be/xZi4kTJG-LE?si=I6h5f4mg9rvmn-cO">How to 
					Sell by Tyler Bosmeny</Link>, made me really think how I can get good, useful advice. 
				</p>
				<p className = "my-4 font-bold">
					1. This someone reaffirms that your problem is difficult to solve 
				</p>
				<p className = "my-4">
					Big questions, such as how to find customers as a company, are questions that are ageless. Those questions have already 
					existed for a long time, from far before we were born.
					Many, many people are asking for advice, spending a lot of money, and if an one-size-fits-all solution existed, everyone 
					would be using it. Or rather, the people who have figured out the problem would all arrive at the same solution. 
					If someone tells tries to tell me &quot;this one trick will solve all 
					your problems related to [insert whatever you need fixed]&quot;, then it probably is not very good advice. I would be 
					wary that the person is trying to sell me something that ultimately would not work. 
				</p>
				<p className = "my-4">
					But if someone listens to me, explains the strengths and limitations of each option that I can go forward with,
					then I know that someone is giving me something that I might need and adapting it to my problem case. At this point, 
					the advice is still far from certain that it&apos;s good, but it is enough for me to give it a shot.  
				</p>
				<p className = "my-4 font-bold">
					2. Someone should tell you what has <span className="italic">not</span> worked for them (or people they worked with)
				</p>
				<p className = "my-4">
					This is someone trying to apply their wisdom to your problem case and telling you how to avoid the pitfalls 
					they have sank through. That someone wants you to learn the fine details (the landscape) of the problem. This also immediately filters out a sign for someone to give you terrible advice: 
					someone explaining what they did to <span className="italic">impress</span> you.  
				</p>
				<p className = "my-4">
					In my opinion, people that are trying to impress you, whether it&apos;s with material possessions to show how successful they
					are, or with knowledge (especially buzzword vomiting that falls apart under any serious logical examination). Those people 
					are insecure and they do not want you to think about why their strategies probably will not work. What people that follow 
					those awful advice would often find out is that they have only learned to put on fake façades, impressions, and hide their 
					problems. At worst, they would delude themselves and not make substantial progress towards solving their problems on hand.    
				</p>

				<p className = "my-4">
					Let&apos;s also say that I am much more willing to listen to someone who has unsubstantiable confidence in their claims 
					rather than someone who is reasonable and think deeply into the strengths and limitations of the advice they give. This leads to...
				</p>
				<p className = "my-4 font-bold">
					3. If someone tells you about the &quot;fine print&quot; and nuances of their advice, listen all in. 
				</p>
				<p className = "my-4">
					If people giving advice to you are talking about the circumstances and If people giving you good advice want you to deeply think about their advice, that&apos;s a major sign that 
					you are in good hands. They certainly don&apos;t want you to 
					blindly follow it, and they want you to adapt the advice to best suit your needs. They don&apos;t want you 
					to waste a ton of your time - remember, your time is valuable - and your money on something that they know
					for near certainty will not work.  
				</p>
				<p className = "my-4">
					Furthermore, if you feel like you can draw useful insights - such as principles of communication or a potential 
					useful application to an adjacent problem - then I think it&apos;s a great sign that someone has given you at 
					least <span className="italic">a little bit useful</span> advice. 
				</p>
				<p className = "my-4">
					Which brings me to the last point...
				</p>
				<p className = "my-4 font-bold">
					4. It is as much about the person as it is about the advice given. 	
				</p>
				<p className = "my-4">
					This is something that I&apos;ll let you think about. In short: the people themselves - especially their character - 
					really, really matter. 
				</p>
				<p className= "my-4 border-gray-500 border-t-2">
				</p>
				<p className = "my-4">
					Lastly, I want to talk about perhaps the only silver bullet that solves your problems. And unfortunately, while 
					I think it might work, it&apos;s not a &quot;get rich instantly&quot; solution. It&apos;s perhaps the exact opposite. 
				</p>
				<p className = "my-4">
					And that&apos;s getting your solution process down to an exact science instead of an art. At the beginning, when, 
					usually due to a lack of skill, solving problems feels like an art. We don&apos;t know how to approach it and 
					try many things that don&apos;t work. As we learn more and get better at it, we learn more and more patterns, and 
					center in on what works. We turn the problem-solving process from an art to a science for this specific problem. 
				</p>
				<p className = "my-4">
					Getting the experience, however, there is no alternative to facing the problems head-on. Then it&apos;s about being 
					patient to accumulate the experience necessary to form intuitions about approaching problems. This involves 
					learning, thinking, and unfortunately in most cases, praying things would work out fine. Problems, while they 
					may not have decreased in challenge level, hopefully become easier to solve when you&apos;re armed with your knowledge.   
				</p>
				<p className = "my-4">
					Then hopefully your ingredients for success turn into a scientific process, controlled finely and carefully. For example, 
					if startup success is a machine, then the cogs and gears of your machine might be:
				</p>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Building a product users love</li>
					<li>Selling your product to users</li>
					<li>Hiring and managing the right people to work on the project</li>
					<li>Fundraising</li>
				</ul>
				<p className = "my-4">
					And you want to use your intuition gained from experience to think about how to maintain each cog/gear and think about how they all 
					work together. 
				</p>
			</div>
		</div>
	);
}
