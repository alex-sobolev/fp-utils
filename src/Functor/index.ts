import { Context } from '../Context';

export interface Functor<F> {
  readonly fmap: <A, B>(f: (a: A) => B, fa: Context<F, A>) => Context<F, B>;
}
