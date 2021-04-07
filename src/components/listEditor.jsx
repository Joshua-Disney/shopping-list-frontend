import React from "react"
import { connect } from "react-redux"

import { editPofile, deleteProfile } from "../store/actions"
import { H3 } from "../ui/Titles"

const ListEditor = (props) => {

    const state = {
        isEditing: false,
        isDeleting: false,
    }
    return (
        <div className="flex???">
            <H3>{props.name}</H3>
            <button>Pencil button</button>
            <section className="hidden-p-tag">
                <p>Edit</p>
                <p>Delete</p>
            </section>
        </div>
    )
}

const mapDispatchToProps = { editPofile, deleteProfile }

export default connect(null, mapDispatchToProps)(ListEditor);