import axios from 'axios'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../utils/env.js'

export const getAllPlaylists = (req, res) => {
  const { access_token, user_id, limit, offset } = req.body

  if(!access_token || !user_id || !limit || !offset) {
    res.status(400).send({ error: 'Bad Request'})
  }

  const queryParams = new URLSearchParams({
    limit,
    offset
  }).toString()

  axios.get('https://api.spotify.com/v1/users/' + user_id + '/playlists?' + queryParams)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    res.status(error.status).send({ error })
  })
}
 