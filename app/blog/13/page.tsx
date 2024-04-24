import { title, subtitle} from "@/components/primitives";
import {Image, Link} from "@nextui-org/react";
export default function ContactPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-4">
				<Link href = "/blog/">Return to all blog posts</Link>
			</div>
			<div className="my-4">
				<h1 className={title()}>13. What I learned about cancer treatment as a biomedical software engineer</h1>
				<p className = "my-4">
					As I am building a medical task toolset called Rx Jot (<Link href="https://www.rxjot.com/">www.rxjot.com</Link>), which currently includes documentation/notes generation
					and querying for medical treatments from Food and Drug Administration (FDA) indications and National Cancer Center Network (NCCN) guidelines, 
					I have learned a lot about horrible, difficult to treat diseases like cancer. I am focusing on cancer treatments and
					reaching out to oncologists because that is where I believe I can make the most impact and where a little bit of work
					to make their work easier would really help them. 
				</p>
				<p className = "my-4">
					Cancer is truly a horrifying disease. What makes it such a horrifying condition is the ordeal that it puts patients
					(and their families) through over a period of months to years. Anybody with family members that had cancer knows this, and 
					this <Link href="https://www.cs.cmu.edu/~pausch/news/index.html">page</Link> about late Professor Randy Pausch from Carnegie Mellon University goes
					into great detail about cancer pathophysiology. 
				</p>
				<p className = "my-4">
					<span className="underline">I am not a doctor.</span> The information in this blog is certainly not to be taken for medical advice, it just collates
					what I have been understanding about cancer biology as I work on automation problems for oncologists. I will discuss the many different analogies that 
					can be said about cancer, and each one of them reveals a different perspective to think about it. 
				</p>
				<p className = "my-4 font-bold">1. Cancer is a hydra to slay.</p>
				<p className = "my-4 italic">Slay a hydra head with a sword, then slay three more that grow back. </p>
				<p className = "my-4">
					<span className="italic"></span>One reason why cancer is such a difficult disease to treat is because cancer is far from a genetically homogenous disease.
					Cancer mutates. Mutations allow cancer cells to evade immune detection, to metastasize (spread to other parts of the human
					body), and unfortunately, to gain resistance to treatments. When a treatment is applied, such as chemotherapies that target
					a certain receptor (i.e. trastuzumab for HER2 receptor, highly expressed in some breast cancers), it might kill 99% of cancer
					cells, and there is that problematic 1% to deal with. The other 1% does not die because they have already mutated/evolved 
					resistance, <span className="italic">just by chance</span>, to evade trastuzumab by not overexpressing HER2. 
				</p>
				<p className = "my-4">
					And over a period of months/years, this 1% of tumor cells will strike back, with resistance to trastuzumab, and a novel 
					line of treatments such as pembrolizumab PD-L1 immunotherapy would be needed. When one set of tumor cells die, another one might grow back and then metastasize. 
				</p>
				<p className = "my-4">
					This is why discovering cancer cells in its early stages is the best predictor to treatment success and survival - both overall and 
					progression-free survival. When cancer has not metastasized, the probability of any certain treatment producing a complete response
					(undetectability of tumor cells on an imaging scan or blood test) is much higher since there are fewer cells that have evolved resistance to a first line treatment,
					and even fewer cells that evolved a resistance to a second line therapy. Surgery, with/without adjuvant (post-surgery) 
					immunotherapy or chemotherapy, remains the top treatment choice for most cancers that can be operated on. It is designed 
					to produce a complete response by cutting away the tumor and some surrounding tissue. 
				</p>
				<p className = "my-4 font-bold">2. Cancer behaves like a tree.</p>
				<p className = "my-4">
					This part is a reason where it is <span className="italic">really</span> difficult to make sure cancers stay dead after killing them. The cancerous tissue are 
					the aggressive tumor cells that attempt other bodily tissues, but the roots (and seed origins) of the tree lay underground as precancerous cells, precursor to cancer cells.
					Cancers arise from precancerous cells with damaged DNA. There are multiple &quot;security gates&quot;
					that cells have to overcome (mutate with a certain small probability) and knock down for cells to become cancerous. Unfortunately,
					the passing of time itself exposes human cells to environmental factors such as solar radiation and carcinogens that 
					cause DNA damage that lead to cancer, most notably epithelial (lining tissue) 
					cells - most exposed to environmental factors and where 90% of human cancers come from - carcinomas.
				</p>
				<p className = "my-4">
					We can practically think of the probability of getting cancer as a probability function f(p, b, e) =&gt; p&apos; where b and e stand for body and
					environment respectively. p is the probability of having cancer today, while p&apos; is the probability of getting cancer tomorrow. We might be
					able to model p&apos; &asymp; kp where k is 1 + &epsilon;. Unhealthy human behaviors, such as 
					alcohol and tobacco consumption, accelerate the DNA damage machine, bump this &epsilon; up, while a strong immune system significantly bumps down the &epsilon; towards 0.
					Genetic mutations such as BRCA 1/2 and TP53 (Li-Fraumeni syndrome) sadly bump this &epsilon; up by a lot.
				</p>
				<p className = "my-4">
					Therefore, it is not a surprise that the likelihood of getting cancer is an exponential relationship with age as more and more cells in the body mutates towards
					a cancerous state. Certain cells, such as endocrine cells, have this DNA damage process running on steroids as they are
					exposed to hormones. There are statistics that 
					show <Link href="https://www.webmd.com/prostate-cancer/prostate-cancer-risk-factors">most men over 80 years old</Link> have some (low-grade) prostate cancer cells. 
				</p>
				<p className = "my-4">
					Furthermore, in an event of a complete response, as in we chopped every bit of the cancer tree above the ground, the roots from the ground 
					might grow back - recurrence. As humans age, the roots grow wider - more cells become precancerous. I would hope that in the oncoming decades there 
					would be a lot of investments into slowing down the progression from normal cells to cancerous cells, probably by arming the human 
					immune systems and even genetic therapy to clear away or repair precancerous cells.
				</p>
				<p className = "my-4">
					Human evolution has not been particularly great in setting up more security gates to prevent cells from getting cancerous in the first place. But there is an 
					animal that research can look into as inspiration: elephants. Elephants have 20 pairs of the TP53 gene that repairs the genome, compared to 
					just one pair of TP53 in humans. Perhaps in human evolution, nature prioritized a high enough mutation rate to increase human biodiversity and therefore 
					resistance to environmental changes / natural disasters compared to anticancer biology especially for humans after reproductive age.
				</p>
				<p className = "my-4 font-bold">3. Cancer treatment is like fighting a military campaign.</p>
				<p className = "my-4">
					And there is one thing that we should truly be happy and excited about: as time goes on, we have better 
					weapons and reconaissance tools to deal with the enemy - cancer cells.
				</p>
				<p className = "my-4">
					The reconaissance tools are tools are advancements in understanding more and more about the tumor, through imaging, tissue biopsy, 
					genetic sequencing, immunohistochemistry (to determine cell expression such as PD-L1, EGFR and HER2), and other methods to gain more and more 
					information from cancers. Furthermore, advancements in these tools have allowed us to find other interesting places where we can target these
					cancer cells, and gain more and more information while we treat the cancer patients to draw even more creative ideas on how to target cancers.
				</p>
				<p className = "my-4">
					The weapons that we have to fight cancer cells - which can be divided roughly into chemotherapy, radiotherapy and immunotherapy - are becoming
					more diverse and more specific. Increased understanding of cancer pathophysiology has allowed oncologists to better target tumors while lowering
					collateral damage to normal cells, especially immune system cells that are key to attaining and sustaining remission. The arsenal that oncologists have today are far stronger compared to fifty years ago to fight cancer. Perhaps
					the hallmark today as an oncologist is to be able to use all of these reconaissance and weapons at the correct time and place.
				</p>
				<p className = "my-4">
					With the more advanced, specific weapons that oncologists are now armed with, notably many first-line and second-line treatments, the 
					job of being an oncologist is also becoming more complex. A cancer can now be targeted through multiple angles, such as targeted receptor chemotherapy
					and PD-L1/CTLA-4 immunotherapy at the same time. One thing that I am excited to see is that with the rise of LLMs that can parse huge amounts of
					information effectively, for example reading and outputting large amounts of medical information such as clinical studies and drug indications, a lot of
					these information-seeking tasks that would have taken oncologists a lot of time can be partially automated. 
				</p>
				<p className = "my-4">
					When we use LLM tools, with information inputted such as a patient&apos;s chart taken from his/her EMR, can machines help devise better military campaign plans by knowing
					where and when to order reconaissance &quot;operations&quot; based on patient information so that better weapons can be deployed to seek and 
					destroy tumors more effectively?
				</p>
				<p className = "my-4 font-bold">4. Cancer treatment is like passing light through light filters.</p>
				<p className = "my-4">
					Each light filter would cut the number intensity of light by let&apos;s say a factor of 10. We can see each treatment as a filter, and the light as 
					cancer cells. The goal is to get it below a certain number of cancer cells that then the immune system might be able to then manage, though we want the number of cancer cells 
					to be as close to zero as possible. And the best parallel to this is treating bacterial infections. The goal of treatments such as antibiotics is not to wipe out the 
					bacterial infection with just the antibiotics treatment, it is to get the levels of infectious bacterial cells down to a low enough level for the
					immune system to clear it.
				</p>
				<p className = "my-4">
					The way that I think about cancer progression is a plotting number of cancer cells on a log scale throughout time. A higher magnitude on this chart 
					represents a more advanced progression, and death would happen at around a high enough magnitude (complications arising from tumor size growth and cancer 
					metastasis, affecting organs and other bodily functions). On the other end, a line threshold can be drawn for a small enough number of tumor cells
					that the human immune system can effectively wipeout the remaining cancer cells, perhaps with the help of some drugs that enhance or sensitize the 
					immune system to the cancer drugs. 
				</p>
				<p className = "my-4">
					Each effective treatment would be pushing that plot down, closer towards the immune-clearance threshold to hopefully attain remission. There are two 
					difficult questions that often not even the best oncologists in the world would have clear-cut answers to, however. The first one is by how much a certain 
					line of drug would push this plot down. Every person responds to a cancer therapy differently, simply because of different bodily biomolecular makeups, 
					cancer cell phenotypes (i.e. cell receptor expression), and different cancer genomic profiles that dictate their mutations and growth pathway. 
				</p>
				<p className = "my-4">	
					The second 
					question, which is even more difficult to answer, is where this immune-clearance bar lies. It is even harder than answering the first question, 
					since oncologists have at least some way of knowing whether certain treatments would work. Here we only know factors that would push 
					this immune clearance bar up or down, based on a patients&apos;s immune system health. 
				</p>
				
				<p className = "my-4">
					Here is an applicative example. There is a growing push for doctors to look for alternatives to standard chemotherapy to treat cancer, such as exploring immunotherapeutic options. For example, 
					a <Link href="https://www.acpjournals.org/doi/10.7326/M16-0270">Danish cancer study</Link> found that chemotherapy is unnecessary in up to a third of
					breast cancer patients. Chemotherapy 
					is highly cytotoxic to cancer cells and (fast-growing) normal cells alike. Aside from its painful side effects such as vomiting and nausea, 
					chemotherapy also negatively affects immune cells which need to multiply quickly to deal with threats to the human body. Because of 
					chemotherapy&apos;s mechanism of damaging DNA, there are risks that it would collaterally damage DNA to cause cancer growth - especially after 
					treating pediatric cancers.
				</p>
				<p className = "my-4">
					Conceptualizing it, chemotherapy pushes down the tumor cell magnitude bar before the immune system cannot clear 
					the remaining cancer cells, thereby increasing the risk of recurrence. Even though chemotherapy is one of the most 
					effective ways to treat cancers (push that log number of cancer cells down <span className="italic">by a lot</span>), oncologists
					would have to weigh in carefully whether the side effects even in an oncological setting are justifiable. 
				</p>
				<p className = "my-4 font-bold">5. Conclusion</p>
				<p className = "my-4 italic">What does it mean if I am working as an oncologist? Or if I am a researcher? Or if I am a regulator?</p>
				<p className = "my-4">
					This part will be based on me speaking from my intuition and not on any medically accepted 
					basis as a standard of care. Again, <span className="underline">I am not a doctor. Do not use my advice to make medical decisions.</span>
				</p>
				<p className = "my-4">
					If I was an oncologist, I would order every test and diagnostic procedure that I can to understand more about 
					the tumor that I am treating. I want to know every receptor, genetic mutation, metabolic, epigenomic expression - as
					much information as I can to understand the tumor I am treating. I will take whatever treatment works to reduce the 
					tumor cells, have acceptable short-term toxicity profiles (<span className="italic">not always</span> looking 
					at you, chemo!), and throw it as a drug cocktail for the patient. I would have multiple goals: kill enough cancer cells to push cancer cell 
					counts into immune system-manageable territory, and suppress the risk of recurrence. Cancer is dangerous enough of a disease that in my
					non-medically trained, logically-deduced opinion, drugs with mostly short term side effects (i.e. checkpoint inhibitor immunotherapy) are 
					well justified to suppress the long-term risks of recurrence. 
				</p>
				<p className = "my-4">
					If I was a researcher, I would do two things very differently regarding clinical trials. The first thing is that with targeted therapies, 
					I would run massive &quot;general-purpose&quot; anticancer studies. For example, I would target all solid tumors with a certain receptor 
					expression, instead of hundreds of studies, each for a combination of cancer type, previous treatment, metabolic profile, x-th
					line of therapy, etc. What I would do differently, however, is to collect as much data as possible on each patient to see under what conditions 
					would the drugs I am researching into deliver effectively antitumor responses (or not). 
				</p>
				<p className = "my-4">
					Another area of research I would invest more is in 
					inducing immune responses from checkpoint inhibitor therapy to patients in remission, from previous immunotherapy, chemotherapy, radiotherapy 
					or surgery. This concept has been paralleled from one of the very first immunotherapeutic drugs - Bacillin Calmette-Guerin immunotherapy, 
					where BCG bacteria are delivered to the bladder after surgery to stimulate immune cells to seek and kill any remaining cancer cells. And BCG 
					has been a standard treatment for certain cases of bladder cancer for <span className="italic">decades.</span>
				</p>
				<p className = "my-4">
					If I was a regulator, if I see a cancer drug working under a broad parameter (i.e. expression of a certain receptor), I would approve of it 
					as a general use case, and then collect as much data as possible from what worked (and what did not) for patients. The current 
					method, of running a study for each case, in my (analytical) opinion would not deliver the best fit between patients, their clinical 
					profiles, and treatments. And I hope this slight loosening of regulation would lower the costs of organizing and managing a 
					separate clinical trial for each use case, and free up valuable researchers and medical personnel to bring cancer drugs to patients faster. 
				</p>
				<p className = "my-4">
					Thank you for reading this blog post. If in the rare chance that this blog post makes a difference to someone, such as an oncologist, 
					which I highly doubt my engineering view of medicine would be that strong, I would be elated. 
				</p>
			</div>

		</div>
	);
}
