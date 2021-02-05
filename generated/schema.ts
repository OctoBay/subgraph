// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Issue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Issue entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Issue entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Issue", id.toString(), this);
  }

  static load(id: string): Issue | null {
    return store.get("Issue", id) as Issue | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositSize(): BigInt {
    let value = this.get("depositSize");
    return value.toBigInt();
  }

  set depositSize(value: BigInt) {
    this.set("depositSize", Value.fromBigInt(value));
  }
}
