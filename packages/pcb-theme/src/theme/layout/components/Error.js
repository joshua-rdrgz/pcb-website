import React from "react"
import { connect } from "frontity"

const Error = ({ state }) => {
  return (
    <>
      <h1>404 Error</h1>
      <p>
        The path <em>{state.router.link}</em> cannot be found.
      </p>
    </>
  )
}

export default connect(Error);