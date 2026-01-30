
interface UserProfileProps {
  // Define any props if needed in the future
  name: string;
  age: number;
  collection?: string;
  handleClick: () => void;
}
const UserProfile = ({name, age , collection="guest" , handleClick}: UserProfileProps) => {
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Collection: {collection}</p>
        <button onClick={handleClick}>Update Profile</button>
    </div>
  )
}

export default UserProfile