import {software} from "#/lib/data/credits";

export default function Software() {

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Version</th>
                <th scope="col">License</th>
            </tr>
            </thead>
            <tbody>
            {software.map((software) =>
                <tr className="align-middle">
                    <td><a href={software.link} title={software.linkTitle} target="_blank">{software.name}</a></td>
                    <td>{software.version}</td>
                    <td>{software.license}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}