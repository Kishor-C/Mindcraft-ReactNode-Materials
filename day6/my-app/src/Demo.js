
function Demo(props) {
    let title = props.title;
    return (
        <div>
            <h3>This is Demo component!</h3>
            <p>Title is {title}</p>
        </div>
    )
}
export function Employee(props) {
    return (
        <div>
            <h3>This is Employee component</h3>
            <p>Hello {props.name}, your salary is {props.salary}</p>
        </div>
    )
}

export default Demo;