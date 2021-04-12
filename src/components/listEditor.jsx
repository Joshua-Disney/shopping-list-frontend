import React, { useState } from "react"
import { connect } from "react-redux"

import { editProfile, deleteProfile } from "../store/actions"
import { H3 } from "../ui/Titles"

const ListEditor = (props) => {

    const [state, setState] = useState({
        isEditing: false,
        isDeleting: false,
    })

    const [value, setValue] = useState(props.name || "")

    const changeToTrue = (event) => {
        setState({ ...state, [event.target.name] : true })
    }

    return (
        <div className="flex???">
            {state.isEditing ? 
                <form>
                    <input onChange={(event) => setValue(event.target.value)} value={value} placeholder={props.name} />
                    <button>Confirm</button>
                    <button>Cancel</button>
                </form>
            : <div>
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