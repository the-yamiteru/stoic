import stream from "./stream";
import endDerived from "../help/endDerived";
import {DerivedStream} from "../types/primitives";
import {Computation, Source} from "../types/help";

const derivedStream = <T>(source: Source<any>, callback: Computation<any, T>): DerivedStream<T> => {
    const { pub, end, onPub, onErr, onEnd } = stream<T>();

    return {
        end: endDerived<T>(source, callback, pub, end),
        onPub, onErr, onEnd,
    };
};

export default derivedStream;