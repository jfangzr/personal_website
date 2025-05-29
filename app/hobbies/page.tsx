"use client";
import { title, subtitle } from "@/components/primitives";
import {ComposersCard} from "@/components/composers"
import {LanguagesCard} from "@/components/languages"
import {lcards} from "@/data/langs"
import { BlueLink as Link} from "@/components/link";
export default function HobbiesPage() {

	return (
		<div className="max-w-4xl mx-auto text-justify">
			<div className="flex flex-col gap-6 mt-16 mb-8">
				<h1 className={title()}>My hobbies</h1>
				<p>
					I love playing piano, writing/blogging, playing chess, cooking, working out, biking, hiking, attending cultural events, travelling, and learning languages. Travelling and languages go hand-in-hand for me!
				</p>
				<p>
					I often read Wikipedia articles when I am bored, on random topics I think about - in history, economics, politics, social currents, and philosophy. 
				</p>
				<p>
					My blogs/writings have been all over the place. I keep a blog both <Link href="/blog">here</Link> on my personal website and over on <Link href="https://substack.com/@polymathjames?r=5dq8ch&utm_campaign=profile&utm_medium=profile-page" newPage={true}>Substack</Link>. 
				</p>
			</div>
			
			<div className="flex flex-col gap-6 my-8">
				<h1 className={title()}>Languages that I (want to) speak</h1>
				<LanguagesCard lcp={lcards["Fluently"]}/>
				<LanguagesCard lcp={lcards["Learning"]}/>
			</div>
			<div className="flex flex-col gap-6 my-8">
				<h1 className={title()}>My favorite composers</h1>
				<p>I love classical piano music, epecially from the Romantic Era between 1825 and 1900.</p>
				<div className = "flex flex-col sm:flex-row gap-4 justify-center items-center">
					<ComposersCard source="images/Liszt.png" caption = "Franz Liszt" alt = "Painting of Liszt"/>
					<ComposersCard source="images/Chopin.png" caption = "Frédéric Chopin" alt = "Painting of Chopin"/>
					<ComposersCard source="images/Beethoven.png" caption = "Ludwig van Beethoven" alt = "Painting of Beethoven"/>
				</div>
			</div>
			<div className="flex flex-col gap-6 my-8">
				<h1 className={title()}>My favorite dishes to make</h1>
				<p className = "">
				All of these dishes are made with a stainless steel pan, which I absolutely love because it makes cleaning much easier than 
				a nonstick and I never worry about nonstick coating leaching into my food. My preferred choice of cooking fat to 
				prevent sticking is always butter, because it imparts a wonderful smell and taste on my favorite dishes. 
				</p>
				<p className = "">
				Steak is a favorite. I would make steak by buying Beef Loin New York Steak from Costco for $9-10 a pound, then cut it in half on its thickness to get more surface area. 
				I would then season it with salt and pepper on each side. Afterwards I have a couple of options. The first is to season it with cumin on each side, then 
				sear both sides on high heat on one minute, then on medium for 20-30 seconds each side. The other one is slightly more challenging, and it is to
				 pour butter with a spoon after 60 seconds on each side on high. The remaining oil and butter, already having a good amount of flavor from the seasoning 
				 and the steak itself, can be used to stir-fry a wonderful vegetable mix. 
				</p>
				<p className = "">
				The next one is salmon. I would fry the onions with butter in the stainless steel pan first, until the onions are brown to my liking. Then I make space to put the salmon 
				on to the metal to let Maillard reaction cook. Afterwards I throw the bell peppers in, add the Lee Kum Kee seafood soy sauce, maybe a little bit of water to make sure
				the salmon &quot;boils&quot; through while the bottom of the pan does not burn. I may also add a little bit of cornstarch to prevent the pan from sticking.
				</p>
				<p className = "">
				Curry is also great for meal prep. Again, I brown the onions, then I add the coconut milk and curry paste. The length is variable, depending on how much time it would take for the protein 
				and the vegetables to cook through, but it&apos;s usually pretty fast. Seafood mix cooks in a few minutes, while chicken thigh may take a bit longer even when diced. 
				</p>
				<p className = "">
				Another favorite is gyudon. Gyudon, as long as you can find the ingredients like mirin, dashi, and sake, is ridiculously simple, cheap, and fast to make. I would probably say that 
				it is the best meal prep dish. Serve it with rice from rice cooker, it takes barely any effort, and it is flexible for you to add any vegetable as you need as well.
				</p>
				<p className = "">
				With the rice cooker, I would throw in some <span className="italic">lap cheong</span> or Chinese sausage. They aren&apos;t cheap nor super healthy, but 
				they taste insanely good and are super easy to chop and cook with a rice cooker. The oil from the sausage sinks seeps into the rice, while the water from the 
				rice cooker itself softens the sausages as they are cooking. I have also added okra with the sausage to make the rice healthier, although okra is not cheap either!
				</p>
				<p className = "">
				I&apos;ve also made cod (cooked in an oven), poke bowl, burrito bowl, fried salmon, pasta (i.e. bucatini all&apos;amatriciana, 
				alla bolognese, carbonara), pad thai, seafood pizza as well. I absolutely would repeat those recipes with improvements
				I learned about cooking over the years, though I don&apos;t know how often I would make them.  
				</p>
			</div>
		</div>
	);
}
