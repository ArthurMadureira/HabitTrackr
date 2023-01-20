import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">

      <label htmlFor="title" className="font-semibold leading-tight">
        What is your commitment?
      </label>

      <input
        type="text"
        id='title'
        placeholder="Exercise, sleep well, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
      />

      <label className="font-semibold leading-tight mt-4">
        What is the recurrence?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 gap-3 flex justify-center items-center font-semibold bg-green-600 transition-colors ease-in hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirm
      </button>
    </form>
  )
}