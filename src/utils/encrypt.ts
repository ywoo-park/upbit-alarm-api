import bcrypt from 'bcrypt'

const saltRounds = 10;

const encrypt = (password: string) => {
    return bcrypt.hashSync(password, saltRounds);
}

const compare = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
}

export {
    encrypt,
    compare
}