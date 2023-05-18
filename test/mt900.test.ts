/*
 *  Copyright 2016 Alexander Tsybulsky and other contributors
 *  Copyright 2020 Centrapay and other contributors
 *  Copyright 2023 Stitch and other contributors
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import * as mt900MsgType from "../lib/mt900";
import tags from "../lib/tags";

function expectedStatement() {
  return {
    transactionReference: "0000000000CONTRA",
    relatedReference: "0000000000CONTRA",
    accountIdentification: "4047710139",
    dateCurrencyAmount: {
      valueDate: "190813",
      currencyCode: "ZAR",
      amount: "420198,79",
    },
    orderingInstitution: "ABSAZAJJXXX",
    senderToReceiverInformation:
      "0000000000CONTRA-0002167016/NDDT/AKD /ACB CONTRA/000010000",
  };
}

const expected = [
  new tags.TagTransactionReferenceNumber("0000000000CONTRA"),
  new tags.TagRelatedReference("0000000000CONTRA"),
  new tags.TagAccountIdentification("4047710139"),
  new tags.TagDateCurrencyAmount("190813ZAR420198,79"),
  new tags.TagOrderingInstitution("ABSAZAJJXXX"),
  new tags.TagSenderToReceiverInformation(
    "0000000000CONTRA-0002167016\n/NDDT/AKD\n/ACB CONTRA\n/000010000"
  ),
];
// const DUMMY_GROUP_COMPLEX = [
//   // 2 detail lines and 2 transactions
//   new tags.TagTransactionReferenceNumber("B4E08MS9D00A0009"),
//   new tags.TagRelatedReference("X"),
//   new tags.TagAccountIdentification("123456789"),
//   new tags.TagStatementNumber("123/1"),
//   new tags.TagOpeningBalance("C140507EUR0,00"),
//   new tags.TagStatementLine("1405070507C500,00NTRFNONREF//AUXREF"),
//   new tags.TagTransactionDetails("LINE1\nLINE2"),
//   new tags.TagStatementLine("1405070507C0,00NTRFNONREF2"),
//   new tags.TagTransactionDetails("LINE1"),
//   new tags.TagClosingBalance("C140508EUR500,00"),
// ];

///////////////////////////////////////////////////////////////////////////////
// TESTS
///////////////////////////////////////////////////////////////////////////////

describe("MT900 Message Type", () => {
  it("buildStatement", () => {
    const group = expected;
    let result = mt900MsgType.buildStatement({ group });

    let exp = expectedStatement();
    expect(result).toEqual(exp);
    expect((result as any).tags).not.toBeDefined();
    expect((result as any).structuredDetails).not.toBeDefined();
  });

  // it("buildStatement structured", () => {
  //   const result = mt900MsgType.buildStatement({
  //     group: DUMMY_GROUP_STRUCTURED,
  //   });

  //   expect(result.transactions[0].structuredDetails).toEqual({
  //     "20": "Hello",
  //     "30": "World",
  //   });
  // });
});
