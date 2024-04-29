import carImg from "./images/icon.jpg"

export default function App() {
  return <div className="h-screen w-screen flex items-center justify-center gap-5 flex-col">
    <h1 className="text-500 font-bold text-xl">Porsche</h1>
    <img className="h-[500] w-[500] object-contain" src={carImg} alt="" />
  </div>
}