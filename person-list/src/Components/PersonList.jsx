import Person from "./Person";

const PersonList = () => {
const people = [
    {
        img: 22,
        name: 'john',
        job: 'developer'
    },
    {
        img: 34,
        name: 'Bob',
        job: 'Designer'
    },
    {
        img: 56,
        name: 'Peter',
        job: 'Artist'
    }
];

    return (
    <section>
        <Person person={people[0]} />
        <Person person={people[1]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi asperiores iusto unde aut error numquam doloribus sequi esse molestias mollitia, quam cum, commodi hic, ad nemo eum! Voluptatem repellendus optio perferendis voluptas distinctio fugiat eum illo praesentium sit officiis illum molestias, impedit ratione culpa mollitia, similique sapiente sed alias dolores.</Person>
        <Person person={people[2]}/>
    </section>
    )
};

export default PersonList;