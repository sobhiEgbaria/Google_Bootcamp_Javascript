const fs = require("fs");
const crypto = require("crypto");

module.exports = class Repository {
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

  async create(newInfo) {
    newInfo.id = this.randomId();
    const records = await this.getAll();

    records.push(newInfo);
    await this.writeAll(records);
    return newInfo;
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
};
