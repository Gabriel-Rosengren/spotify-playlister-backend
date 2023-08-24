import { CLIENT_ID, REDIRECT_URI } from "../utils/env.js"

export const login = (req, res) => {
  const queryString = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: 'streaming, playlist-read-private, playlist-read-collaborative, playlist-modify-private, playlist-modify-public',
    show_dialog: true
  }).toString()

  res.redirect('https://accounts.spotify.com/authorize?' + queryString)
}

 