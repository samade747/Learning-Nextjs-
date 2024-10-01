


const Proptesting = (props:{
    name:string,
    age:string,
    rollno:string,
    cell:string,
    slot:string,
    time:string
}) => {

    return (
        <div>

            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Rollno: {props.rollno}</h1>
            <h1>Cell: {props.cell}</h1>
            <h1>Slot: {props.slot}</h1>
            <h1>Time: {props.time}</h1>
            


        </div>
    )
        
}

export default Proptesting