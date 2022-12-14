function Person (props) {
const { img, name, job 
 } = props.person;
 const { children } = props;
const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;


return (
        <div className='person' >
            <img src={url} />
            <div>
                <h4>{name} </h4>
                <h4>{job} </h4>
                {children}
            </div>
        </div>
)
};

export default Person;

