import { title, subtitle} from "@/components/primitives";
import {BlueLink as Link} from "@/components/link" ;
import Image from "next/image";

export default function ContactPage() {
	return (
		<div className="max-w-4xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>1. How much is a credit hour worth?</h1>
				<p className = "my-4">
					Short answer: a lot. 
				</p>
				<p className = "my-4">
					It is well known that an American college education costs a lot of money. 
					And the cost will unfortunately keep going up, unless Congress or IL legislature  
					enacts some sort of a legislative solution to lower college prices. But just how expensive
					really is your education? It&apos;s hard to wrap our head around the big numbers - the tens of
					thousands given in the tuition figures. Parents that deal with the heart palpitations when 
					paying their children&apos;s cost of attendance <span className = "italic">understand</span> all 
					too well how expensive the university education is.

				</p>
				<p className = "my-4">
					So, let&apos;s do a little math. Let&apos;s look at the base tuition rates, the lowest tuition rates, 
					and the tuition rates for Business and Engineering, with the 
					highest tuition rates out of all of the colleges at UIUC for undergrad. 
				</p>
				<p className = "my-4">
					The maximum number of credit hours that you can take per semester without overloading 
					is 18 credit hours. 
					Overloading requires special permissions granted by, I believe, the dean of the college, 
					so most students would be taking between 12 and 18 credit hours. To show you how expensive 
					a credit hour is, let&apos;s assume 18 credit hours, the largest possible denominator under
					normal circumstances. Multiply this by two, we get 36 credit hours per academic year.
				</p>
				<div className = "my-8">
					<h2 className = {subtitle()}>LAS Rate</h2>
					<img src="/blog_assets/base-rate.png" alt="Base Rate"/>
				</div>
				<div className = "my-8">
					<h2 className = {subtitle()}>Engineering/Business Rate</h2>
					<img src="/blog_assets/engr-rate.png" alt="Engineering Rate"/>
				</div>
				<p className = "my-4">
					Now we divide all of these numbers by 36. For LAS we get approximately:	
				</p>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Resident: $353 / credit hour</li>
					<li>Nonresident: $867 / credit hour</li>
					<li>International: $934 / credit hour</li>
				</ul>
				<p className = "my-4">
					And for engineering we get:
					
				</p>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>Resident: $500 / credit hour</li>
					<li>Nonresident: $1013 / credit hour</li>
					<li>International: $1169 / credit hour</li>
				</ul>
				<p className = "my-4">
					Ouch. Yikes. That&apos;s a lot, a lot of money on the line. 
					So we are looking at a 3 or 4 credit hour class valued between $1000-2000 just for Illinois residents, 
					and more than double that for out of state and international students. 
				</p>
				<p className = "my-4">
					And there is more to this: this does not even start to pay for the fees for students to use the
					facilities outside the classroom. The assessed fees, including health insurance, total up to 
					$4800 a year for 2023. This is another $133 per credit hour through fees.  
				</p>
				<p className = "my-4">
					Seeing these expensive numbers should have been a wake-up call for students to plan their
					college careers carefully, with the help of academic advisors. However, what I found was that 
					most students are far from proactive in looking at their degree requirements and do the careful planning 
					with their advisors, leaving a lot of the students just blindly trusting the curriculum map,
					without determining whether the map is a good fit based on the students&apos; credits coming into college. 
 
				</p>
				<p className = "my-4">
					At the end of my freshman year UIUC business graduate Nina Raab and I made a schedule generator for students to use, which isn&apos;t up anymore 
					since we have both ceased work on it due to a lack of interest from students. However, through it we found that 
					many students&apos; schedules can be optimized to shave entire semesters off just by selecting courses correctly such that 
					the important prerequisite courses are taken first. 
				</p>
				<p className = "my-4">
					Having done calculations like these corresponding to April 2021, I knew I was basically leaving money on the table 
					if I didn&apos;t take proficiency exams to advance to deeper courses in the curriculum. That&apos;s why I resolved to take
					four of my six required general education classes at community college. I then took proficiency exams out of CS 124, 
					<span id="prof_courses">CS 173, Math 241, Math 415, Physics 211 and Physics 212.</span> (Later in the winter, I also took proficiency exam for CS 225). 
					Throughout the summer I worked extremely hard studying them to prepare for the proficiency exams, but 
					this move paid off. The seven proficiency courses totaled 25 credit hours while the 4 community college 
					courses totaled 12 credit hours, and this way I got an entire year worth of schoolwork out of the way. 
				</p>
				<p className = "my-4">
					For current students, I would absolutely recommend taking general education requirements 
					and physics (for computer science students) in the summer before starting university  
					or between school years. If you had been thinking about taking a proficiency exam to get credit 
					and get ahead in university, do it. There is too much money on the line to not try. 
				</p>
				<p className = "my-4">
					For prospective students and college-aspiring students, I strongly recommend taking your AP/IB exams seriously.
					Yes, you should absolutely take the adequate time to relax and celebrate after applying and getting accepted to university. 
					But you should remember that certain exams, such as AP Calculus BC, will give you immense amounts of credit. 
					Calculus BC allows you to skip Calculus I and II, at most universities, including UIUC where it is worth 8 credit hours.
					To an engineering student, Calc BC is worth $4,000 ~ $10,000 in tuition. 
					Technical credit is harder than gen-ed credit to obtain because they take more work and time. 
					Exams that will give you technical credit - such as AP Chem, Calc AB/BC, Physics C, Biology, are more valuable 
					and would be more instrumental in allowing you to get ahead in college courses. 
				</p>
			</div>
		</div>
	);
}
