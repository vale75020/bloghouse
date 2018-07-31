import React from "react";


const ArticleForm = () => {
    return(
        <div>
        <form method="POST" action="http://localhost:5000/api/articles/add">
        <input name="titre" className="form-control" type="text" placeholder="title" />
        <input name="author" className="form-control" type="text" placeholder="author" />
        <textarea name="text" className="form-control"  placeholder="enter your text here" />
        <button className='btn btn-primary' type='submit'>Enter</button>
        </form>
        </div>
    )
}

export default ArticleForm;