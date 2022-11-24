declare namespace Modal {
  export interface ModalRequestPayload {
    modalType: string;
  }

  export interface ModalOpenPayload extends ModalRequestPayload {}

  export interface ModalReducer {
    modalType: string;
  }
}
