import { title, subtitle} from "@/components/primitives";
import {Image} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className="my-8">
				<h1 className={title()}>1. How much is a credit hour worth?</h1>
				<p className = "my-4">
					Short answer: a lot. 
				</p>
				<p className = "my-4">
					It is well known that an American college education costs a lot of money. 
					And the cost will unfortunately keep going up, unless Congress or IL legislature  
					enacts some sort of a legislative solution to lower college prices. But just how expensive
					really is your education? It's hard to wrap our head around the big numbers - the tens of
					thousands given in the tuition figures. Parents that deal with the heart palpitations when 
					paying their children's cost of attendance <span className = "italic">understand</span> all 
					too well how expensive the university education is.

				</p>
				<p className = "my-4">
					So, let's do a little math. Let's look at the base tuition rates, the lowest tuition rates, 
					and the tuition rates for Business and Engineering, with the 
					highest tuition rates out of all of the colleges at UIUC for undergrad. 
				</p>
				<p className = "my-4">
					The maximum number of credit hours that you can take per semester without overloading 
					is 18 credit hours. 
					Overloading requires special permissions granted by, I believe, the dean of the college, 
					so most students would be taking between 12 and 18 credit hours. To show you how expensive 
					a credit hour is, let's assume 18 credit hours, the largest possible denominator under
					normal circumstances. Multiply this by two, we get 36 credit hours per semester.
				</p>
				<div className = "my-8">
					<h2 className = {subtitle()}>LAS Rate</h2>
					<Image src="/blog_assets/base-rate.png"></Image>
				</div>
				<div className = "my-8">
					<h2 className = {subtitle()}>Engineering/Business Rate</h2>
					<Image src="/blog_assets/engr-rate.png"></Image>
				</div>
				<p className = "my-4">
					Now we divide all of these numbers by 36. For LAS we get approximately:
					<ul className="list-disc list-inside indent-4 my-4">
						<li>Resident: $353 / credit hour</li>
						<li>Nonresident: $867 / credit hour</li>
						<li>International: $934 / credit hour</li>
					</ul>
				</p>
				<p className = "my-4">
					And for engineering we get:
					<ul className="list-disc list-inside indent-4 my-4">
						<li>Resident: $500 / credit hour</li>
						<li>Nonresident: $1013 / credit hour</li>
						<li>International: $1169 / credit hour</li>
					</ul>
				</p>
				<p className = "my-4">
					Ouch. Yikes. That's a lot, a lot of money on the line. 
					So we are looking at a 3 or 4 credit hour class between $1000-2000 just for Illinois residents, 
					and more than double that for out of state and international students. 
				</p>
			</div>
		</div>
	);
}
