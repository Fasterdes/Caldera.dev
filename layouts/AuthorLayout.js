// import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
export default function AuthorLayout({ children, content }) {
  const { name, avatar, occupation, company } = content
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-mono text-3xl font-extrabold leading-9 tracking-normal text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 font-mono text-2xl font-bold leading-8 tracking-normal">
              {name}
            </h3>
            <div className="mb-2 font-mono text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="font-mono text-gray-500 dark:text-gray-400">{company}</div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 font-mono dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
