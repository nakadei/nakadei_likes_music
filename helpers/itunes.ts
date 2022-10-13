// NOTE: itunes store api から取得できる json object にあるフィールドにはなぜか 100*100 までの画像URLしかないが、
// URLを 600*600 にすると取得できたりする
export function replaceArtworkQualityUrl(artworkUrl: string): string{
    return artworkUrl.replace('100x100bb', '600x600bb')
}
