import {ArgumentNullException} from "../Errors";
import {IDataStorage} from "./Interfaces";
import {ILogger} from "../logging/Interfaces";

export class MemoryStorage implements IDataStorage {
  private _logger: ILogger;
  private _data: any;

  constructor(logger: ILogger) {
    if (!logger) {
      throw new ArgumentNullException('logger');
    }
    this._logger = logger;
  }

  save(data: any) : Promise<void> {
    this._data = data;
    return Promise.resolve();
  }

  load() : Promise<any> {
    return Promise.resolve(this._data || {});
  }
}
export default MemoryStorage;
