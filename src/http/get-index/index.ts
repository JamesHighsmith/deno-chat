export async function handler(req) {
  console.log(req)
  return {body: JSON.stringify(Deno.versions)}
}
