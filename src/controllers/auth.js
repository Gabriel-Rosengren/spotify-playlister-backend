import { CLIENT_ID, REDIRECT_URI } from "../utils/env.js"

// Here we redirect the client to authorize themselves via their Spotify Account
// We have set the scope to only the necessary scopes needed for the app (such as modifying playlists)

export const login = (req, res) => {
  const queryString = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: 'streaming, playlist-read-private, playlist-read-collaborative, playlist-modify-private, playlist-modify-public, user-read-private, user-read-email',
    show_dialog: true
  }).toString()

  res.redirect('https://accounts.spotify.com/authorize?' + queryString)
}
