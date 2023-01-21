const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createHash = (algorithm) => (data) =>
  crypto.createHash(algorithm).update(data).digest("hex");

const createPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }
  let partitionKey = event.partitionKey;
  if (!partitionKey) {
    const data = JSON.stringify(event);
    partitionKey = createHash("sha3-512")(data);
  }
  return partitionKey;
};

const truncatePartitionKey = (partitionKey) => {
  if (!partitionKey) {
    return TRIVIAL_PARTITION_KEY;
  }
  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createHash("sha3-512")(partitionKey);
  }
  return partitionKey;
};

exports.deterministicPartitionKey = (event) => {
  let partitionKey = createPartitionKey(event);
  partitionKey = truncatePartitionKey(partitionKey);
  return partitionKey;
};

exports.TRIVIAL_PARTITION_KEY = TRIVIAL_PARTITION_KEY;
exports.MAX_PARTITION_KEY_LENGTH = MAX_PARTITION_KEY_LENGTH;
