const CHECKPOINT_ERRORS = {
  ERROR_VALUE_TOO_BIG: 'CHECKPOINT_VALUE_TOO_BIG',
  ERROR_CANNOT_ADD_PAST_VALUE: 'CHECKPOINT_CANNOT_ADD_PAST_VALUE',
}

const STAKING_ERRORS = {
  ERROR_TOKEN_NOT_CONTRACT: 'STAKING_TOKEN_NOT_CONTRACT',
  ERROR_AMOUNT_ZERO: 'STAKING_AMOUNT_ZERO',
  ERROR_TOKEN_TRANSFER: 'STAKING_TOKEN_TRANSFER_FAIL',
  ERROR_TOKEN_DEPOSIT: 'STAKING_TOKEN_DEPOSIT_FAIL',
  ERROR_TOKEN_NOT_SENDER: 'STAKING_TOKEN_NOT_SENDER',
  ERROR_WRONG_TOKEN: 'STAKING_WRONG_TOKEN',
  ERROR_NOT_ENOUGH_BALANCE: 'STAKING_NOT_ENOUGH_BALANCE',
  ERROR_NOT_ENOUGH_ALLOWANCE: 'STAKING_NOT_ENOUGH_ALLOWANCE',
  ERROR_SENDER_NOT_ALLOWED: 'STAKING_SENDER_NOT_ALLOWED',
  ERROR_ALLOWANCE_ZERO: 'STAKING_ALLOWANCE_ZERO',
  ERROR_LOCK_ALREADY_EXISTS: 'STAKING_LOCK_ALREADY_EXISTS',
  ERROR_LOCK_DOES_NOT_EXIST: 'STAKING_LOCK_DOES_NOT_EXIST',
  ERROR_NOT_ENOUGH_LOCK: 'STAKING_NOT_ENOUGH_LOCK',
  ERROR_CANNOT_UNLOCK: 'STAKING_CANNOT_UNLOCK',
  ERROR_CANNOT_CHANGE_ALLOWANCE: 'STAKING_CANNOT_CHANGE_ALLOWANCE',
  ERROR_LOCKMANAGER_CALL_FAIL: 'STAKING_LOCKMANAGER_CALL_FAIL',
  ERROR_BLOCKNUMBER_TOO_BIG: 'STAKING_BLOCKNUMBER_TOO_BIG',
}

const TIME_LOCK_MANAGER_ERRORS = {
  ERROR_ALREADY_LOCKED: 'TLM_ALREADY_LOCKED',
  ERROR_WRONG_INTERVAL: 'TLM_WRONG_INTERVAL',
}

module.exports = {
  CHECKPOINT_ERRORS,
  STAKING_ERRORS,
  TIME_LOCK_MANAGER_ERRORS,
}
