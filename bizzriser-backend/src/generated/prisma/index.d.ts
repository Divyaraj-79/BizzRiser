
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model CaseStudy
 * 
 */
export type CaseStudy = $Result.DefaultSelection<Prisma.$CaseStudyPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model ContactMessage
 * 
 */
export type ContactMessage = $Result.DefaultSelection<Prisma.$ContactMessagePayload>
/**
 * Model NewsletterSubscriber
 * 
 */
export type NewsletterSubscriber = $Result.DefaultSelection<Prisma.$NewsletterSubscriberPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model HomeStat
 * 
 */
export type HomeStat = $Result.DefaultSelection<Prisma.$HomeStatPayload>
/**
 * Model IndustryChatbot
 * 
 */
export type IndustryChatbot = $Result.DefaultSelection<Prisma.$IndustryChatbotPayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model SolutionIndustry
 * 
 */
export type SolutionIndustry = $Result.DefaultSelection<Prisma.$SolutionIndustryPayload>
/**
 * Model PricingPlan
 * 
 */
export type PricingPlan = $Result.DefaultSelection<Prisma.$PricingPlanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseStudy`: Exposes CRUD operations for the **CaseStudy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseStudies
    * const caseStudies = await prisma.caseStudy.findMany()
    * ```
    */
  get caseStudy(): Prisma.CaseStudyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactMessage`: Exposes CRUD operations for the **ContactMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMessages
    * const contactMessages = await prisma.contactMessage.findMany()
    * ```
    */
  get contactMessage(): Prisma.ContactMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterSubscriber`: Exposes CRUD operations for the **NewsletterSubscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterSubscribers
    * const newsletterSubscribers = await prisma.newsletterSubscriber.findMany()
    * ```
    */
  get newsletterSubscriber(): Prisma.NewsletterSubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homeStat`: Exposes CRUD operations for the **HomeStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HomeStats
    * const homeStats = await prisma.homeStat.findMany()
    * ```
    */
  get homeStat(): Prisma.HomeStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industryChatbot`: Exposes CRUD operations for the **IndustryChatbot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndustryChatbots
    * const industryChatbots = await prisma.industryChatbot.findMany()
    * ```
    */
  get industryChatbot(): Prisma.IndustryChatbotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solutionIndustry`: Exposes CRUD operations for the **SolutionIndustry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SolutionIndustries
    * const solutionIndustries = await prisma.solutionIndustry.findMany()
    * ```
    */
  get solutionIndustry(): Prisma.SolutionIndustryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingPlan`: Exposes CRUD operations for the **PricingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingPlans
    * const pricingPlans = await prisma.pricingPlan.findMany()
    * ```
    */
  get pricingPlan(): Prisma.PricingPlanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    Blog: 'Blog',
    CaseStudy: 'CaseStudy',
    Career: 'Career',
    ContactMessage: 'ContactMessage',
    NewsletterSubscriber: 'NewsletterSubscriber',
    Lead: 'Lead',
    HomeStat: 'HomeStat',
    IndustryChatbot: 'IndustryChatbot',
    Testimonial: 'Testimonial',
    SolutionIndustry: 'SolutionIndustry',
    PricingPlan: 'PricingPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "blog" | "caseStudy" | "career" | "contactMessage" | "newsletterSubscriber" | "lead" | "homeStat" | "industryChatbot" | "testimonial" | "solutionIndustry" | "pricingPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      CaseStudy: {
        payload: Prisma.$CaseStudyPayload<ExtArgs>
        fields: Prisma.CaseStudyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseStudyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseStudyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          findFirst: {
            args: Prisma.CaseStudyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseStudyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          findMany: {
            args: Prisma.CaseStudyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>[]
          }
          create: {
            args: Prisma.CaseStudyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          createMany: {
            args: Prisma.CaseStudyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaseStudyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>[]
          }
          delete: {
            args: Prisma.CaseStudyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          update: {
            args: Prisma.CaseStudyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          deleteMany: {
            args: Prisma.CaseStudyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseStudyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaseStudyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>[]
          }
          upsert: {
            args: Prisma.CaseStudyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseStudyPayload>
          }
          aggregate: {
            args: Prisma.CaseStudyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseStudy>
          }
          groupBy: {
            args: Prisma.CaseStudyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseStudyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseStudyCountArgs<ExtArgs>
            result: $Utils.Optional<CaseStudyCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      ContactMessage: {
        payload: Prisma.$ContactMessagePayload<ExtArgs>
        fields: Prisma.ContactMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findFirst: {
            args: Prisma.ContactMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          findMany: {
            args: Prisma.ContactMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          create: {
            args: Prisma.ContactMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          createMany: {
            args: Prisma.ContactMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          delete: {
            args: Prisma.ContactMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          update: {
            args: Prisma.ContactMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          deleteMany: {
            args: Prisma.ContactMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>[]
          }
          upsert: {
            args: Prisma.ContactMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMessagePayload>
          }
          aggregate: {
            args: Prisma.ContactMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMessage>
          }
          groupBy: {
            args: Prisma.ContactMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMessageCountAggregateOutputType> | number
          }
        }
      }
      NewsletterSubscriber: {
        payload: Prisma.$NewsletterSubscriberPayload<ExtArgs>
        fields: Prisma.NewsletterSubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterSubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterSubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          findFirst: {
            args: Prisma.NewsletterSubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterSubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          findMany: {
            args: Prisma.NewsletterSubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>[]
          }
          create: {
            args: Prisma.NewsletterSubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          createMany: {
            args: Prisma.NewsletterSubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterSubscriberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>[]
          }
          delete: {
            args: Prisma.NewsletterSubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          update: {
            args: Prisma.NewsletterSubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterSubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterSubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterSubscriberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterSubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriberPayload>
          }
          aggregate: {
            args: Prisma.NewsletterSubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterSubscriber>
          }
          groupBy: {
            args: Prisma.NewsletterSubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterSubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriberCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      HomeStat: {
        payload: Prisma.$HomeStatPayload<ExtArgs>
        fields: Prisma.HomeStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          findFirst: {
            args: Prisma.HomeStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          findMany: {
            args: Prisma.HomeStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>[]
          }
          create: {
            args: Prisma.HomeStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          createMany: {
            args: Prisma.HomeStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>[]
          }
          delete: {
            args: Prisma.HomeStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          update: {
            args: Prisma.HomeStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          deleteMany: {
            args: Prisma.HomeStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>[]
          }
          upsert: {
            args: Prisma.HomeStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeStatPayload>
          }
          aggregate: {
            args: Prisma.HomeStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomeStat>
          }
          groupBy: {
            args: Prisma.HomeStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeStatCountArgs<ExtArgs>
            result: $Utils.Optional<HomeStatCountAggregateOutputType> | number
          }
        }
      }
      IndustryChatbot: {
        payload: Prisma.$IndustryChatbotPayload<ExtArgs>
        fields: Prisma.IndustryChatbotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryChatbotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryChatbotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>
          }
          findFirst: {
            args: Prisma.IndustryChatbotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryChatbotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>
          }
          findMany: {
            args: Prisma.IndustryChatbotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>[]
          }
          create: {
            args: Prisma.IndustryChatbotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>
          }
          createMany: {
            args: Prisma.IndustryChatbotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryChatbotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>[]
          }
          delete: {
            args: Prisma.IndustryChatbotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>
          }
          update: {
            args: Prisma.IndustryChatbotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>
          }
          deleteMany: {
            args: Prisma.IndustryChatbotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryChatbotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryChatbotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>[]
          }
          upsert: {
            args: Prisma.IndustryChatbotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryChatbotPayload>
          }
          aggregate: {
            args: Prisma.IndustryChatbotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustryChatbot>
          }
          groupBy: {
            args: Prisma.IndustryChatbotGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryChatbotGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryChatbotCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryChatbotCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestimonialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestimonialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      SolutionIndustry: {
        payload: Prisma.$SolutionIndustryPayload<ExtArgs>
        fields: Prisma.SolutionIndustryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolutionIndustryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolutionIndustryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>
          }
          findFirst: {
            args: Prisma.SolutionIndustryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolutionIndustryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>
          }
          findMany: {
            args: Prisma.SolutionIndustryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>[]
          }
          create: {
            args: Prisma.SolutionIndustryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>
          }
          createMany: {
            args: Prisma.SolutionIndustryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolutionIndustryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>[]
          }
          delete: {
            args: Prisma.SolutionIndustryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>
          }
          update: {
            args: Prisma.SolutionIndustryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>
          }
          deleteMany: {
            args: Prisma.SolutionIndustryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolutionIndustryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolutionIndustryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>[]
          }
          upsert: {
            args: Prisma.SolutionIndustryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolutionIndustryPayload>
          }
          aggregate: {
            args: Prisma.SolutionIndustryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolutionIndustry>
          }
          groupBy: {
            args: Prisma.SolutionIndustryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolutionIndustryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolutionIndustryCountArgs<ExtArgs>
            result: $Utils.Optional<SolutionIndustryCountAggregateOutputType> | number
          }
        }
      }
      PricingPlan: {
        payload: Prisma.$PricingPlanPayload<ExtArgs>
        fields: Prisma.PricingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findFirst: {
            args: Prisma.PricingPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findMany: {
            args: Prisma.PricingPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          create: {
            args: Prisma.PricingPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          createMany: {
            args: Prisma.PricingPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          delete: {
            args: Prisma.PricingPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          update: {
            args: Prisma.PricingPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          deleteMany: {
            args: Prisma.PricingPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          upsert: {
            args: Prisma.PricingPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          aggregate: {
            args: Prisma.PricingPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingPlan>
          }
          groupBy: {
            args: Prisma.PricingPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    blog?: BlogOmit
    caseStudy?: CaseStudyOmit
    career?: CareerOmit
    contactMessage?: ContactMessageOmit
    newsletterSubscriber?: NewsletterSubscriberOmit
    lead?: LeadOmit
    homeStat?: HomeStatOmit
    industryChatbot?: IndustryChatbotOmit
    testimonial?: TestimonialOmit
    solutionIndustry?: SolutionIndustryOmit
    pricingPlan?: PricingPlanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    readTime: number | null
  }

  export type BlogSumAggregateOutputType = {
    readTime: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    category: string | null
    author: string | null
    imageUrl: string | null
    readTime: number | null
    featured: boolean | null
    published: boolean | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    category: string | null
    author: string | null
    imageUrl: string | null
    readTime: number | null
    featured: boolean | null
    published: boolean | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    category: number
    author: number
    imageUrl: number
    tags: number
    readTime: number
    featured: number
    published: number
    metaTitle: number
    metaDescription: number
    metaKeywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    readTime?: true
  }

  export type BlogSumAggregateInputType = {
    readTime?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    category?: true
    author?: true
    imageUrl?: true
    readTime?: true
    featured?: true
    published?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    category?: true
    author?: true
    imageUrl?: true
    readTime?: true
    featured?: true
    published?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    category?: true
    author?: true
    imageUrl?: true
    tags?: true
    readTime?: true
    featured?: true
    published?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    author: string
    imageUrl: string | null
    tags: JsonValue | null
    readTime: number | null
    featured: boolean
    published: boolean
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    category?: boolean
    author?: boolean
    imageUrl?: boolean
    tags?: boolean
    readTime?: boolean
    featured?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    category?: boolean
    author?: boolean
    imageUrl?: boolean
    tags?: boolean
    readTime?: boolean
    featured?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    category?: boolean
    author?: boolean
    imageUrl?: boolean
    tags?: boolean
    readTime?: boolean
    featured?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    category?: boolean
    author?: boolean
    imageUrl?: boolean
    tags?: boolean
    readTime?: boolean
    featured?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "category" | "author" | "imageUrl" | "tags" | "readTime" | "featured" | "published" | "metaTitle" | "metaDescription" | "metaKeywords" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string
      content: string
      category: string
      author: string
      imageUrl: string | null
      tags: Prisma.JsonValue | null
      readTime: number | null
      featured: boolean
      published: boolean
      metaTitle: string | null
      metaDescription: string | null
      metaKeywords: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly excerpt: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly author: FieldRef<"Blog", 'String'>
    readonly imageUrl: FieldRef<"Blog", 'String'>
    readonly tags: FieldRef<"Blog", 'Json'>
    readonly readTime: FieldRef<"Blog", 'Int'>
    readonly featured: FieldRef<"Blog", 'Boolean'>
    readonly published: FieldRef<"Blog", 'Boolean'>
    readonly metaTitle: FieldRef<"Blog", 'String'>
    readonly metaDescription: FieldRef<"Blog", 'String'>
    readonly metaKeywords: FieldRef<"Blog", 'String'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
  }


  /**
   * Model CaseStudy
   */

  export type AggregateCaseStudy = {
    _count: CaseStudyCountAggregateOutputType | null
    _min: CaseStudyMinAggregateOutputType | null
    _max: CaseStudyMaxAggregateOutputType | null
  }

  export type CaseStudyMinAggregateOutputType = {
    id: string | null
    company: string | null
    industry: string | null
    slug: string | null
    goal: string | null
    metric: string | null
    metricLabel: string | null
    title: string | null
    excerpt: string | null
    content: string | null
    logoUrl: string | null
    bannerUrl: string | null
    published: boolean | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseStudyMaxAggregateOutputType = {
    id: string | null
    company: string | null
    industry: string | null
    slug: string | null
    goal: string | null
    metric: string | null
    metricLabel: string | null
    title: string | null
    excerpt: string | null
    content: string | null
    logoUrl: string | null
    bannerUrl: string | null
    published: boolean | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseStudyCountAggregateOutputType = {
    id: number
    company: number
    industry: number
    slug: number
    goal: number
    metric: number
    metricLabel: number
    title: number
    excerpt: number
    content: number
    logoUrl: number
    bannerUrl: number
    published: number
    metaTitle: number
    metaDescription: number
    metaKeywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaseStudyMinAggregateInputType = {
    id?: true
    company?: true
    industry?: true
    slug?: true
    goal?: true
    metric?: true
    metricLabel?: true
    title?: true
    excerpt?: true
    content?: true
    logoUrl?: true
    bannerUrl?: true
    published?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseStudyMaxAggregateInputType = {
    id?: true
    company?: true
    industry?: true
    slug?: true
    goal?: true
    metric?: true
    metricLabel?: true
    title?: true
    excerpt?: true
    content?: true
    logoUrl?: true
    bannerUrl?: true
    published?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseStudyCountAggregateInputType = {
    id?: true
    company?: true
    industry?: true
    slug?: true
    goal?: true
    metric?: true
    metricLabel?: true
    title?: true
    excerpt?: true
    content?: true
    logoUrl?: true
    bannerUrl?: true
    published?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaseStudyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseStudy to aggregate.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseStudies
    **/
    _count?: true | CaseStudyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseStudyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseStudyMaxAggregateInputType
  }

  export type GetCaseStudyAggregateType<T extends CaseStudyAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseStudy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseStudy[P]>
      : GetScalarType<T[P], AggregateCaseStudy[P]>
  }




  export type CaseStudyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseStudyWhereInput
    orderBy?: CaseStudyOrderByWithAggregationInput | CaseStudyOrderByWithAggregationInput[]
    by: CaseStudyScalarFieldEnum[] | CaseStudyScalarFieldEnum
    having?: CaseStudyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseStudyCountAggregateInputType | true
    _min?: CaseStudyMinAggregateInputType
    _max?: CaseStudyMaxAggregateInputType
  }

  export type CaseStudyGroupByOutputType = {
    id: string
    company: string
    industry: string
    slug: string
    goal: string
    metric: string
    metricLabel: string
    title: string
    excerpt: string
    content: string
    logoUrl: string | null
    bannerUrl: string | null
    published: boolean
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date
    updatedAt: Date
    _count: CaseStudyCountAggregateOutputType | null
    _min: CaseStudyMinAggregateOutputType | null
    _max: CaseStudyMaxAggregateOutputType | null
  }

  type GetCaseStudyGroupByPayload<T extends CaseStudyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseStudyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseStudyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseStudyGroupByOutputType[P]>
            : GetScalarType<T[P], CaseStudyGroupByOutputType[P]>
        }
      >
    >


  export type CaseStudySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    industry?: boolean
    slug?: boolean
    goal?: boolean
    metric?: boolean
    metricLabel?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["caseStudy"]>

  export type CaseStudySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    industry?: boolean
    slug?: boolean
    goal?: boolean
    metric?: boolean
    metricLabel?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["caseStudy"]>

  export type CaseStudySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    industry?: boolean
    slug?: boolean
    goal?: boolean
    metric?: boolean
    metricLabel?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["caseStudy"]>

  export type CaseStudySelectScalar = {
    id?: boolean
    company?: boolean
    industry?: boolean
    slug?: boolean
    goal?: boolean
    metric?: boolean
    metricLabel?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    logoUrl?: boolean
    bannerUrl?: boolean
    published?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaseStudyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "industry" | "slug" | "goal" | "metric" | "metricLabel" | "title" | "excerpt" | "content" | "logoUrl" | "bannerUrl" | "published" | "metaTitle" | "metaDescription" | "metaKeywords" | "createdAt" | "updatedAt", ExtArgs["result"]["caseStudy"]>

  export type $CaseStudyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseStudy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      industry: string
      slug: string
      goal: string
      metric: string
      metricLabel: string
      title: string
      excerpt: string
      content: string
      logoUrl: string | null
      bannerUrl: string | null
      published: boolean
      metaTitle: string | null
      metaDescription: string | null
      metaKeywords: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["caseStudy"]>
    composites: {}
  }

  type CaseStudyGetPayload<S extends boolean | null | undefined | CaseStudyDefaultArgs> = $Result.GetResult<Prisma.$CaseStudyPayload, S>

  type CaseStudyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseStudyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseStudyCountAggregateInputType | true
    }

  export interface CaseStudyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseStudy'], meta: { name: 'CaseStudy' } }
    /**
     * Find zero or one CaseStudy that matches the filter.
     * @param {CaseStudyFindUniqueArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseStudyFindUniqueArgs>(args: SelectSubset<T, CaseStudyFindUniqueArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseStudy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseStudyFindUniqueOrThrowArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseStudyFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseStudyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseStudy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyFindFirstArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseStudyFindFirstArgs>(args?: SelectSubset<T, CaseStudyFindFirstArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseStudy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyFindFirstOrThrowArgs} args - Arguments to find a CaseStudy
     * @example
     * // Get one CaseStudy
     * const caseStudy = await prisma.caseStudy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseStudyFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseStudyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseStudies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseStudies
     * const caseStudies = await prisma.caseStudy.findMany()
     * 
     * // Get first 10 CaseStudies
     * const caseStudies = await prisma.caseStudy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseStudyWithIdOnly = await prisma.caseStudy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseStudyFindManyArgs>(args?: SelectSubset<T, CaseStudyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseStudy.
     * @param {CaseStudyCreateArgs} args - Arguments to create a CaseStudy.
     * @example
     * // Create one CaseStudy
     * const CaseStudy = await prisma.caseStudy.create({
     *   data: {
     *     // ... data to create a CaseStudy
     *   }
     * })
     * 
     */
    create<T extends CaseStudyCreateArgs>(args: SelectSubset<T, CaseStudyCreateArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseStudies.
     * @param {CaseStudyCreateManyArgs} args - Arguments to create many CaseStudies.
     * @example
     * // Create many CaseStudies
     * const caseStudy = await prisma.caseStudy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseStudyCreateManyArgs>(args?: SelectSubset<T, CaseStudyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CaseStudies and returns the data saved in the database.
     * @param {CaseStudyCreateManyAndReturnArgs} args - Arguments to create many CaseStudies.
     * @example
     * // Create many CaseStudies
     * const caseStudy = await prisma.caseStudy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CaseStudies and only return the `id`
     * const caseStudyWithIdOnly = await prisma.caseStudy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaseStudyCreateManyAndReturnArgs>(args?: SelectSubset<T, CaseStudyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CaseStudy.
     * @param {CaseStudyDeleteArgs} args - Arguments to delete one CaseStudy.
     * @example
     * // Delete one CaseStudy
     * const CaseStudy = await prisma.caseStudy.delete({
     *   where: {
     *     // ... filter to delete one CaseStudy
     *   }
     * })
     * 
     */
    delete<T extends CaseStudyDeleteArgs>(args: SelectSubset<T, CaseStudyDeleteArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseStudy.
     * @param {CaseStudyUpdateArgs} args - Arguments to update one CaseStudy.
     * @example
     * // Update one CaseStudy
     * const caseStudy = await prisma.caseStudy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseStudyUpdateArgs>(args: SelectSubset<T, CaseStudyUpdateArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseStudies.
     * @param {CaseStudyDeleteManyArgs} args - Arguments to filter CaseStudies to delete.
     * @example
     * // Delete a few CaseStudies
     * const { count } = await prisma.caseStudy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseStudyDeleteManyArgs>(args?: SelectSubset<T, CaseStudyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseStudies
     * const caseStudy = await prisma.caseStudy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseStudyUpdateManyArgs>(args: SelectSubset<T, CaseStudyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseStudies and returns the data updated in the database.
     * @param {CaseStudyUpdateManyAndReturnArgs} args - Arguments to update many CaseStudies.
     * @example
     * // Update many CaseStudies
     * const caseStudy = await prisma.caseStudy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CaseStudies and only return the `id`
     * const caseStudyWithIdOnly = await prisma.caseStudy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CaseStudyUpdateManyAndReturnArgs>(args: SelectSubset<T, CaseStudyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CaseStudy.
     * @param {CaseStudyUpsertArgs} args - Arguments to update or create a CaseStudy.
     * @example
     * // Update or create a CaseStudy
     * const caseStudy = await prisma.caseStudy.upsert({
     *   create: {
     *     // ... data to create a CaseStudy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseStudy we want to update
     *   }
     * })
     */
    upsert<T extends CaseStudyUpsertArgs>(args: SelectSubset<T, CaseStudyUpsertArgs<ExtArgs>>): Prisma__CaseStudyClient<$Result.GetResult<Prisma.$CaseStudyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseStudies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyCountArgs} args - Arguments to filter CaseStudies to count.
     * @example
     * // Count the number of CaseStudies
     * const count = await prisma.caseStudy.count({
     *   where: {
     *     // ... the filter for the CaseStudies we want to count
     *   }
     * })
    **/
    count<T extends CaseStudyCountArgs>(
      args?: Subset<T, CaseStudyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseStudyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseStudyAggregateArgs>(args: Subset<T, CaseStudyAggregateArgs>): Prisma.PrismaPromise<GetCaseStudyAggregateType<T>>

    /**
     * Group by CaseStudy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseStudyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseStudyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseStudyGroupByArgs['orderBy'] }
        : { orderBy?: CaseStudyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseStudyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseStudyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseStudy model
   */
  readonly fields: CaseStudyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseStudy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseStudyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaseStudy model
   */
  interface CaseStudyFieldRefs {
    readonly id: FieldRef<"CaseStudy", 'String'>
    readonly company: FieldRef<"CaseStudy", 'String'>
    readonly industry: FieldRef<"CaseStudy", 'String'>
    readonly slug: FieldRef<"CaseStudy", 'String'>
    readonly goal: FieldRef<"CaseStudy", 'String'>
    readonly metric: FieldRef<"CaseStudy", 'String'>
    readonly metricLabel: FieldRef<"CaseStudy", 'String'>
    readonly title: FieldRef<"CaseStudy", 'String'>
    readonly excerpt: FieldRef<"CaseStudy", 'String'>
    readonly content: FieldRef<"CaseStudy", 'String'>
    readonly logoUrl: FieldRef<"CaseStudy", 'String'>
    readonly bannerUrl: FieldRef<"CaseStudy", 'String'>
    readonly published: FieldRef<"CaseStudy", 'Boolean'>
    readonly metaTitle: FieldRef<"CaseStudy", 'String'>
    readonly metaDescription: FieldRef<"CaseStudy", 'String'>
    readonly metaKeywords: FieldRef<"CaseStudy", 'String'>
    readonly createdAt: FieldRef<"CaseStudy", 'DateTime'>
    readonly updatedAt: FieldRef<"CaseStudy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CaseStudy findUnique
   */
  export type CaseStudyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy findUniqueOrThrow
   */
  export type CaseStudyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy findFirst
   */
  export type CaseStudyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseStudies.
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseStudies.
     */
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * CaseStudy findFirstOrThrow
   */
  export type CaseStudyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Filter, which CaseStudy to fetch.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseStudies.
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseStudies.
     */
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * CaseStudy findMany
   */
  export type CaseStudyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Filter, which CaseStudies to fetch.
     */
    where?: CaseStudyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseStudies to fetch.
     */
    orderBy?: CaseStudyOrderByWithRelationInput | CaseStudyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseStudies.
     */
    cursor?: CaseStudyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseStudies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseStudies.
     */
    skip?: number
    distinct?: CaseStudyScalarFieldEnum | CaseStudyScalarFieldEnum[]
  }

  /**
   * CaseStudy create
   */
  export type CaseStudyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The data needed to create a CaseStudy.
     */
    data: XOR<CaseStudyCreateInput, CaseStudyUncheckedCreateInput>
  }

  /**
   * CaseStudy createMany
   */
  export type CaseStudyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseStudies.
     */
    data: CaseStudyCreateManyInput | CaseStudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaseStudy createManyAndReturn
   */
  export type CaseStudyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The data used to create many CaseStudies.
     */
    data: CaseStudyCreateManyInput | CaseStudyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaseStudy update
   */
  export type CaseStudyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The data needed to update a CaseStudy.
     */
    data: XOR<CaseStudyUpdateInput, CaseStudyUncheckedUpdateInput>
    /**
     * Choose, which CaseStudy to update.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy updateMany
   */
  export type CaseStudyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseStudies.
     */
    data: XOR<CaseStudyUpdateManyMutationInput, CaseStudyUncheckedUpdateManyInput>
    /**
     * Filter which CaseStudies to update
     */
    where?: CaseStudyWhereInput
    /**
     * Limit how many CaseStudies to update.
     */
    limit?: number
  }

  /**
   * CaseStudy updateManyAndReturn
   */
  export type CaseStudyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The data used to update CaseStudies.
     */
    data: XOR<CaseStudyUpdateManyMutationInput, CaseStudyUncheckedUpdateManyInput>
    /**
     * Filter which CaseStudies to update
     */
    where?: CaseStudyWhereInput
    /**
     * Limit how many CaseStudies to update.
     */
    limit?: number
  }

  /**
   * CaseStudy upsert
   */
  export type CaseStudyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * The filter to search for the CaseStudy to update in case it exists.
     */
    where: CaseStudyWhereUniqueInput
    /**
     * In case the CaseStudy found by the `where` argument doesn't exist, create a new CaseStudy with this data.
     */
    create: XOR<CaseStudyCreateInput, CaseStudyUncheckedCreateInput>
    /**
     * In case the CaseStudy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseStudyUpdateInput, CaseStudyUncheckedUpdateInput>
  }

  /**
   * CaseStudy delete
   */
  export type CaseStudyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
    /**
     * Filter which CaseStudy to delete.
     */
    where: CaseStudyWhereUniqueInput
  }

  /**
   * CaseStudy deleteMany
   */
  export type CaseStudyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseStudies to delete
     */
    where?: CaseStudyWhereInput
    /**
     * Limit how many CaseStudies to delete.
     */
    limit?: number
  }

  /**
   * CaseStudy without action
   */
  export type CaseStudyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseStudy
     */
    select?: CaseStudySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseStudy
     */
    omit?: CaseStudyOmit<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerMinAggregateOutputType = {
    id: string | null
    title: string | null
    department: string | null
    location: string | null
    type: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    department: string | null
    location: string | null
    type: string | null
    description: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    title: number
    department: number
    location: number
    type: number
    description: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CareerMinAggregateInputType = {
    id?: true
    title?: true
    department?: true
    location?: true
    type?: true
    description?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    title?: true
    department?: true
    location?: true
    type?: true
    description?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    title?: true
    department?: true
    location?: true
    type?: true
    description?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: string
    title: string
    department: string
    location: string
    type: string
    description: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: CareerCountAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    type?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    type?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    type?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    type?: boolean
    description?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "department" | "location" | "type" | "description" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["career"]>

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      department: string
      location: string
      type: string
      description: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'String'>
    readonly title: FieldRef<"Career", 'String'>
    readonly department: FieldRef<"Career", 'String'>
    readonly location: FieldRef<"Career", 'String'>
    readonly type: FieldRef<"Career", 'String'>
    readonly description: FieldRef<"Career", 'String'>
    readonly active: FieldRef<"Career", 'Boolean'>
    readonly createdAt: FieldRef<"Career", 'DateTime'>
    readonly updatedAt: FieldRef<"Career", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
  }


  /**
   * Model ContactMessage
   */

  export type AggregateContactMessage = {
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  export type ContactMessageMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    company: string | null
    phone: string | null
    industry: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactMessageMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    company: string | null
    phone: string | null
    industry: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactMessageCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    company: number
    phone: number
    industry: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactMessageMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    company?: true
    phone?: true
    industry?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactMessageMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    company?: true
    phone?: true
    industry?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type ContactMessageCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    company?: true
    phone?: true
    industry?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessage to aggregate.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMessages
    **/
    _count?: true | ContactMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMessageMaxAggregateInputType
  }

  export type GetContactMessageAggregateType<T extends ContactMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMessage[P]>
      : GetScalarType<T[P], AggregateContactMessage[P]>
  }




  export type ContactMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMessageWhereInput
    orderBy?: ContactMessageOrderByWithAggregationInput | ContactMessageOrderByWithAggregationInput[]
    by: ContactMessageScalarFieldEnum[] | ContactMessageScalarFieldEnum
    having?: ContactMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMessageCountAggregateInputType | true
    _min?: ContactMessageMinAggregateInputType
    _max?: ContactMessageMaxAggregateInputType
  }

  export type ContactMessageGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    company: string | null
    phone: string | null
    industry: string | null
    message: string
    status: string
    createdAt: Date
    _count: ContactMessageCountAggregateOutputType | null
    _min: ContactMessageMinAggregateOutputType | null
    _max: ContactMessageMaxAggregateOutputType | null
  }

  type GetContactMessageGroupByPayload<T extends ContactMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMessageGroupByOutputType[P]>
        }
      >
    >


  export type ContactMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    industry?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    industry?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    industry?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMessage"]>

  export type ContactMessageSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    company?: boolean
    phone?: boolean
    industry?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "company" | "phone" | "industry" | "message" | "status" | "createdAt", ExtArgs["result"]["contactMessage"]>

  export type $ContactMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      company: string | null
      phone: string | null
      industry: string | null
      message: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contactMessage"]>
    composites: {}
  }

  type ContactMessageGetPayload<S extends boolean | null | undefined | ContactMessageDefaultArgs> = $Result.GetResult<Prisma.$ContactMessagePayload, S>

  type ContactMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMessageCountAggregateInputType | true
    }

  export interface ContactMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMessage'], meta: { name: 'ContactMessage' } }
    /**
     * Find zero or one ContactMessage that matches the filter.
     * @param {ContactMessageFindUniqueArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMessageFindUniqueArgs>(args: SelectSubset<T, ContactMessageFindUniqueArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMessageFindUniqueOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMessageFindFirstArgs>(args?: SelectSubset<T, ContactMessageFindFirstArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindFirstOrThrowArgs} args - Arguments to find a ContactMessage
     * @example
     * // Get one ContactMessage
     * const contactMessage = await prisma.contactMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany()
     * 
     * // Get first 10 ContactMessages
     * const contactMessages = await prisma.contactMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactMessageFindManyArgs>(args?: SelectSubset<T, ContactMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMessage.
     * @param {ContactMessageCreateArgs} args - Arguments to create a ContactMessage.
     * @example
     * // Create one ContactMessage
     * const ContactMessage = await prisma.contactMessage.create({
     *   data: {
     *     // ... data to create a ContactMessage
     *   }
     * })
     * 
     */
    create<T extends ContactMessageCreateArgs>(args: SelectSubset<T, ContactMessageCreateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMessages.
     * @param {ContactMessageCreateManyArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMessageCreateManyArgs>(args?: SelectSubset<T, ContactMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMessages and returns the data saved in the database.
     * @param {ContactMessageCreateManyAndReturnArgs} args - Arguments to create many ContactMessages.
     * @example
     * // Create many ContactMessages
     * const contactMessage = await prisma.contactMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMessage.
     * @param {ContactMessageDeleteArgs} args - Arguments to delete one ContactMessage.
     * @example
     * // Delete one ContactMessage
     * const ContactMessage = await prisma.contactMessage.delete({
     *   where: {
     *     // ... filter to delete one ContactMessage
     *   }
     * })
     * 
     */
    delete<T extends ContactMessageDeleteArgs>(args: SelectSubset<T, ContactMessageDeleteArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMessage.
     * @param {ContactMessageUpdateArgs} args - Arguments to update one ContactMessage.
     * @example
     * // Update one ContactMessage
     * const contactMessage = await prisma.contactMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMessageUpdateArgs>(args: SelectSubset<T, ContactMessageUpdateArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMessages.
     * @param {ContactMessageDeleteManyArgs} args - Arguments to filter ContactMessages to delete.
     * @example
     * // Delete a few ContactMessages
     * const { count } = await prisma.contactMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMessageDeleteManyArgs>(args?: SelectSubset<T, ContactMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMessageUpdateManyArgs>(args: SelectSubset<T, ContactMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMessages and returns the data updated in the database.
     * @param {ContactMessageUpdateManyAndReturnArgs} args - Arguments to update many ContactMessages.
     * @example
     * // Update many ContactMessages
     * const contactMessage = await prisma.contactMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMessages and only return the `id`
     * const contactMessageWithIdOnly = await prisma.contactMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMessage.
     * @param {ContactMessageUpsertArgs} args - Arguments to update or create a ContactMessage.
     * @example
     * // Update or create a ContactMessage
     * const contactMessage = await prisma.contactMessage.upsert({
     *   create: {
     *     // ... data to create a ContactMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMessage we want to update
     *   }
     * })
     */
    upsert<T extends ContactMessageUpsertArgs>(args: SelectSubset<T, ContactMessageUpsertArgs<ExtArgs>>): Prisma__ContactMessageClient<$Result.GetResult<Prisma.$ContactMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageCountArgs} args - Arguments to filter ContactMessages to count.
     * @example
     * // Count the number of ContactMessages
     * const count = await prisma.contactMessage.count({
     *   where: {
     *     // ... the filter for the ContactMessages we want to count
     *   }
     * })
    **/
    count<T extends ContactMessageCountArgs>(
      args?: Subset<T, ContactMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactMessageAggregateArgs>(args: Subset<T, ContactMessageAggregateArgs>): Prisma.PrismaPromise<GetContactMessageAggregateType<T>>

    /**
     * Group by ContactMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMessageGroupByArgs['orderBy'] }
        : { orderBy?: ContactMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMessage model
   */
  readonly fields: ContactMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactMessage model
   */
  interface ContactMessageFieldRefs {
    readonly id: FieldRef<"ContactMessage", 'String'>
    readonly firstName: FieldRef<"ContactMessage", 'String'>
    readonly lastName: FieldRef<"ContactMessage", 'String'>
    readonly email: FieldRef<"ContactMessage", 'String'>
    readonly company: FieldRef<"ContactMessage", 'String'>
    readonly phone: FieldRef<"ContactMessage", 'String'>
    readonly industry: FieldRef<"ContactMessage", 'String'>
    readonly message: FieldRef<"ContactMessage", 'String'>
    readonly status: FieldRef<"ContactMessage", 'String'>
    readonly createdAt: FieldRef<"ContactMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMessage findUnique
   */
  export type ContactMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findUniqueOrThrow
   */
  export type ContactMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage findFirst
   */
  export type ContactMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findFirstOrThrow
   */
  export type ContactMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessage to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMessages.
     */
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage findMany
   */
  export type ContactMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter, which ContactMessages to fetch.
     */
    where?: ContactMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMessages to fetch.
     */
    orderBy?: ContactMessageOrderByWithRelationInput | ContactMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMessages.
     */
    cursor?: ContactMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMessages.
     */
    skip?: number
    distinct?: ContactMessageScalarFieldEnum | ContactMessageScalarFieldEnum[]
  }

  /**
   * ContactMessage create
   */
  export type ContactMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMessage.
     */
    data: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
  }

  /**
   * ContactMessage createMany
   */
  export type ContactMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage createManyAndReturn
   */
  export type ContactMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMessages.
     */
    data: ContactMessageCreateManyInput | ContactMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMessage update
   */
  export type ContactMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMessage.
     */
    data: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
    /**
     * Choose, which ContactMessage to update.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage updateMany
   */
  export type ContactMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage updateManyAndReturn
   */
  export type ContactMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The data used to update ContactMessages.
     */
    data: XOR<ContactMessageUpdateManyMutationInput, ContactMessageUncheckedUpdateManyInput>
    /**
     * Filter which ContactMessages to update
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to update.
     */
    limit?: number
  }

  /**
   * ContactMessage upsert
   */
  export type ContactMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMessage to update in case it exists.
     */
    where: ContactMessageWhereUniqueInput
    /**
     * In case the ContactMessage found by the `where` argument doesn't exist, create a new ContactMessage with this data.
     */
    create: XOR<ContactMessageCreateInput, ContactMessageUncheckedCreateInput>
    /**
     * In case the ContactMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMessageUpdateInput, ContactMessageUncheckedUpdateInput>
  }

  /**
   * ContactMessage delete
   */
  export type ContactMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
    /**
     * Filter which ContactMessage to delete.
     */
    where: ContactMessageWhereUniqueInput
  }

  /**
   * ContactMessage deleteMany
   */
  export type ContactMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMessages to delete
     */
    where?: ContactMessageWhereInput
    /**
     * Limit how many ContactMessages to delete.
     */
    limit?: number
  }

  /**
   * ContactMessage without action
   */
  export type ContactMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMessage
     */
    select?: ContactMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMessage
     */
    omit?: ContactMessageOmit<ExtArgs> | null
  }


  /**
   * Model NewsletterSubscriber
   */

  export type AggregateNewsletterSubscriber = {
    _count: NewsletterSubscriberCountAggregateOutputType | null
    _min: NewsletterSubscriberMinAggregateOutputType | null
    _max: NewsletterSubscriberMaxAggregateOutputType | null
  }

  export type NewsletterSubscriberMinAggregateOutputType = {
    id: string | null
    email: string | null
    status: string | null
    createdAt: Date | null
  }

  export type NewsletterSubscriberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    status: string | null
    createdAt: Date | null
  }

  export type NewsletterSubscriberCountAggregateOutputType = {
    id: number
    email: number
    status: number
    createdAt: number
    _all: number
  }


  export type NewsletterSubscriberMinAggregateInputType = {
    id?: true
    email?: true
    status?: true
    createdAt?: true
  }

  export type NewsletterSubscriberMaxAggregateInputType = {
    id?: true
    email?: true
    status?: true
    createdAt?: true
  }

  export type NewsletterSubscriberCountAggregateInputType = {
    id?: true
    email?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type NewsletterSubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscriber to aggregate.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterSubscribers
    **/
    _count?: true | NewsletterSubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterSubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterSubscriberMaxAggregateInputType
  }

  export type GetNewsletterSubscriberAggregateType<T extends NewsletterSubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterSubscriber[P]>
      : GetScalarType<T[P], AggregateNewsletterSubscriber[P]>
  }




  export type NewsletterSubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterSubscriberWhereInput
    orderBy?: NewsletterSubscriberOrderByWithAggregationInput | NewsletterSubscriberOrderByWithAggregationInput[]
    by: NewsletterSubscriberScalarFieldEnum[] | NewsletterSubscriberScalarFieldEnum
    having?: NewsletterSubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterSubscriberCountAggregateInputType | true
    _min?: NewsletterSubscriberMinAggregateInputType
    _max?: NewsletterSubscriberMaxAggregateInputType
  }

  export type NewsletterSubscriberGroupByOutputType = {
    id: string
    email: string
    status: string
    createdAt: Date
    _count: NewsletterSubscriberCountAggregateOutputType | null
    _min: NewsletterSubscriberMinAggregateOutputType | null
    _max: NewsletterSubscriberMaxAggregateOutputType | null
  }

  type GetNewsletterSubscriberGroupByPayload<T extends NewsletterSubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterSubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterSubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterSubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterSubscriberGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletterSubscriber"]>

  export type NewsletterSubscriberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletterSubscriber"]>

  export type NewsletterSubscriberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["newsletterSubscriber"]>

  export type NewsletterSubscriberSelectScalar = {
    id?: boolean
    email?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type NewsletterSubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "status" | "createdAt", ExtArgs["result"]["newsletterSubscriber"]>

  export type $NewsletterSubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterSubscriber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["newsletterSubscriber"]>
    composites: {}
  }

  type NewsletterSubscriberGetPayload<S extends boolean | null | undefined | NewsletterSubscriberDefaultArgs> = $Result.GetResult<Prisma.$NewsletterSubscriberPayload, S>

  type NewsletterSubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterSubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterSubscriberCountAggregateInputType | true
    }

  export interface NewsletterSubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterSubscriber'], meta: { name: 'NewsletterSubscriber' } }
    /**
     * Find zero or one NewsletterSubscriber that matches the filter.
     * @param {NewsletterSubscriberFindUniqueArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterSubscriberFindUniqueArgs>(args: SelectSubset<T, NewsletterSubscriberFindUniqueArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterSubscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterSubscriberFindUniqueOrThrowArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterSubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterSubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberFindFirstArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterSubscriberFindFirstArgs>(args?: SelectSubset<T, NewsletterSubscriberFindFirstArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberFindFirstOrThrowArgs} args - Arguments to find a NewsletterSubscriber
     * @example
     * // Get one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterSubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterSubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterSubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterSubscribers
     * const newsletterSubscribers = await prisma.newsletterSubscriber.findMany()
     * 
     * // Get first 10 NewsletterSubscribers
     * const newsletterSubscribers = await prisma.newsletterSubscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterSubscriberWithIdOnly = await prisma.newsletterSubscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterSubscriberFindManyArgs>(args?: SelectSubset<T, NewsletterSubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterSubscriber.
     * @param {NewsletterSubscriberCreateArgs} args - Arguments to create a NewsletterSubscriber.
     * @example
     * // Create one NewsletterSubscriber
     * const NewsletterSubscriber = await prisma.newsletterSubscriber.create({
     *   data: {
     *     // ... data to create a NewsletterSubscriber
     *   }
     * })
     * 
     */
    create<T extends NewsletterSubscriberCreateArgs>(args: SelectSubset<T, NewsletterSubscriberCreateArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterSubscribers.
     * @param {NewsletterSubscriberCreateManyArgs} args - Arguments to create many NewsletterSubscribers.
     * @example
     * // Create many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterSubscriberCreateManyArgs>(args?: SelectSubset<T, NewsletterSubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsletterSubscribers and returns the data saved in the database.
     * @param {NewsletterSubscriberCreateManyAndReturnArgs} args - Arguments to create many NewsletterSubscribers.
     * @example
     * // Create many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsletterSubscribers and only return the `id`
     * const newsletterSubscriberWithIdOnly = await prisma.newsletterSubscriber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterSubscriberCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterSubscriberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsletterSubscriber.
     * @param {NewsletterSubscriberDeleteArgs} args - Arguments to delete one NewsletterSubscriber.
     * @example
     * // Delete one NewsletterSubscriber
     * const NewsletterSubscriber = await prisma.newsletterSubscriber.delete({
     *   where: {
     *     // ... filter to delete one NewsletterSubscriber
     *   }
     * })
     * 
     */
    delete<T extends NewsletterSubscriberDeleteArgs>(args: SelectSubset<T, NewsletterSubscriberDeleteArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterSubscriber.
     * @param {NewsletterSubscriberUpdateArgs} args - Arguments to update one NewsletterSubscriber.
     * @example
     * // Update one NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterSubscriberUpdateArgs>(args: SelectSubset<T, NewsletterSubscriberUpdateArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterSubscribers.
     * @param {NewsletterSubscriberDeleteManyArgs} args - Arguments to filter NewsletterSubscribers to delete.
     * @example
     * // Delete a few NewsletterSubscribers
     * const { count } = await prisma.newsletterSubscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterSubscriberDeleteManyArgs>(args?: SelectSubset<T, NewsletterSubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterSubscriberUpdateManyArgs>(args: SelectSubset<T, NewsletterSubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscribers and returns the data updated in the database.
     * @param {NewsletterSubscriberUpdateManyAndReturnArgs} args - Arguments to update many NewsletterSubscribers.
     * @example
     * // Update many NewsletterSubscribers
     * const newsletterSubscriber = await prisma.newsletterSubscriber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsletterSubscribers and only return the `id`
     * const newsletterSubscriberWithIdOnly = await prisma.newsletterSubscriber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsletterSubscriberUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterSubscriberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsletterSubscriber.
     * @param {NewsletterSubscriberUpsertArgs} args - Arguments to update or create a NewsletterSubscriber.
     * @example
     * // Update or create a NewsletterSubscriber
     * const newsletterSubscriber = await prisma.newsletterSubscriber.upsert({
     *   create: {
     *     // ... data to create a NewsletterSubscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterSubscriber we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterSubscriberUpsertArgs>(args: SelectSubset<T, NewsletterSubscriberUpsertArgs<ExtArgs>>): Prisma__NewsletterSubscriberClient<$Result.GetResult<Prisma.$NewsletterSubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterSubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberCountArgs} args - Arguments to filter NewsletterSubscribers to count.
     * @example
     * // Count the number of NewsletterSubscribers
     * const count = await prisma.newsletterSubscriber.count({
     *   where: {
     *     // ... the filter for the NewsletterSubscribers we want to count
     *   }
     * })
    **/
    count<T extends NewsletterSubscriberCountArgs>(
      args?: Subset<T, NewsletterSubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterSubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterSubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterSubscriberAggregateArgs>(args: Subset<T, NewsletterSubscriberAggregateArgs>): Prisma.PrismaPromise<GetNewsletterSubscriberAggregateType<T>>

    /**
     * Group by NewsletterSubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterSubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterSubscriberGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterSubscriberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterSubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterSubscriber model
   */
  readonly fields: NewsletterSubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterSubscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterSubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterSubscriber model
   */
  interface NewsletterSubscriberFieldRefs {
    readonly id: FieldRef<"NewsletterSubscriber", 'String'>
    readonly email: FieldRef<"NewsletterSubscriber", 'String'>
    readonly status: FieldRef<"NewsletterSubscriber", 'String'>
    readonly createdAt: FieldRef<"NewsletterSubscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterSubscriber findUnique
   */
  export type NewsletterSubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber findUniqueOrThrow
   */
  export type NewsletterSubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber findFirst
   */
  export type NewsletterSubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscribers.
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscribers.
     */
    distinct?: NewsletterSubscriberScalarFieldEnum | NewsletterSubscriberScalarFieldEnum[]
  }

  /**
   * NewsletterSubscriber findFirstOrThrow
   */
  export type NewsletterSubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriber to fetch.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscribers.
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscribers.
     */
    distinct?: NewsletterSubscriberScalarFieldEnum | NewsletterSubscriberScalarFieldEnum[]
  }

  /**
   * NewsletterSubscriber findMany
   */
  export type NewsletterSubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscribers to fetch.
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscribers to fetch.
     */
    orderBy?: NewsletterSubscriberOrderByWithRelationInput | NewsletterSubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterSubscribers.
     */
    cursor?: NewsletterSubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscribers.
     */
    skip?: number
    distinct?: NewsletterSubscriberScalarFieldEnum | NewsletterSubscriberScalarFieldEnum[]
  }

  /**
   * NewsletterSubscriber create
   */
  export type NewsletterSubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsletterSubscriber.
     */
    data: XOR<NewsletterSubscriberCreateInput, NewsletterSubscriberUncheckedCreateInput>
  }

  /**
   * NewsletterSubscriber createMany
   */
  export type NewsletterSubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterSubscribers.
     */
    data: NewsletterSubscriberCreateManyInput | NewsletterSubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscriber createManyAndReturn
   */
  export type NewsletterSubscriberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data used to create many NewsletterSubscribers.
     */
    data: NewsletterSubscriberCreateManyInput | NewsletterSubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterSubscriber update
   */
  export type NewsletterSubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsletterSubscriber.
     */
    data: XOR<NewsletterSubscriberUpdateInput, NewsletterSubscriberUncheckedUpdateInput>
    /**
     * Choose, which NewsletterSubscriber to update.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber updateMany
   */
  export type NewsletterSubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterSubscribers.
     */
    data: XOR<NewsletterSubscriberUpdateManyMutationInput, NewsletterSubscriberUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscribers to update
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * Limit how many NewsletterSubscribers to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscriber updateManyAndReturn
   */
  export type NewsletterSubscriberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The data used to update NewsletterSubscribers.
     */
    data: XOR<NewsletterSubscriberUpdateManyMutationInput, NewsletterSubscriberUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscribers to update
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * Limit how many NewsletterSubscribers to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscriber upsert
   */
  export type NewsletterSubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsletterSubscriber to update in case it exists.
     */
    where: NewsletterSubscriberWhereUniqueInput
    /**
     * In case the NewsletterSubscriber found by the `where` argument doesn't exist, create a new NewsletterSubscriber with this data.
     */
    create: XOR<NewsletterSubscriberCreateInput, NewsletterSubscriberUncheckedCreateInput>
    /**
     * In case the NewsletterSubscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterSubscriberUpdateInput, NewsletterSubscriberUncheckedUpdateInput>
  }

  /**
   * NewsletterSubscriber delete
   */
  export type NewsletterSubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
    /**
     * Filter which NewsletterSubscriber to delete.
     */
    where: NewsletterSubscriberWhereUniqueInput
  }

  /**
   * NewsletterSubscriber deleteMany
   */
  export type NewsletterSubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscribers to delete
     */
    where?: NewsletterSubscriberWhereInput
    /**
     * Limit how many NewsletterSubscribers to delete.
     */
    limit?: number
  }

  /**
   * NewsletterSubscriber without action
   */
  export type NewsletterSubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscriber
     */
    select?: NewsletterSubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscriber
     */
    omit?: NewsletterSubscriberOmit<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    source: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    source: string | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    source: number
    name: number
    phone: number
    email: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    source?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    source?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    source?: true
    name?: true
    phone?: true
    email?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    source: string
    name: string
    phone: string | null
    email: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    source?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "name" | "phone" | "email" | "metadata" | "createdAt", ExtArgs["result"]["lead"]>

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      name: string
      phone: string | null
      email: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly metadata: FieldRef<"Lead", 'Json'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
  }


  /**
   * Model HomeStat
   */

  export type AggregateHomeStat = {
    _count: HomeStatCountAggregateOutputType | null
    _avg: HomeStatAvgAggregateOutputType | null
    _sum: HomeStatSumAggregateOutputType | null
    _min: HomeStatMinAggregateOutputType | null
    _max: HomeStatMaxAggregateOutputType | null
  }

  export type HomeStatAvgAggregateOutputType = {
    order: number | null
  }

  export type HomeStatSumAggregateOutputType = {
    order: number | null
  }

  export type HomeStatMinAggregateOutputType = {
    id: string | null
    value: string | null
    label: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeStatMaxAggregateOutputType = {
    id: string | null
    value: string | null
    label: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HomeStatCountAggregateOutputType = {
    id: number
    value: number
    label: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HomeStatAvgAggregateInputType = {
    order?: true
  }

  export type HomeStatSumAggregateInputType = {
    order?: true
  }

  export type HomeStatMinAggregateInputType = {
    id?: true
    value?: true
    label?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeStatMaxAggregateInputType = {
    id?: true
    value?: true
    label?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HomeStatCountAggregateInputType = {
    id?: true
    value?: true
    label?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HomeStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeStat to aggregate.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HomeStats
    **/
    _count?: true | HomeStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeStatMaxAggregateInputType
  }

  export type GetHomeStatAggregateType<T extends HomeStatAggregateArgs> = {
        [P in keyof T & keyof AggregateHomeStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomeStat[P]>
      : GetScalarType<T[P], AggregateHomeStat[P]>
  }




  export type HomeStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeStatWhereInput
    orderBy?: HomeStatOrderByWithAggregationInput | HomeStatOrderByWithAggregationInput[]
    by: HomeStatScalarFieldEnum[] | HomeStatScalarFieldEnum
    having?: HomeStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeStatCountAggregateInputType | true
    _avg?: HomeStatAvgAggregateInputType
    _sum?: HomeStatSumAggregateInputType
    _min?: HomeStatMinAggregateInputType
    _max?: HomeStatMaxAggregateInputType
  }

  export type HomeStatGroupByOutputType = {
    id: string
    value: string
    label: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: HomeStatCountAggregateOutputType | null
    _avg: HomeStatAvgAggregateOutputType | null
    _sum: HomeStatSumAggregateOutputType | null
    _min: HomeStatMinAggregateOutputType | null
    _max: HomeStatMaxAggregateOutputType | null
  }

  type GetHomeStatGroupByPayload<T extends HomeStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeStatGroupByOutputType[P]>
            : GetScalarType<T[P], HomeStatGroupByOutputType[P]>
        }
      >
    >


  export type HomeStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeStat"]>

  export type HomeStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeStat"]>

  export type HomeStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["homeStat"]>

  export type HomeStatSelectScalar = {
    id?: boolean
    value?: boolean
    label?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HomeStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "label" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["homeStat"]>

  export type $HomeStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HomeStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      label: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["homeStat"]>
    composites: {}
  }

  type HomeStatGetPayload<S extends boolean | null | undefined | HomeStatDefaultArgs> = $Result.GetResult<Prisma.$HomeStatPayload, S>

  type HomeStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeStatCountAggregateInputType | true
    }

  export interface HomeStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HomeStat'], meta: { name: 'HomeStat' } }
    /**
     * Find zero or one HomeStat that matches the filter.
     * @param {HomeStatFindUniqueArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeStatFindUniqueArgs>(args: SelectSubset<T, HomeStatFindUniqueArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HomeStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeStatFindUniqueOrThrowArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeStatFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatFindFirstArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeStatFindFirstArgs>(args?: SelectSubset<T, HomeStatFindFirstArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HomeStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatFindFirstOrThrowArgs} args - Arguments to find a HomeStat
     * @example
     * // Get one HomeStat
     * const homeStat = await prisma.homeStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeStatFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HomeStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HomeStats
     * const homeStats = await prisma.homeStat.findMany()
     * 
     * // Get first 10 HomeStats
     * const homeStats = await prisma.homeStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeStatWithIdOnly = await prisma.homeStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeStatFindManyArgs>(args?: SelectSubset<T, HomeStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HomeStat.
     * @param {HomeStatCreateArgs} args - Arguments to create a HomeStat.
     * @example
     * // Create one HomeStat
     * const HomeStat = await prisma.homeStat.create({
     *   data: {
     *     // ... data to create a HomeStat
     *   }
     * })
     * 
     */
    create<T extends HomeStatCreateArgs>(args: SelectSubset<T, HomeStatCreateArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HomeStats.
     * @param {HomeStatCreateManyArgs} args - Arguments to create many HomeStats.
     * @example
     * // Create many HomeStats
     * const homeStat = await prisma.homeStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeStatCreateManyArgs>(args?: SelectSubset<T, HomeStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HomeStats and returns the data saved in the database.
     * @param {HomeStatCreateManyAndReturnArgs} args - Arguments to create many HomeStats.
     * @example
     * // Create many HomeStats
     * const homeStat = await prisma.homeStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HomeStats and only return the `id`
     * const homeStatWithIdOnly = await prisma.homeStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeStatCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HomeStat.
     * @param {HomeStatDeleteArgs} args - Arguments to delete one HomeStat.
     * @example
     * // Delete one HomeStat
     * const HomeStat = await prisma.homeStat.delete({
     *   where: {
     *     // ... filter to delete one HomeStat
     *   }
     * })
     * 
     */
    delete<T extends HomeStatDeleteArgs>(args: SelectSubset<T, HomeStatDeleteArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HomeStat.
     * @param {HomeStatUpdateArgs} args - Arguments to update one HomeStat.
     * @example
     * // Update one HomeStat
     * const homeStat = await prisma.homeStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeStatUpdateArgs>(args: SelectSubset<T, HomeStatUpdateArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HomeStats.
     * @param {HomeStatDeleteManyArgs} args - Arguments to filter HomeStats to delete.
     * @example
     * // Delete a few HomeStats
     * const { count } = await prisma.homeStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeStatDeleteManyArgs>(args?: SelectSubset<T, HomeStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HomeStats
     * const homeStat = await prisma.homeStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeStatUpdateManyArgs>(args: SelectSubset<T, HomeStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HomeStats and returns the data updated in the database.
     * @param {HomeStatUpdateManyAndReturnArgs} args - Arguments to update many HomeStats.
     * @example
     * // Update many HomeStats
     * const homeStat = await prisma.homeStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HomeStats and only return the `id`
     * const homeStatWithIdOnly = await prisma.homeStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HomeStatUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HomeStat.
     * @param {HomeStatUpsertArgs} args - Arguments to update or create a HomeStat.
     * @example
     * // Update or create a HomeStat
     * const homeStat = await prisma.homeStat.upsert({
     *   create: {
     *     // ... data to create a HomeStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HomeStat we want to update
     *   }
     * })
     */
    upsert<T extends HomeStatUpsertArgs>(args: SelectSubset<T, HomeStatUpsertArgs<ExtArgs>>): Prisma__HomeStatClient<$Result.GetResult<Prisma.$HomeStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HomeStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatCountArgs} args - Arguments to filter HomeStats to count.
     * @example
     * // Count the number of HomeStats
     * const count = await prisma.homeStat.count({
     *   where: {
     *     // ... the filter for the HomeStats we want to count
     *   }
     * })
    **/
    count<T extends HomeStatCountArgs>(
      args?: Subset<T, HomeStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HomeStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HomeStatAggregateArgs>(args: Subset<T, HomeStatAggregateArgs>): Prisma.PrismaPromise<GetHomeStatAggregateType<T>>

    /**
     * Group by HomeStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HomeStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeStatGroupByArgs['orderBy'] }
        : { orderBy?: HomeStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HomeStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HomeStat model
   */
  readonly fields: HomeStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HomeStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HomeStat model
   */
  interface HomeStatFieldRefs {
    readonly id: FieldRef<"HomeStat", 'String'>
    readonly value: FieldRef<"HomeStat", 'String'>
    readonly label: FieldRef<"HomeStat", 'String'>
    readonly order: FieldRef<"HomeStat", 'Int'>
    readonly createdAt: FieldRef<"HomeStat", 'DateTime'>
    readonly updatedAt: FieldRef<"HomeStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HomeStat findUnique
   */
  export type HomeStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat findUniqueOrThrow
   */
  export type HomeStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat findFirst
   */
  export type HomeStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeStats.
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeStats.
     */
    distinct?: HomeStatScalarFieldEnum | HomeStatScalarFieldEnum[]
  }

  /**
   * HomeStat findFirstOrThrow
   */
  export type HomeStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStat to fetch.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HomeStats.
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HomeStats.
     */
    distinct?: HomeStatScalarFieldEnum | HomeStatScalarFieldEnum[]
  }

  /**
   * HomeStat findMany
   */
  export type HomeStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter, which HomeStats to fetch.
     */
    where?: HomeStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HomeStats to fetch.
     */
    orderBy?: HomeStatOrderByWithRelationInput | HomeStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HomeStats.
     */
    cursor?: HomeStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HomeStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HomeStats.
     */
    skip?: number
    distinct?: HomeStatScalarFieldEnum | HomeStatScalarFieldEnum[]
  }

  /**
   * HomeStat create
   */
  export type HomeStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data needed to create a HomeStat.
     */
    data: XOR<HomeStatCreateInput, HomeStatUncheckedCreateInput>
  }

  /**
   * HomeStat createMany
   */
  export type HomeStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HomeStats.
     */
    data: HomeStatCreateManyInput | HomeStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeStat createManyAndReturn
   */
  export type HomeStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data used to create many HomeStats.
     */
    data: HomeStatCreateManyInput | HomeStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HomeStat update
   */
  export type HomeStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data needed to update a HomeStat.
     */
    data: XOR<HomeStatUpdateInput, HomeStatUncheckedUpdateInput>
    /**
     * Choose, which HomeStat to update.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat updateMany
   */
  export type HomeStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HomeStats.
     */
    data: XOR<HomeStatUpdateManyMutationInput, HomeStatUncheckedUpdateManyInput>
    /**
     * Filter which HomeStats to update
     */
    where?: HomeStatWhereInput
    /**
     * Limit how many HomeStats to update.
     */
    limit?: number
  }

  /**
   * HomeStat updateManyAndReturn
   */
  export type HomeStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The data used to update HomeStats.
     */
    data: XOR<HomeStatUpdateManyMutationInput, HomeStatUncheckedUpdateManyInput>
    /**
     * Filter which HomeStats to update
     */
    where?: HomeStatWhereInput
    /**
     * Limit how many HomeStats to update.
     */
    limit?: number
  }

  /**
   * HomeStat upsert
   */
  export type HomeStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * The filter to search for the HomeStat to update in case it exists.
     */
    where: HomeStatWhereUniqueInput
    /**
     * In case the HomeStat found by the `where` argument doesn't exist, create a new HomeStat with this data.
     */
    create: XOR<HomeStatCreateInput, HomeStatUncheckedCreateInput>
    /**
     * In case the HomeStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeStatUpdateInput, HomeStatUncheckedUpdateInput>
  }

  /**
   * HomeStat delete
   */
  export type HomeStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
    /**
     * Filter which HomeStat to delete.
     */
    where: HomeStatWhereUniqueInput
  }

  /**
   * HomeStat deleteMany
   */
  export type HomeStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HomeStats to delete
     */
    where?: HomeStatWhereInput
    /**
     * Limit how many HomeStats to delete.
     */
    limit?: number
  }

  /**
   * HomeStat without action
   */
  export type HomeStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeStat
     */
    select?: HomeStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HomeStat
     */
    omit?: HomeStatOmit<ExtArgs> | null
  }


  /**
   * Model IndustryChatbot
   */

  export type AggregateIndustryChatbot = {
    _count: IndustryChatbotCountAggregateOutputType | null
    _min: IndustryChatbotMinAggregateOutputType | null
    _max: IndustryChatbotMaxAggregateOutputType | null
  }

  export type IndustryChatbotMinAggregateOutputType = {
    id: string | null
    industry: string | null
    brand: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndustryChatbotMaxAggregateOutputType = {
    id: string | null
    industry: string | null
    brand: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndustryChatbotCountAggregateOutputType = {
    id: number
    industry: number
    brand: number
    flowSteps: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndustryChatbotMinAggregateInputType = {
    id?: true
    industry?: true
    brand?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndustryChatbotMaxAggregateInputType = {
    id?: true
    industry?: true
    brand?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndustryChatbotCountAggregateInputType = {
    id?: true
    industry?: true
    brand?: true
    flowSteps?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndustryChatbotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryChatbot to aggregate.
     */
    where?: IndustryChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryChatbots to fetch.
     */
    orderBy?: IndustryChatbotOrderByWithRelationInput | IndustryChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryChatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryChatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndustryChatbots
    **/
    _count?: true | IndustryChatbotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryChatbotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryChatbotMaxAggregateInputType
  }

  export type GetIndustryChatbotAggregateType<T extends IndustryChatbotAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustryChatbot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustryChatbot[P]>
      : GetScalarType<T[P], AggregateIndustryChatbot[P]>
  }




  export type IndustryChatbotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryChatbotWhereInput
    orderBy?: IndustryChatbotOrderByWithAggregationInput | IndustryChatbotOrderByWithAggregationInput[]
    by: IndustryChatbotScalarFieldEnum[] | IndustryChatbotScalarFieldEnum
    having?: IndustryChatbotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryChatbotCountAggregateInputType | true
    _min?: IndustryChatbotMinAggregateInputType
    _max?: IndustryChatbotMaxAggregateInputType
  }

  export type IndustryChatbotGroupByOutputType = {
    id: string
    industry: string
    brand: string
    flowSteps: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: IndustryChatbotCountAggregateOutputType | null
    _min: IndustryChatbotMinAggregateOutputType | null
    _max: IndustryChatbotMaxAggregateOutputType | null
  }

  type GetIndustryChatbotGroupByPayload<T extends IndustryChatbotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryChatbotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryChatbotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryChatbotGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryChatbotGroupByOutputType[P]>
        }
      >
    >


  export type IndustryChatbotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    brand?: boolean
    flowSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industryChatbot"]>

  export type IndustryChatbotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    brand?: boolean
    flowSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industryChatbot"]>

  export type IndustryChatbotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    industry?: boolean
    brand?: boolean
    flowSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industryChatbot"]>

  export type IndustryChatbotSelectScalar = {
    id?: boolean
    industry?: boolean
    brand?: boolean
    flowSteps?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndustryChatbotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "industry" | "brand" | "flowSteps" | "createdAt" | "updatedAt", ExtArgs["result"]["industryChatbot"]>

  export type $IndustryChatbotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndustryChatbot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      industry: string
      brand: string
      flowSteps: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["industryChatbot"]>
    composites: {}
  }

  type IndustryChatbotGetPayload<S extends boolean | null | undefined | IndustryChatbotDefaultArgs> = $Result.GetResult<Prisma.$IndustryChatbotPayload, S>

  type IndustryChatbotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryChatbotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryChatbotCountAggregateInputType | true
    }

  export interface IndustryChatbotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndustryChatbot'], meta: { name: 'IndustryChatbot' } }
    /**
     * Find zero or one IndustryChatbot that matches the filter.
     * @param {IndustryChatbotFindUniqueArgs} args - Arguments to find a IndustryChatbot
     * @example
     * // Get one IndustryChatbot
     * const industryChatbot = await prisma.industryChatbot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryChatbotFindUniqueArgs>(args: SelectSubset<T, IndustryChatbotFindUniqueArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndustryChatbot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryChatbotFindUniqueOrThrowArgs} args - Arguments to find a IndustryChatbot
     * @example
     * // Get one IndustryChatbot
     * const industryChatbot = await prisma.industryChatbot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryChatbotFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryChatbotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryChatbot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotFindFirstArgs} args - Arguments to find a IndustryChatbot
     * @example
     * // Get one IndustryChatbot
     * const industryChatbot = await prisma.industryChatbot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryChatbotFindFirstArgs>(args?: SelectSubset<T, IndustryChatbotFindFirstArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndustryChatbot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotFindFirstOrThrowArgs} args - Arguments to find a IndustryChatbot
     * @example
     * // Get one IndustryChatbot
     * const industryChatbot = await prisma.industryChatbot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryChatbotFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryChatbotFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndustryChatbots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndustryChatbots
     * const industryChatbots = await prisma.industryChatbot.findMany()
     * 
     * // Get first 10 IndustryChatbots
     * const industryChatbots = await prisma.industryChatbot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryChatbotWithIdOnly = await prisma.industryChatbot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryChatbotFindManyArgs>(args?: SelectSubset<T, IndustryChatbotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndustryChatbot.
     * @param {IndustryChatbotCreateArgs} args - Arguments to create a IndustryChatbot.
     * @example
     * // Create one IndustryChatbot
     * const IndustryChatbot = await prisma.industryChatbot.create({
     *   data: {
     *     // ... data to create a IndustryChatbot
     *   }
     * })
     * 
     */
    create<T extends IndustryChatbotCreateArgs>(args: SelectSubset<T, IndustryChatbotCreateArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndustryChatbots.
     * @param {IndustryChatbotCreateManyArgs} args - Arguments to create many IndustryChatbots.
     * @example
     * // Create many IndustryChatbots
     * const industryChatbot = await prisma.industryChatbot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryChatbotCreateManyArgs>(args?: SelectSubset<T, IndustryChatbotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndustryChatbots and returns the data saved in the database.
     * @param {IndustryChatbotCreateManyAndReturnArgs} args - Arguments to create many IndustryChatbots.
     * @example
     * // Create many IndustryChatbots
     * const industryChatbot = await prisma.industryChatbot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndustryChatbots and only return the `id`
     * const industryChatbotWithIdOnly = await prisma.industryChatbot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryChatbotCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryChatbotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndustryChatbot.
     * @param {IndustryChatbotDeleteArgs} args - Arguments to delete one IndustryChatbot.
     * @example
     * // Delete one IndustryChatbot
     * const IndustryChatbot = await prisma.industryChatbot.delete({
     *   where: {
     *     // ... filter to delete one IndustryChatbot
     *   }
     * })
     * 
     */
    delete<T extends IndustryChatbotDeleteArgs>(args: SelectSubset<T, IndustryChatbotDeleteArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndustryChatbot.
     * @param {IndustryChatbotUpdateArgs} args - Arguments to update one IndustryChatbot.
     * @example
     * // Update one IndustryChatbot
     * const industryChatbot = await prisma.industryChatbot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryChatbotUpdateArgs>(args: SelectSubset<T, IndustryChatbotUpdateArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndustryChatbots.
     * @param {IndustryChatbotDeleteManyArgs} args - Arguments to filter IndustryChatbots to delete.
     * @example
     * // Delete a few IndustryChatbots
     * const { count } = await prisma.industryChatbot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryChatbotDeleteManyArgs>(args?: SelectSubset<T, IndustryChatbotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryChatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndustryChatbots
     * const industryChatbot = await prisma.industryChatbot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryChatbotUpdateManyArgs>(args: SelectSubset<T, IndustryChatbotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndustryChatbots and returns the data updated in the database.
     * @param {IndustryChatbotUpdateManyAndReturnArgs} args - Arguments to update many IndustryChatbots.
     * @example
     * // Update many IndustryChatbots
     * const industryChatbot = await prisma.industryChatbot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndustryChatbots and only return the `id`
     * const industryChatbotWithIdOnly = await prisma.industryChatbot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndustryChatbotUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryChatbotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndustryChatbot.
     * @param {IndustryChatbotUpsertArgs} args - Arguments to update or create a IndustryChatbot.
     * @example
     * // Update or create a IndustryChatbot
     * const industryChatbot = await prisma.industryChatbot.upsert({
     *   create: {
     *     // ... data to create a IndustryChatbot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndustryChatbot we want to update
     *   }
     * })
     */
    upsert<T extends IndustryChatbotUpsertArgs>(args: SelectSubset<T, IndustryChatbotUpsertArgs<ExtArgs>>): Prisma__IndustryChatbotClient<$Result.GetResult<Prisma.$IndustryChatbotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndustryChatbots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotCountArgs} args - Arguments to filter IndustryChatbots to count.
     * @example
     * // Count the number of IndustryChatbots
     * const count = await prisma.industryChatbot.count({
     *   where: {
     *     // ... the filter for the IndustryChatbots we want to count
     *   }
     * })
    **/
    count<T extends IndustryChatbotCountArgs>(
      args?: Subset<T, IndustryChatbotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryChatbotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndustryChatbot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryChatbotAggregateArgs>(args: Subset<T, IndustryChatbotAggregateArgs>): Prisma.PrismaPromise<GetIndustryChatbotAggregateType<T>>

    /**
     * Group by IndustryChatbot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryChatbotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryChatbotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryChatbotGroupByArgs['orderBy'] }
        : { orderBy?: IndustryChatbotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryChatbotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryChatbotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndustryChatbot model
   */
  readonly fields: IndustryChatbotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndustryChatbot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryChatbotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndustryChatbot model
   */
  interface IndustryChatbotFieldRefs {
    readonly id: FieldRef<"IndustryChatbot", 'String'>
    readonly industry: FieldRef<"IndustryChatbot", 'String'>
    readonly brand: FieldRef<"IndustryChatbot", 'String'>
    readonly flowSteps: FieldRef<"IndustryChatbot", 'Json'>
    readonly createdAt: FieldRef<"IndustryChatbot", 'DateTime'>
    readonly updatedAt: FieldRef<"IndustryChatbot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndustryChatbot findUnique
   */
  export type IndustryChatbotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * Filter, which IndustryChatbot to fetch.
     */
    where: IndustryChatbotWhereUniqueInput
  }

  /**
   * IndustryChatbot findUniqueOrThrow
   */
  export type IndustryChatbotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * Filter, which IndustryChatbot to fetch.
     */
    where: IndustryChatbotWhereUniqueInput
  }

  /**
   * IndustryChatbot findFirst
   */
  export type IndustryChatbotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * Filter, which IndustryChatbot to fetch.
     */
    where?: IndustryChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryChatbots to fetch.
     */
    orderBy?: IndustryChatbotOrderByWithRelationInput | IndustryChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryChatbots.
     */
    cursor?: IndustryChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryChatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryChatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryChatbots.
     */
    distinct?: IndustryChatbotScalarFieldEnum | IndustryChatbotScalarFieldEnum[]
  }

  /**
   * IndustryChatbot findFirstOrThrow
   */
  export type IndustryChatbotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * Filter, which IndustryChatbot to fetch.
     */
    where?: IndustryChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryChatbots to fetch.
     */
    orderBy?: IndustryChatbotOrderByWithRelationInput | IndustryChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndustryChatbots.
     */
    cursor?: IndustryChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryChatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryChatbots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndustryChatbots.
     */
    distinct?: IndustryChatbotScalarFieldEnum | IndustryChatbotScalarFieldEnum[]
  }

  /**
   * IndustryChatbot findMany
   */
  export type IndustryChatbotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * Filter, which IndustryChatbots to fetch.
     */
    where?: IndustryChatbotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndustryChatbots to fetch.
     */
    orderBy?: IndustryChatbotOrderByWithRelationInput | IndustryChatbotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndustryChatbots.
     */
    cursor?: IndustryChatbotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndustryChatbots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndustryChatbots.
     */
    skip?: number
    distinct?: IndustryChatbotScalarFieldEnum | IndustryChatbotScalarFieldEnum[]
  }

  /**
   * IndustryChatbot create
   */
  export type IndustryChatbotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * The data needed to create a IndustryChatbot.
     */
    data: XOR<IndustryChatbotCreateInput, IndustryChatbotUncheckedCreateInput>
  }

  /**
   * IndustryChatbot createMany
   */
  export type IndustryChatbotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndustryChatbots.
     */
    data: IndustryChatbotCreateManyInput | IndustryChatbotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryChatbot createManyAndReturn
   */
  export type IndustryChatbotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * The data used to create many IndustryChatbots.
     */
    data: IndustryChatbotCreateManyInput | IndustryChatbotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndustryChatbot update
   */
  export type IndustryChatbotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * The data needed to update a IndustryChatbot.
     */
    data: XOR<IndustryChatbotUpdateInput, IndustryChatbotUncheckedUpdateInput>
    /**
     * Choose, which IndustryChatbot to update.
     */
    where: IndustryChatbotWhereUniqueInput
  }

  /**
   * IndustryChatbot updateMany
   */
  export type IndustryChatbotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndustryChatbots.
     */
    data: XOR<IndustryChatbotUpdateManyMutationInput, IndustryChatbotUncheckedUpdateManyInput>
    /**
     * Filter which IndustryChatbots to update
     */
    where?: IndustryChatbotWhereInput
    /**
     * Limit how many IndustryChatbots to update.
     */
    limit?: number
  }

  /**
   * IndustryChatbot updateManyAndReturn
   */
  export type IndustryChatbotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * The data used to update IndustryChatbots.
     */
    data: XOR<IndustryChatbotUpdateManyMutationInput, IndustryChatbotUncheckedUpdateManyInput>
    /**
     * Filter which IndustryChatbots to update
     */
    where?: IndustryChatbotWhereInput
    /**
     * Limit how many IndustryChatbots to update.
     */
    limit?: number
  }

  /**
   * IndustryChatbot upsert
   */
  export type IndustryChatbotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * The filter to search for the IndustryChatbot to update in case it exists.
     */
    where: IndustryChatbotWhereUniqueInput
    /**
     * In case the IndustryChatbot found by the `where` argument doesn't exist, create a new IndustryChatbot with this data.
     */
    create: XOR<IndustryChatbotCreateInput, IndustryChatbotUncheckedCreateInput>
    /**
     * In case the IndustryChatbot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryChatbotUpdateInput, IndustryChatbotUncheckedUpdateInput>
  }

  /**
   * IndustryChatbot delete
   */
  export type IndustryChatbotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
    /**
     * Filter which IndustryChatbot to delete.
     */
    where: IndustryChatbotWhereUniqueInput
  }

  /**
   * IndustryChatbot deleteMany
   */
  export type IndustryChatbotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndustryChatbots to delete
     */
    where?: IndustryChatbotWhereInput
    /**
     * Limit how many IndustryChatbots to delete.
     */
    limit?: number
  }

  /**
   * IndustryChatbot without action
   */
  export type IndustryChatbotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryChatbot
     */
    select?: IndustryChatbotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndustryChatbot
     */
    omit?: IndustryChatbotOmit<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    rating: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: string | null
    author: string | null
    role: string | null
    content: string | null
    rating: number | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: string | null
    author: string | null
    role: string | null
    content: string | null
    rating: number | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    author: number
    role: number
    content: number
    rating: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    rating?: true
  }

  export type TestimonialSumAggregateInputType = {
    rating?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    author?: true
    role?: true
    content?: true
    rating?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    author?: true
    role?: true
    content?: true
    rating?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    author?: true
    role?: true
    content?: true
    rating?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: string
    author: string
    role: string
    content: string
    rating: number
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    role?: boolean
    content?: boolean
    rating?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    role?: boolean
    content?: boolean
    rating?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author?: boolean
    role?: boolean
    content?: boolean
    rating?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testimonial"]>

  export type TestimonialSelectScalar = {
    id?: boolean
    author?: boolean
    role?: boolean
    content?: boolean
    rating?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author" | "role" | "content" | "rating" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["testimonial"]>

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author: string
      role: string
      content: string
      rating: number
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testimonials and returns the data saved in the database.
     * @param {TestimonialCreateManyAndReturnArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials and returns the data updated in the database.
     * @param {TestimonialUpdateManyAndReturnArgs} args - Arguments to update many Testimonials.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testimonials and only return the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Testimonial model
   */
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'String'>
    readonly author: FieldRef<"Testimonial", 'String'>
    readonly role: FieldRef<"Testimonial", 'String'>
    readonly content: FieldRef<"Testimonial", 'String'>
    readonly rating: FieldRef<"Testimonial", 'Int'>
    readonly published: FieldRef<"Testimonial", 'Boolean'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"Testimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial createManyAndReturn
   */
  export type TestimonialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial updateManyAndReturn
   */
  export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
  }


  /**
   * Model SolutionIndustry
   */

  export type AggregateSolutionIndustry = {
    _count: SolutionIndustryCountAggregateOutputType | null
    _avg: SolutionIndustryAvgAggregateOutputType | null
    _sum: SolutionIndustrySumAggregateOutputType | null
    _min: SolutionIndustryMinAggregateOutputType | null
    _max: SolutionIndustryMaxAggregateOutputType | null
  }

  export type SolutionIndustryAvgAggregateOutputType = {
    order: number | null
  }

  export type SolutionIndustrySumAggregateOutputType = {
    order: number | null
  }

  export type SolutionIndustryMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolutionIndustryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolutionIndustryCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolutionIndustryAvgAggregateInputType = {
    order?: true
  }

  export type SolutionIndustrySumAggregateInputType = {
    order?: true
  }

  export type SolutionIndustryMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolutionIndustryMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolutionIndustryCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolutionIndustryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolutionIndustry to aggregate.
     */
    where?: SolutionIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionIndustries to fetch.
     */
    orderBy?: SolutionIndustryOrderByWithRelationInput | SolutionIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolutionIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionIndustries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SolutionIndustries
    **/
    _count?: true | SolutionIndustryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolutionIndustryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolutionIndustrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolutionIndustryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolutionIndustryMaxAggregateInputType
  }

  export type GetSolutionIndustryAggregateType<T extends SolutionIndustryAggregateArgs> = {
        [P in keyof T & keyof AggregateSolutionIndustry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolutionIndustry[P]>
      : GetScalarType<T[P], AggregateSolutionIndustry[P]>
  }




  export type SolutionIndustryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolutionIndustryWhereInput
    orderBy?: SolutionIndustryOrderByWithAggregationInput | SolutionIndustryOrderByWithAggregationInput[]
    by: SolutionIndustryScalarFieldEnum[] | SolutionIndustryScalarFieldEnum
    having?: SolutionIndustryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolutionIndustryCountAggregateInputType | true
    _avg?: SolutionIndustryAvgAggregateInputType
    _sum?: SolutionIndustrySumAggregateInputType
    _min?: SolutionIndustryMinAggregateInputType
    _max?: SolutionIndustryMaxAggregateInputType
  }

  export type SolutionIndustryGroupByOutputType = {
    id: string
    title: string
    description: string
    icon: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SolutionIndustryCountAggregateOutputType | null
    _avg: SolutionIndustryAvgAggregateOutputType | null
    _sum: SolutionIndustrySumAggregateOutputType | null
    _min: SolutionIndustryMinAggregateOutputType | null
    _max: SolutionIndustryMaxAggregateOutputType | null
  }

  type GetSolutionIndustryGroupByPayload<T extends SolutionIndustryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolutionIndustryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolutionIndustryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolutionIndustryGroupByOutputType[P]>
            : GetScalarType<T[P], SolutionIndustryGroupByOutputType[P]>
        }
      >
    >


  export type SolutionIndustrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solutionIndustry"]>

  export type SolutionIndustrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solutionIndustry"]>

  export type SolutionIndustrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solutionIndustry"]>

  export type SolutionIndustrySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolutionIndustryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "icon" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["solutionIndustry"]>

  export type $SolutionIndustryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SolutionIndustry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      icon: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solutionIndustry"]>
    composites: {}
  }

  type SolutionIndustryGetPayload<S extends boolean | null | undefined | SolutionIndustryDefaultArgs> = $Result.GetResult<Prisma.$SolutionIndustryPayload, S>

  type SolutionIndustryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolutionIndustryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolutionIndustryCountAggregateInputType | true
    }

  export interface SolutionIndustryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SolutionIndustry'], meta: { name: 'SolutionIndustry' } }
    /**
     * Find zero or one SolutionIndustry that matches the filter.
     * @param {SolutionIndustryFindUniqueArgs} args - Arguments to find a SolutionIndustry
     * @example
     * // Get one SolutionIndustry
     * const solutionIndustry = await prisma.solutionIndustry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolutionIndustryFindUniqueArgs>(args: SelectSubset<T, SolutionIndustryFindUniqueArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SolutionIndustry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolutionIndustryFindUniqueOrThrowArgs} args - Arguments to find a SolutionIndustry
     * @example
     * // Get one SolutionIndustry
     * const solutionIndustry = await prisma.solutionIndustry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolutionIndustryFindUniqueOrThrowArgs>(args: SelectSubset<T, SolutionIndustryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolutionIndustry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryFindFirstArgs} args - Arguments to find a SolutionIndustry
     * @example
     * // Get one SolutionIndustry
     * const solutionIndustry = await prisma.solutionIndustry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolutionIndustryFindFirstArgs>(args?: SelectSubset<T, SolutionIndustryFindFirstArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SolutionIndustry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryFindFirstOrThrowArgs} args - Arguments to find a SolutionIndustry
     * @example
     * // Get one SolutionIndustry
     * const solutionIndustry = await prisma.solutionIndustry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolutionIndustryFindFirstOrThrowArgs>(args?: SelectSubset<T, SolutionIndustryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SolutionIndustries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SolutionIndustries
     * const solutionIndustries = await prisma.solutionIndustry.findMany()
     * 
     * // Get first 10 SolutionIndustries
     * const solutionIndustries = await prisma.solutionIndustry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solutionIndustryWithIdOnly = await prisma.solutionIndustry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolutionIndustryFindManyArgs>(args?: SelectSubset<T, SolutionIndustryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SolutionIndustry.
     * @param {SolutionIndustryCreateArgs} args - Arguments to create a SolutionIndustry.
     * @example
     * // Create one SolutionIndustry
     * const SolutionIndustry = await prisma.solutionIndustry.create({
     *   data: {
     *     // ... data to create a SolutionIndustry
     *   }
     * })
     * 
     */
    create<T extends SolutionIndustryCreateArgs>(args: SelectSubset<T, SolutionIndustryCreateArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SolutionIndustries.
     * @param {SolutionIndustryCreateManyArgs} args - Arguments to create many SolutionIndustries.
     * @example
     * // Create many SolutionIndustries
     * const solutionIndustry = await prisma.solutionIndustry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolutionIndustryCreateManyArgs>(args?: SelectSubset<T, SolutionIndustryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SolutionIndustries and returns the data saved in the database.
     * @param {SolutionIndustryCreateManyAndReturnArgs} args - Arguments to create many SolutionIndustries.
     * @example
     * // Create many SolutionIndustries
     * const solutionIndustry = await prisma.solutionIndustry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SolutionIndustries and only return the `id`
     * const solutionIndustryWithIdOnly = await prisma.solutionIndustry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolutionIndustryCreateManyAndReturnArgs>(args?: SelectSubset<T, SolutionIndustryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SolutionIndustry.
     * @param {SolutionIndustryDeleteArgs} args - Arguments to delete one SolutionIndustry.
     * @example
     * // Delete one SolutionIndustry
     * const SolutionIndustry = await prisma.solutionIndustry.delete({
     *   where: {
     *     // ... filter to delete one SolutionIndustry
     *   }
     * })
     * 
     */
    delete<T extends SolutionIndustryDeleteArgs>(args: SelectSubset<T, SolutionIndustryDeleteArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SolutionIndustry.
     * @param {SolutionIndustryUpdateArgs} args - Arguments to update one SolutionIndustry.
     * @example
     * // Update one SolutionIndustry
     * const solutionIndustry = await prisma.solutionIndustry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolutionIndustryUpdateArgs>(args: SelectSubset<T, SolutionIndustryUpdateArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SolutionIndustries.
     * @param {SolutionIndustryDeleteManyArgs} args - Arguments to filter SolutionIndustries to delete.
     * @example
     * // Delete a few SolutionIndustries
     * const { count } = await prisma.solutionIndustry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolutionIndustryDeleteManyArgs>(args?: SelectSubset<T, SolutionIndustryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolutionIndustries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SolutionIndustries
     * const solutionIndustry = await prisma.solutionIndustry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolutionIndustryUpdateManyArgs>(args: SelectSubset<T, SolutionIndustryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SolutionIndustries and returns the data updated in the database.
     * @param {SolutionIndustryUpdateManyAndReturnArgs} args - Arguments to update many SolutionIndustries.
     * @example
     * // Update many SolutionIndustries
     * const solutionIndustry = await prisma.solutionIndustry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SolutionIndustries and only return the `id`
     * const solutionIndustryWithIdOnly = await prisma.solutionIndustry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SolutionIndustryUpdateManyAndReturnArgs>(args: SelectSubset<T, SolutionIndustryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SolutionIndustry.
     * @param {SolutionIndustryUpsertArgs} args - Arguments to update or create a SolutionIndustry.
     * @example
     * // Update or create a SolutionIndustry
     * const solutionIndustry = await prisma.solutionIndustry.upsert({
     *   create: {
     *     // ... data to create a SolutionIndustry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SolutionIndustry we want to update
     *   }
     * })
     */
    upsert<T extends SolutionIndustryUpsertArgs>(args: SelectSubset<T, SolutionIndustryUpsertArgs<ExtArgs>>): Prisma__SolutionIndustryClient<$Result.GetResult<Prisma.$SolutionIndustryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SolutionIndustries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryCountArgs} args - Arguments to filter SolutionIndustries to count.
     * @example
     * // Count the number of SolutionIndustries
     * const count = await prisma.solutionIndustry.count({
     *   where: {
     *     // ... the filter for the SolutionIndustries we want to count
     *   }
     * })
    **/
    count<T extends SolutionIndustryCountArgs>(
      args?: Subset<T, SolutionIndustryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolutionIndustryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SolutionIndustry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SolutionIndustryAggregateArgs>(args: Subset<T, SolutionIndustryAggregateArgs>): Prisma.PrismaPromise<GetSolutionIndustryAggregateType<T>>

    /**
     * Group by SolutionIndustry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolutionIndustryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SolutionIndustryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolutionIndustryGroupByArgs['orderBy'] }
        : { orderBy?: SolutionIndustryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SolutionIndustryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolutionIndustryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SolutionIndustry model
   */
  readonly fields: SolutionIndustryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SolutionIndustry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolutionIndustryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SolutionIndustry model
   */
  interface SolutionIndustryFieldRefs {
    readonly id: FieldRef<"SolutionIndustry", 'String'>
    readonly title: FieldRef<"SolutionIndustry", 'String'>
    readonly description: FieldRef<"SolutionIndustry", 'String'>
    readonly icon: FieldRef<"SolutionIndustry", 'String'>
    readonly order: FieldRef<"SolutionIndustry", 'Int'>
    readonly createdAt: FieldRef<"SolutionIndustry", 'DateTime'>
    readonly updatedAt: FieldRef<"SolutionIndustry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SolutionIndustry findUnique
   */
  export type SolutionIndustryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * Filter, which SolutionIndustry to fetch.
     */
    where: SolutionIndustryWhereUniqueInput
  }

  /**
   * SolutionIndustry findUniqueOrThrow
   */
  export type SolutionIndustryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * Filter, which SolutionIndustry to fetch.
     */
    where: SolutionIndustryWhereUniqueInput
  }

  /**
   * SolutionIndustry findFirst
   */
  export type SolutionIndustryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * Filter, which SolutionIndustry to fetch.
     */
    where?: SolutionIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionIndustries to fetch.
     */
    orderBy?: SolutionIndustryOrderByWithRelationInput | SolutionIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolutionIndustries.
     */
    cursor?: SolutionIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionIndustries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionIndustries.
     */
    distinct?: SolutionIndustryScalarFieldEnum | SolutionIndustryScalarFieldEnum[]
  }

  /**
   * SolutionIndustry findFirstOrThrow
   */
  export type SolutionIndustryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * Filter, which SolutionIndustry to fetch.
     */
    where?: SolutionIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionIndustries to fetch.
     */
    orderBy?: SolutionIndustryOrderByWithRelationInput | SolutionIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SolutionIndustries.
     */
    cursor?: SolutionIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionIndustries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SolutionIndustries.
     */
    distinct?: SolutionIndustryScalarFieldEnum | SolutionIndustryScalarFieldEnum[]
  }

  /**
   * SolutionIndustry findMany
   */
  export type SolutionIndustryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * Filter, which SolutionIndustries to fetch.
     */
    where?: SolutionIndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SolutionIndustries to fetch.
     */
    orderBy?: SolutionIndustryOrderByWithRelationInput | SolutionIndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SolutionIndustries.
     */
    cursor?: SolutionIndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SolutionIndustries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SolutionIndustries.
     */
    skip?: number
    distinct?: SolutionIndustryScalarFieldEnum | SolutionIndustryScalarFieldEnum[]
  }

  /**
   * SolutionIndustry create
   */
  export type SolutionIndustryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * The data needed to create a SolutionIndustry.
     */
    data: XOR<SolutionIndustryCreateInput, SolutionIndustryUncheckedCreateInput>
  }

  /**
   * SolutionIndustry createMany
   */
  export type SolutionIndustryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SolutionIndustries.
     */
    data: SolutionIndustryCreateManyInput | SolutionIndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolutionIndustry createManyAndReturn
   */
  export type SolutionIndustryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * The data used to create many SolutionIndustries.
     */
    data: SolutionIndustryCreateManyInput | SolutionIndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SolutionIndustry update
   */
  export type SolutionIndustryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * The data needed to update a SolutionIndustry.
     */
    data: XOR<SolutionIndustryUpdateInput, SolutionIndustryUncheckedUpdateInput>
    /**
     * Choose, which SolutionIndustry to update.
     */
    where: SolutionIndustryWhereUniqueInput
  }

  /**
   * SolutionIndustry updateMany
   */
  export type SolutionIndustryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SolutionIndustries.
     */
    data: XOR<SolutionIndustryUpdateManyMutationInput, SolutionIndustryUncheckedUpdateManyInput>
    /**
     * Filter which SolutionIndustries to update
     */
    where?: SolutionIndustryWhereInput
    /**
     * Limit how many SolutionIndustries to update.
     */
    limit?: number
  }

  /**
   * SolutionIndustry updateManyAndReturn
   */
  export type SolutionIndustryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * The data used to update SolutionIndustries.
     */
    data: XOR<SolutionIndustryUpdateManyMutationInput, SolutionIndustryUncheckedUpdateManyInput>
    /**
     * Filter which SolutionIndustries to update
     */
    where?: SolutionIndustryWhereInput
    /**
     * Limit how many SolutionIndustries to update.
     */
    limit?: number
  }

  /**
   * SolutionIndustry upsert
   */
  export type SolutionIndustryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * The filter to search for the SolutionIndustry to update in case it exists.
     */
    where: SolutionIndustryWhereUniqueInput
    /**
     * In case the SolutionIndustry found by the `where` argument doesn't exist, create a new SolutionIndustry with this data.
     */
    create: XOR<SolutionIndustryCreateInput, SolutionIndustryUncheckedCreateInput>
    /**
     * In case the SolutionIndustry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolutionIndustryUpdateInput, SolutionIndustryUncheckedUpdateInput>
  }

  /**
   * SolutionIndustry delete
   */
  export type SolutionIndustryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
    /**
     * Filter which SolutionIndustry to delete.
     */
    where: SolutionIndustryWhereUniqueInput
  }

  /**
   * SolutionIndustry deleteMany
   */
  export type SolutionIndustryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SolutionIndustries to delete
     */
    where?: SolutionIndustryWhereInput
    /**
     * Limit how many SolutionIndustries to delete.
     */
    limit?: number
  }

  /**
   * SolutionIndustry without action
   */
  export type SolutionIndustryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolutionIndustry
     */
    select?: SolutionIndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SolutionIndustry
     */
    omit?: SolutionIndustryOmit<ExtArgs> | null
  }


  /**
   * Model PricingPlan
   */

  export type AggregatePricingPlan = {
    _count: PricingPlanCountAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  export type PricingPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: string | null
    description: string | null
    recommended: boolean | null
    billingCycle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: string | null
    description: string | null
    recommended: boolean | null
    billingCycle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PricingPlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    features: number
    recommended: number
    billingCycle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PricingPlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    recommended?: true
    billingCycle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    recommended?: true
    billingCycle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PricingPlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    features?: true
    recommended?: true
    billingCycle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PricingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlan to aggregate.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingPlans
    **/
    _count?: true | PricingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingPlanMaxAggregateInputType
  }

  export type GetPricingPlanAggregateType<T extends PricingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingPlan[P]>
      : GetScalarType<T[P], AggregatePricingPlan[P]>
  }




  export type PricingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPlanWhereInput
    orderBy?: PricingPlanOrderByWithAggregationInput | PricingPlanOrderByWithAggregationInput[]
    by: PricingPlanScalarFieldEnum[] | PricingPlanScalarFieldEnum
    having?: PricingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingPlanCountAggregateInputType | true
    _min?: PricingPlanMinAggregateInputType
    _max?: PricingPlanMaxAggregateInputType
  }

  export type PricingPlanGroupByOutputType = {
    id: string
    name: string
    price: string
    description: string
    features: JsonValue
    recommended: boolean
    billingCycle: string
    createdAt: Date
    updatedAt: Date
    _count: PricingPlanCountAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  type GetPricingPlanGroupByPayload<T extends PricingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
        }
      >
    >


  export type PricingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    recommended?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    recommended?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    recommended?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    features?: boolean
    recommended?: boolean
    billingCycle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PricingPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "features" | "recommended" | "billingCycle" | "createdAt" | "updatedAt", ExtArgs["result"]["pricingPlan"]>

  export type $PricingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingPlan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: string
      description: string
      features: Prisma.JsonValue
      recommended: boolean
      billingCycle: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pricingPlan"]>
    composites: {}
  }

  type PricingPlanGetPayload<S extends boolean | null | undefined | PricingPlanDefaultArgs> = $Result.GetResult<Prisma.$PricingPlanPayload, S>

  type PricingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingPlanCountAggregateInputType | true
    }

  export interface PricingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingPlan'], meta: { name: 'PricingPlan' } }
    /**
     * Find zero or one PricingPlan that matches the filter.
     * @param {PricingPlanFindUniqueArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingPlanFindUniqueArgs>(args: SelectSubset<T, PricingPlanFindUniqueArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingPlanFindUniqueOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingPlanFindFirstArgs>(args?: SelectSubset<T, PricingPlanFindFirstArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany()
     * 
     * // Get first 10 PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingPlanFindManyArgs>(args?: SelectSubset<T, PricingPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingPlan.
     * @param {PricingPlanCreateArgs} args - Arguments to create a PricingPlan.
     * @example
     * // Create one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.create({
     *   data: {
     *     // ... data to create a PricingPlan
     *   }
     * })
     * 
     */
    create<T extends PricingPlanCreateArgs>(args: SelectSubset<T, PricingPlanCreateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingPlans.
     * @param {PricingPlanCreateManyArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingPlanCreateManyArgs>(args?: SelectSubset<T, PricingPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingPlans and returns the data saved in the database.
     * @param {PricingPlanCreateManyAndReturnArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingPlans and only return the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingPlan.
     * @param {PricingPlanDeleteArgs} args - Arguments to delete one PricingPlan.
     * @example
     * // Delete one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.delete({
     *   where: {
     *     // ... filter to delete one PricingPlan
     *   }
     * })
     * 
     */
    delete<T extends PricingPlanDeleteArgs>(args: SelectSubset<T, PricingPlanDeleteArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingPlan.
     * @param {PricingPlanUpdateArgs} args - Arguments to update one PricingPlan.
     * @example
     * // Update one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingPlanUpdateArgs>(args: SelectSubset<T, PricingPlanUpdateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingPlans.
     * @param {PricingPlanDeleteManyArgs} args - Arguments to filter PricingPlans to delete.
     * @example
     * // Delete a few PricingPlans
     * const { count } = await prisma.pricingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingPlanDeleteManyArgs>(args?: SelectSubset<T, PricingPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingPlanUpdateManyArgs>(args: SelectSubset<T, PricingPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPlans and returns the data updated in the database.
     * @param {PricingPlanUpdateManyAndReturnArgs} args - Arguments to update many PricingPlans.
     * @example
     * // Update many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingPlans and only return the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PricingPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingPlan.
     * @param {PricingPlanUpsertArgs} args - Arguments to update or create a PricingPlan.
     * @example
     * // Update or create a PricingPlan
     * const pricingPlan = await prisma.pricingPlan.upsert({
     *   create: {
     *     // ... data to create a PricingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingPlan we want to update
     *   }
     * })
     */
    upsert<T extends PricingPlanUpsertArgs>(args: SelectSubset<T, PricingPlanUpsertArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanCountArgs} args - Arguments to filter PricingPlans to count.
     * @example
     * // Count the number of PricingPlans
     * const count = await prisma.pricingPlan.count({
     *   where: {
     *     // ... the filter for the PricingPlans we want to count
     *   }
     * })
    **/
    count<T extends PricingPlanCountArgs>(
      args?: Subset<T, PricingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PricingPlanAggregateArgs>(args: Subset<T, PricingPlanAggregateArgs>): Prisma.PrismaPromise<GetPricingPlanAggregateType<T>>

    /**
     * Group by PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PricingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingPlanGroupByArgs['orderBy'] }
        : { orderBy?: PricingPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PricingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingPlan model
   */
  readonly fields: PricingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PricingPlan model
   */
  interface PricingPlanFieldRefs {
    readonly id: FieldRef<"PricingPlan", 'String'>
    readonly name: FieldRef<"PricingPlan", 'String'>
    readonly price: FieldRef<"PricingPlan", 'String'>
    readonly description: FieldRef<"PricingPlan", 'String'>
    readonly features: FieldRef<"PricingPlan", 'Json'>
    readonly recommended: FieldRef<"PricingPlan", 'Boolean'>
    readonly billingCycle: FieldRef<"PricingPlan", 'String'>
    readonly createdAt: FieldRef<"PricingPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"PricingPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingPlan findUnique
   */
  export type PricingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findUniqueOrThrow
   */
  export type PricingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findFirst
   */
  export type PricingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findFirstOrThrow
   */
  export type PricingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findMany
   */
  export type PricingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter, which PricingPlans to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan create
   */
  export type PricingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data needed to create a PricingPlan.
     */
    data: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
  }

  /**
   * PricingPlan createMany
   */
  export type PricingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPlan createManyAndReturn
   */
  export type PricingPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPlan update
   */
  export type PricingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data needed to update a PricingPlan.
     */
    data: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
    /**
     * Choose, which PricingPlan to update.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan updateMany
   */
  export type PricingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingPlans.
     */
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyInput>
    /**
     * Filter which PricingPlans to update
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to update.
     */
    limit?: number
  }

  /**
   * PricingPlan updateManyAndReturn
   */
  export type PricingPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data used to update PricingPlans.
     */
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyInput>
    /**
     * Filter which PricingPlans to update
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to update.
     */
    limit?: number
  }

  /**
   * PricingPlan upsert
   */
  export type PricingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The filter to search for the PricingPlan to update in case it exists.
     */
    where: PricingPlanWhereUniqueInput
    /**
     * In case the PricingPlan found by the `where` argument doesn't exist, create a new PricingPlan with this data.
     */
    create: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
    /**
     * In case the PricingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
  }

  /**
   * PricingPlan delete
   */
  export type PricingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Filter which PricingPlan to delete.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan deleteMany
   */
  export type PricingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlans to delete
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to delete.
     */
    limit?: number
  }

  /**
   * PricingPlan without action
   */
  export type PricingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    category: 'category',
    author: 'author',
    imageUrl: 'imageUrl',
    tags: 'tags',
    readTime: 'readTime',
    featured: 'featured',
    published: 'published',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const CaseStudyScalarFieldEnum: {
    id: 'id',
    company: 'company',
    industry: 'industry',
    slug: 'slug',
    goal: 'goal',
    metric: 'metric',
    metricLabel: 'metricLabel',
    title: 'title',
    excerpt: 'excerpt',
    content: 'content',
    logoUrl: 'logoUrl',
    bannerUrl: 'bannerUrl',
    published: 'published',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaseStudyScalarFieldEnum = (typeof CaseStudyScalarFieldEnum)[keyof typeof CaseStudyScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    department: 'department',
    location: 'location',
    type: 'type',
    description: 'description',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const ContactMessageScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    company: 'company',
    phone: 'phone',
    industry: 'industry',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactMessageScalarFieldEnum = (typeof ContactMessageScalarFieldEnum)[keyof typeof ContactMessageScalarFieldEnum]


  export const NewsletterSubscriberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type NewsletterSubscriberScalarFieldEnum = (typeof NewsletterSubscriberScalarFieldEnum)[keyof typeof NewsletterSubscriberScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    source: 'source',
    name: 'name',
    phone: 'phone',
    email: 'email',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const HomeStatScalarFieldEnum: {
    id: 'id',
    value: 'value',
    label: 'label',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HomeStatScalarFieldEnum = (typeof HomeStatScalarFieldEnum)[keyof typeof HomeStatScalarFieldEnum]


  export const IndustryChatbotScalarFieldEnum: {
    id: 'id',
    industry: 'industry',
    brand: 'brand',
    flowSteps: 'flowSteps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndustryChatbotScalarFieldEnum = (typeof IndustryChatbotScalarFieldEnum)[keyof typeof IndustryChatbotScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    author: 'author',
    role: 'role',
    content: 'content',
    rating: 'rating',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const SolutionIndustryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolutionIndustryScalarFieldEnum = (typeof SolutionIndustryScalarFieldEnum)[keyof typeof SolutionIndustryScalarFieldEnum]


  export const PricingPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    features: 'features',
    recommended: 'recommended',
    billingCycle: 'billingCycle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PricingPlanScalarFieldEnum = (typeof PricingPlanScalarFieldEnum)[keyof typeof PricingPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    excerpt?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    tags?: JsonNullableFilter<"Blog">
    readTime?: IntNullableFilter<"Blog"> | number | null
    featured?: BoolFilter<"Blog"> | boolean
    published?: BoolFilter<"Blog"> | boolean
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    metaKeywords?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    category?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    readTime?: SortOrderInput | SortOrder
    featured?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    excerpt?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    author?: StringFilter<"Blog"> | string
    imageUrl?: StringNullableFilter<"Blog"> | string | null
    tags?: JsonNullableFilter<"Blog">
    readTime?: IntNullableFilter<"Blog"> | number | null
    featured?: BoolFilter<"Blog"> | boolean
    published?: BoolFilter<"Blog"> | boolean
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    metaKeywords?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    category?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    readTime?: SortOrderInput | SortOrder
    featured?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    excerpt?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    category?: StringWithAggregatesFilter<"Blog"> | string
    author?: StringWithAggregatesFilter<"Blog"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    tags?: JsonNullableWithAggregatesFilter<"Blog">
    readTime?: IntNullableWithAggregatesFilter<"Blog"> | number | null
    featured?: BoolWithAggregatesFilter<"Blog"> | boolean
    published?: BoolWithAggregatesFilter<"Blog"> | boolean
    metaTitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaKeywords?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type CaseStudyWhereInput = {
    AND?: CaseStudyWhereInput | CaseStudyWhereInput[]
    OR?: CaseStudyWhereInput[]
    NOT?: CaseStudyWhereInput | CaseStudyWhereInput[]
    id?: StringFilter<"CaseStudy"> | string
    company?: StringFilter<"CaseStudy"> | string
    industry?: StringFilter<"CaseStudy"> | string
    slug?: StringFilter<"CaseStudy"> | string
    goal?: StringFilter<"CaseStudy"> | string
    metric?: StringFilter<"CaseStudy"> | string
    metricLabel?: StringFilter<"CaseStudy"> | string
    title?: StringFilter<"CaseStudy"> | string
    excerpt?: StringFilter<"CaseStudy"> | string
    content?: StringFilter<"CaseStudy"> | string
    logoUrl?: StringNullableFilter<"CaseStudy"> | string | null
    bannerUrl?: StringNullableFilter<"CaseStudy"> | string | null
    published?: BoolFilter<"CaseStudy"> | boolean
    metaTitle?: StringNullableFilter<"CaseStudy"> | string | null
    metaDescription?: StringNullableFilter<"CaseStudy"> | string | null
    metaKeywords?: StringNullableFilter<"CaseStudy"> | string | null
    createdAt?: DateTimeFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeFilter<"CaseStudy"> | Date | string
  }

  export type CaseStudyOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    slug?: SortOrder
    goal?: SortOrder
    metric?: SortOrder
    metricLabel?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    published?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseStudyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CaseStudyWhereInput | CaseStudyWhereInput[]
    OR?: CaseStudyWhereInput[]
    NOT?: CaseStudyWhereInput | CaseStudyWhereInput[]
    company?: StringFilter<"CaseStudy"> | string
    industry?: StringFilter<"CaseStudy"> | string
    goal?: StringFilter<"CaseStudy"> | string
    metric?: StringFilter<"CaseStudy"> | string
    metricLabel?: StringFilter<"CaseStudy"> | string
    title?: StringFilter<"CaseStudy"> | string
    excerpt?: StringFilter<"CaseStudy"> | string
    content?: StringFilter<"CaseStudy"> | string
    logoUrl?: StringNullableFilter<"CaseStudy"> | string | null
    bannerUrl?: StringNullableFilter<"CaseStudy"> | string | null
    published?: BoolFilter<"CaseStudy"> | boolean
    metaTitle?: StringNullableFilter<"CaseStudy"> | string | null
    metaDescription?: StringNullableFilter<"CaseStudy"> | string | null
    metaKeywords?: StringNullableFilter<"CaseStudy"> | string | null
    createdAt?: DateTimeFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeFilter<"CaseStudy"> | Date | string
  }, "id" | "slug">

  export type CaseStudyOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    slug?: SortOrder
    goal?: SortOrder
    metric?: SortOrder
    metricLabel?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    published?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CaseStudyCountOrderByAggregateInput
    _max?: CaseStudyMaxOrderByAggregateInput
    _min?: CaseStudyMinOrderByAggregateInput
  }

  export type CaseStudyScalarWhereWithAggregatesInput = {
    AND?: CaseStudyScalarWhereWithAggregatesInput | CaseStudyScalarWhereWithAggregatesInput[]
    OR?: CaseStudyScalarWhereWithAggregatesInput[]
    NOT?: CaseStudyScalarWhereWithAggregatesInput | CaseStudyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaseStudy"> | string
    company?: StringWithAggregatesFilter<"CaseStudy"> | string
    industry?: StringWithAggregatesFilter<"CaseStudy"> | string
    slug?: StringWithAggregatesFilter<"CaseStudy"> | string
    goal?: StringWithAggregatesFilter<"CaseStudy"> | string
    metric?: StringWithAggregatesFilter<"CaseStudy"> | string
    metricLabel?: StringWithAggregatesFilter<"CaseStudy"> | string
    title?: StringWithAggregatesFilter<"CaseStudy"> | string
    excerpt?: StringWithAggregatesFilter<"CaseStudy"> | string
    content?: StringWithAggregatesFilter<"CaseStudy"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"CaseStudy"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"CaseStudy"> | string | null
    published?: BoolWithAggregatesFilter<"CaseStudy"> | boolean
    metaTitle?: StringNullableWithAggregatesFilter<"CaseStudy"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"CaseStudy"> | string | null
    metaKeywords?: StringNullableWithAggregatesFilter<"CaseStudy"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CaseStudy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CaseStudy"> | Date | string
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: StringFilter<"Career"> | string
    title?: StringFilter<"Career"> | string
    department?: StringFilter<"Career"> | string
    location?: StringFilter<"Career"> | string
    type?: StringFilter<"Career"> | string
    description?: StringFilter<"Career"> | string
    active?: BoolFilter<"Career"> | boolean
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    type?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    title?: StringFilter<"Career"> | string
    department?: StringFilter<"Career"> | string
    location?: StringFilter<"Career"> | string
    type?: StringFilter<"Career"> | string
    description?: StringFilter<"Career"> | string
    active?: BoolFilter<"Career"> | boolean
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
  }, "id">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    type?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareerCountOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Career"> | string
    title?: StringWithAggregatesFilter<"Career"> | string
    department?: StringWithAggregatesFilter<"Career"> | string
    location?: StringWithAggregatesFilter<"Career"> | string
    type?: StringWithAggregatesFilter<"Career"> | string
    description?: StringWithAggregatesFilter<"Career"> | string
    active?: BoolWithAggregatesFilter<"Career"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Career"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Career"> | Date | string
  }

  export type ContactMessageWhereInput = {
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    id?: StringFilter<"ContactMessage"> | string
    firstName?: StringFilter<"ContactMessage"> | string
    lastName?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    company?: StringNullableFilter<"ContactMessage"> | string | null
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    industry?: StringNullableFilter<"ContactMessage"> | string | null
    message?: StringFilter<"ContactMessage"> | string
    status?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }

  export type ContactMessageOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactMessageWhereInput | ContactMessageWhereInput[]
    OR?: ContactMessageWhereInput[]
    NOT?: ContactMessageWhereInput | ContactMessageWhereInput[]
    firstName?: StringFilter<"ContactMessage"> | string
    lastName?: StringFilter<"ContactMessage"> | string
    email?: StringFilter<"ContactMessage"> | string
    company?: StringNullableFilter<"ContactMessage"> | string | null
    phone?: StringNullableFilter<"ContactMessage"> | string | null
    industry?: StringNullableFilter<"ContactMessage"> | string | null
    message?: StringFilter<"ContactMessage"> | string
    status?: StringFilter<"ContactMessage"> | string
    createdAt?: DateTimeFilter<"ContactMessage"> | Date | string
  }, "id">

  export type ContactMessageOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactMessageCountOrderByAggregateInput
    _max?: ContactMessageMaxOrderByAggregateInput
    _min?: ContactMessageMinOrderByAggregateInput
  }

  export type ContactMessageScalarWhereWithAggregatesInput = {
    AND?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    OR?: ContactMessageScalarWhereWithAggregatesInput[]
    NOT?: ContactMessageScalarWhereWithAggregatesInput | ContactMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactMessage"> | string
    firstName?: StringWithAggregatesFilter<"ContactMessage"> | string
    lastName?: StringWithAggregatesFilter<"ContactMessage"> | string
    email?: StringWithAggregatesFilter<"ContactMessage"> | string
    company?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    phone?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    industry?: StringNullableWithAggregatesFilter<"ContactMessage"> | string | null
    message?: StringWithAggregatesFilter<"ContactMessage"> | string
    status?: StringWithAggregatesFilter<"ContactMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactMessage"> | Date | string
  }

  export type NewsletterSubscriberWhereInput = {
    AND?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    OR?: NewsletterSubscriberWhereInput[]
    NOT?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    id?: StringFilter<"NewsletterSubscriber"> | string
    email?: StringFilter<"NewsletterSubscriber"> | string
    status?: StringFilter<"NewsletterSubscriber"> | string
    createdAt?: DateTimeFilter<"NewsletterSubscriber"> | Date | string
  }

  export type NewsletterSubscriberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    OR?: NewsletterSubscriberWhereInput[]
    NOT?: NewsletterSubscriberWhereInput | NewsletterSubscriberWhereInput[]
    status?: StringFilter<"NewsletterSubscriber"> | string
    createdAt?: DateTimeFilter<"NewsletterSubscriber"> | Date | string
  }, "id" | "email">

  export type NewsletterSubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: NewsletterSubscriberCountOrderByAggregateInput
    _max?: NewsletterSubscriberMaxOrderByAggregateInput
    _min?: NewsletterSubscriberMinOrderByAggregateInput
  }

  export type NewsletterSubscriberScalarWhereWithAggregatesInput = {
    AND?: NewsletterSubscriberScalarWhereWithAggregatesInput | NewsletterSubscriberScalarWhereWithAggregatesInput[]
    OR?: NewsletterSubscriberScalarWhereWithAggregatesInput[]
    NOT?: NewsletterSubscriberScalarWhereWithAggregatesInput | NewsletterSubscriberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterSubscriber"> | string
    email?: StringWithAggregatesFilter<"NewsletterSubscriber"> | string
    status?: StringWithAggregatesFilter<"NewsletterSubscriber"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsletterSubscriber"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    source?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    metadata?: JsonNullableFilter<"Lead">
    createdAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    source?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    phone?: StringNullableFilter<"Lead"> | string | null
    email?: StringNullableFilter<"Lead"> | string | null
    metadata?: JsonNullableFilter<"Lead">
    createdAt?: DateTimeFilter<"Lead"> | Date | string
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    source?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Lead">
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type HomeStatWhereInput = {
    AND?: HomeStatWhereInput | HomeStatWhereInput[]
    OR?: HomeStatWhereInput[]
    NOT?: HomeStatWhereInput | HomeStatWhereInput[]
    id?: StringFilter<"HomeStat"> | string
    value?: StringFilter<"HomeStat"> | string
    label?: StringFilter<"HomeStat"> | string
    order?: IntFilter<"HomeStat"> | number
    createdAt?: DateTimeFilter<"HomeStat"> | Date | string
    updatedAt?: DateTimeFilter<"HomeStat"> | Date | string
  }

  export type HomeStatOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomeStatWhereInput | HomeStatWhereInput[]
    OR?: HomeStatWhereInput[]
    NOT?: HomeStatWhereInput | HomeStatWhereInput[]
    value?: StringFilter<"HomeStat"> | string
    label?: StringFilter<"HomeStat"> | string
    order?: IntFilter<"HomeStat"> | number
    createdAt?: DateTimeFilter<"HomeStat"> | Date | string
    updatedAt?: DateTimeFilter<"HomeStat"> | Date | string
  }, "id">

  export type HomeStatOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HomeStatCountOrderByAggregateInput
    _avg?: HomeStatAvgOrderByAggregateInput
    _max?: HomeStatMaxOrderByAggregateInput
    _min?: HomeStatMinOrderByAggregateInput
    _sum?: HomeStatSumOrderByAggregateInput
  }

  export type HomeStatScalarWhereWithAggregatesInput = {
    AND?: HomeStatScalarWhereWithAggregatesInput | HomeStatScalarWhereWithAggregatesInput[]
    OR?: HomeStatScalarWhereWithAggregatesInput[]
    NOT?: HomeStatScalarWhereWithAggregatesInput | HomeStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HomeStat"> | string
    value?: StringWithAggregatesFilter<"HomeStat"> | string
    label?: StringWithAggregatesFilter<"HomeStat"> | string
    order?: IntWithAggregatesFilter<"HomeStat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"HomeStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HomeStat"> | Date | string
  }

  export type IndustryChatbotWhereInput = {
    AND?: IndustryChatbotWhereInput | IndustryChatbotWhereInput[]
    OR?: IndustryChatbotWhereInput[]
    NOT?: IndustryChatbotWhereInput | IndustryChatbotWhereInput[]
    id?: StringFilter<"IndustryChatbot"> | string
    industry?: StringFilter<"IndustryChatbot"> | string
    brand?: StringFilter<"IndustryChatbot"> | string
    flowSteps?: JsonFilter<"IndustryChatbot">
    createdAt?: DateTimeFilter<"IndustryChatbot"> | Date | string
    updatedAt?: DateTimeFilter<"IndustryChatbot"> | Date | string
  }

  export type IndustryChatbotOrderByWithRelationInput = {
    id?: SortOrder
    industry?: SortOrder
    brand?: SortOrder
    flowSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryChatbotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    industry?: string
    AND?: IndustryChatbotWhereInput | IndustryChatbotWhereInput[]
    OR?: IndustryChatbotWhereInput[]
    NOT?: IndustryChatbotWhereInput | IndustryChatbotWhereInput[]
    brand?: StringFilter<"IndustryChatbot"> | string
    flowSteps?: JsonFilter<"IndustryChatbot">
    createdAt?: DateTimeFilter<"IndustryChatbot"> | Date | string
    updatedAt?: DateTimeFilter<"IndustryChatbot"> | Date | string
  }, "id" | "industry">

  export type IndustryChatbotOrderByWithAggregationInput = {
    id?: SortOrder
    industry?: SortOrder
    brand?: SortOrder
    flowSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndustryChatbotCountOrderByAggregateInput
    _max?: IndustryChatbotMaxOrderByAggregateInput
    _min?: IndustryChatbotMinOrderByAggregateInput
  }

  export type IndustryChatbotScalarWhereWithAggregatesInput = {
    AND?: IndustryChatbotScalarWhereWithAggregatesInput | IndustryChatbotScalarWhereWithAggregatesInput[]
    OR?: IndustryChatbotScalarWhereWithAggregatesInput[]
    NOT?: IndustryChatbotScalarWhereWithAggregatesInput | IndustryChatbotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndustryChatbot"> | string
    industry?: StringWithAggregatesFilter<"IndustryChatbot"> | string
    brand?: StringWithAggregatesFilter<"IndustryChatbot"> | string
    flowSteps?: JsonWithAggregatesFilter<"IndustryChatbot">
    createdAt?: DateTimeWithAggregatesFilter<"IndustryChatbot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndustryChatbot"> | Date | string
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: StringFilter<"Testimonial"> | string
    author?: StringFilter<"Testimonial"> | string
    role?: StringFilter<"Testimonial"> | string
    content?: StringFilter<"Testimonial"> | string
    rating?: IntFilter<"Testimonial"> | number
    published?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonial"> | Date | string
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    author?: StringFilter<"Testimonial"> | string
    role?: StringFilter<"Testimonial"> | string
    content?: StringFilter<"Testimonial"> | string
    rating?: IntFilter<"Testimonial"> | number
    published?: BoolFilter<"Testimonial"> | boolean
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeFilter<"Testimonial"> | Date | string
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Testimonial"> | string
    author?: StringWithAggregatesFilter<"Testimonial"> | string
    role?: StringWithAggregatesFilter<"Testimonial"> | string
    content?: StringWithAggregatesFilter<"Testimonial"> | string
    rating?: IntWithAggregatesFilter<"Testimonial"> | number
    published?: BoolWithAggregatesFilter<"Testimonial"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
  }

  export type SolutionIndustryWhereInput = {
    AND?: SolutionIndustryWhereInput | SolutionIndustryWhereInput[]
    OR?: SolutionIndustryWhereInput[]
    NOT?: SolutionIndustryWhereInput | SolutionIndustryWhereInput[]
    id?: StringFilter<"SolutionIndustry"> | string
    title?: StringFilter<"SolutionIndustry"> | string
    description?: StringFilter<"SolutionIndustry"> | string
    icon?: StringFilter<"SolutionIndustry"> | string
    order?: IntFilter<"SolutionIndustry"> | number
    createdAt?: DateTimeFilter<"SolutionIndustry"> | Date | string
    updatedAt?: DateTimeFilter<"SolutionIndustry"> | Date | string
  }

  export type SolutionIndustryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionIndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolutionIndustryWhereInput | SolutionIndustryWhereInput[]
    OR?: SolutionIndustryWhereInput[]
    NOT?: SolutionIndustryWhereInput | SolutionIndustryWhereInput[]
    title?: StringFilter<"SolutionIndustry"> | string
    description?: StringFilter<"SolutionIndustry"> | string
    icon?: StringFilter<"SolutionIndustry"> | string
    order?: IntFilter<"SolutionIndustry"> | number
    createdAt?: DateTimeFilter<"SolutionIndustry"> | Date | string
    updatedAt?: DateTimeFilter<"SolutionIndustry"> | Date | string
  }, "id">

  export type SolutionIndustryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolutionIndustryCountOrderByAggregateInput
    _avg?: SolutionIndustryAvgOrderByAggregateInput
    _max?: SolutionIndustryMaxOrderByAggregateInput
    _min?: SolutionIndustryMinOrderByAggregateInput
    _sum?: SolutionIndustrySumOrderByAggregateInput
  }

  export type SolutionIndustryScalarWhereWithAggregatesInput = {
    AND?: SolutionIndustryScalarWhereWithAggregatesInput | SolutionIndustryScalarWhereWithAggregatesInput[]
    OR?: SolutionIndustryScalarWhereWithAggregatesInput[]
    NOT?: SolutionIndustryScalarWhereWithAggregatesInput | SolutionIndustryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SolutionIndustry"> | string
    title?: StringWithAggregatesFilter<"SolutionIndustry"> | string
    description?: StringWithAggregatesFilter<"SolutionIndustry"> | string
    icon?: StringWithAggregatesFilter<"SolutionIndustry"> | string
    order?: IntWithAggregatesFilter<"SolutionIndustry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SolutionIndustry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SolutionIndustry"> | Date | string
  }

  export type PricingPlanWhereInput = {
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    id?: StringFilter<"PricingPlan"> | string
    name?: StringFilter<"PricingPlan"> | string
    price?: StringFilter<"PricingPlan"> | string
    description?: StringFilter<"PricingPlan"> | string
    features?: JsonFilter<"PricingPlan">
    recommended?: BoolFilter<"PricingPlan"> | boolean
    billingCycle?: StringFilter<"PricingPlan"> | string
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
  }

  export type PricingPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    features?: SortOrder
    recommended?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    name?: StringFilter<"PricingPlan"> | string
    price?: StringFilter<"PricingPlan"> | string
    description?: StringFilter<"PricingPlan"> | string
    features?: JsonFilter<"PricingPlan">
    recommended?: BoolFilter<"PricingPlan"> | boolean
    billingCycle?: StringFilter<"PricingPlan"> | string
    createdAt?: DateTimeFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeFilter<"PricingPlan"> | Date | string
  }, "id">

  export type PricingPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    features?: SortOrder
    recommended?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PricingPlanCountOrderByAggregateInput
    _max?: PricingPlanMaxOrderByAggregateInput
    _min?: PricingPlanMinOrderByAggregateInput
  }

  export type PricingPlanScalarWhereWithAggregatesInput = {
    AND?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    OR?: PricingPlanScalarWhereWithAggregatesInput[]
    NOT?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingPlan"> | string
    name?: StringWithAggregatesFilter<"PricingPlan"> | string
    price?: StringWithAggregatesFilter<"PricingPlan"> | string
    description?: StringWithAggregatesFilter<"PricingPlan"> | string
    features?: JsonWithAggregatesFilter<"PricingPlan">
    recommended?: BoolWithAggregatesFilter<"PricingPlan"> | boolean
    billingCycle?: StringWithAggregatesFilter<"PricingPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PricingPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PricingPlan"> | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    author: string
    imageUrl?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: number | null
    featured?: boolean
    published?: boolean
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    author: string
    imageUrl?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: number | null
    featured?: boolean
    published?: boolean
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    author: string
    imageUrl?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: number | null
    featured?: boolean
    published?: boolean
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    readTime?: NullableIntFieldUpdateOperationsInput | number | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyCreateInput = {
    id?: string
    company: string
    industry: string
    slug: string
    goal: string
    metric: string
    metricLabel: string
    title: string
    excerpt: string
    content: string
    logoUrl?: string | null
    bannerUrl?: string | null
    published?: boolean
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseStudyUncheckedCreateInput = {
    id?: string
    company: string
    industry: string
    slug: string
    goal: string
    metric: string
    metricLabel: string
    title: string
    excerpt: string
    content: string
    logoUrl?: string | null
    bannerUrl?: string | null
    published?: boolean
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseStudyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    metricLabel?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    metricLabel?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyCreateManyInput = {
    id?: string
    company: string
    industry: string
    slug: string
    goal: string
    metric: string
    metricLabel: string
    title: string
    excerpt: string
    content: string
    logoUrl?: string | null
    bannerUrl?: string | null
    published?: boolean
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseStudyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    metricLabel?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseStudyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    metricLabel?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerCreateInput = {
    id?: string
    title: string
    department: string
    location: string
    type: string
    description: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUncheckedCreateInput = {
    id?: string
    title: string
    department: string
    location: string
    type: string
    description: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerCreateManyInput = {
    id?: string
    title: string
    department: string
    location: string
    type: string
    description: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    company?: string | null
    phone?: string | null
    industry?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactMessageUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    company?: string | null
    phone?: string | null
    industry?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    company?: string | null
    phone?: string | null
    industry?: string | null
    message: string
    status?: string
    createdAt?: Date | string
  }

  export type ContactMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberCreateInput = {
    id?: string
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type NewsletterSubscriberUncheckedCreateInput = {
    id?: string
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type NewsletterSubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberCreateManyInput = {
    id?: string
    email: string
    status?: string
    createdAt?: Date | string
  }

  export type NewsletterSubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    source: string
    name: string
    phone?: string | null
    email?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    source: string
    name: string
    phone?: string | null
    email?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyInput = {
    id?: string
    source: string
    name: string
    phone?: string | null
    email?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatCreateInput = {
    id?: string
    value: string
    label: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeStatUncheckedCreateInput = {
    id?: string
    value: string
    label: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatCreateManyInput = {
    id?: string
    value: string
    label: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryChatbotCreateInput = {
    id?: string
    industry: string
    brand: string
    flowSteps: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndustryChatbotUncheckedCreateInput = {
    id?: string
    industry: string
    brand: string
    flowSteps: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndustryChatbotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    flowSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryChatbotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    flowSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryChatbotCreateManyInput = {
    id?: string
    industry: string
    brand: string
    flowSteps: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndustryChatbotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    flowSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryChatbotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    flowSteps?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateInput = {
    id?: string
    author: string
    role: string
    content: string
    rating?: number
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUncheckedCreateInput = {
    id?: string
    author: string
    role: string
    content: string
    rating?: number
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialCreateManyInput = {
    id?: string
    author: string
    role: string
    content: string
    rating?: number
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionIndustryCreateInput = {
    id?: string
    title: string
    description: string
    icon: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionIndustryUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    icon: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionIndustryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionIndustryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionIndustryCreateManyInput = {
    id?: string
    title: string
    description: string
    icon: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolutionIndustryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolutionIndustryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanCreateInput = {
    id?: string
    name: string
    price: string
    description: string
    features: JsonNullValueInput | InputJsonValue
    recommended?: boolean
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUncheckedCreateInput = {
    id?: string
    name: string
    price: string
    description: string
    features: JsonNullValueInput | InputJsonValue
    recommended?: boolean
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    recommended?: BoolFieldUpdateOperationsInput | boolean
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    recommended?: BoolFieldUpdateOperationsInput | boolean
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanCreateManyInput = {
    id?: string
    name: string
    price: string
    description: string
    features: JsonNullValueInput | InputJsonValue
    recommended?: boolean
    billingCycle?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    recommended?: BoolFieldUpdateOperationsInput | boolean
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: JsonNullValueInput | InputJsonValue
    recommended?: BoolFieldUpdateOperationsInput | boolean
    billingCycle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    category?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    tags?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    readTime?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    category?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    category?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    readTime?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    readTime?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CaseStudyCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    slug?: SortOrder
    goal?: SortOrder
    metric?: SortOrder
    metricLabel?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    logoUrl?: SortOrder
    bannerUrl?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseStudyMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    slug?: SortOrder
    goal?: SortOrder
    metric?: SortOrder
    metricLabel?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    logoUrl?: SortOrder
    bannerUrl?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseStudyMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    industry?: SortOrder
    slug?: SortOrder
    goal?: SortOrder
    metric?: SortOrder
    metricLabel?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    logoUrl?: SortOrder
    bannerUrl?: SortOrder
    published?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    type?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    type?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    type?: SortOrder
    description?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMessageCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    industry?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    industry?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMessageMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    industry?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsletterSubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type HomeStatCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type HomeStatMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    label?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HomeStatSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IndustryChatbotCountOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    brand?: SortOrder
    flowSteps?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryChatbotMaxOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryChatbotMinOrderByAggregateInput = {
    id?: SortOrder
    industry?: SortOrder
    brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
    role?: SortOrder
    content?: SortOrder
    rating?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SolutionIndustryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionIndustryAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SolutionIndustryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionIndustryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolutionIndustrySumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PricingPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    features?: SortOrder
    recommended?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    recommended?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PricingPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    recommended?: SortOrder
    billingCycle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}