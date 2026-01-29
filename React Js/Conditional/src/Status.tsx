const Status = () => {
    const loading: boolean = false;
    const error: string | null = "not found";
  return (
    <>
    <h2>Status</h2>
    {loading && <h2>Loading...</h2>}
    {!loading && <h2>Data loaded</h2>}

    {/* <h2>Error</h2> */}
    {/* {loading && error && <h2 style={{ color: 'red' }}>{error}</h2>} */}
    {!loading && error && <h2 style={{ color: 'red' }}>No Error</h2>}
    </>
  )
}

export default Status