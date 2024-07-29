import mongoose from "mongoose";
import { Schema } from "mongoose";

const pageSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    html: {
        type: String,
        required: true,
        default: /*html*/`
            <div class="d-flex flex-column justify-content-center align-items-center" style="flex:1">
                <h1 style="color: red;">PAGE JUST CREATED. EDIT IT!<h1>
                <button id="selectButton" style="font-size: 0.6rem; background-color: orange;margin-top: 1px" onclick="selectOption(event, name)">EDIT</button>
            </div>
        `
    },
    isNavbarOption: {
        type: Boolean,
        required: true,
        default: false
    }
})

export const pageModel = mongoose.model('pages', pageSchema)