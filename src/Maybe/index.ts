export interface Nothing {
  readonly kind: 'Nothing';
}

export interface Just<A> {
  readonly kind: 'Just';
  readonly val: A;
}

export type Maybe<A> = Nothing | Just<A>;

export const nothing = <A>(): Maybe<A> => ({
  kind: 'Nothing',
});

export const just = <A>(val: A): Maybe<A> => ({
  kind: 'Just',
  val,
});
