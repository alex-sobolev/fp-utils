import { Context } from '../Context';

export interface Applicative<F> {
  pure: <A>(x: A) => Context<F, A>;
  app: <B, C>(x: Context<F, B>) => Context<F, C>;
}
