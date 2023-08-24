import axios from 'axios'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '../utils/env.js'

export const callback = (req, res) => {
  const code = req.query.code
  const error = req.query.error

  if(error && !code) {
    return res.status(500).send({ error: error })
  }
  
  axios.post('https://accounts.spotify.com/api/token', {
    'grant_type': 'authorization_code',
    code,
    'redirect_uri': REDIRECT_URI
  }, {
    'headers': {
      'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    res.status(error.status).send({ error })
  })
}

 