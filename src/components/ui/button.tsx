"use client"

import { editFile} from "../data/action-edit-json";

export const ButtonEditFile = () => {

  async function handleChange() {
    const isEdited = await editFile(new Date().toLocaleString());
    console.log(isEdited);
  }

  return (
    <>
      <button
        className="border rounded-xl p-2 bg-neutral-800 text-white hover:bg-neutral-600"
        onClick={handleChange}
      >
        Editar archivo
      </button>
    </>
  )
}