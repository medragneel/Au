const Book = ({ b }) => {
    return (
        <li class="card">
            <div className="card-head">
                <img crossorigin="anonymous" src={b.image_url} alt={b.title} />
            </div>
            <div className="card-title">
                {b.title}
            </div>
            <br />
            <div className="card-body">
                <em class="bg-success-lighten-1" style={{padding: 0.5 + "rem"}}><b >{b.genre}</b></em>
                <br />
                <br />
                <p><em>{b.description}</em></p>
                <br />
                <br />
                <button type="button" class="btn btn-dark pl-2 pr-2"><i class="fa-solid fa-book-open"></i> preview</button>
                <br />
                <br />



            </div>

        </li>
    )
}

export default Book
