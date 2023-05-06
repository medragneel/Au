const Help = () => {
    return (
        <div class="container">
            <h1 class="align-center">Façons pour aider</h1>
            <br />
            <br />
            <div className="cards ds-f g-2 grid js-center al-center">

                <div className="card pb-3">
                    <div className="p-2 fs-xxl card-head align-center">
                        <i class="fa-sharp fa-solid fa-users txt-primary"></i>

                    </div>
                    <div className="card-body align-center">
                        <h1 class="txt-primary">Devenir membre</h1>
                        <br />

                        <p>Inscrivez-vous dès aujourd'hui pour recevoir le magazine Your Autism, participer à notre assemblée générale annuelle et accéder au groupe Facebook des membres.
                        </p>
                        <br />
                        <br />

                        <button type="button" class="btn btn-primary">rejoindre aujourd'hui</button>
                    </div>

                </div>
                <div className="card">
                    <div className="p-2 fs-xxl card-head align-center">
                        <i class="txt-primary fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <div className="card-body align-center">
                        <h1 class="txt-primary">Collecter des fonds</h1>
                        <br />

                        <p>Nous avons beaucoup d'événements et d'idées de collecte de fonds pour aider à créer une société qui fonctionne pour les personnes autistes.</p>
                        <br />
                        <br />

                        <button type="button" class="btn btn-primary">s'impliquer</button>
                    </div>

                </div>
                <div className="card">
                    <div className="p-2 fs-xxl card-head align-center">
                        <i class="txt-primary fa-solid fa-heart-pulse"></i>

                    </div>
                    <div className="card-body align-center">
                        <h1 class="txt-primary">Bénévole</h1>
                        <br />

                        <p>Faites une réelle différence dans la vie des enfants et des adultes autistes, rencontrez de nouvelles personnes et apprenez de nouvelles compétences.</p>
                        <br />
                        <br />

                        <button type="button" class="btn btn-primary">en savoir plus</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Help
