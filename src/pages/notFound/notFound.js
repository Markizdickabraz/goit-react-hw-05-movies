import BackLink from "components/BackLink"
import { NotFoundPage, NotFoundTitle } from "./notFoundStyled"

export default function NotFound() {
    return (
        <NotFoundPage>
            <BackLink to={"/"}>Back to Home</BackLink>
            <NotFoundTitle>Такої сторінки не існує</NotFoundTitle>
        </NotFoundPage>

    )
}