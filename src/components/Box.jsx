import "./Box.css"
const Box = ({ boxcolor }) => {
    console.log(boxcolor);
    return (
        <div className="Box" style={{ backgroundColor: boxcolor }}></div>
    )
}

export default Box;