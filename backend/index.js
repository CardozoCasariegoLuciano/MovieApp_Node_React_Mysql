const app = require("./app");
require("./database/database");

async function main(){
    await app.listen(app.get("port"))
    console.log(`App is running on port ${app.get("port")}`)
}

main()