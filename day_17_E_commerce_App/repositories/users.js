const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const scrypt = util.promisify(crypto.scrypt); // promisify = change the crypto.scrypt to premies function to use asy await

class UsersRepository {
  constructor(fileName) {
    if (!fileName) {
      throw new Error("creating a repository require file name");
    }
    this.fileName = fileName;
    try {
      fs.accessSync(this.fileName);
    } catch (err) {
      fs.writeFileSync(this.fileName, "[]");
    }
  }

  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.fileName, {
        encoding: "utf8",
      })
    );
  }
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }
  async getOne(id) {
    const records = await this.getAll();
    return records.find((product) => product.id === id);
  }

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
    const hashedSupplied = bufferSupplied.toString("hex");
    return hashedPassword === hashedSupplied;
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.fileName,
      JSON.stringify(records, null, 2)
    );
  }

  async deleteOne(id) {
    const records = await this.getAll();
    const newRecords = await records.filter((product) => product.id !== id);
    await this.writeAll(newRecords);
  }

  async update(id, updateValue) {
    const records = await this.getAll();
    const record = records.find((product) => product.id === id);
    Object.assign(record, updateValue);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
}

module.exports = new UsersRepository("users.json");
