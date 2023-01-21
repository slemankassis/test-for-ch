const {
  deterministicPartitionKey,
  MAX_PARTITION_KEY_LENGTH,
  TRIVIAL_PARTITION_KEY,
} = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("Should return a partition key based on the event data if partition key is not present", () => {
    const event = {
      data: { name: "some-name" },
    };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBeDefined();
    expect(partitionKey.length).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
  });

  it("Should return the partition key when it is provided in the event object", () => {
    const event = {
      partitionKey: "some-key",
    };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBe(event.partitionKey);
  });
  it("Should return a truncated partition key when the original partition key is longer than the maximum length", () => {
    const event = { partitionKey: "a".repeat(MAX_PARTITION_KEY_LENGTH + 1) };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey.length).toBeLessThanOrEqual(MAX_PARTITION_KEY_LENGTH);
  });

  it("Should return a string value for partition key", () => {
    const event = { partitionKey: "some-key" };
    const partitionKey = deterministicPartitionKey(event);
    expect(typeof partitionKey).toBe("string");
  });

  it("Should return a value for partition key even when the provided event is not in JSON format", () => {
    const event = { name: "some-name", age: 20 };
    const partitionKey = deterministicPartitionKey(event);
    expect(partitionKey).toBeDefined();
  });
});
