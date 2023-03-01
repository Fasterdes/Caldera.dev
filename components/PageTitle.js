export default function PageTitle({ children }) {
  return (
    <h1 className="mt-4 font-mono text-3xl font-extrabold leading-9 tracking-normal text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
