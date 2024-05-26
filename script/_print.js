import {app, db} from './_config.js'
import {ref, set, push, onValue, update, remove, get} from "./_config.js"
// Initialize Firebase


const url = new URLSearchParams(window.location.search)

function render() {

  get(ref(db, `scenarios`)).then(sn => {
    const data = sn.val()[url.get("id")]
  data["content"].forEach(i => {
    console.log(i)
    if (i["type"] === "text") {
        pl.innerHTML += `
        <br>
            <text-item>
                <div><strong>${i["content"]["name"]} : </strong></div>
                <div class="wrapped-text">${i["content"]["text"]}</div>        
            </text-item>
            <br>
        `;
    
    
      } else if (i["type"] === "music") {
        pl.innerHTML += `

        <div class="list__item is-idle js-item music">
        <div class="form-floating d-flex" style="width: 100%;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16" style="transform: translateY(10px); margin-right: 15px; margin-left: 10px;">
          <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
          <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
          <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
          <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
        </svg>
        <div class="mt-2">
            ${i["content"]}
        </div>
          
        </div>

      </div>`;
      } else if (i["type"] === "comment") {
        
        pl.innerHTML += `<div class="list__item is-idle js-item comment">
        <div class="form-floating d-flex" style="width: 100%;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16"  style="transform: translateY(10px); margin-right: 15px; margin-left: 10px;">
          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
        </svg>
        <div class="mt-2">
        ${i["content"]}
        </div>
        </div>
      </div>`;
      }
    
    
    
    })

    console.log("got")
    if (data["name"]) {
      document.getElementById("bread-active").textContent = data["name"]
    } else {
      document.getElementById("bread-active").textContent = "Untitled"
    }
    
  })
  const type ="s"
  const newItemHTML = ""
  const pl = document.getElementById("list")
  if (type === "Text") {
    newItemHTML = `<div class="list__item is-idle js-item text">
      <div style="width: 100%;">
        <div class="form-floating">

          <input type="text" class="form-control actor-input" placeholder="Ім'я">
          <textarea class="textarea resize-ta mt-2"></textarea>
        </div>
      </div>
    <div class="d-flex actions">
      <div class="drag-handle js-drag-handle"></div>
    </div>
    <div class="delete-item-btn">
        &times;
      </div>
  </div>`;
  } else if (type === "Music") {
    newItemHTML = `<div class="list__item is-idle js-item music">
    <div class="form-floating d-flex" style="width: 100%;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16" style="transform: translateY(10px); margin-right: 15px; margin-left: 10px;">
      <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
      <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
      <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
      <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
    </svg>
      <input type="text" class="form-control actor-input" placeholder="Музика">
    </div>
    <div class="d-flex actions">
      <div class="drag-handle js-drag-handle"></div>
      <div>
        <button class="btn delete delete-item-btn">&times;</button>
      </div>
    </div>
  </div>`;
  } else if (type === "Comments") {
    newItemHTML = `<div class="list__item is-idle js-item comment">
    <div class="form-floating d-flex" style="width: 100%;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16"  style="transform: translateY(10px); margin-right: 15px; margin-left: 10px;">
      <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
    </svg>
      <input type="text" class="form-control actor-input" placeholder="Коментар">

    </div>
    <div class="d-flex actions">
      <div class="drag-handle js-drag-handle"></div>
      <div>
        <button class="btn delete delete-item-btn">&times;</button>
      </div>
    </div>

  </div>`;
  }
}
render()


setTimeout(() => {
    window.print()
}, 2000)