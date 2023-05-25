import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/primitives/Accordion";

export default async function FAQS() {
	return (
		<main className='flex flex-col justify-between p-8'>
			<Accordion type='single' collapsible>
				<AccordionItem value='item-1'>
					<AccordionTrigger>Is this a real e-commerce site?</AccordionTrigger>
					<AccordionContent>No. This is just a side project to teach myself react server components.</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger>Tech Stack</AccordionTrigger>
					<AccordionContent>
						<div className='flex flex-col gap-1'>
							<a href='https://nextjs.org/docs'>Built using NextJS</a>
							<a href='https://ui.shadcn.com'>UI using shadcn/ui</a>
							<a href='https://tailwindcss.com'>Styled using Tailwind</a>
							<a href='https://fakestoreapi.com/docs'>Fake API by fakestoreapi</a>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger>Social Links</AccordionTrigger>
					<AccordionContent>
						<div className='flex flex-col gap-1'>
							<a href='https://twitter.com/lukedore_'>Twitter</a>
							<a href='https://github.com/luked177'>GitHub</a>
							<a href='https://www.linkedin.com/in/luke-dore-77a42b233/'>Linkedin</a>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
}
