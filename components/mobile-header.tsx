import { Button } from './ui/button'

export default function MobileHeader() {
  return (
    <header className="sticky flex w-full items-center justify-between p-4 shadow backdrop-blur">
      <div className="font-bold">
        <span className="text-xl">Braindie</span>
      </div>
      <Button
        variant="ghost"
        className="flex flex-col gap-2 bg-none hover:bg-none"
      >
        <div className="h-[1px] w-5 bg-gray-800 transition-all" />
        <div className="h-[1px] w-5 bg-gray-800" />
      </Button>
    </header>
  )
}
