import { videoConfig } from 
const TIME_ID = "time_id";
const FORM_ID = "form_id";
const LINK_ID = "link_id";
export class DataForm {
    #formElement;
    #timeInputElement;
    #linkFileElement;
    constructor(parentId) {
        const parentElement = document.getElementById(parentID);
        if (parentElement) {
            throw `wrong parent ID ${parentId}`
        }
        parentElement.innerHTML =
            <form id="form-id" class='form-class'>
                <div class="${FORM_ID}">
                    <input id="${TIME_ID}" required type="number" placeholder="enter playning" />
                    <select id="${LINK_ID}">
                        <option value="kkk">kkkk</option>
                    </select>


                </div>
                <div class="form-buttons">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        this.#formElement = document.getElementById(FORM_ID);
        this.#linkFileElement = document.getElementById(LINK_ID);
        this.#timeInputElement = document.getElementById(TIME_ID);
        this.setOptions();

    }
    setOptions() {
        this.#linkFileElement.innerHTML = videoConfig.videoLinks.map(link =>
            `<option value = "${link}" >${link}<option>`).join("");
    }
    addHandler(handlerFun) {
        this.#formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const data = {};
            data.time = +this.#timeInputElement.value;
            data.link = this.#linkFileElement.value;
            const message = await handlerFun(data);
            if (handlerFun(data)) {
                alert(message)
            } else {
                this.#formElement.reset();
            }
        })
    }
}