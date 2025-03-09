import { useQuery } from 'react-query';


const PostsComponent = async () => {
    const res = await fetch(' https://jsonplaceholder.typicode.com/posts');
    eturn res.json();
};


const fetchPosts = () => {
    const { data, error, isLoading, isError } = useQuery('fetchData', fetchData, fetchposts);



    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;



    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};


export default PostsComponent;
