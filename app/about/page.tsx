import { title, subtitle} from "@/components/primitives";
import { Image } from "@nextui-org/react";

export default function AboutPage() {
	return (
		<div className="max-w-3xl mx-auto text-justify">
			<div className = "my-8 flex flex-col sm:flex-row gap-4 items-center">
				<div className = "w-80">
					<Image
						alt="Me in Basel"
						width = {320}
						src="/images/photo-of-me.jpg"
					/>
					<p className = "text-center italic text-sm text-neutral-700">
						Me drinking hot chocolate at Basler Weihnachtsmarkt on an Erasmus daytrip with exchange student friends, 2022/12/10
						<br></br>
						Basel, Switzerland
					</p>
				</div>
				<div className = "grow text-center">
					<h2 className ={subtitle()}>Zhengru (James) Fang</h2>
					<h2 className ={subtitle()}>方正儒</h2>
					
				</div>
			</div>
			<div className="my-8">
				<h1 className={title()}>A little story</h1>
				<p className = "my-2">
					In the second semester of 8th grade, I started picking my handle 
					for many social media and other accounts - later including Github. 
					I was a passionate Model UN student (which later evolved to staff and 
					secretariat leadership roles), and thus I picked @jamesdiplomat, as my handle.
				</p>
				<br></br>
				<p>
					I initially picked this for SnapChat, which I no longer use, 
					and this handle also eventually became my handle for Instagram and Github. 
					This is probably one of the things I get asked the most about me - 
					especially since my area of interest and study doesn&apos;t 
					have a lot to do with global affairs. But I am still proud to keep it, 
					for that Model UN brought me many friends and the spirit of learning 
					about the big beautiful world. 
				</p>
			</div>
		</div>
	);
}
