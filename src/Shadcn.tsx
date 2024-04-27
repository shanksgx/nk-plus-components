import { Button } from "@/components/ui/button"
import { toast } from "sonner"

function App() {

  return (
    <div className="w-full nk-p-5 nk-justify-center nk-flex">
      <p>
        <Button
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >Show Toast</Button>
      </p>
    </div>
  )
}

export default App
