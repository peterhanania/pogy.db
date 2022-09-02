import { Collection } from "mongoose";

export type Options = {
  cache?: boolean;
  hidelogs?: boolean;
  logFile?: string;
};

export type migrateOptions = {
  hidelogs?: boolean;
};

export type migrationObject = {
  error: Error | boolean;
  date?: number;
  timeTaken?: number;
  table: string;
  dataCreated?: number;
};

export type TableAllOptions = {
  documentForm?: boolean;
};

export type CustomizedTable = {
  table: Collection;
  get: (key: string, options?: { cache: boolean }) => Promise<null | string | object | number>;
  set: (
    key: string,
    value: string | object | number,
    options?: { cache?: boolean; returnData?: boolean }
  ) => Promise<null | boolean>;
  add: (
    key: string,
    value: string | object | number,
    options?: { cache?: boolean; returnData?: boolean }
  ) => Promise<null | boolean>;
  subtract: (
    key: string,
    value: string | object | number,
    options?: { cache?: boolean; returnData?: boolean }
  ) => Promise<null | boolean>;
  has: (key: string) => Promise<boolean>;
  delete: (key: string) => Promise<boolean>;
  push: (key: string, value: string | object | number, options?: { cache?: boolean; returnData?: boolean }) => Promise<boolean>;
  pull: (key: string, value: string | object | number, options?: { cache?: boolean; returnData?: boolean }) => Promise<boolean>;
  all: (options?: TableAllOptions) => Promise<object>;
  drop: () => Promise<boolean>;
};


export type PingResult = {
  cached: boolean;
  tableName: string;
  dataToGet: string;
  timeToGetTable: number;
  timeToGetData: number;
  totalPing: number;
};
