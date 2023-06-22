
const Selector = ({ value, colors, onChangeDate }) => {
    return (
        <select name="selector" id="select" onChange={(e) => { onChangeDate(e.target.value) }} value={value}>
            {colors.map((color, index) => {
                return <option value={color} key={index}>{color}</option>
            })}
        </select>
    )
}

export default Selector;