import BackLink from "components/BackLink"

export default function NotFound() {
    return (
        <div>
            <BackLink to={"/"}>Back to Home</BackLink>
            <h1>Такої сторінки не існує</h1>
        </div>

    )
}