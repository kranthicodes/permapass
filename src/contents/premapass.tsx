import { Dialog } from "@headlessui/react"
import cssText from "data-text:~/style.css"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetInlineAnchorList
} from "plasmo"
import React from "react"
import { RiCloseLine, RiShieldKeyholeFill } from "react-icons/ri"

import { getAddress } from "~/lib/wallet"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll('input[type="password"]')

export default function MyComponent() {
  const [isOpen, setIsOpen] = React.useState(false)

  const address = getAddress()
  console.log({ address })

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="text-3xl absolute left-1 cursor-pointer">
        <RiShieldKeyholeFill className="text-primary-600 w-6 h-6 cursor-pointer" />
      </div>
      {isOpen && <MyDialog setIsOpen={setIsOpen} />}
    </>
  )
}

function MyDialog({ setIsOpen }) {
  const passwords = document.querySelector('input[type="password"]')
console.log({passwords})
  return (
    <div className="absolute top-0 z-50 bg-white w-[300px] border-silver-300 border-[1px] rounded-lg flex flex-col px-2 py-4">
      <div onClick={() => setIsOpen(false)} className="cursor-pointer flex justify-end items-center ">
        <RiCloseLine className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col items-start">
          <label className="text-sm">Username</label>
          <input
            className="border-[1px] border-silver-300 rounded-lg w-full px-2 py-1"
            type="text"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="text-sm">Password</label>
          <input
            className="border-[1px] border-silver-300 rounded-lg w-full px-2 py-1"
            type="text"
            // value={passwords.form.}
          />
        </div>
        <button className="bg-primary-600 text-sm px-4 py-2 rounded-md text-white">
          Save
        </button>
      </div>
    </div>
  )
}

// function addPasswordButton() {
//   // Find the password input field(s)
//   const passwordInputs = document.querySelectorAll('input[type="password"]')

//   // Loop through each password input
//   passwordInputs.forEach((input) => {
//     // Create a button element
//     const button = document.createElement("button")
//     button.innerText = "Password Manager" // Set button text

//     // Add an event listener to the button to handle password management
//     button.addEventListener("click", function () {
//       // Implement your password manager functionality here
//       // You can interact with the input fields, manage passwords, etc.
//       const container = document.createElement("div")
//       document.body.appendChild(container)

//       const shadowRoot = container.attachShadow({ mode: 'open' });

//       // Create the custom element for your React component
//       class MyComponentElement extends HTMLElement {
//         constructor() {
//           super();
//         }

//         connectedCallback() {
//           const mountPoint = shadowRoot;
//           const React = chrome.extension.getBackgroundPage().React; // Load React from the extension's background page
//           const ReactDOM = chrome.extension.getBackgroundPage().ReactDOM; // Load ReactDOM from the extension's background page
//           ReactDOM.render(<SaveButton />, mountPoint);
//         }
//       }

//       // Define the custom element
//       customElements.define('my-component', MyComponentElement);

//       // Create an instance of the custom element
//       const component = document.createElement('my-component');
//       shadowRoot.appendChild(component);
//     })

//     // Insert the button after the password input field
//     input.insertAdjacentElement("afterend", button)
//   })
// }

// // Call the function to add the button
// addPasswordButton()
