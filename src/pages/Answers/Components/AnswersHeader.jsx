import React from "react"
import { Link } from "react-router-dom"

export function AnswersHeader() {
    return(
        <React.Fragment>
        <div className="find-ask-question">
        <p>Find questions</p>
        <Link to={'/ask-question'} className="btn"> Ask Questions
        </Link>
    </div>
    </React.Fragment>
    )
}