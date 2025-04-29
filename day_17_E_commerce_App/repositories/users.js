const fs = require("fs");
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
}

const test = async () => {
  const repo = new UsersRepository("users.json");
  const data = await repo.getAll();
  console.log(data);
};
test();
