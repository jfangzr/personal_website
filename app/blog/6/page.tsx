import { title, subtitle} from "@/components/primitives";
import {BlueLink as Link} from "@/components/link" ;
export default function ContactPage() {
	return (
		<div className="max-w-4xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>6. Reforming American College Admissions</h1>
				<h1 className={subtitle()}>Part I: The status quo, and its problems.</h1>
				<p className = "my-4">
					The American colleges and universities admission system is widely perceived as unfair, strongly favoring 
					students from wealthy families.
				</p>
				<p className = "my-4">
					The American admission model has been built upon on one unfortunate principle: prestige built 
					on how exclusive the institutions can be. At the most selective universities and departments 
					throughout the country, such as the Ivy League, top public universities such as the 
					University of California system (especially
					UCLA and Berkeley), and the engineering and business colleges at my alma mater - University of Illinois
					Urbana-Champaign, officials express their feigned regret at having to turn away many &quot;highly 
					qualified, talented, competitive students&quot;. When these school officials admit that many 
					talented students are not admitted, we know that many talented students are not at the places where
					they can get the best possible education experience. 
				</p>
				<p className = "my-4">
					Based on a mix of coursework & GPA, personal statement(s), extracurricular activities and their associated 
					accomplishments/awards, demographic background (including gender, geography, family income/education status, and
					until SCOTUS struck down affirmative action, ethnicity/racial background), standardized exam scores
					such as AP and SAT scores, 
					university officials are deciding how they are filling their ultra-selective classes accepting single-digit percentages 
					of applicants. Already, many factors would skew admissions for wealthier families, such as standardized 
					exam scores and extracurricular activities. 
				</p>
				<p className = "my-4">
					And this is not even considering some explicity un-meritocratic manners students get admitted, such as 
					athletes, legacies, university donors&apos; children, and celebrities&apos; children (ALDCs), which all skew towards the ultra-wealthy parents. 
					I am very thankful that this practice is far less rampant at STEM-focused institutions such as MIT, Caltech, and at 
					public institutions such as UC Berkeley and UIUC Computer Science. However, ALDCs make up anywhere between 25-40% of the 
					class at many selective private institutions, including all of the Ivy League. 
				</p>
				<p className = "my-4">
					My program, UIUC Computer Science, boasted a 5.5% acceptance rate for Fall 2021 admissions on an 
					email sent in March 2021 convincing me to commit to the program, telling basically how special of a class we are to be admitted.
					I never believed that low acceptance rates are anything that an institution should brag about; if anything,
					it is that the institution has been limited in its ability to educate more students, often because 
					the educational resources and budget are not allocated properly or efficiently, such as hiring more
					teaching assistants and faculty to run classes.   
				</p>
				<p className = "my-4">
					I would be more content if the college admission criteria mix was a silver bullet in finding the students who are a good fit for the CS program, 
					that this class is the best overall fit possible. But my friends and I have all seen too many students who floundered after 
					being admitted to the program, sometimes because they were academically unprepared and &quot;slipped through the admissions system&quot;, but also because 
					of other personal and circumstantial factors while in university. 
				</p>
				<p className = "my-4">
					Plenty of university students, even at selective programs, rely on what I would call 
					leniency measures, often made at a professor&apos;s discretion out of sympathy, 
					such as exam remakes and late homework/project submissions, to scrape by classes. These leniency measures are unfair for many reasons: 
					at best, they take up time and resources that can be used to help other students, and at worst, they do not 
					give equal footing for students academically and incentivise counterproductive behavior. Those students often graduate university 
					unprepared for whatever next steps they want to take in life, be it grad school or starting their career. 
					My friends in CS and I all knew hardworking, virtuous friends that 
					would have contributed more positively at the university had they been admitted, often with 
					achieving more with limited economic circumstances.  
				</p>
				<p className = "my-4">
					Furthermore, the solutions that had been proposed to address the (demographic) inequities arising out of such competitive 
					admissions systems, such as racial affirmative action that SCOTUS found unconstitutional in June 2023, have garnered 
					heated debate. Ugly evidence of discrimination, such as Harvard giving its Asian-American students lower scores on 
					personality traits, only fueled more anger towards the college admissions system. Furthermore, many argue that 
					affirmative action has only been a symbolic gesture that benefited a very small percentage of the millions of minority high school students
					that it is supposed to help, with some arguing as far as that they benefit wealthy minority students at the expense of 
					middle-class and poor students on the whole. 
				</p>
				<p className = "my-4">
					And these problems above hadn&apos;t even been complicated even more by another massive problem: secretive,
					at times deeply corrupt admissions practices. The infamous college admissions scandal that implicated many 
					selective universities such as Stanford, Yale, UT Austin, UCLA, and University of Southern California had only 
					shown the means that wealthy parents have unfairly attempted to gain advantages for their children to be 
					admitted into selective institutions. 
				</p> 
				<p className = "my-4">
					With these in mind, many middle-class and poorer students have been vocally angry about the state of
					American college admissions, perceiving these systems as ivory towers designed to keep rich and 
					powerful families rich and powerful. And they are absolutely right, because too much university 
					resources have not been going towards talented students perhaps without the means that would actually 
					make the best uses of the resources. 
				</p>
			</div>
		</div>
	);
}
