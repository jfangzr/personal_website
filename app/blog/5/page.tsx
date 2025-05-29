import { title, subtitle} from "@/components/primitives";
import {BlueLink as Link} from "@/components/link" ;
export default function ContactPage() {
	return (
		<div className="max-w-4xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>5. Exponential Growth</h1>
				<p className = "my-4">
					This blog post is inspired by a few quotes that came to my mind. It was also partially inspired by CS-430, Intelligent Agents 
					that I took while studying abroad at EPFL.
				</p>
				<p className = "my-4">
					Back in October last year, I was working on Bioimedge, which I have now put on pause, and I had a hard time
					gathering motivation. My good friend, Declan from high school, is also a startup founder, and he told me something that changed the way
					I looked at high-potential and high-uncertainty leaps such as entrepreneurship. And that quote is:
				</p>
				<p className = "my-4 ml-4 border-l-4 border-blue pl-2 ">
					You never lose before you quit.
				</p>
				<p className = "my-4">
					Just like me, Declan has been through times of uncertainty and struggle before he found success. And when you examine the human
					emotions, fears, and struggles that go into doing something original, suddenly running a startup seems more doable
					and not as lofty (and more mundane) than outsiders would think it would be. It also seems that for many 
					founders, they have underwent periods of demoralization before finding success (suddenly). Thomas Edison has made 
					a wonderful observation here:  
				</p>
				<p className = "my-4 ml-4 border-l-4 border-blue pl-2 ">
					Many of life&apos;s failures are people who did not realize how close they were to success when they gave up.
				</p>
				<p className = "my-4">
					For many founders, finding success felt like &quot;shooting into the sky&quot; and almost as if it happened 
					unnaturally fast. It took a spark somewhere to set off a path of <span className="font-bold">exponential growth</span>.
					Let&apos;s examine how this happens, and how &quot;time spent in the game&quot; might be the greatest determinant
					of success. 
				</p>
				<p className = "my-4">
					For startups, while they start from a humble point of not having users, or not having paid users, they have the entire 
					sky to grow. One starting user, and one paid user is the starting point of their journeys up. And it is not particularly 
					hard to make a product a few percent better each day. A month of work can be day and night of difference. That type of growth 
					compound on themselves towards infinite potential, but it also means that possibly even just days before becoming successful, the position that the founders are at are 
					much more humble than the point where they made it. 
				</p>
				<p className = "my-4">
					Another interesting dynamic comes at play. Business decisions and efforts, especially at startups, are highly uncertain.
					You don&apos;t know what would might suddenly make it &quot;click&quot; with potential customers, especially if you 
					have not had experience building things that others want and market them. The probability of a payoff 
					might scale better than inverse of payoff - i.e. the probability of having twice as many viewers on 
					a TikTok marketing video might not be twice as hard, especially as time goes on. Not only is time spent 
					the most important determinant of total output, but more time spent might also be most important determinant of output on a  <span className="italic">per-hour basis</span> or productivity. 
				</p>
				<p className = "my-4">
					When I studied at EPFL, I took Intelligent Agents by Boi Faltings. One concept that stuck out to me was the 
					exploration-exploitation payoff. You try to minimize (mathematical) regret - which is basically opportunity cost. At early stages, when you are still trying to do well in some way, you have
					to take risks (although be strategic with it), and then learn your environment. You would not try to refine 
					your approach prematurely, and from time to time you perform random actions to see what works. And this understanding
					might be the factor that underpins growth in uncertain environments. You try and find out. 
				</p>
				<p className = "my-4">
					For founders who are still looking for that spark of success, a combination of figuring out, upskilling, 
					prayers or hopes, and a moral or philosophical belief in their product and/or service will sustain them
					through the journey. If you are a fellow founder, then, I wish you the best of luck as well.  
				</p> 
			</div>
		</div>
	);
}
