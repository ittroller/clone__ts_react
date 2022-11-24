declare namespace App {
  export interface AppReducer {
    popup: StatePopup;
  }

  export interface StatePopup {
    type: string;
    value: boolean;
  }
}
