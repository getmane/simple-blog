import React from 'react';
import './App.css';

type Props = {}

type State = { posts?: Post[]; }

type Post = {
    id: string,
    title: string,
    body: string
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({posts: json}))
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Blog posts</h1>
                </div>
                {posts?.map((post) => (
                    <div className="card" key={post.id}>
                        <div className="card-header">
                            #{post.id} {post.title}
                        </div>
                        <div className="card-body">
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;