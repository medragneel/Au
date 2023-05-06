
import { A } from "@solidjs/router"
import Nav from "../nav"

const Notfound = () => {
    return (
        <>
            <Nav />
            <br />
            <br />
            <br />

            <center>

                <div className="not-found m-5 d-col card ds-f js-center al-center ">
                    <h1>404</h1>
                    <br />

                    <p>Whoops... Page Not Found</p>
                    <br />

                    <A className='btn btn-dark' href='/'>Go home</A>
                    <br />


                </div>
            </center>
        </>
    )
}


export default Notfound

