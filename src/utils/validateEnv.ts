const { cleanEnv, str, port } = require('enclean');

function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production', 'test'],
            default: 'development'
        }),
        PORT: port({ default: 3000 }),
        MONGODB_URI: str(),
    })
}

export default validateEnv;