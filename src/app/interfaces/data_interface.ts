/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface loterias{
  date: String;
  name: String;
  name_link: String;
  result: String;
}

export interface  GetLotteryResponse {
    data: loterias[];
  };


