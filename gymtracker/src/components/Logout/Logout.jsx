const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
        console.log('logged out')
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default Logout;