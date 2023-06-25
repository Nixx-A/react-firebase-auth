export default function Alert({message}: {message: string}) {
  return (
    <div className="bg-red-100 border  border-red-400 text-red-700 px-4 py-2 rounded realtive mb-2 text-center">

    <span className="sm:inline-block">{message}</span>
    </div>
  )
}
