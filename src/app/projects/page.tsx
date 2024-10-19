'use client';
import { LinkList } from '@/components/LinkList';
import { RxDotFilled } from 'react-icons/rx';

export default function page() {
	return (
		<div>
			<div className='lg:w-1/2 lg:m-auto'>
				<div className='fixed w-2 h-full bg-[#dc423b]'></div>
				<div className='px-8 lg:px-12 py-8'>
					<LinkList />
				</div>
				<div className='mx-10 my-4 flex flex-col gap-6'>
					<div>
						<p className='text-sm mb-2 font-semibold'>Visitor App</p>
						<p className='text-sm'>
							A guest sign-in service capturing visitor information, photos, and signatures, stored in AWS
							S3 and DynamoDB. Built with Vite React (TypeScript) and styled using Tailwind CSS, the app
							features facial recognition sign-out powered by face-api.js. It is dockerized and runs on
							ECS.
						</p>
						<div className='mt-1 text-sm opacity-50 flex gap-2 items-center'>
							<p>React</p>
							<RxDotFilled />
							<p>AWS</p>
							<RxDotFilled />
							<p>Docker</p>
							<RxDotFilled />
							<p>Tailwind</p>
						</div>
					</div>

					<br></br>
					<div>
						<p className='text-sm mb-2 font-semibold'>Talent Board</p>
						<p className='text-sm'>
							A Next.js app for building and sharing resumes with potential employers. Integrates with
							AirTable for backend management, enabling seamless filtering and messaging between talent
							and companies.
						</p>
						<div className='mt-1 text-sm opacity-50 flex gap-2 items-center'>
							<p>Next.js</p>
							<RxDotFilled />
							<p>Airtable</p>
						</div>
					</div>

					<br></br>
					<div>
						<p className='text-sm mb-2 font-semibold'>Personal Portfolio</p>
						<p className='text-sm'>
							This app! A simple, clean portfolio showcasing my work. Built with Next.js, styled with
							Tailwind CSS, and connected to Google Firestore for blog data.
						</p>
						<div className='mt-1 text-sm opacity-50 flex gap-2 items-center'>
							<p>Next.js</p>
							<RxDotFilled />
							<p>Tailwind</p>
							<RxDotFilled />
							<p>Google Firestore</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
