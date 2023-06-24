import React from "react"
import Article from "./Article"

    function ArticleList ({posts}) {
        const list = posts.map((post) => {
            return <Article key = {post.id} title = {post.title} preview = {post.preview} date ={post.date}/>
        })
        return (
            <main>
                {list}
            </main>
    
        )
    }
    

    export default ArticleList