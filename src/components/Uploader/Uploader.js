import React from "react";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";


function Uploader(props) {

    return (
        <div>
            <label htmlFor="contained-button-file">
                <Fab component="span" className={props.className.button}>
                    <AddPhotoAlternateIcon onClick={() => props.onClick()}/>
                </Fab>
            </label>
        </div>
    )
}

export default Uploader;