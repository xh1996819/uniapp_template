import { http } from '../utils'

export const random_music = data => http.get('rand.music', data)