const fs = require("fs");
const crypto = require("crypto");
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

  async create(info) {
    const records = await this.getAll();
    info["id"] = this.randomId();
    records.push(info);
    await this.writeAll(records);
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.fileName,
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }
  async getOne(id) {
    const records = await this.getAll();
    return records.find((product) => product.id === id);
  }

  async deleteOne(id) {
    const records = await this.getAll();
    const newRecords = await records.filter((product) => product.id !== id);
    await this.writeAll(newRecords);
  }

  async update(id, updateValue) {
    const records = await this.getAll();
  }
}

const test = async () => {
  const repo = new UsersRepository("users.json");
  await repo.create({ Email: "sobhi@", password: "12312312" });
  await repo.create({ Email: "sobhi@", password: "12312312" });
  const records = await repo.getAll();
  const product = await repo.getOne("6d389545");
  console.log(records);
  console.log("===========================");
  console.log(product);
  // await repo.deleteOne("215cb7a7");
};
test();
