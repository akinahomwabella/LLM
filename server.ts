import {app} from "./app";
require("dotenv").config();




//Create server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})