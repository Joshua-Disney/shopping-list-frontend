import React, { useState } from "react"
import { connect } from "react-redux"

import { editProfile, deleteProfile, getAccount } from "../store/actions"
import { H3 } from "../ui/Titles"

import DeleteProfileModal from "./deleteProfileModal"

const ListEditor = (props) => {

    const [state, setState] = useState({
        isEditing: false,
        isDeleting: false,
    })

    const [value, setValue] = useState(props.name || "")

    const changeToTrue = (event) => {
        setState({ ...state, [event.target.name] : true })
    }

    const cancelEdit = () => {
        setState({ ...state, isEditing : false })
    }

    const sendEdit = async () => {
        await props.editProfile(value, props.id)
        setState({ ...state, isEditing: false })
    }

    return (
        <div className="flex???">
            {state.isEditing ? 
                <div>
                    <input autoFocus onChange={(event) => setValue(event.target.value)} value={value} placeholder={props.name} />
                    <button onClick={sendEdit}>Confirm</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            : state.idDeleting ? 
                <DeleteProfileModal id={props.id} />
            :
            <div>
                <H3>{props.name}</H3>
                <button>Pencil button</button>
                <section className="hidden-p-tag">
                    <button onClick={changeToTrue} name="isEditing">Edit</button>
                    <button name="isDeleting">Delete</button>
                </section>
            </div>
            }
        </div>
    )
}

const mapDispatchToProps = { editProfile, deleteProfile }

export default connect(null, mapDispatchToProps)(ListEditor);