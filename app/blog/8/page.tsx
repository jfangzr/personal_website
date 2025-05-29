import { title, subtitle} from "@/components/primitives";
import {BlueLink as Link} from "@/components/link" ;
export default function ContactPage() {
	return (
		<div className="max-w-4xl mx-auto text-justify">
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
				<p className= "my-4 border-black border-t-2">
				</p>
				<p className= "my-4">
					Edit (Feb 5, 2024): I watched many videos from Y Combinator Startup School on YouTube (which, even though I haven&apos;t implemented 
					all of their advice, I found them deeply insightful to apply). And I thought about even more reasons why 
					I am excited to be working on my own startup.  
				</p>
				<p className= "my-4">
					The first thing I thought about is how I react to frustration. In taking any career path, I inevitably will 
					run into frustration somewhere. Doing something well is difficult. And working on my own projects, I realized that 
					my response to frustration isn&apos;t to throw in the towel and thinking about quitting. Instead, my response is 
					I&apos;ll probably complain a little bit, usually to a friend, to see if I can get some advice. I might take a break, 
					by making a meal, go take a bike ride, or simply sleep. And then I realize that I would rather work on this than 
					practically do anything else despite the challenges. 
				</p>
				<p className= "my-4">
					When I was working on an internship with a manager that 
					I had personality conflicts with, I was constantly dwelling on how I felt I was not treated the way that I wanted, 
					how the friction in the project made me dislike the environment I was around - it was all around not the right fit
					for me, if I want to put it nicely. I was only in it for a possible return offer that I didn&apos;t even really
					want for the sake of possible future financial security. 
				</p>
				<p className= "my-4">
					Working on PrepStar AI, however, I realized that I was actually interested in solving the problems I encountered. 
					Yes, I absolutely wished that it was easy to get hundreds of thousands of students to use my product, and to 
					convert them all into paying users. But I am interested in learning about how to solve these problems, and trying out 
					solutions that result in varying levels of reach and success. 
				</p>
				<p className= "my-4">
					Another thing that I realized that was I was working on problems that have real, meaningful impacts on 
					my users. In this case, it is high school students who really want to do well on AP exams. I&apos;ve used 
					my own product, and I actually felt impressed on many occasions on what my product could do. I&apos;ve heard 
					about many people in big corporations working on projects that they don&apos;t actually want to do, or being 
					shoeboxed into roles that they don&apos;t believe they want to take, even if the pay was great. 
				</p>
				<p className= "my-4">
					However limiting startups can be in terms of work conditions - such as crazy work hours, unpredictability, and 
					lower compensation, working at a startup is a philosophical and moral ownership of what you do. I can firmly say, 
					&quot;I am working on my own product, for myself, making what I want to make&quot;. I am proud of 
					the work that I have already done, the bits that I have launched, and I am excited to build more of the product 
					to make my users love what I do even more.  
				</p>
				<p className= "my-4">
					And I know that I will absolutely regret not trying more than the opportunities 
					I <span className="italic">might</span> miss working on my startup. 
				</p>
			</div>
		</div>
	);
}
