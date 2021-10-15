const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location.href = '/';
        console.log('logged out')
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default Logout;