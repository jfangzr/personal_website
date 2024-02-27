import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>12. How a college student like me shop at Costco</h1>
				<p className = "my-4">
					I&apos;ll start with some disclaimers. I eat <span className="italic">a lot.</span> Furthermore, I am living 
					with three roommates that are also willing to split the expenses of groceries four ways for some items. This 
					arrangement might work very differently depending on how many people you live with, your food habits (both in
					terms of taste and quantity), and how often you can access a car to go to Costco. I spend quite a bit of money on
					food in general, not only because I eat quite a bit, but also I am willing to shell out for more expensive food
					while eating out less. 
				</p>
				<p className = "my-4">
					When I was in high school, my dad would always take me to Costco and tell me what to buy. Sometimes I wasn&apos;t particularly 
					in the mood to go there, but my dad also wanted someone to talk, to, and those trips became fond memories. I loved going to Costco because initially it is the only place that doesn&apos;t sell seafood for exorbitant 
					prices near the campus. 
					But as time went on, I discovered that there are more things I could save <span className="italic">
					a lot </span> of money on. This list wouldn&apos;t be stocked every time, especially protein. Without further ado, here is a (non-exhaustive) list of things I would get at Costco: (KS denotes Kirkland Signature)
				</p>
				<h2 className={subtitle()}>Protein</h2>
				<ul className="list-disc list-inside indent-4 my-2">
					<li>Salmon (fresh steelhead or KS Farmed Atlantic Salmon). Great for inviting guests over.</li>
					<li>New York Strip Steak. Also great for inviting guests over.</li>
					<li>Chicken Thighs</li>
					<li>Atlantic Cod</li>
				</ul>
				<h2 className={subtitle()}>Fruits and Vegetables</h2>
				<p className = "my-2 font-bold">
					Vegetables
				</p>
				<ul className="list-disc list-inside indent-4 my-2">
					<li>Sweet white onions</li>
					<li>Bell peppers</li>
					<li>Mushrooms</li>
					<li>Tomatoes</li>
					<li>Canned Tomatoes</li>
				</ul>
				<p className = "my-2 font-bold">
					Fruits
				</p>
				<ul className="list-disc list-inside indent-4 my-2">
					<li>5 lb Mandarin Oranges</li>
					<li>Zespri Golden Kiwis</li>
				</ul>
				<h2 className={subtitle()}>Dairy and Cooking Oils</h2>
				<ul className="list-disc list-inside indent-4 my-2">
					<li>KS Butter</li>
					<li>KS Shredded Parmigiano Reggiano (DOP)</li>
					<li>KS Vegetable Oil</li>
					<li>KS Italian Olive Oil</li>
				</ul>
				<h2 className={subtitle()}>Cooking Ingredients</h2>
				<ul className="list-disc list-inside indent-4 my-2">
					<li>Salt</li>
					<li>Pepper</li>
					<li>Garlic salt/powder</li>
					<li>Matcha Powder</li>
				</ul>
				<h2 className={subtitle()}>Household Items</h2>
				<ul className="list-disc list-inside indent-4 my-2">
					<li>Tramontina 2-piece Stainless Steel Frying Pan (large & small for $30)</li>
					<li>Ziploc Bag Set</li>
					<li>Plastic Wrap</li>
					<li>Laundry Detergent</li>
					<li>Dishwasher Detergent</li>
					<li>Dish Soap</li>
				</ul>
				<p className = "my-4">
					For a lot of the cooking ingredients, I would head over to the local Asian grocery store
					to find them. Sometimes when I need things in small quantities, usually for myself, or 
					for Asian foods that I can&apos;t find at Costco, I will head over to Asian grocery shops. I usually 
					spend $300-400 a month on food, which I admit isn&apos;t particularly cheap, but I think I get 
					a good price for what I like to eat. 
				</p>
			</div>

		</div>
	);
}
