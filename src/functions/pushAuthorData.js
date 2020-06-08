
import {replaceEmail} from './replaceEmail'

export const pushAuthorData = (photos, users) => {
    return  photos.map(item => Object.assign(item, users[replaceEmail(item.email)]))
}