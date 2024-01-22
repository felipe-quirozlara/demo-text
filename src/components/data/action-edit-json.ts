'use server'
import { promises as fs } from 'fs';
import { revalidatePath } from 'next/cache';

export const editFile = async (title: String):Promise<Boolean> => {
  var status = false;
  const file = await fs.readFile(process.cwd() + "/src/components/data/home-page.json", "utf8");
  const jsonFile = JSON.parse(file);

  jsonFile["title"] = title;

  const newwrite = fs.writeFile(process.cwd() + "/src/components/data/home-page.json", JSON.stringify(jsonFile));

  newwrite
    .then((e) => {
      status = true;
      console.log("Se realiz'o el cambio");
      revalidatePath("/", 'layout');
    })
    .catch((e) => {
      console.log("No se pudo escribri");
    })

    return status
};

export const getTitle = async () => {
  const file = await fs.readFile(process.cwd() + "/src/components/data/home-page.json", "utf8");
  const { title } = JSON.parse(file);


  return title;
}