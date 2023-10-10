const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>&copy; Akash Jindal | Nagarro | {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
