import mongoose from "mongoose";
import { Schema } from "mongoose";

const navbarOptionsSchema = Schema({
    html: {
        type: String,
        required: true,
        default: /*html*/`
            <li class="nav-item" style="background-color: green;">
                <a class="nav-link">
                    <button onclick="changeComponent('defaultOption')">Default option</button>
                </a>
            </li>
        `
    }
})

export const navbarOptionsModel = mongoose.model('navbarOptions', navbarOptionsSchema)