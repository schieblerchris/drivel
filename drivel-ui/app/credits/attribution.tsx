import {attributions} from "#/lib/data/credits";

export default function Attribution() {

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Description</th>
                <th scope="col">Link</th>
            </tr>
            </thead>
            <tbody>
            {attributions.map((attribution) =>
                <tr className="align-middle">
                    <td><img className="medium-logo" src={attribution.img}/></td>
                    <td>{attribution.description}</td>
                    <td><a href={attribution.link} title={attribution.linkTitle}
                           target="_blank">{attribution.linkText}</a></td>
                </tr>
            )}
            </tbody>
        </table>
    )
}