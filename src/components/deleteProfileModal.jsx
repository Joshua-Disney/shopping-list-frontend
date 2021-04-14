import React from "react"
import { connect } from "react-redux"

import { deleteProfile } from "../store/actions"

import Modal from "./modal"

const DeleteProfileModal = (props) => {

    const confirmDelete = async () => {
        await props.deleteProfile(props.id)
    }
    return (
        < Modal showModal handleClose={props.handleClose}>
            <p>Are you sure you want to delete this list?</p>
            <button onClick={confirmDelete}>Confirm</button>
        </Modal>
    )
}

const mapDispatchToProps = { deleteProfile }

export default connect(null,mapDispatchToProps)(DeleteProfileModal);
