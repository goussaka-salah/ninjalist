import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oops!! We think you lost your way</h1>
            <h2>Back to <Link href='/'><a>Hompage</a></Link> </h2>
        </div>
    );
}

export default NotFound;