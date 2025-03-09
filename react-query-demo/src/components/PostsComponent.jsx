import { useQuery } from 'react-query';


const PostsComponent = async () => {
    const res = await fetch(' https://jsonplaceholder.typicode.com/posts');
    eturn res.json();
};


const fetchPosts = () => {
    const { data, error, isLoading, isError } = useQuery('fetchData', fetchData, fetchposts, cacheTime: 23000, staleTime: 23000, refetchOnWindowFocus: null, keepPreviousData: null );



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

<button onClick={submit}>Enter</button>;

export default PostsComponent;
