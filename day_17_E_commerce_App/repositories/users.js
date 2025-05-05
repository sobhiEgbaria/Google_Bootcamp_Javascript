const Repository = require("./repositories");
const crypto = require("crypto");
const util = require("util");
const scrypt = util.promisify(crypto.scrypt); // promisify = change the crypto.scrypt to premies function to use asy await

class UsersRepository extends Repository {
  async create(userInfo) {
    const records = await this.getAll();

    userInfo["id"] = this.randomId();
    const salt = crypto.randomBytes(8).toString("hex");
    const bufferPassword = await scrypt(userInfo.Password, salt, 64);

    const hashedUserInfo = {
      ...userInfo,
      Password: `${bufferPassword.toString("hex")}.${salt}`, // password+slat.slat
    };

    records.push(hashedUserInfo);
    await this.writeAll(records);
    return hashedUserInfo;
  }

  async comparePassword(saved, supplied) {
    const [hashedPassword, salt] = saved.split(".");
    const bufferSupplied = await scrypt(supplied, salt, 64);
    return hashedPassword === bufferSupplied.toString("hex");
  }
}

module.exports = new UsersRepository("users.json");
