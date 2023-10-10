import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>  
            <div className="card text-center border-danger mb-3">
                <div className="card-header">
                    OOPS
                </div>
                <div className="card-body">
                    <h2 className="card-title">Page Not Found</h2>
                    <p className="card-text">Visit Our Homepage</p>
                    <Link to="/"><i className="bi bi-house"></i>Home</Link>
                </div>
            </div>
        </main>
    )
}

export default Missing
