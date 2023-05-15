import BigNumber from "bignumber.js";
export type ParsedStruc = {
  gvc?: string;
  [key: string]: string | undefined;
};

export type Id = string | number;

export type FloorLimit = {
  amount: BigNumber;
  currency: string;
};

export type StatementNumber = {
  statement: string;
  sequence: string;
  section: string;
};

export type DateCurrencyAmount = {
  valueDate: Date;
  currencyCode: string;
  amount: BigNumber;
};

export type SenderToReceiverInformation = {
  codesAndDescriptions?: string;
  currencyAndAmount?: string;
  valueDate?: string;
  payAwayAccountNumber?: string;
  beneficiaryAccountNumber?: string;
  dateAndTime?: string;
};
