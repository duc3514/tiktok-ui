import Header from "./Header";


function DefaultLayot({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayot