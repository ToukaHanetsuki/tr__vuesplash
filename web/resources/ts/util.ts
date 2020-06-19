export function getCookieValue (searchKey: string) {
    if (typeof searchKey === 'undefined') {
      return ''
    }

    let val = ''

    document.cookie.split(';').forEach(cookie => {
        const [key, value] = cookie.split('=')
        if (key === searchKey) {
            val = value
        }
    })

    return val
  }
