import { Context } from '../Context';

export interface Applicative<F> {
  readonly pure: <A>(x: A) => Context<F, A>;
  readonly app: <B, C>(x: Context<F, B>) => Context<F, C>;
}
