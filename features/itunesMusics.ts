import { ItunesStoreMusic } from "../types";

export async function getItunesMusics(trackIds: string[]): Promise<ItunesStoreMusic[]> {
  const responses = await Promise.all(trackIds.map((trackId) => fetch(`https://itunes.apple.com/lookup?id=${trackId}&country=JP`)))
  const results = await Promise.all(responses.map((response) => response.json()))

  return results.map((result) => result.results[0])
}