export function createAliasAsString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) { // 10 Zeichen lang
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}