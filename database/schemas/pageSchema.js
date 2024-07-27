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
                <h1 style="color: red;">PAGE NOT FOUND</h1>
                <p>(or it has just been created)</p>
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