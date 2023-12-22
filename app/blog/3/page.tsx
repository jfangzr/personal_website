import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>3. Studying abroad: the preparation</h1>
				<p className = "my-4">
					It was a good bit of work, throughout freshman year and the summer before studying abroad.
					When I post this, I hope you know what to expect if you choose to chase the adventure
					like I did. I&apos;ll tell you how I decided to go to EPFL and work that went into going there. 
				</p>
				<p className = "my-4">
					On the <Link href="https://app.studyabroad.illinois.edu/index.cfm?FuseAction=Programs.AdvancedSearch"> Advanced Search</Link>, 
					you can find a list of exchange programs abroad. The first filter you should set is your eligible
					study abroad options based on your college (although, some majors, in interdisciplinary areas 
					such as CS + &#123;Math, Stats, Econ, ...&#125; can reasonably go on exchange with either 
					affiliated college). For example, CS + Econ in LAS can go to EPFL with International Programs in 
					Engineering (IPENG). For me, I was a CS major, purely in the Grainger College of Engineering, 
					so I think I was strictly limited to IPENG programs.
				</p>
				<p className = "my-4">
					You then set the continent that you want to study abroad at. In this case, I wanted to study
					abroad in Europe, preferably at a premier Western European institution. Yes, I am not really 
					differentiating myself from the other study abroad students this way, going the traditional way.
					I excluded places where I didn&apos;t want to go (British Isles), and wrote down the schools I was 
					really interested in. I went to 
					the <Link href = "https://my.engr.illinois.edu/login.asp?/studyabroadcourses/index.asp">course approval database</Link>,
					and found four institutions with a lot of past students transferring courses that I wanted:
				</p>
				<ul className="list-disc list-inside indent-4 my-4">
					<li>École polytechnique fédérale de Lausanne (EPFL), Lausanne, Switzerland</li>
					<li>TU Munich, Germany</li>
					<li>TU Delft, Netherlands</li>
					<li>KTH Royal Institute of Technology, Stockholm, Sweden</li>
				</ul>
				<p className = "my-4">
					Afterwards, I glanced over their computer science curriculums, and the cost sheets to calculate how much I would expect to pay. Then 
					it is time to make a trip to the study abroad office. You can really understand what you need to
					do to prepare to go to each institution by talking to study abroad advisors. Out of all UIUC 
					advisors I&apos;ve interacted with, study abraod advisors are the most helpful and most enthusiastic. 
				</p>
				<p className = "my-4">
					I found out that only TU Delft and EPFL were schools that I could feasibly exchange at. KTH was limited
					to 3rd and 4th year students. TU Munich requires knowledge of German. Even TU Delft had I think a last-semester
					requirement to be studying there, and I remember their course selection for CS students wasn&apos;t as big as that 
					of EPFL. Perhaps the only advantage to TU Delft was that it was slightly less expensive. But then the 
					study abroad advisors told me that TU Delft had a really bad housing situation while student apartments were 
					guaranteed for exchange students at EPFL. Switzerland was centrally located for my travels throughout Europe, 
					plus the country itself has <span className = "italic">a lot</span> of beautiful cities and natural sights to offer.
				</p>
				<div className = "flex justify-center">
					<Image width ={500}  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/SBB_CFFF_FFS_IR_Genf-Lausanne-Montreux-Aigle-Brig_%2831411822825%29.jpg/1599px-SBB_CFFF_FFS_IR_Genf-Lausanne-Montreux-Aigle-Brig_%2831411822825%29.jpg"/>
				</div>
				<p className = "my-4">
				    The strong academic reputation at EPFL was enough to convince me to go: it is consistently ranked in the top five
					European institutions for many STEM subjects - alongside Oxford/Cambridge, ETH Zürich (its German-speaking sister school), and 
					Imperial College London. I already speak some French (which I rapidly improved at EPFL), and since Lausanne 
					was in the French-speaking region of Switzerland, EPFL was a right fit. By QS world rankings, EPFL ranks 
					I believe first in Europe and among the top in the world for available exchange partners from UIUC. 
					Although, you can probably get an excellent education at practically any of UIUC&apos;s exchange institutions.
				</p>
				<p className = "my-4">
					One consideration is that certain exchange universities have tougher academic standards than others. The 
					well-ranked institutions, such as EPFL, NUS in Singapore, and TU Delft are known to be quite difficult. 
					EPFL was notorious for having one of the highest course failure rates among UIUC students exchanging there.
					The failure rate is high because students might not be adjusted to the European exam-based grading, and 
					students might have to take exams at UIUC since EPFL academic calendar starts a month later than UIUC. Furthermore,
					EPFL policy only allows students to take one humanities/business course a student, both home and exchange students.
					Students are tasked with taking a high technical load with 4-6 technical courses a semester. 
				</p>
				<p className = "my-4">
					From talking to advisors, I learned I needed to contact the French department for a French skills test, which 
					covered reading, speaking, writing and listening. Then it was time to complete the application. You will 
					need to rank a few study abroad choices, then answer a few short-response (100-200 words) questions. I submitted
					the French skills test and the writing questions with the application. IPENG was really quick, and I think within 
					2 weeks I learned I had been accepted to exchange at EPFL! 
				</p>
				<p className = "my-4">
					IPENG gave me a specific Google-sites brochure to UIUC students studying at EPFL for accepted/committed students. 
					It covers most of the things you needed to know before going there. Then the real work starts. I had
					to fill a short application form of a few pages to submit to EPFL. In 99% of cases it is a mere formality and student will 
					be accepted by the exchange institution; the students rejected either did not fill the form out properly or 
					the host institution had other than academic reasons to reject the student. Students accepted to study abroad 
					already had met academic requirements (i.e. &gt;3.0 GPA) and been vetted by UIUC in the first place. 
				</p>
				<p className = "my-4">
					Afterwards you are enrolled in the 1-credit hour LAS 291 course. It contains useful information
					such as insurance, UIUC phone numbers to call if you need help, and exercises in general global 
					awareness. The point of the course is to make sure that the American students going abroad don&apos;t 
					cause bad publicity abroad (and get exchange partnerships severed), like this family of tourists:
				</p>
				<div className = "flex justify-center">
					<iframe width="350" height="500"
						src="https://www.youtube.com/embed/68h-tVcF3jE">
					</iframe>
				</div>
				<p className = "my-4">
					This course is graded, so, it will affect your GPA. For the most part the TAs teaching the course 
					do respect keeping it as a 1-credit hour class, although it&apos;s a dice roll whether your TA is 
					going to be nice or nitpicky with grading. 
				</p>
				<p className = "my-4">
					Next step is course articulation. It makes sure that the classes you want to take abroad can transfer 
					back at UIUC to fulfill requirements. You&apos;re going to be opening the host university course catalogue, and searching on Google for info on interested courses. 
					You are going to choose courses that are available in the semester 
					you exchange at - many European universities offer courses available only in either fall or spring semester, sometimes 
					once every two years. This was the case at EPFL. It&apos;s best to perhaps take advanced electives (i.e. 400-level electives for CS), for 
					which you will have a wider selection of courses. 
					
				</p>
				<p className = "my-4">
					On a piece of paper, you write down interested abroad courses, link the syllabus with course code,
					submit it to your department&apos;s advisor, and the department will discuss with faculty on what 
					the course abroad should be counted as at UIUC. <span className = "font-bold">
						Articulate more courses than necessary so you can add/drop interested courses as you need and 
						you understand more courses that can be transferred back. You have options.  
					</span> The first time I tried to articulate Introduction to 
					Operating Systems (EPFL CS-323), UIUC CS faculty articulated it as CS-423. I had to contact Lawrence Angrave,
					the Systems Programming professor who ran CS 341, 
					who said it can be reasonably articulated as CS 341, for it to count as CS 341 and thus fulfilling a 
					required class. 
				</p>
				<p className = "my-4">
					I applied for a study abroad scholarship with IPENG, who awarded me $750 for the study abroad. I remember 
					I submitted it with the study abroad application, or after I was accepted. It covered my flight (I flew into 
					Paris because it was cheaper than Geneva), and high speed rail from Paris to Lausanne on TGV Lyria. 
				</p>
				<div className = "flex justify-center">
					<Image width ={500}  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Paris-Gare_de_Lyon_DSC_1395_%2849651815078%29.jpg/1920px-Paris-Gare_de_Lyon_DSC_1395_%2849651815078%29.jpg"/>
				</div>
				<p className = "my-4">
					Then it was summer break. I booked my flight tickets and reserved housing. For EPFL, their housing was 
					with Fondation maison pour étudiants Lausanne (FMEL, or Lausanne students housing foundation). The 
					most painstaking part was applying the visas. I was told to apply for visas as soon as I received 
					my acceptance letter from EPFL to exchange. This is the right advice, because I needed 8-12 
					weeks to finally receive my student D visa to go to EPFL. I booked the train tickets from Paris to Lausanne,
					since flights into Paris were cheaper. 
				</p>
				<p className = "my-4">
					Before you arrive, you want to research your public transportation options. Taxis and Ubers in Western Europe 
					is expensive. In Switzerland, cabs don&apos;t burn through your pocket, they rips your jeans off! I knew that I would 
					greatly benefit from having the Seven25 and the Half-Fare Card with me, and I downloaded Swiss Federal Railways the
					(SBB CFF FFS) app to plan my journey and buy my tickets. Seven25 allowed me to travel for free after 7 pm on 
					the entire Swiss public transportation network - train, tram, bus, boat - while Half-Fare Card was 50% off all travel in Switzerland as long 
					as the card is valid. 
				</p>
				<p className = "my-4">
					Also, to have data abroad, I used Airalo. 
					The Eurolink plan gave me 100G
					for 180 days for $185, which compared to the notoriously expensive Swiss cell phone plans, it was a bargain. 
					The best part about it was that it was multi-country, available for I think every European country except Russia, 
					allowing me to still use data while country-hopping without the 
					horrible roaming fees. To 
					call home, I used the wifi-calling function with AT&T, which also wonderfully connects to data.   
				</p>
				<p className = "my-4">
					If you have completed all of these steps, congratulations, you are now prepared to go studying abroad. 
					Yes, this is a lot of work, but you will have many wonderful people to talk to, such as IPENG, and those people 
					are more than happy to guide you through the process. You also have lots of time to do these things, so, don&apos;t 
					feel too overwhelmed!
				</p>
			</div>
		</div>
	);
}
