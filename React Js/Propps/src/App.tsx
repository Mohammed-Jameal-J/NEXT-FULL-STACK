import Card from "./Card";
import UserProfile from "./UserProfile"

function App() {

  const handleClick = (): void => {
    console.log("Update Profile button clicked");
  }

  return (
    <>
      <h2>Probs</h2>
      <UserProfile name="John" age={30} handleClick={handleClick} />
      <Card>
        <h2>Welcome to the Card Component</h2>
        <p>Card Components</p>
      </Card>
    </>
  )
}

export default App
