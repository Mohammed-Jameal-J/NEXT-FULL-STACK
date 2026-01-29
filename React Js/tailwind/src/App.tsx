import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { CardDemo } from "@/Card"

export default function App() {
  return (
    <div className="p-10">
      {/* <Card>
        <CardHeader>
          <CardTitle>Card working 🎉</CardTitle>
        </CardHeader>
        <CardContent>
          Shadcn UI installed successfully.
        </CardContent>
      </Card> */}
      <CardDemo />
    </div>
  )
}
