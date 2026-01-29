const Greeting = () => {
    const isLoggedIn: boolean = true;

    // if (isLoggedIn) {
    //     return <h2>Welcome back!</h2>;
    // }else{
    //     return <h2>Please sign up.</h2>;
    // }

  return (
    <>
    <h2>Greeting</h2>
    {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please sign up.</h2>}

    </>
  )
}

export default Greeting