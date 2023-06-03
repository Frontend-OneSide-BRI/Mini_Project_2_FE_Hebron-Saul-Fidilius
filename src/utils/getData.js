export async function getData(url, setState) {
  try {
    const res = await fetch(url)
    const data = await res.json()

    setState(data)
  } catch (error) {
    console.log("Errpr: " + error)
  }
}
