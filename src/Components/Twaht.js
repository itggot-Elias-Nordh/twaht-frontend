import React, {Component} from 'react';

export class Twhat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        const id = this.props.id;
        const language = this.props.language;
        const method = this.props.method;
        const url = "http://127.0.0.1:8080/v1/" + id + (language !== null && language !== "" ? "/" + language : "");
        const formData = new FormData();
        formData.append('content', '1');
        formData.append('status', 'hidden');
        let options = {
            mode: "cors",
            method: method,
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Disposition': 'form-data; name="content"',
                'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2hvcC50ZXh0YWxrLnNlIiwiYXVkIjoiaHR0cDpcL1wvZXhhbXBsZS5jb20iLCJpYXQiOjEzNTY5OTk1MjQsIm5iZiI6MTM1NzAwMDAwMH0.rIw5eRrgAhOnxhVBlBThIB3kxxZQo6GHEGYVamDe8ys'
            },
        };
        if(method !== "GET") {
            // delete options.headers['Content-Type'];
            options["body"] = formData;
        }
        // const bodyParser = require('body-parser');
        // app.use(bodyParser.urlencoded({ extended: false }));
        // app.use(bodyParser.json());
        fetch(url, options)
        .then(res => res.json())
        .then(
            (result) => { 
                // result.blob()
                // .then(
                //     (result) => { 
                //     console.log(result.type);
                //     }
                // )
                // console.log(params.headers)   
                this.setState({
                    isLoaded: true,
                    items: result[0]
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <h1>{items.content}</h1>
            );
        }
    }
}

