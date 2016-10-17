const DEFAULT_LENGTH = 10;

/**
 * @param  {integer} length default to 10
 * @return {string}
 */
const randomStringGenerator = (length) => {
    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
    let out = []
    length = length || DEFAULT_LENGTH

    for (let i = length; i >= 0; i--) {
        let randomIndex = Math.floor(
            Math.random() * CHARS.length
        )
        out.push(CHARS.charAt(randomIndex))
    }

    return out.join('')
}

export default randomStringGenerator;
