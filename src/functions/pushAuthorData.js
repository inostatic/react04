function emailReplace(email) {
    return email.replace(/\./g, '`')
}

export const pushAuthorData = (photos, users) => {
    return  photos.map(item => Object.assign(item, users[emailReplace(item.email)]))
}