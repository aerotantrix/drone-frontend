export class Station {
  stationname!: string;
  battery!: number;

  constructor(stationname: string, battery: number) {
    this.stationname = stationname;
    this.battery = battery;
  }
}

export class Bin {
  bin_id!: string;
  timestamp!: Date;
  row!: number;
  col!: number;
  rack!: number;

  constructor(
    bin_id: string,
    timestamp: Date,
    row: number,
    col: number,
    rack: number
  ) {
    this.bin_id = bin_id;
    this.timestamp = timestamp;
    this.row = row;
    this.col = col;
    this.rack = rack;
  }
}
