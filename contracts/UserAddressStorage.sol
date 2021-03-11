// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import './OctobayStorage.sol';

// This contract acts as Octobay's user storage.
contract UserAddressStorage is OctobayStorage {
  // GitHub user's eth addresses
  // A user can have multiple (named) addresses.
  // GitHub GraphQL ID => (name => address)
  mapping(string => mapping(bytes32 => address)) public addresses;
  mapping(address => string) public userIdsByAddress;

  event UserAddressAddedEvent(string userId, bytes32 addressName, address ethAddress);
  event UserAddressRemovedEvent(string userId, bytes32 addressName, address ethAddress);

  function addUserAddress(
    string calldata _userId,
    bytes32 _addressName,
    address _address
  ) public onlyOctobay {
    require(addresses[_userId][_addressName] == address(0), 'An address with this name already exsits for this GitHub user.');
    addresses[_userId][_addressName] = _address;
    userIdsByAddress[_address] = _userId;

    emit UserAddressAddedEvent(
      _userId,
      _addressName,
      _address
    );
  }

  function deleteUserAddress(
    string calldata _userId,
    bytes32 _addressName
  ) public onlyOctobay {
    emit UserAddressRemovedEvent(
      _userId,
      _addressName,
      addresses[_userId][_addressName]
    );

    delete userIdsByAddress[addresses[_userId][_addressName]];
    delete addresses[_userId][_addressName];
  }
}