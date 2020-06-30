import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://maps.google.com/maps?q=India,%20Seawoods%20Navi%20Mumbai&Roadmap&z=10&ie=UTF8&iwloc=&output=embed')     
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { posts, errorMsg } = this.state
		return (
		
			<div>
				List of posts
				{posts.length
					? posts.map(post => <div key={post.id}>{post.results}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			</div>
	
		)
		
	}
}

export default PostList
