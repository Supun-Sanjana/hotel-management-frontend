function UserTag(props){
    console.log(props);
    
    return(
        <div>
            <img src={props.img} />
        <h1>{props.name}</h1>
        </div>
    )
}

export default UserTag