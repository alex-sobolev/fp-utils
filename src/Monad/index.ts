import { Context } from '../Context';

export interface Monad<M> {
  lift: <A>(x: A) => Context<M, A>;
  flatMap: <A, B>(ma: Context<M, A>, f: (x: A) => Context<M, B>) => Context<M, B>;
}
