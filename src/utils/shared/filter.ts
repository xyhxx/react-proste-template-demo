type CallBackType<S> = (value: S, index: number, array: S[]) => boolean;

export const filter = <S, R> (source: S[], callback:CallBackType<S>):R[] => {
  return Array.prototype.filter.call<S[], [CallBackType<S>], R[]>(source, callback);
};