import { Habit } from "./components/Habit";
import '../src/styles/global.css'

export function App() {
  return (
    <div>
      <Habit completed={4} />
      <Habit completed={4} />
      <Habit completed={20} />
      <Habit completed={4} />
    </div>
  )
}