import {actionChannel} from "redux-saga/effects";

export type ActionChannelType = typeof actionChannel
export interface IAction{
    type: string;
    payload: any
}
