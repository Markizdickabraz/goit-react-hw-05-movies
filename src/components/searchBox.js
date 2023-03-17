import { FormStyled } from "pages/movies/moviesStyled"
import PropTypes from 'prop-types';


export default function SearchBox({ value, onChange, formSubmit }) {

    return (
        <FormStyled onSubmit={formSubmit}>
            <label>Пошук за назвою
            <input type="text"
            name="name"
            value={value}
            onChange = {onChange}
            autoComplete="off"
                        />
        </label>
            <button type="onSubmit">Search</button>
            </FormStyled>
    )
}
SearchBox.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}