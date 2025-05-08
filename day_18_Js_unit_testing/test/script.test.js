const { connectToDb, getBook } = require("../src/script");

describe("connectToDb", () => {
  test("should connect to db if number is 1", () => {
    const connectMock = jest.fn(() => true);
    connectToDb(1, connectMock);
    expect(connectMock).toHaveBeenCalled();
  });

  test("should not connect to db if number is not 1", () => {
    const connectMock = jest.fn(() => true);

    connectToDb(0, connectMock);

    expect(connectMock).not.toHaveBeenCalled();
  });
});

describe("getBook", () => {
  test("should return the book object if bookId is one", async () => {
    // const result = await getBook(1);
    // expect(result).toMatchObject({ id:1, title: "Book 1" });

    await expect(getBook(1)).resolves.toMatchObject({ id: 1, title: "Book 1" });
  });

  test("should promise fail with an error object", async () => {
    // expect.assertions(1);

    // try {
    //   await getBook(0);
    // } catch (error) {
    //   expect(error).toMatchObject({ errorMessage:"invalid id" });
    // }

    await expect(getBook(0)).rejects.toMatchObject({
      errorMessage: "invalid id",
    });
  });
});
