


function Name({userName}){
    return (
    <div>
        <h1>{userName? `${userName}'s Form`: "New User Form"}</h1>
    </div>)
}

export default Name;