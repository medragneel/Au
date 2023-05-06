const Prod_card = ({ p }) => {
    return (
        <li class="card">
            <div class="card-head" style={{ backgroundImage: `url(${p.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}>
                {
                    <img crossorigin="anonymous" src={p.image} alt={p.product_name} />
                }

            </div>
            <div class="card-title">
                <h1>{p.product_name}</h1>
                <span class="fs-sm txt-disabled">@{p.sku}</span>
            </div>
            <div class="card-body">
                <p>{p.description}</p>
                <b class="txt-primary">{p.price} Da</b>
                <br />
                <br />

                <button type="button" class="btn btn-dark pr-2 pl-2"><i class="fa-solid fa-cart-shopping"></i> Buy</button>

            </div>
            <br />
            <br />




        </li>
    )
}

export default Prod_card
