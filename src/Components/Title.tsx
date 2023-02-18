type Title = {
    name: string
}

const Title = (props:Title) => {
    return ( 
        <div className="text-2xl text-center mt-3 font-bold text-stroke">{props.name}</div>
     );
}
 
export default Title;