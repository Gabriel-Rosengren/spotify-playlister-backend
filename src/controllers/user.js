import axios from 'axios'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../utils/env.js'

export const getUserProfile = (req, res) => {
  const access_token = req.body.access_token
  axios.get('https://api.spotify.com/v1/me', {
    'headers': {
      'Authorization': 'Bearer' + access_token
    }
  })
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    res.status(error.status).send({ error })
  })
}

 