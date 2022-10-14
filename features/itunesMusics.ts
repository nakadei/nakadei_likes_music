import { ItunesStoreMusic } from "../types";

const apiBase = process.env.NEXT_API_BASE

export async function getTrackIdsRandom(): Promise<string[]> {
  const response = await fetch(`${apiBase}/api/musics/random`)
  const result = await response.json()

  return result.trackIds
}

export async function getItunesMusics(trackIds: string[]): Promise<ItunesStoreMusic[]> {
  const responses = await Promise.all(trackIds.map((trackId) => fetch(`https://itunes.apple.com/lookup?id=${trackId}&country=JP`)))
  const results = await Promise.all(responses.map((response) => response.json()))

  return results.map((result) => result.results[0])
}