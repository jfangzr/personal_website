import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>7. Reforming American College Admissions</h1>
				<h1 className={subtitle()}>Part II: A solution from Switzerland</h1>
				<p className = "my-4">
					I studied abroad at EPFL in French-speaking Switzerland. It is the sister school to the world-famous ETH Zürich in the 
					Swiss-German speaking part of Switzerland, 
					which also has similar admissions standards to EPFL. EPFL is one of the top universities in the world for nearly every STEM subject,
					including my major: computer science. And I believe while their system is not perfect, their 
					admissions system is far fairer in providing an equal footing to students of any economic circumstance. 
					Their admissions system would probably better address any issue of inequity than any American university 
					would right now. 
				</p>
				<p className = "my-4">
					The EPFL runs what would be an &quot;open&quot; admissions system: all students in Switzerland that 
					have graduated from high school would be automatically admitted to the university, while foreign students 
					(including European Union students) only need a relatively low bar, 80%, to be automatically enrolled and admitted. Students
					from non-French speaking countries require a B2 proficiency in French since it is the language of instruction for 
					bachelor-level courses. 
					From the very start, this is a far more transparent admission standard than the subjective American college
					admissions process based on the intrusive litany of details gathered from the Common Application.  
				</p>
				<p className = "my-4">
					The real challenge for students is not to be admitted but to pass their first year. Only 35-40% of students 
					pass their first year exam on the first attempt. Luckily, for those who decide they want to try again, they have 
					the option of reattempting their first year, and only then if they fail they would be kicked out of the university.
					At that point, students definitely know if college is the right choice for them, and if they decide to continue studying at EPFL, 
					usually they are able to pass their second year. 
				</p>
				<p className = "my-4">
					While first-year college academic performance is not a perfect measure of ability to finish a degree, it is a far stronger 
					and a far more objective measure than the &quot;criteria mix&quot; American universities employ to determine student 
					readiness. Academically prepared students graduate, while unprepared students are filtered out. Yes, the first year 
					might be an at-times stressful, trying time, but it is probably still better for students&apos; mental health than 
					having them stress out about every minutiae factor in their college application during high school. 
				</p>
				<p className = "my-4">
					Under this admissions policy, universities do not turn away qualified students, and everyone therefore has an equal 
					chance at graduating. Compared to 5.5% admission rate at UIUC CS, the 35-40% chance for any given student to be able 
					to continue studying in their program of choice seems much more preferable. Of course, wealthier students would still 
					have an advantage, just by having access to education resources before university to increase chances of passing classes, 
					but there are fewer blatant, structural factors that are preventing middle-class and poor students from taking educational opportunities and 
					achieving the same educational goals if they worked diligently. 
				</p>
				<p className = "my-4">
					This will also force universities to operate efficiently now that they have to cater to an increasing number 
					of students. At EPFL, I did not see much of the leniency measures that are prevalent in American universities,
					although I did wish less of the grade was based off of the final exam. The education quality, in my opinion, was 
					the same, since the standard was just as high if not higher than back home at UIUC. The material content covered was 
					the same amount, even though the material was delivered in a more impersonal and more cut-and-dry manner. 
				</p>
				<p className = "my-4">
					But since only qualified, academically prepared students get to stay after passing the first year, EPFL did not 
					need to spend extra resources to cater to give floundering students &quot;a second chance&quot;. The assumption 
					was that the students that remained have the work ethic to obtain their degrees, and learned from the mistakes of their peers that were 
					filtered out.  
				</p>
				<p className = "my-4">
					EPFL&apos;s system for admitting and vetting which students should continue on to receive their degrees is not 
					perfect. Still, I strongly believe that it nonetheless has been better at creating social mobility than any other 
					form of college admissions, especially considering the pathways that it offers students to graduate from college. For example,
					Swiss students who had only completed apprenticeships can take an extra year to become college-prepared, can then 
					study at any Swiss university, including EPFL and ETHZ. 
				</p>
				<p className = "my-4">
					The final perhaps moral benefit that such an admissions system would entail is that it get rids of a lot of the 
					elitism of American universities. EPFL and ETHZ graduates are well-respected, but they are not put on a 
					pedestal like Ivy League graduates. The time and attention of college students and perspective-students in high
					school are put towards becoming academically ready for university, instead of ingraining themselves in often elitist subcultures 
					found at many institutions. 
				</p>
			</div>
		</div>
	);
}
