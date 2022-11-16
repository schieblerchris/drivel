import Attribution from "#/app/credits/attribution";
import Software from "#/app/credits/software";


export default function Page() {
    return (
        <>
            <h1 className="mt-5">Credits</h1>
            <h2 className="mt-5">Software</h2>
            <Software />
            <h2 className="mt-5">Attribution</h2>
            <Attribution/>
        </>
    )
}
