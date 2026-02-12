
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ComplexityOption
 * 
 */
export type ComplexityOption = $Result.DefaultSelection<Prisma.$ComplexityOptionPayload>
/**
 * Model AdditionalService
 * 
 */
export type AdditionalService = $Result.DefaultSelection<Prisma.$AdditionalServicePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectService
 * 
 */
export type ProjectService = $Result.DefaultSelection<Prisma.$ProjectServicePayload>
/**
 * Model ProjectAdditionalService
 * 
 */
export type ProjectAdditionalService = $Result.DefaultSelection<Prisma.$ProjectAdditionalServicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model ProjectFile
 * 
 */
export type ProjectFile = $Result.DefaultSelection<Prisma.$ProjectFilePayload>
/**
 * Model ProjectActivity
 * 
 */
export type ProjectActivity = $Result.DefaultSelection<Prisma.$ProjectActivityPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  PM: 'PM',
  TECH_LEAD: 'TECH_LEAD'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ContactMethod: {
  EMAIL: 'EMAIL',
  WHATSAPP: 'WHATSAPP',
  PHONE: 'PHONE',
  VIDEO: 'VIDEO'
};

export type ContactMethod = (typeof ContactMethod)[keyof typeof ContactMethod]


export const ContactTime: {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING',
  FLEXIBLE: 'FLEXIBLE'
};

export type ContactTime = (typeof ContactTime)[keyof typeof ContactTime]


export const ServiceCategory: {
  TECH: 'TECH',
  CREATIVE: 'CREATIVE'
};

export type ServiceCategory = (typeof ServiceCategory)[keyof typeof ServiceCategory]


export const ProjectStatus: {
  PENDING_REVIEW: 'PENDING_REVIEW',
  DEALING: 'DEALING',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_REVISION: 'IN_REVISION',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const TimelineType: {
  RUSH: 'RUSH',
  STANDARD: 'STANDARD',
  FLEXIBLE: 'FLEXIBLE',
  NO_DEADLINE: 'NO_DEADLINE'
};

export type TimelineType = (typeof TimelineType)[keyof typeof TimelineType]


export const ProjectType: {
  NEW: 'NEW',
  REDESIGN: 'REDESIGN',
  INTEGRATION: 'INTEGRATION',
  MAINTENANCE: 'MAINTENANCE'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const PaymentType: {
  DP: 'DP',
  MILESTONE: 'MILESTONE',
  FINAL: 'FINAL'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const ActivityType: {
  PROJECT_SUBMITTED: 'PROJECT_SUBMITTED',
  PROJECT_REVIEWED: 'PROJECT_REVIEWED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  PRICE_UPDATED: 'PRICE_UPDATED',
  DATE_UPDATED: 'DATE_UPDATED',
  PAYMENT_RECEIVED: 'PAYMENT_RECEIVED',
  FILE_UPLOADED: 'FILE_UPLOADED',
  REVISION_REQUESTED: 'REVISION_REQUESTED',
  NOTE_ADDED: 'NOTE_ADDED'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const NotificationType: {
  EMAIL: 'EMAIL',
  WHATSAPP: 'WHATSAPP'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const NotificationStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ContactMethod = $Enums.ContactMethod

export const ContactMethod: typeof $Enums.ContactMethod

export type ContactTime = $Enums.ContactTime

export const ContactTime: typeof $Enums.ContactTime

export type ServiceCategory = $Enums.ServiceCategory

export const ServiceCategory: typeof $Enums.ServiceCategory

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type TimelineType = $Enums.TimelineType

export const TimelineType: typeof $Enums.TimelineType

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complexityOption`: Exposes CRUD operations for the **ComplexityOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComplexityOptions
    * const complexityOptions = await prisma.complexityOption.findMany()
    * ```
    */
  get complexityOption(): Prisma.ComplexityOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.additionalService`: Exposes CRUD operations for the **AdditionalService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdditionalServices
    * const additionalServices = await prisma.additionalService.findMany()
    * ```
    */
  get additionalService(): Prisma.AdditionalServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectService`: Exposes CRUD operations for the **ProjectService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectServices
    * const projectServices = await prisma.projectService.findMany()
    * ```
    */
  get projectService(): Prisma.ProjectServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectAdditionalService`: Exposes CRUD operations for the **ProjectAdditionalService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectAdditionalServices
    * const projectAdditionalServices = await prisma.projectAdditionalService.findMany()
    * ```
    */
  get projectAdditionalService(): Prisma.ProjectAdditionalServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectFile`: Exposes CRUD operations for the **ProjectFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectFiles
    * const projectFiles = await prisma.projectFile.findMany()
    * ```
    */
  get projectFile(): Prisma.ProjectFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectActivity`: Exposes CRUD operations for the **ProjectActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectActivities
    * const projectActivities = await prisma.projectActivity.findMany()
    * ```
    */
  get projectActivity(): Prisma.ProjectActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
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
    User: 'User',
    Client: 'Client',
    Service: 'Service',
    ComplexityOption: 'ComplexityOption',
    AdditionalService: 'AdditionalService',
    Project: 'Project',
    ProjectService: 'ProjectService',
    ProjectAdditionalService: 'ProjectAdditionalService',
    Payment: 'Payment',
    ProjectFile: 'ProjectFile',
    ProjectActivity: 'ProjectActivity',
    Notification: 'Notification'
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
      modelProps: "user" | "client" | "service" | "complexityOption" | "additionalService" | "project" | "projectService" | "projectAdditionalService" | "payment" | "projectFile" | "projectActivity" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ComplexityOption: {
        payload: Prisma.$ComplexityOptionPayload<ExtArgs>
        fields: Prisma.ComplexityOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplexityOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplexityOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>
          }
          findFirst: {
            args: Prisma.ComplexityOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplexityOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>
          }
          findMany: {
            args: Prisma.ComplexityOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>[]
          }
          create: {
            args: Prisma.ComplexityOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>
          }
          createMany: {
            args: Prisma.ComplexityOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplexityOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>[]
          }
          delete: {
            args: Prisma.ComplexityOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>
          }
          update: {
            args: Prisma.ComplexityOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>
          }
          deleteMany: {
            args: Prisma.ComplexityOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplexityOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplexityOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>[]
          }
          upsert: {
            args: Prisma.ComplexityOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplexityOptionPayload>
          }
          aggregate: {
            args: Prisma.ComplexityOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplexityOption>
          }
          groupBy: {
            args: Prisma.ComplexityOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplexityOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplexityOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ComplexityOptionCountAggregateOutputType> | number
          }
        }
      }
      AdditionalService: {
        payload: Prisma.$AdditionalServicePayload<ExtArgs>
        fields: Prisma.AdditionalServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdditionalServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdditionalServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>
          }
          findFirst: {
            args: Prisma.AdditionalServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdditionalServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>
          }
          findMany: {
            args: Prisma.AdditionalServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>[]
          }
          create: {
            args: Prisma.AdditionalServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>
          }
          createMany: {
            args: Prisma.AdditionalServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdditionalServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>[]
          }
          delete: {
            args: Prisma.AdditionalServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>
          }
          update: {
            args: Prisma.AdditionalServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>
          }
          deleteMany: {
            args: Prisma.AdditionalServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdditionalServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdditionalServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>[]
          }
          upsert: {
            args: Prisma.AdditionalServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdditionalServicePayload>
          }
          aggregate: {
            args: Prisma.AdditionalServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdditionalService>
          }
          groupBy: {
            args: Prisma.AdditionalServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdditionalServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdditionalServiceCountArgs<ExtArgs>
            result: $Utils.Optional<AdditionalServiceCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectService: {
        payload: Prisma.$ProjectServicePayload<ExtArgs>
        fields: Prisma.ProjectServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>
          }
          findFirst: {
            args: Prisma.ProjectServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>
          }
          findMany: {
            args: Prisma.ProjectServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>[]
          }
          create: {
            args: Prisma.ProjectServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>
          }
          createMany: {
            args: Prisma.ProjectServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>[]
          }
          delete: {
            args: Prisma.ProjectServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>
          }
          update: {
            args: Prisma.ProjectServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>
          }
          deleteMany: {
            args: Prisma.ProjectServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>[]
          }
          upsert: {
            args: Prisma.ProjectServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectServicePayload>
          }
          aggregate: {
            args: Prisma.ProjectServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectService>
          }
          groupBy: {
            args: Prisma.ProjectServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectServiceCountAggregateOutputType> | number
          }
        }
      }
      ProjectAdditionalService: {
        payload: Prisma.$ProjectAdditionalServicePayload<ExtArgs>
        fields: Prisma.ProjectAdditionalServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectAdditionalServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectAdditionalServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>
          }
          findFirst: {
            args: Prisma.ProjectAdditionalServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectAdditionalServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>
          }
          findMany: {
            args: Prisma.ProjectAdditionalServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>[]
          }
          create: {
            args: Prisma.ProjectAdditionalServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>
          }
          createMany: {
            args: Prisma.ProjectAdditionalServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectAdditionalServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>[]
          }
          delete: {
            args: Prisma.ProjectAdditionalServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>
          }
          update: {
            args: Prisma.ProjectAdditionalServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>
          }
          deleteMany: {
            args: Prisma.ProjectAdditionalServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectAdditionalServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectAdditionalServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>[]
          }
          upsert: {
            args: Prisma.ProjectAdditionalServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectAdditionalServicePayload>
          }
          aggregate: {
            args: Prisma.ProjectAdditionalServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectAdditionalService>
          }
          groupBy: {
            args: Prisma.ProjectAdditionalServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectAdditionalServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectAdditionalServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectAdditionalServiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      ProjectFile: {
        payload: Prisma.$ProjectFilePayload<ExtArgs>
        fields: Prisma.ProjectFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>
          }
          findFirst: {
            args: Prisma.ProjectFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>
          }
          findMany: {
            args: Prisma.ProjectFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>[]
          }
          create: {
            args: Prisma.ProjectFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>
          }
          createMany: {
            args: Prisma.ProjectFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>[]
          }
          delete: {
            args: Prisma.ProjectFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>
          }
          update: {
            args: Prisma.ProjectFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>
          }
          deleteMany: {
            args: Prisma.ProjectFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>[]
          }
          upsert: {
            args: Prisma.ProjectFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectFilePayload>
          }
          aggregate: {
            args: Prisma.ProjectFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectFile>
          }
          groupBy: {
            args: Prisma.ProjectFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectFileCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectFileCountAggregateOutputType> | number
          }
        }
      }
      ProjectActivity: {
        payload: Prisma.$ProjectActivityPayload<ExtArgs>
        fields: Prisma.ProjectActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          findFirst: {
            args: Prisma.ProjectActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          findMany: {
            args: Prisma.ProjectActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>[]
          }
          create: {
            args: Prisma.ProjectActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          createMany: {
            args: Prisma.ProjectActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>[]
          }
          delete: {
            args: Prisma.ProjectActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          update: {
            args: Prisma.ProjectActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          deleteMany: {
            args: Prisma.ProjectActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>[]
          }
          upsert: {
            args: Prisma.ProjectActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          aggregate: {
            args: Prisma.ProjectActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectActivity>
          }
          groupBy: {
            args: Prisma.ProjectActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectActivityCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    user?: UserOmit
    client?: ClientOmit
    service?: ServiceOmit
    complexityOption?: ComplexityOptionOmit
    additionalService?: AdditionalServiceOmit
    project?: ProjectOmit
    projectService?: ProjectServiceOmit
    projectAdditionalService?: ProjectAdditionalServiceOmit
    payment?: PaymentOmit
    projectFile?: ProjectFileOmit
    projectActivity?: ProjectActivityOmit
    notification?: NotificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    activities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    projects: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ClientCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    complexityOptions: number
    projectServices: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complexityOptions?: boolean | ServiceCountOutputTypeCountComplexityOptionsArgs
    projectServices?: boolean | ServiceCountOutputTypeCountProjectServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountComplexityOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplexityOptionWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountProjectServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectServiceWhereInput
  }


  /**
   * Count Type ComplexityOptionCountOutputType
   */

  export type ComplexityOptionCountOutputType = {
    projectServices: number
  }

  export type ComplexityOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectServices?: boolean | ComplexityOptionCountOutputTypeCountProjectServicesArgs
  }

  // Custom InputTypes
  /**
   * ComplexityOptionCountOutputType without action
   */
  export type ComplexityOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOptionCountOutputType
     */
    select?: ComplexityOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComplexityOptionCountOutputType without action
   */
  export type ComplexityOptionCountOutputTypeCountProjectServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectServiceWhereInput
  }


  /**
   * Count Type AdditionalServiceCountOutputType
   */

  export type AdditionalServiceCountOutputType = {
    projectAdditionalServices: number
  }

  export type AdditionalServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectAdditionalServices?: boolean | AdditionalServiceCountOutputTypeCountProjectAdditionalServicesArgs
  }

  // Custom InputTypes
  /**
   * AdditionalServiceCountOutputType without action
   */
  export type AdditionalServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalServiceCountOutputType
     */
    select?: AdditionalServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdditionalServiceCountOutputType without action
   */
  export type AdditionalServiceCountOutputTypeCountProjectAdditionalServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAdditionalServiceWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    projectServices: number
    projectAdditionalServices: number
    payments: number
    files: number
    activities: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectServices?: boolean | ProjectCountOutputTypeCountProjectServicesArgs
    projectAdditionalServices?: boolean | ProjectCountOutputTypeCountProjectAdditionalServicesArgs
    payments?: boolean | ProjectCountOutputTypeCountPaymentsArgs
    files?: boolean | ProjectCountOutputTypeCountFilesArgs
    activities?: boolean | ProjectCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectServiceWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectAdditionalServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAdditionalServiceWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectFileWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activities?: boolean | User$activitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | User$activitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      activities: Prisma.$ProjectActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    cursor?: ProjectActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    countryCode: string | null
    phone: string | null
    companyName: string | null
    companyWebsite: string | null
    contactMethod: $Enums.ContactMethod | null
    contactTime: $Enums.ContactTime | null
    referralSource: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    countryCode: string | null
    phone: string | null
    companyName: string | null
    companyWebsite: string | null
    contactMethod: $Enums.ContactMethod | null
    contactTime: $Enums.ContactTime | null
    referralSource: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    countryCode: number
    phone: number
    companyName: number
    companyWebsite: number
    contactMethod: number
    contactTime: number
    referralSource: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    countryCode?: true
    phone?: true
    companyName?: true
    companyWebsite?: true
    contactMethod?: true
    contactTime?: true
    referralSource?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    countryCode?: true
    phone?: true
    companyName?: true
    companyWebsite?: true
    contactMethod?: true
    contactTime?: true
    referralSource?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    countryCode?: true
    phone?: true
    companyName?: true
    companyWebsite?: true
    contactMethod?: true
    contactTime?: true
    referralSource?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    fullName: string
    email: string
    countryCode: string
    phone: string
    companyName: string | null
    companyWebsite: string | null
    contactMethod: $Enums.ContactMethod
    contactTime: $Enums.ContactTime
    referralSource: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    countryCode?: boolean
    phone?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    contactMethod?: boolean
    contactTime?: boolean
    referralSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | Client$projectsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    countryCode?: boolean
    phone?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    contactMethod?: boolean
    contactTime?: boolean
    referralSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    countryCode?: boolean
    phone?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    contactMethod?: boolean
    contactTime?: boolean
    referralSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    countryCode?: boolean
    phone?: boolean
    companyName?: boolean
    companyWebsite?: boolean
    contactMethod?: boolean
    contactTime?: boolean
    referralSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "countryCode" | "phone" | "companyName" | "companyWebsite" | "contactMethod" | "contactTime" | "referralSource" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Client$projectsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      countryCode: string
      phone: string
      companyName: string | null
      companyWebsite: string | null
      contactMethod: $Enums.ContactMethod
      contactTime: $Enums.ContactTime
      referralSource: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Client$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Client$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly fullName: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly countryCode: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly companyName: FieldRef<"Client", 'String'>
    readonly companyWebsite: FieldRef<"Client", 'String'>
    readonly contactMethod: FieldRef<"Client", 'ContactMethod'>
    readonly contactTime: FieldRef<"Client", 'ContactTime'>
    readonly referralSource: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.projects
   */
  export type Client$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    basePrice: number | null
  }

  export type ServiceSumAggregateOutputType = {
    basePrice: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: $Enums.ServiceCategory | null
    icon: string | null
    basePrice: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: $Enums.ServiceCategory | null
    icon: string | null
    basePrice: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    category: number
    icon: number
    basePrice: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    basePrice?: true
  }

  export type ServiceSumAggregateInputType = {
    basePrice?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    icon?: true
    basePrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    icon?: true
    basePrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    icon?: true
    basePrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    category: $Enums.ServiceCategory
    icon: string | null
    basePrice: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    icon?: boolean
    basePrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    complexityOptions?: boolean | Service$complexityOptionsArgs<ExtArgs>
    projectServices?: boolean | Service$projectServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    icon?: boolean
    basePrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    icon?: boolean
    basePrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    icon?: boolean
    basePrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "category" | "icon" | "basePrice" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complexityOptions?: boolean | Service$complexityOptionsArgs<ExtArgs>
    projectServices?: boolean | Service$projectServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      complexityOptions: Prisma.$ComplexityOptionPayload<ExtArgs>[]
      projectServices: Prisma.$ProjectServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      category: $Enums.ServiceCategory
      icon: string | null
      basePrice: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    complexityOptions<T extends Service$complexityOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Service$complexityOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectServices<T extends Service$projectServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$projectServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly slug: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly category: FieldRef<"Service", 'ServiceCategory'>
    readonly icon: FieldRef<"Service", 'String'>
    readonly basePrice: FieldRef<"Service", 'Int'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.complexityOptions
   */
  export type Service$complexityOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    where?: ComplexityOptionWhereInput
    orderBy?: ComplexityOptionOrderByWithRelationInput | ComplexityOptionOrderByWithRelationInput[]
    cursor?: ComplexityOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplexityOptionScalarFieldEnum | ComplexityOptionScalarFieldEnum[]
  }

  /**
   * Service.projectServices
   */
  export type Service$projectServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    where?: ProjectServiceWhereInput
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    cursor?: ProjectServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectServiceScalarFieldEnum | ProjectServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ComplexityOption
   */

  export type AggregateComplexityOption = {
    _count: ComplexityOptionCountAggregateOutputType | null
    _avg: ComplexityOptionAvgAggregateOutputType | null
    _sum: ComplexityOptionSumAggregateOutputType | null
    _min: ComplexityOptionMinAggregateOutputType | null
    _max: ComplexityOptionMaxAggregateOutputType | null
  }

  export type ComplexityOptionAvgAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
  }

  export type ComplexityOptionSumAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
  }

  export type ComplexityOptionMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    name: string | null
    slug: string | null
    description: string | null
    minPrice: number | null
    maxPrice: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplexityOptionMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    name: string | null
    slug: string | null
    description: string | null
    minPrice: number | null
    maxPrice: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ComplexityOptionCountAggregateOutputType = {
    id: number
    serviceId: number
    name: number
    slug: number
    description: number
    minPrice: number
    maxPrice: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ComplexityOptionAvgAggregateInputType = {
    minPrice?: true
    maxPrice?: true
  }

  export type ComplexityOptionSumAggregateInputType = {
    minPrice?: true
    maxPrice?: true
  }

  export type ComplexityOptionMinAggregateInputType = {
    id?: true
    serviceId?: true
    name?: true
    slug?: true
    description?: true
    minPrice?: true
    maxPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplexityOptionMaxAggregateInputType = {
    id?: true
    serviceId?: true
    name?: true
    slug?: true
    description?: true
    minPrice?: true
    maxPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ComplexityOptionCountAggregateInputType = {
    id?: true
    serviceId?: true
    name?: true
    slug?: true
    description?: true
    minPrice?: true
    maxPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ComplexityOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplexityOption to aggregate.
     */
    where?: ComplexityOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplexityOptions to fetch.
     */
    orderBy?: ComplexityOptionOrderByWithRelationInput | ComplexityOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplexityOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplexityOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplexityOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComplexityOptions
    **/
    _count?: true | ComplexityOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplexityOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplexityOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplexityOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplexityOptionMaxAggregateInputType
  }

  export type GetComplexityOptionAggregateType<T extends ComplexityOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateComplexityOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplexityOption[P]>
      : GetScalarType<T[P], AggregateComplexityOption[P]>
  }




  export type ComplexityOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplexityOptionWhereInput
    orderBy?: ComplexityOptionOrderByWithAggregationInput | ComplexityOptionOrderByWithAggregationInput[]
    by: ComplexityOptionScalarFieldEnum[] | ComplexityOptionScalarFieldEnum
    having?: ComplexityOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplexityOptionCountAggregateInputType | true
    _avg?: ComplexityOptionAvgAggregateInputType
    _sum?: ComplexityOptionSumAggregateInputType
    _min?: ComplexityOptionMinAggregateInputType
    _max?: ComplexityOptionMaxAggregateInputType
  }

  export type ComplexityOptionGroupByOutputType = {
    id: string
    serviceId: string
    name: string
    slug: string
    description: string | null
    minPrice: number
    maxPrice: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ComplexityOptionCountAggregateOutputType | null
    _avg: ComplexityOptionAvgAggregateOutputType | null
    _sum: ComplexityOptionSumAggregateOutputType | null
    _min: ComplexityOptionMinAggregateOutputType | null
    _max: ComplexityOptionMaxAggregateOutputType | null
  }

  type GetComplexityOptionGroupByPayload<T extends ComplexityOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplexityOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplexityOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplexityOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ComplexityOptionGroupByOutputType[P]>
        }
      >
    >


  export type ComplexityOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    projectServices?: boolean | ComplexityOption$projectServicesArgs<ExtArgs>
    _count?: boolean | ComplexityOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complexityOption"]>

  export type ComplexityOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complexityOption"]>

  export type ComplexityOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["complexityOption"]>

  export type ComplexityOptionSelectScalar = {
    id?: boolean
    serviceId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ComplexityOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "name" | "slug" | "description" | "minPrice" | "maxPrice" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["complexityOption"]>
  export type ComplexityOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    projectServices?: boolean | ComplexityOption$projectServicesArgs<ExtArgs>
    _count?: boolean | ComplexityOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComplexityOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ComplexityOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ComplexityOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComplexityOption"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      projectServices: Prisma.$ProjectServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      name: string
      slug: string
      description: string | null
      minPrice: number
      maxPrice: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["complexityOption"]>
    composites: {}
  }

  type ComplexityOptionGetPayload<S extends boolean | null | undefined | ComplexityOptionDefaultArgs> = $Result.GetResult<Prisma.$ComplexityOptionPayload, S>

  type ComplexityOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplexityOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplexityOptionCountAggregateInputType | true
    }

  export interface ComplexityOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComplexityOption'], meta: { name: 'ComplexityOption' } }
    /**
     * Find zero or one ComplexityOption that matches the filter.
     * @param {ComplexityOptionFindUniqueArgs} args - Arguments to find a ComplexityOption
     * @example
     * // Get one ComplexityOption
     * const complexityOption = await prisma.complexityOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplexityOptionFindUniqueArgs>(args: SelectSubset<T, ComplexityOptionFindUniqueArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComplexityOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplexityOptionFindUniqueOrThrowArgs} args - Arguments to find a ComplexityOption
     * @example
     * // Get one ComplexityOption
     * const complexityOption = await prisma.complexityOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplexityOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplexityOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplexityOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionFindFirstArgs} args - Arguments to find a ComplexityOption
     * @example
     * // Get one ComplexityOption
     * const complexityOption = await prisma.complexityOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplexityOptionFindFirstArgs>(args?: SelectSubset<T, ComplexityOptionFindFirstArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComplexityOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionFindFirstOrThrowArgs} args - Arguments to find a ComplexityOption
     * @example
     * // Get one ComplexityOption
     * const complexityOption = await prisma.complexityOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplexityOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplexityOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComplexityOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComplexityOptions
     * const complexityOptions = await prisma.complexityOption.findMany()
     * 
     * // Get first 10 ComplexityOptions
     * const complexityOptions = await prisma.complexityOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complexityOptionWithIdOnly = await prisma.complexityOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplexityOptionFindManyArgs>(args?: SelectSubset<T, ComplexityOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComplexityOption.
     * @param {ComplexityOptionCreateArgs} args - Arguments to create a ComplexityOption.
     * @example
     * // Create one ComplexityOption
     * const ComplexityOption = await prisma.complexityOption.create({
     *   data: {
     *     // ... data to create a ComplexityOption
     *   }
     * })
     * 
     */
    create<T extends ComplexityOptionCreateArgs>(args: SelectSubset<T, ComplexityOptionCreateArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComplexityOptions.
     * @param {ComplexityOptionCreateManyArgs} args - Arguments to create many ComplexityOptions.
     * @example
     * // Create many ComplexityOptions
     * const complexityOption = await prisma.complexityOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplexityOptionCreateManyArgs>(args?: SelectSubset<T, ComplexityOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComplexityOptions and returns the data saved in the database.
     * @param {ComplexityOptionCreateManyAndReturnArgs} args - Arguments to create many ComplexityOptions.
     * @example
     * // Create many ComplexityOptions
     * const complexityOption = await prisma.complexityOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComplexityOptions and only return the `id`
     * const complexityOptionWithIdOnly = await prisma.complexityOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplexityOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplexityOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComplexityOption.
     * @param {ComplexityOptionDeleteArgs} args - Arguments to delete one ComplexityOption.
     * @example
     * // Delete one ComplexityOption
     * const ComplexityOption = await prisma.complexityOption.delete({
     *   where: {
     *     // ... filter to delete one ComplexityOption
     *   }
     * })
     * 
     */
    delete<T extends ComplexityOptionDeleteArgs>(args: SelectSubset<T, ComplexityOptionDeleteArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComplexityOption.
     * @param {ComplexityOptionUpdateArgs} args - Arguments to update one ComplexityOption.
     * @example
     * // Update one ComplexityOption
     * const complexityOption = await prisma.complexityOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplexityOptionUpdateArgs>(args: SelectSubset<T, ComplexityOptionUpdateArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComplexityOptions.
     * @param {ComplexityOptionDeleteManyArgs} args - Arguments to filter ComplexityOptions to delete.
     * @example
     * // Delete a few ComplexityOptions
     * const { count } = await prisma.complexityOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplexityOptionDeleteManyArgs>(args?: SelectSubset<T, ComplexityOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplexityOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComplexityOptions
     * const complexityOption = await prisma.complexityOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplexityOptionUpdateManyArgs>(args: SelectSubset<T, ComplexityOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplexityOptions and returns the data updated in the database.
     * @param {ComplexityOptionUpdateManyAndReturnArgs} args - Arguments to update many ComplexityOptions.
     * @example
     * // Update many ComplexityOptions
     * const complexityOption = await prisma.complexityOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComplexityOptions and only return the `id`
     * const complexityOptionWithIdOnly = await prisma.complexityOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends ComplexityOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplexityOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComplexityOption.
     * @param {ComplexityOptionUpsertArgs} args - Arguments to update or create a ComplexityOption.
     * @example
     * // Update or create a ComplexityOption
     * const complexityOption = await prisma.complexityOption.upsert({
     *   create: {
     *     // ... data to create a ComplexityOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComplexityOption we want to update
     *   }
     * })
     */
    upsert<T extends ComplexityOptionUpsertArgs>(args: SelectSubset<T, ComplexityOptionUpsertArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComplexityOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionCountArgs} args - Arguments to filter ComplexityOptions to count.
     * @example
     * // Count the number of ComplexityOptions
     * const count = await prisma.complexityOption.count({
     *   where: {
     *     // ... the filter for the ComplexityOptions we want to count
     *   }
     * })
    **/
    count<T extends ComplexityOptionCountArgs>(
      args?: Subset<T, ComplexityOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplexityOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComplexityOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplexityOptionAggregateArgs>(args: Subset<T, ComplexityOptionAggregateArgs>): Prisma.PrismaPromise<GetComplexityOptionAggregateType<T>>

    /**
     * Group by ComplexityOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplexityOptionGroupByArgs} args - Group by arguments.
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
      T extends ComplexityOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplexityOptionGroupByArgs['orderBy'] }
        : { orderBy?: ComplexityOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplexityOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplexityOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComplexityOption model
   */
  readonly fields: ComplexityOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComplexityOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplexityOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectServices<T extends ComplexityOption$projectServicesArgs<ExtArgs> = {}>(args?: Subset<T, ComplexityOption$projectServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ComplexityOption model
   */
  interface ComplexityOptionFieldRefs {
    readonly id: FieldRef<"ComplexityOption", 'String'>
    readonly serviceId: FieldRef<"ComplexityOption", 'String'>
    readonly name: FieldRef<"ComplexityOption", 'String'>
    readonly slug: FieldRef<"ComplexityOption", 'String'>
    readonly description: FieldRef<"ComplexityOption", 'String'>
    readonly minPrice: FieldRef<"ComplexityOption", 'Int'>
    readonly maxPrice: FieldRef<"ComplexityOption", 'Int'>
    readonly isActive: FieldRef<"ComplexityOption", 'Boolean'>
    readonly createdAt: FieldRef<"ComplexityOption", 'DateTime'>
    readonly updatedAt: FieldRef<"ComplexityOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ComplexityOption findUnique
   */
  export type ComplexityOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * Filter, which ComplexityOption to fetch.
     */
    where: ComplexityOptionWhereUniqueInput
  }

  /**
   * ComplexityOption findUniqueOrThrow
   */
  export type ComplexityOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * Filter, which ComplexityOption to fetch.
     */
    where: ComplexityOptionWhereUniqueInput
  }

  /**
   * ComplexityOption findFirst
   */
  export type ComplexityOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * Filter, which ComplexityOption to fetch.
     */
    where?: ComplexityOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplexityOptions to fetch.
     */
    orderBy?: ComplexityOptionOrderByWithRelationInput | ComplexityOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplexityOptions.
     */
    cursor?: ComplexityOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplexityOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplexityOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplexityOptions.
     */
    distinct?: ComplexityOptionScalarFieldEnum | ComplexityOptionScalarFieldEnum[]
  }

  /**
   * ComplexityOption findFirstOrThrow
   */
  export type ComplexityOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * Filter, which ComplexityOption to fetch.
     */
    where?: ComplexityOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplexityOptions to fetch.
     */
    orderBy?: ComplexityOptionOrderByWithRelationInput | ComplexityOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplexityOptions.
     */
    cursor?: ComplexityOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplexityOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplexityOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplexityOptions.
     */
    distinct?: ComplexityOptionScalarFieldEnum | ComplexityOptionScalarFieldEnum[]
  }

  /**
   * ComplexityOption findMany
   */
  export type ComplexityOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * Filter, which ComplexityOptions to fetch.
     */
    where?: ComplexityOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplexityOptions to fetch.
     */
    orderBy?: ComplexityOptionOrderByWithRelationInput | ComplexityOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComplexityOptions.
     */
    cursor?: ComplexityOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplexityOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplexityOptions.
     */
    skip?: number
    distinct?: ComplexityOptionScalarFieldEnum | ComplexityOptionScalarFieldEnum[]
  }

  /**
   * ComplexityOption create
   */
  export type ComplexityOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ComplexityOption.
     */
    data: XOR<ComplexityOptionCreateInput, ComplexityOptionUncheckedCreateInput>
  }

  /**
   * ComplexityOption createMany
   */
  export type ComplexityOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComplexityOptions.
     */
    data: ComplexityOptionCreateManyInput | ComplexityOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComplexityOption createManyAndReturn
   */
  export type ComplexityOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ComplexityOptions.
     */
    data: ComplexityOptionCreateManyInput | ComplexityOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComplexityOption update
   */
  export type ComplexityOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ComplexityOption.
     */
    data: XOR<ComplexityOptionUpdateInput, ComplexityOptionUncheckedUpdateInput>
    /**
     * Choose, which ComplexityOption to update.
     */
    where: ComplexityOptionWhereUniqueInput
  }

  /**
   * ComplexityOption updateMany
   */
  export type ComplexityOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComplexityOptions.
     */
    data: XOR<ComplexityOptionUpdateManyMutationInput, ComplexityOptionUncheckedUpdateManyInput>
    /**
     * Filter which ComplexityOptions to update
     */
    where?: ComplexityOptionWhereInput
    /**
     * Limit how many ComplexityOptions to update.
     */
    limit?: number
  }

  /**
   * ComplexityOption updateManyAndReturn
   */
  export type ComplexityOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * The data used to update ComplexityOptions.
     */
    data: XOR<ComplexityOptionUpdateManyMutationInput, ComplexityOptionUncheckedUpdateManyInput>
    /**
     * Filter which ComplexityOptions to update
     */
    where?: ComplexityOptionWhereInput
    /**
     * Limit how many ComplexityOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComplexityOption upsert
   */
  export type ComplexityOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ComplexityOption to update in case it exists.
     */
    where: ComplexityOptionWhereUniqueInput
    /**
     * In case the ComplexityOption found by the `where` argument doesn't exist, create a new ComplexityOption with this data.
     */
    create: XOR<ComplexityOptionCreateInput, ComplexityOptionUncheckedCreateInput>
    /**
     * In case the ComplexityOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplexityOptionUpdateInput, ComplexityOptionUncheckedUpdateInput>
  }

  /**
   * ComplexityOption delete
   */
  export type ComplexityOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
    /**
     * Filter which ComplexityOption to delete.
     */
    where: ComplexityOptionWhereUniqueInput
  }

  /**
   * ComplexityOption deleteMany
   */
  export type ComplexityOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplexityOptions to delete
     */
    where?: ComplexityOptionWhereInput
    /**
     * Limit how many ComplexityOptions to delete.
     */
    limit?: number
  }

  /**
   * ComplexityOption.projectServices
   */
  export type ComplexityOption$projectServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    where?: ProjectServiceWhereInput
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    cursor?: ProjectServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectServiceScalarFieldEnum | ProjectServiceScalarFieldEnum[]
  }

  /**
   * ComplexityOption without action
   */
  export type ComplexityOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplexityOption
     */
    select?: ComplexityOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplexityOption
     */
    omit?: ComplexityOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplexityOptionInclude<ExtArgs> | null
  }


  /**
   * Model AdditionalService
   */

  export type AggregateAdditionalService = {
    _count: AdditionalServiceCountAggregateOutputType | null
    _avg: AdditionalServiceAvgAggregateOutputType | null
    _sum: AdditionalServiceSumAggregateOutputType | null
    _min: AdditionalServiceMinAggregateOutputType | null
    _max: AdditionalServiceMaxAggregateOutputType | null
  }

  export type AdditionalServiceAvgAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
  }

  export type AdditionalServiceSumAggregateOutputType = {
    minPrice: number | null
    maxPrice: number | null
  }

  export type AdditionalServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    minPrice: number | null
    maxPrice: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdditionalServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    minPrice: number | null
    maxPrice: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdditionalServiceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    icon: number
    minPrice: number
    maxPrice: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdditionalServiceAvgAggregateInputType = {
    minPrice?: true
    maxPrice?: true
  }

  export type AdditionalServiceSumAggregateInputType = {
    minPrice?: true
    maxPrice?: true
  }

  export type AdditionalServiceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    minPrice?: true
    maxPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdditionalServiceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    minPrice?: true
    maxPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdditionalServiceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    minPrice?: true
    maxPrice?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdditionalServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdditionalService to aggregate.
     */
    where?: AdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalServices to fetch.
     */
    orderBy?: AdditionalServiceOrderByWithRelationInput | AdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdditionalServices
    **/
    _count?: true | AdditionalServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdditionalServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdditionalServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdditionalServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdditionalServiceMaxAggregateInputType
  }

  export type GetAdditionalServiceAggregateType<T extends AdditionalServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateAdditionalService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdditionalService[P]>
      : GetScalarType<T[P], AggregateAdditionalService[P]>
  }




  export type AdditionalServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalServiceWhereInput
    orderBy?: AdditionalServiceOrderByWithAggregationInput | AdditionalServiceOrderByWithAggregationInput[]
    by: AdditionalServiceScalarFieldEnum[] | AdditionalServiceScalarFieldEnum
    having?: AdditionalServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdditionalServiceCountAggregateInputType | true
    _avg?: AdditionalServiceAvgAggregateInputType
    _sum?: AdditionalServiceSumAggregateInputType
    _min?: AdditionalServiceMinAggregateInputType
    _max?: AdditionalServiceMaxAggregateInputType
  }

  export type AdditionalServiceGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    icon: string | null
    minPrice: number
    maxPrice: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdditionalServiceCountAggregateOutputType | null
    _avg: AdditionalServiceAvgAggregateOutputType | null
    _sum: AdditionalServiceSumAggregateOutputType | null
    _min: AdditionalServiceMinAggregateOutputType | null
    _max: AdditionalServiceMaxAggregateOutputType | null
  }

  type GetAdditionalServiceGroupByPayload<T extends AdditionalServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdditionalServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdditionalServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdditionalServiceGroupByOutputType[P]>
            : GetScalarType<T[P], AdditionalServiceGroupByOutputType[P]>
        }
      >
    >


  export type AdditionalServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectAdditionalServices?: boolean | AdditionalService$projectAdditionalServicesArgs<ExtArgs>
    _count?: boolean | AdditionalServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["additionalService"]>

  export type AdditionalServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["additionalService"]>

  export type AdditionalServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["additionalService"]>

  export type AdditionalServiceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdditionalServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "icon" | "minPrice" | "maxPrice" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["additionalService"]>
  export type AdditionalServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectAdditionalServices?: boolean | AdditionalService$projectAdditionalServicesArgs<ExtArgs>
    _count?: boolean | AdditionalServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdditionalServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdditionalServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdditionalServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdditionalService"
    objects: {
      projectAdditionalServices: Prisma.$ProjectAdditionalServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      icon: string | null
      minPrice: number
      maxPrice: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["additionalService"]>
    composites: {}
  }

  type AdditionalServiceGetPayload<S extends boolean | null | undefined | AdditionalServiceDefaultArgs> = $Result.GetResult<Prisma.$AdditionalServicePayload, S>

  type AdditionalServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdditionalServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdditionalServiceCountAggregateInputType | true
    }

  export interface AdditionalServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdditionalService'], meta: { name: 'AdditionalService' } }
    /**
     * Find zero or one AdditionalService that matches the filter.
     * @param {AdditionalServiceFindUniqueArgs} args - Arguments to find a AdditionalService
     * @example
     * // Get one AdditionalService
     * const additionalService = await prisma.additionalService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdditionalServiceFindUniqueArgs>(args: SelectSubset<T, AdditionalServiceFindUniqueArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdditionalService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdditionalServiceFindUniqueOrThrowArgs} args - Arguments to find a AdditionalService
     * @example
     * // Get one AdditionalService
     * const additionalService = await prisma.additionalService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdditionalServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, AdditionalServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdditionalService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceFindFirstArgs} args - Arguments to find a AdditionalService
     * @example
     * // Get one AdditionalService
     * const additionalService = await prisma.additionalService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdditionalServiceFindFirstArgs>(args?: SelectSubset<T, AdditionalServiceFindFirstArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdditionalService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceFindFirstOrThrowArgs} args - Arguments to find a AdditionalService
     * @example
     * // Get one AdditionalService
     * const additionalService = await prisma.additionalService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdditionalServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, AdditionalServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdditionalServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdditionalServices
     * const additionalServices = await prisma.additionalService.findMany()
     * 
     * // Get first 10 AdditionalServices
     * const additionalServices = await prisma.additionalService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const additionalServiceWithIdOnly = await prisma.additionalService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdditionalServiceFindManyArgs>(args?: SelectSubset<T, AdditionalServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdditionalService.
     * @param {AdditionalServiceCreateArgs} args - Arguments to create a AdditionalService.
     * @example
     * // Create one AdditionalService
     * const AdditionalService = await prisma.additionalService.create({
     *   data: {
     *     // ... data to create a AdditionalService
     *   }
     * })
     * 
     */
    create<T extends AdditionalServiceCreateArgs>(args: SelectSubset<T, AdditionalServiceCreateArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdditionalServices.
     * @param {AdditionalServiceCreateManyArgs} args - Arguments to create many AdditionalServices.
     * @example
     * // Create many AdditionalServices
     * const additionalService = await prisma.additionalService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdditionalServiceCreateManyArgs>(args?: SelectSubset<T, AdditionalServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdditionalServices and returns the data saved in the database.
     * @param {AdditionalServiceCreateManyAndReturnArgs} args - Arguments to create many AdditionalServices.
     * @example
     * // Create many AdditionalServices
     * const additionalService = await prisma.additionalService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdditionalServices and only return the `id`
     * const additionalServiceWithIdOnly = await prisma.additionalService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdditionalServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, AdditionalServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdditionalService.
     * @param {AdditionalServiceDeleteArgs} args - Arguments to delete one AdditionalService.
     * @example
     * // Delete one AdditionalService
     * const AdditionalService = await prisma.additionalService.delete({
     *   where: {
     *     // ... filter to delete one AdditionalService
     *   }
     * })
     * 
     */
    delete<T extends AdditionalServiceDeleteArgs>(args: SelectSubset<T, AdditionalServiceDeleteArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdditionalService.
     * @param {AdditionalServiceUpdateArgs} args - Arguments to update one AdditionalService.
     * @example
     * // Update one AdditionalService
     * const additionalService = await prisma.additionalService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdditionalServiceUpdateArgs>(args: SelectSubset<T, AdditionalServiceUpdateArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdditionalServices.
     * @param {AdditionalServiceDeleteManyArgs} args - Arguments to filter AdditionalServices to delete.
     * @example
     * // Delete a few AdditionalServices
     * const { count } = await prisma.additionalService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdditionalServiceDeleteManyArgs>(args?: SelectSubset<T, AdditionalServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdditionalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdditionalServices
     * const additionalService = await prisma.additionalService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdditionalServiceUpdateManyArgs>(args: SelectSubset<T, AdditionalServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdditionalServices and returns the data updated in the database.
     * @param {AdditionalServiceUpdateManyAndReturnArgs} args - Arguments to update many AdditionalServices.
     * @example
     * // Update many AdditionalServices
     * const additionalService = await prisma.additionalService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdditionalServices and only return the `id`
     * const additionalServiceWithIdOnly = await prisma.additionalService.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdditionalServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, AdditionalServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdditionalService.
     * @param {AdditionalServiceUpsertArgs} args - Arguments to update or create a AdditionalService.
     * @example
     * // Update or create a AdditionalService
     * const additionalService = await prisma.additionalService.upsert({
     *   create: {
     *     // ... data to create a AdditionalService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdditionalService we want to update
     *   }
     * })
     */
    upsert<T extends AdditionalServiceUpsertArgs>(args: SelectSubset<T, AdditionalServiceUpsertArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdditionalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceCountArgs} args - Arguments to filter AdditionalServices to count.
     * @example
     * // Count the number of AdditionalServices
     * const count = await prisma.additionalService.count({
     *   where: {
     *     // ... the filter for the AdditionalServices we want to count
     *   }
     * })
    **/
    count<T extends AdditionalServiceCountArgs>(
      args?: Subset<T, AdditionalServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdditionalServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdditionalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdditionalServiceAggregateArgs>(args: Subset<T, AdditionalServiceAggregateArgs>): Prisma.PrismaPromise<GetAdditionalServiceAggregateType<T>>

    /**
     * Group by AdditionalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalServiceGroupByArgs} args - Group by arguments.
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
      T extends AdditionalServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdditionalServiceGroupByArgs['orderBy'] }
        : { orderBy?: AdditionalServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdditionalServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdditionalServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdditionalService model
   */
  readonly fields: AdditionalServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdditionalService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdditionalServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectAdditionalServices<T extends AdditionalService$projectAdditionalServicesArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalService$projectAdditionalServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdditionalService model
   */
  interface AdditionalServiceFieldRefs {
    readonly id: FieldRef<"AdditionalService", 'String'>
    readonly name: FieldRef<"AdditionalService", 'String'>
    readonly slug: FieldRef<"AdditionalService", 'String'>
    readonly description: FieldRef<"AdditionalService", 'String'>
    readonly icon: FieldRef<"AdditionalService", 'String'>
    readonly minPrice: FieldRef<"AdditionalService", 'Int'>
    readonly maxPrice: FieldRef<"AdditionalService", 'Int'>
    readonly isActive: FieldRef<"AdditionalService", 'Boolean'>
    readonly createdAt: FieldRef<"AdditionalService", 'DateTime'>
    readonly updatedAt: FieldRef<"AdditionalService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdditionalService findUnique
   */
  export type AdditionalServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalService to fetch.
     */
    where: AdditionalServiceWhereUniqueInput
  }

  /**
   * AdditionalService findUniqueOrThrow
   */
  export type AdditionalServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalService to fetch.
     */
    where: AdditionalServiceWhereUniqueInput
  }

  /**
   * AdditionalService findFirst
   */
  export type AdditionalServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalService to fetch.
     */
    where?: AdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalServices to fetch.
     */
    orderBy?: AdditionalServiceOrderByWithRelationInput | AdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdditionalServices.
     */
    cursor?: AdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdditionalServices.
     */
    distinct?: AdditionalServiceScalarFieldEnum | AdditionalServiceScalarFieldEnum[]
  }

  /**
   * AdditionalService findFirstOrThrow
   */
  export type AdditionalServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalService to fetch.
     */
    where?: AdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalServices to fetch.
     */
    orderBy?: AdditionalServiceOrderByWithRelationInput | AdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdditionalServices.
     */
    cursor?: AdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdditionalServices.
     */
    distinct?: AdditionalServiceScalarFieldEnum | AdditionalServiceScalarFieldEnum[]
  }

  /**
   * AdditionalService findMany
   */
  export type AdditionalServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalServices to fetch.
     */
    where?: AdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalServices to fetch.
     */
    orderBy?: AdditionalServiceOrderByWithRelationInput | AdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdditionalServices.
     */
    cursor?: AdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalServices.
     */
    skip?: number
    distinct?: AdditionalServiceScalarFieldEnum | AdditionalServiceScalarFieldEnum[]
  }

  /**
   * AdditionalService create
   */
  export type AdditionalServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a AdditionalService.
     */
    data: XOR<AdditionalServiceCreateInput, AdditionalServiceUncheckedCreateInput>
  }

  /**
   * AdditionalService createMany
   */
  export type AdditionalServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdditionalServices.
     */
    data: AdditionalServiceCreateManyInput | AdditionalServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdditionalService createManyAndReturn
   */
  export type AdditionalServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * The data used to create many AdditionalServices.
     */
    data: AdditionalServiceCreateManyInput | AdditionalServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdditionalService update
   */
  export type AdditionalServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a AdditionalService.
     */
    data: XOR<AdditionalServiceUpdateInput, AdditionalServiceUncheckedUpdateInput>
    /**
     * Choose, which AdditionalService to update.
     */
    where: AdditionalServiceWhereUniqueInput
  }

  /**
   * AdditionalService updateMany
   */
  export type AdditionalServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdditionalServices.
     */
    data: XOR<AdditionalServiceUpdateManyMutationInput, AdditionalServiceUncheckedUpdateManyInput>
    /**
     * Filter which AdditionalServices to update
     */
    where?: AdditionalServiceWhereInput
    /**
     * Limit how many AdditionalServices to update.
     */
    limit?: number
  }

  /**
   * AdditionalService updateManyAndReturn
   */
  export type AdditionalServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * The data used to update AdditionalServices.
     */
    data: XOR<AdditionalServiceUpdateManyMutationInput, AdditionalServiceUncheckedUpdateManyInput>
    /**
     * Filter which AdditionalServices to update
     */
    where?: AdditionalServiceWhereInput
    /**
     * Limit how many AdditionalServices to update.
     */
    limit?: number
  }

  /**
   * AdditionalService upsert
   */
  export type AdditionalServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the AdditionalService to update in case it exists.
     */
    where: AdditionalServiceWhereUniqueInput
    /**
     * In case the AdditionalService found by the `where` argument doesn't exist, create a new AdditionalService with this data.
     */
    create: XOR<AdditionalServiceCreateInput, AdditionalServiceUncheckedCreateInput>
    /**
     * In case the AdditionalService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdditionalServiceUpdateInput, AdditionalServiceUncheckedUpdateInput>
  }

  /**
   * AdditionalService delete
   */
  export type AdditionalServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter which AdditionalService to delete.
     */
    where: AdditionalServiceWhereUniqueInput
  }

  /**
   * AdditionalService deleteMany
   */
  export type AdditionalServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdditionalServices to delete
     */
    where?: AdditionalServiceWhereInput
    /**
     * Limit how many AdditionalServices to delete.
     */
    limit?: number
  }

  /**
   * AdditionalService.projectAdditionalServices
   */
  export type AdditionalService$projectAdditionalServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    where?: ProjectAdditionalServiceWhereInput
    orderBy?: ProjectAdditionalServiceOrderByWithRelationInput | ProjectAdditionalServiceOrderByWithRelationInput[]
    cursor?: ProjectAdditionalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAdditionalServiceScalarFieldEnum | ProjectAdditionalServiceScalarFieldEnum[]
  }

  /**
   * AdditionalService without action
   */
  export type AdditionalServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalService
     */
    select?: AdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdditionalService
     */
    omit?: AdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdditionalServiceInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    timelineModifier: Decimal | null
    estimatedMin: number | null
    estimatedMax: number | null
    finalPrice: number | null
    bundleDiscount: number | null
    budgetRangeMin: number | null
    budgetRangeMax: number | null
    revisionCount: number | null
    maxRevisions: number | null
  }

  export type ProjectSumAggregateOutputType = {
    timelineModifier: Decimal | null
    estimatedMin: number | null
    estimatedMax: number | null
    finalPrice: number | null
    bundleDiscount: number | null
    budgetRangeMin: number | null
    budgetRangeMax: number | null
    revisionCount: number | null
    maxRevisions: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    referenceId: string | null
    clientId: string | null
    projectName: string | null
    description: string | null
    projectType: $Enums.ProjectType | null
    status: $Enums.ProjectStatus | null
    timeline: $Enums.TimelineType | null
    timelineModifier: Decimal | null
    estimatedMin: number | null
    estimatedMax: number | null
    finalPrice: number | null
    bundleDiscount: number | null
    budgetRangeMin: number | null
    budgetRangeMax: number | null
    submittedAt: Date | null
    reviewedAt: Date | null
    dealingStartAt: Date | null
    startDate: Date | null
    estimatedCompletion: Date | null
    completedAt: Date | null
    cancelledAt: Date | null
    revisionCount: number | null
    maxRevisions: number | null
    additionalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    referenceId: string | null
    clientId: string | null
    projectName: string | null
    description: string | null
    projectType: $Enums.ProjectType | null
    status: $Enums.ProjectStatus | null
    timeline: $Enums.TimelineType | null
    timelineModifier: Decimal | null
    estimatedMin: number | null
    estimatedMax: number | null
    finalPrice: number | null
    bundleDiscount: number | null
    budgetRangeMin: number | null
    budgetRangeMax: number | null
    submittedAt: Date | null
    reviewedAt: Date | null
    dealingStartAt: Date | null
    startDate: Date | null
    estimatedCompletion: Date | null
    completedAt: Date | null
    cancelledAt: Date | null
    revisionCount: number | null
    maxRevisions: number | null
    additionalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    referenceId: number
    clientId: number
    projectName: number
    description: number
    projectType: number
    status: number
    timeline: number
    timelineModifier: number
    estimatedMin: number
    estimatedMax: number
    finalPrice: number
    bundleDiscount: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt: number
    reviewedAt: number
    dealingStartAt: number
    startDate: number
    estimatedCompletion: number
    completedAt: number
    cancelledAt: number
    revisionCount: number
    maxRevisions: number
    additionalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    timelineModifier?: true
    estimatedMin?: true
    estimatedMax?: true
    finalPrice?: true
    bundleDiscount?: true
    budgetRangeMin?: true
    budgetRangeMax?: true
    revisionCount?: true
    maxRevisions?: true
  }

  export type ProjectSumAggregateInputType = {
    timelineModifier?: true
    estimatedMin?: true
    estimatedMax?: true
    finalPrice?: true
    bundleDiscount?: true
    budgetRangeMin?: true
    budgetRangeMax?: true
    revisionCount?: true
    maxRevisions?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    referenceId?: true
    clientId?: true
    projectName?: true
    description?: true
    projectType?: true
    status?: true
    timeline?: true
    timelineModifier?: true
    estimatedMin?: true
    estimatedMax?: true
    finalPrice?: true
    bundleDiscount?: true
    budgetRangeMin?: true
    budgetRangeMax?: true
    submittedAt?: true
    reviewedAt?: true
    dealingStartAt?: true
    startDate?: true
    estimatedCompletion?: true
    completedAt?: true
    cancelledAt?: true
    revisionCount?: true
    maxRevisions?: true
    additionalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    referenceId?: true
    clientId?: true
    projectName?: true
    description?: true
    projectType?: true
    status?: true
    timeline?: true
    timelineModifier?: true
    estimatedMin?: true
    estimatedMax?: true
    finalPrice?: true
    bundleDiscount?: true
    budgetRangeMin?: true
    budgetRangeMax?: true
    submittedAt?: true
    reviewedAt?: true
    dealingStartAt?: true
    startDate?: true
    estimatedCompletion?: true
    completedAt?: true
    cancelledAt?: true
    revisionCount?: true
    maxRevisions?: true
    additionalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    referenceId?: true
    clientId?: true
    projectName?: true
    description?: true
    projectType?: true
    status?: true
    timeline?: true
    timelineModifier?: true
    estimatedMin?: true
    estimatedMax?: true
    finalPrice?: true
    bundleDiscount?: true
    budgetRangeMin?: true
    budgetRangeMax?: true
    submittedAt?: true
    reviewedAt?: true
    dealingStartAt?: true
    startDate?: true
    estimatedCompletion?: true
    completedAt?: true
    cancelledAt?: true
    revisionCount?: true
    maxRevisions?: true
    additionalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType: $Enums.ProjectType
    status: $Enums.ProjectStatus
    timeline: $Enums.TimelineType
    timelineModifier: Decimal
    estimatedMin: number
    estimatedMax: number
    finalPrice: number | null
    bundleDiscount: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt: Date
    reviewedAt: Date | null
    dealingStartAt: Date | null
    startDate: Date | null
    estimatedCompletion: Date | null
    completedAt: Date | null
    cancelledAt: Date | null
    revisionCount: number
    maxRevisions: number
    additionalNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    clientId?: boolean
    projectName?: boolean
    description?: boolean
    projectType?: boolean
    status?: boolean
    timeline?: boolean
    timelineModifier?: boolean
    estimatedMin?: boolean
    estimatedMax?: boolean
    finalPrice?: boolean
    bundleDiscount?: boolean
    budgetRangeMin?: boolean
    budgetRangeMax?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    dealingStartAt?: boolean
    startDate?: boolean
    estimatedCompletion?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    revisionCount?: boolean
    maxRevisions?: boolean
    additionalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    projectServices?: boolean | Project$projectServicesArgs<ExtArgs>
    projectAdditionalServices?: boolean | Project$projectAdditionalServicesArgs<ExtArgs>
    payments?: boolean | Project$paymentsArgs<ExtArgs>
    files?: boolean | Project$filesArgs<ExtArgs>
    activities?: boolean | Project$activitiesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    clientId?: boolean
    projectName?: boolean
    description?: boolean
    projectType?: boolean
    status?: boolean
    timeline?: boolean
    timelineModifier?: boolean
    estimatedMin?: boolean
    estimatedMax?: boolean
    finalPrice?: boolean
    bundleDiscount?: boolean
    budgetRangeMin?: boolean
    budgetRangeMax?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    dealingStartAt?: boolean
    startDate?: boolean
    estimatedCompletion?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    revisionCount?: boolean
    maxRevisions?: boolean
    additionalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    clientId?: boolean
    projectName?: boolean
    description?: boolean
    projectType?: boolean
    status?: boolean
    timeline?: boolean
    timelineModifier?: boolean
    estimatedMin?: boolean
    estimatedMax?: boolean
    finalPrice?: boolean
    bundleDiscount?: boolean
    budgetRangeMin?: boolean
    budgetRangeMax?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    dealingStartAt?: boolean
    startDate?: boolean
    estimatedCompletion?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    revisionCount?: boolean
    maxRevisions?: boolean
    additionalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    referenceId?: boolean
    clientId?: boolean
    projectName?: boolean
    description?: boolean
    projectType?: boolean
    status?: boolean
    timeline?: boolean
    timelineModifier?: boolean
    estimatedMin?: boolean
    estimatedMax?: boolean
    finalPrice?: boolean
    bundleDiscount?: boolean
    budgetRangeMin?: boolean
    budgetRangeMax?: boolean
    submittedAt?: boolean
    reviewedAt?: boolean
    dealingStartAt?: boolean
    startDate?: boolean
    estimatedCompletion?: boolean
    completedAt?: boolean
    cancelledAt?: boolean
    revisionCount?: boolean
    maxRevisions?: boolean
    additionalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceId" | "clientId" | "projectName" | "description" | "projectType" | "status" | "timeline" | "timelineModifier" | "estimatedMin" | "estimatedMax" | "finalPrice" | "bundleDiscount" | "budgetRangeMin" | "budgetRangeMax" | "submittedAt" | "reviewedAt" | "dealingStartAt" | "startDate" | "estimatedCompletion" | "completedAt" | "cancelledAt" | "revisionCount" | "maxRevisions" | "additionalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    projectServices?: boolean | Project$projectServicesArgs<ExtArgs>
    projectAdditionalServices?: boolean | Project$projectAdditionalServicesArgs<ExtArgs>
    payments?: boolean | Project$paymentsArgs<ExtArgs>
    files?: boolean | Project$filesArgs<ExtArgs>
    activities?: boolean | Project$activitiesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      projectServices: Prisma.$ProjectServicePayload<ExtArgs>[]
      projectAdditionalServices: Prisma.$ProjectAdditionalServicePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      files: Prisma.$ProjectFilePayload<ExtArgs>[]
      activities: Prisma.$ProjectActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceId: string
      clientId: string
      projectName: string
      description: string
      projectType: $Enums.ProjectType
      status: $Enums.ProjectStatus
      timeline: $Enums.TimelineType
      timelineModifier: Prisma.Decimal
      estimatedMin: number
      estimatedMax: number
      finalPrice: number | null
      bundleDiscount: number
      budgetRangeMin: number
      budgetRangeMax: number
      submittedAt: Date
      reviewedAt: Date | null
      dealingStartAt: Date | null
      startDate: Date | null
      estimatedCompletion: Date | null
      completedAt: Date | null
      cancelledAt: Date | null
      revisionCount: number
      maxRevisions: number
      additionalNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectServices<T extends Project$projectServicesArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectAdditionalServices<T extends Project$projectAdditionalServicesArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectAdditionalServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Project$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Project$filesArgs<ExtArgs> = {}>(args?: Subset<T, Project$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Project$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly referenceId: FieldRef<"Project", 'String'>
    readonly clientId: FieldRef<"Project", 'String'>
    readonly projectName: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly projectType: FieldRef<"Project", 'ProjectType'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly timeline: FieldRef<"Project", 'TimelineType'>
    readonly timelineModifier: FieldRef<"Project", 'Decimal'>
    readonly estimatedMin: FieldRef<"Project", 'Int'>
    readonly estimatedMax: FieldRef<"Project", 'Int'>
    readonly finalPrice: FieldRef<"Project", 'Int'>
    readonly bundleDiscount: FieldRef<"Project", 'Int'>
    readonly budgetRangeMin: FieldRef<"Project", 'Int'>
    readonly budgetRangeMax: FieldRef<"Project", 'Int'>
    readonly submittedAt: FieldRef<"Project", 'DateTime'>
    readonly reviewedAt: FieldRef<"Project", 'DateTime'>
    readonly dealingStartAt: FieldRef<"Project", 'DateTime'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly estimatedCompletion: FieldRef<"Project", 'DateTime'>
    readonly completedAt: FieldRef<"Project", 'DateTime'>
    readonly cancelledAt: FieldRef<"Project", 'DateTime'>
    readonly revisionCount: FieldRef<"Project", 'Int'>
    readonly maxRevisions: FieldRef<"Project", 'Int'>
    readonly additionalNotes: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.projectServices
   */
  export type Project$projectServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    where?: ProjectServiceWhereInput
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    cursor?: ProjectServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectServiceScalarFieldEnum | ProjectServiceScalarFieldEnum[]
  }

  /**
   * Project.projectAdditionalServices
   */
  export type Project$projectAdditionalServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    where?: ProjectAdditionalServiceWhereInput
    orderBy?: ProjectAdditionalServiceOrderByWithRelationInput | ProjectAdditionalServiceOrderByWithRelationInput[]
    cursor?: ProjectAdditionalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectAdditionalServiceScalarFieldEnum | ProjectAdditionalServiceScalarFieldEnum[]
  }

  /**
   * Project.payments
   */
  export type Project$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Project.files
   */
  export type Project$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    where?: ProjectFileWhereInput
    orderBy?: ProjectFileOrderByWithRelationInput | ProjectFileOrderByWithRelationInput[]
    cursor?: ProjectFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectFileScalarFieldEnum | ProjectFileScalarFieldEnum[]
  }

  /**
   * Project.activities
   */
  export type Project$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    cursor?: ProjectActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectService
   */

  export type AggregateProjectService = {
    _count: ProjectServiceCountAggregateOutputType | null
    _avg: ProjectServiceAvgAggregateOutputType | null
    _sum: ProjectServiceSumAggregateOutputType | null
    _min: ProjectServiceMinAggregateOutputType | null
    _max: ProjectServiceMaxAggregateOutputType | null
  }

  export type ProjectServiceAvgAggregateOutputType = {
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
  }

  export type ProjectServiceSumAggregateOutputType = {
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
  }

  export type ProjectServiceMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    serviceId: string | null
    complexityOptionId: string | null
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
    createdAt: Date | null
  }

  export type ProjectServiceMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    serviceId: string | null
    complexityOptionId: string | null
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
    createdAt: Date | null
  }

  export type ProjectServiceCountAggregateOutputType = {
    id: number
    projectId: number
    serviceId: number
    complexityOptionId: number
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt: number
    _all: number
  }


  export type ProjectServiceAvgAggregateInputType = {
    selectedMinPrice?: true
    selectedMaxPrice?: true
  }

  export type ProjectServiceSumAggregateInputType = {
    selectedMinPrice?: true
    selectedMaxPrice?: true
  }

  export type ProjectServiceMinAggregateInputType = {
    id?: true
    projectId?: true
    serviceId?: true
    complexityOptionId?: true
    selectedMinPrice?: true
    selectedMaxPrice?: true
    createdAt?: true
  }

  export type ProjectServiceMaxAggregateInputType = {
    id?: true
    projectId?: true
    serviceId?: true
    complexityOptionId?: true
    selectedMinPrice?: true
    selectedMaxPrice?: true
    createdAt?: true
  }

  export type ProjectServiceCountAggregateInputType = {
    id?: true
    projectId?: true
    serviceId?: true
    complexityOptionId?: true
    selectedMinPrice?: true
    selectedMaxPrice?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectService to aggregate.
     */
    where?: ProjectServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectServices to fetch.
     */
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectServices
    **/
    _count?: true | ProjectServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectServiceMaxAggregateInputType
  }

  export type GetProjectServiceAggregateType<T extends ProjectServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectService[P]>
      : GetScalarType<T[P], AggregateProjectService[P]>
  }




  export type ProjectServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectServiceWhereInput
    orderBy?: ProjectServiceOrderByWithAggregationInput | ProjectServiceOrderByWithAggregationInput[]
    by: ProjectServiceScalarFieldEnum[] | ProjectServiceScalarFieldEnum
    having?: ProjectServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectServiceCountAggregateInputType | true
    _avg?: ProjectServiceAvgAggregateInputType
    _sum?: ProjectServiceSumAggregateInputType
    _min?: ProjectServiceMinAggregateInputType
    _max?: ProjectServiceMaxAggregateInputType
  }

  export type ProjectServiceGroupByOutputType = {
    id: string
    projectId: string
    serviceId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt: Date
    _count: ProjectServiceCountAggregateOutputType | null
    _avg: ProjectServiceAvgAggregateOutputType | null
    _sum: ProjectServiceSumAggregateOutputType | null
    _min: ProjectServiceMinAggregateOutputType | null
    _max: ProjectServiceMaxAggregateOutputType | null
  }

  type GetProjectServiceGroupByPayload<T extends ProjectServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectServiceGroupByOutputType[P]>
        }
      >
    >


  export type ProjectServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    serviceId?: boolean
    complexityOptionId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    complexityOption?: boolean | ComplexityOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectService"]>

  export type ProjectServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    serviceId?: boolean
    complexityOptionId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    complexityOption?: boolean | ComplexityOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectService"]>

  export type ProjectServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    serviceId?: boolean
    complexityOptionId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    complexityOption?: boolean | ComplexityOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectService"]>

  export type ProjectServiceSelectScalar = {
    id?: boolean
    projectId?: boolean
    serviceId?: boolean
    complexityOptionId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
  }

  export type ProjectServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "serviceId" | "complexityOptionId" | "selectedMinPrice" | "selectedMaxPrice" | "createdAt", ExtArgs["result"]["projectService"]>
  export type ProjectServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    complexityOption?: boolean | ComplexityOptionDefaultArgs<ExtArgs>
  }
  export type ProjectServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    complexityOption?: boolean | ComplexityOptionDefaultArgs<ExtArgs>
  }
  export type ProjectServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    complexityOption?: boolean | ComplexityOptionDefaultArgs<ExtArgs>
  }

  export type $ProjectServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectService"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      complexityOption: Prisma.$ComplexityOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      serviceId: string
      complexityOptionId: string
      selectedMinPrice: number
      selectedMaxPrice: number
      createdAt: Date
    }, ExtArgs["result"]["projectService"]>
    composites: {}
  }

  type ProjectServiceGetPayload<S extends boolean | null | undefined | ProjectServiceDefaultArgs> = $Result.GetResult<Prisma.$ProjectServicePayload, S>

  type ProjectServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectServiceCountAggregateInputType | true
    }

  export interface ProjectServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectService'], meta: { name: 'ProjectService' } }
    /**
     * Find zero or one ProjectService that matches the filter.
     * @param {ProjectServiceFindUniqueArgs} args - Arguments to find a ProjectService
     * @example
     * // Get one ProjectService
     * const projectService = await prisma.projectService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectServiceFindUniqueArgs>(args: SelectSubset<T, ProjectServiceFindUniqueArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectServiceFindUniqueOrThrowArgs} args - Arguments to find a ProjectService
     * @example
     * // Get one ProjectService
     * const projectService = await prisma.projectService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceFindFirstArgs} args - Arguments to find a ProjectService
     * @example
     * // Get one ProjectService
     * const projectService = await prisma.projectService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectServiceFindFirstArgs>(args?: SelectSubset<T, ProjectServiceFindFirstArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceFindFirstOrThrowArgs} args - Arguments to find a ProjectService
     * @example
     * // Get one ProjectService
     * const projectService = await prisma.projectService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectServices
     * const projectServices = await prisma.projectService.findMany()
     * 
     * // Get first 10 ProjectServices
     * const projectServices = await prisma.projectService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectServiceWithIdOnly = await prisma.projectService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectServiceFindManyArgs>(args?: SelectSubset<T, ProjectServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectService.
     * @param {ProjectServiceCreateArgs} args - Arguments to create a ProjectService.
     * @example
     * // Create one ProjectService
     * const ProjectService = await prisma.projectService.create({
     *   data: {
     *     // ... data to create a ProjectService
     *   }
     * })
     * 
     */
    create<T extends ProjectServiceCreateArgs>(args: SelectSubset<T, ProjectServiceCreateArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectServices.
     * @param {ProjectServiceCreateManyArgs} args - Arguments to create many ProjectServices.
     * @example
     * // Create many ProjectServices
     * const projectService = await prisma.projectService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectServiceCreateManyArgs>(args?: SelectSubset<T, ProjectServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectServices and returns the data saved in the database.
     * @param {ProjectServiceCreateManyAndReturnArgs} args - Arguments to create many ProjectServices.
     * @example
     * // Create many ProjectServices
     * const projectService = await prisma.projectService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectServices and only return the `id`
     * const projectServiceWithIdOnly = await prisma.projectService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectService.
     * @param {ProjectServiceDeleteArgs} args - Arguments to delete one ProjectService.
     * @example
     * // Delete one ProjectService
     * const ProjectService = await prisma.projectService.delete({
     *   where: {
     *     // ... filter to delete one ProjectService
     *   }
     * })
     * 
     */
    delete<T extends ProjectServiceDeleteArgs>(args: SelectSubset<T, ProjectServiceDeleteArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectService.
     * @param {ProjectServiceUpdateArgs} args - Arguments to update one ProjectService.
     * @example
     * // Update one ProjectService
     * const projectService = await prisma.projectService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectServiceUpdateArgs>(args: SelectSubset<T, ProjectServiceUpdateArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectServices.
     * @param {ProjectServiceDeleteManyArgs} args - Arguments to filter ProjectServices to delete.
     * @example
     * // Delete a few ProjectServices
     * const { count } = await prisma.projectService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectServiceDeleteManyArgs>(args?: SelectSubset<T, ProjectServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectServices
     * const projectService = await prisma.projectService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectServiceUpdateManyArgs>(args: SelectSubset<T, ProjectServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectServices and returns the data updated in the database.
     * @param {ProjectServiceUpdateManyAndReturnArgs} args - Arguments to update many ProjectServices.
     * @example
     * // Update many ProjectServices
     * const projectService = await prisma.projectService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectServices and only return the `id`
     * const projectServiceWithIdOnly = await prisma.projectService.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectService.
     * @param {ProjectServiceUpsertArgs} args - Arguments to update or create a ProjectService.
     * @example
     * // Update or create a ProjectService
     * const projectService = await prisma.projectService.upsert({
     *   create: {
     *     // ... data to create a ProjectService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectService we want to update
     *   }
     * })
     */
    upsert<T extends ProjectServiceUpsertArgs>(args: SelectSubset<T, ProjectServiceUpsertArgs<ExtArgs>>): Prisma__ProjectServiceClient<$Result.GetResult<Prisma.$ProjectServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceCountArgs} args - Arguments to filter ProjectServices to count.
     * @example
     * // Count the number of ProjectServices
     * const count = await prisma.projectService.count({
     *   where: {
     *     // ... the filter for the ProjectServices we want to count
     *   }
     * })
    **/
    count<T extends ProjectServiceCountArgs>(
      args?: Subset<T, ProjectServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectServiceAggregateArgs>(args: Subset<T, ProjectServiceAggregateArgs>): Prisma.PrismaPromise<GetProjectServiceAggregateType<T>>

    /**
     * Group by ProjectService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectServiceGroupByArgs} args - Group by arguments.
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
      T extends ProjectServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectServiceGroupByArgs['orderBy'] }
        : { orderBy?: ProjectServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectService model
   */
  readonly fields: ProjectServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    complexityOption<T extends ComplexityOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComplexityOptionDefaultArgs<ExtArgs>>): Prisma__ComplexityOptionClient<$Result.GetResult<Prisma.$ComplexityOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectService model
   */
  interface ProjectServiceFieldRefs {
    readonly id: FieldRef<"ProjectService", 'String'>
    readonly projectId: FieldRef<"ProjectService", 'String'>
    readonly serviceId: FieldRef<"ProjectService", 'String'>
    readonly complexityOptionId: FieldRef<"ProjectService", 'String'>
    readonly selectedMinPrice: FieldRef<"ProjectService", 'Int'>
    readonly selectedMaxPrice: FieldRef<"ProjectService", 'Int'>
    readonly createdAt: FieldRef<"ProjectService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectService findUnique
   */
  export type ProjectServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectService to fetch.
     */
    where: ProjectServiceWhereUniqueInput
  }

  /**
   * ProjectService findUniqueOrThrow
   */
  export type ProjectServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectService to fetch.
     */
    where: ProjectServiceWhereUniqueInput
  }

  /**
   * ProjectService findFirst
   */
  export type ProjectServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectService to fetch.
     */
    where?: ProjectServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectServices to fetch.
     */
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectServices.
     */
    cursor?: ProjectServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectServices.
     */
    distinct?: ProjectServiceScalarFieldEnum | ProjectServiceScalarFieldEnum[]
  }

  /**
   * ProjectService findFirstOrThrow
   */
  export type ProjectServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectService to fetch.
     */
    where?: ProjectServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectServices to fetch.
     */
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectServices.
     */
    cursor?: ProjectServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectServices.
     */
    distinct?: ProjectServiceScalarFieldEnum | ProjectServiceScalarFieldEnum[]
  }

  /**
   * ProjectService findMany
   */
  export type ProjectServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectServices to fetch.
     */
    where?: ProjectServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectServices to fetch.
     */
    orderBy?: ProjectServiceOrderByWithRelationInput | ProjectServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectServices.
     */
    cursor?: ProjectServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectServices.
     */
    skip?: number
    distinct?: ProjectServiceScalarFieldEnum | ProjectServiceScalarFieldEnum[]
  }

  /**
   * ProjectService create
   */
  export type ProjectServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectService.
     */
    data: XOR<ProjectServiceCreateInput, ProjectServiceUncheckedCreateInput>
  }

  /**
   * ProjectService createMany
   */
  export type ProjectServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectServices.
     */
    data: ProjectServiceCreateManyInput | ProjectServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectService createManyAndReturn
   */
  export type ProjectServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectServices.
     */
    data: ProjectServiceCreateManyInput | ProjectServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectService update
   */
  export type ProjectServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectService.
     */
    data: XOR<ProjectServiceUpdateInput, ProjectServiceUncheckedUpdateInput>
    /**
     * Choose, which ProjectService to update.
     */
    where: ProjectServiceWhereUniqueInput
  }

  /**
   * ProjectService updateMany
   */
  export type ProjectServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectServices.
     */
    data: XOR<ProjectServiceUpdateManyMutationInput, ProjectServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProjectServices to update
     */
    where?: ProjectServiceWhereInput
    /**
     * Limit how many ProjectServices to update.
     */
    limit?: number
  }

  /**
   * ProjectService updateManyAndReturn
   */
  export type ProjectServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * The data used to update ProjectServices.
     */
    data: XOR<ProjectServiceUpdateManyMutationInput, ProjectServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProjectServices to update
     */
    where?: ProjectServiceWhereInput
    /**
     * Limit how many ProjectServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectService upsert
   */
  export type ProjectServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectService to update in case it exists.
     */
    where: ProjectServiceWhereUniqueInput
    /**
     * In case the ProjectService found by the `where` argument doesn't exist, create a new ProjectService with this data.
     */
    create: XOR<ProjectServiceCreateInput, ProjectServiceUncheckedCreateInput>
    /**
     * In case the ProjectService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectServiceUpdateInput, ProjectServiceUncheckedUpdateInput>
  }

  /**
   * ProjectService delete
   */
  export type ProjectServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
    /**
     * Filter which ProjectService to delete.
     */
    where: ProjectServiceWhereUniqueInput
  }

  /**
   * ProjectService deleteMany
   */
  export type ProjectServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectServices to delete
     */
    where?: ProjectServiceWhereInput
    /**
     * Limit how many ProjectServices to delete.
     */
    limit?: number
  }

  /**
   * ProjectService without action
   */
  export type ProjectServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectService
     */
    select?: ProjectServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectService
     */
    omit?: ProjectServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectServiceInclude<ExtArgs> | null
  }


  /**
   * Model ProjectAdditionalService
   */

  export type AggregateProjectAdditionalService = {
    _count: ProjectAdditionalServiceCountAggregateOutputType | null
    _avg: ProjectAdditionalServiceAvgAggregateOutputType | null
    _sum: ProjectAdditionalServiceSumAggregateOutputType | null
    _min: ProjectAdditionalServiceMinAggregateOutputType | null
    _max: ProjectAdditionalServiceMaxAggregateOutputType | null
  }

  export type ProjectAdditionalServiceAvgAggregateOutputType = {
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
  }

  export type ProjectAdditionalServiceSumAggregateOutputType = {
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
  }

  export type ProjectAdditionalServiceMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    additionalServiceId: string | null
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
    createdAt: Date | null
  }

  export type ProjectAdditionalServiceMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    additionalServiceId: string | null
    selectedMinPrice: number | null
    selectedMaxPrice: number | null
    createdAt: Date | null
  }

  export type ProjectAdditionalServiceCountAggregateOutputType = {
    id: number
    projectId: number
    additionalServiceId: number
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt: number
    _all: number
  }


  export type ProjectAdditionalServiceAvgAggregateInputType = {
    selectedMinPrice?: true
    selectedMaxPrice?: true
  }

  export type ProjectAdditionalServiceSumAggregateInputType = {
    selectedMinPrice?: true
    selectedMaxPrice?: true
  }

  export type ProjectAdditionalServiceMinAggregateInputType = {
    id?: true
    projectId?: true
    additionalServiceId?: true
    selectedMinPrice?: true
    selectedMaxPrice?: true
    createdAt?: true
  }

  export type ProjectAdditionalServiceMaxAggregateInputType = {
    id?: true
    projectId?: true
    additionalServiceId?: true
    selectedMinPrice?: true
    selectedMaxPrice?: true
    createdAt?: true
  }

  export type ProjectAdditionalServiceCountAggregateInputType = {
    id?: true
    projectId?: true
    additionalServiceId?: true
    selectedMinPrice?: true
    selectedMaxPrice?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAdditionalServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAdditionalService to aggregate.
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAdditionalServices to fetch.
     */
    orderBy?: ProjectAdditionalServiceOrderByWithRelationInput | ProjectAdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectAdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAdditionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectAdditionalServices
    **/
    _count?: true | ProjectAdditionalServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAdditionalServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectAdditionalServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectAdditionalServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectAdditionalServiceMaxAggregateInputType
  }

  export type GetProjectAdditionalServiceAggregateType<T extends ProjectAdditionalServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectAdditionalService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectAdditionalService[P]>
      : GetScalarType<T[P], AggregateProjectAdditionalService[P]>
  }




  export type ProjectAdditionalServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectAdditionalServiceWhereInput
    orderBy?: ProjectAdditionalServiceOrderByWithAggregationInput | ProjectAdditionalServiceOrderByWithAggregationInput[]
    by: ProjectAdditionalServiceScalarFieldEnum[] | ProjectAdditionalServiceScalarFieldEnum
    having?: ProjectAdditionalServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectAdditionalServiceCountAggregateInputType | true
    _avg?: ProjectAdditionalServiceAvgAggregateInputType
    _sum?: ProjectAdditionalServiceSumAggregateInputType
    _min?: ProjectAdditionalServiceMinAggregateInputType
    _max?: ProjectAdditionalServiceMaxAggregateInputType
  }

  export type ProjectAdditionalServiceGroupByOutputType = {
    id: string
    projectId: string
    additionalServiceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt: Date
    _count: ProjectAdditionalServiceCountAggregateOutputType | null
    _avg: ProjectAdditionalServiceAvgAggregateOutputType | null
    _sum: ProjectAdditionalServiceSumAggregateOutputType | null
    _min: ProjectAdditionalServiceMinAggregateOutputType | null
    _max: ProjectAdditionalServiceMaxAggregateOutputType | null
  }

  type GetProjectAdditionalServiceGroupByPayload<T extends ProjectAdditionalServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectAdditionalServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectAdditionalServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectAdditionalServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectAdditionalServiceGroupByOutputType[P]>
        }
      >
    >


  export type ProjectAdditionalServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    additionalServiceId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    additionalService?: boolean | AdditionalServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAdditionalService"]>

  export type ProjectAdditionalServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    additionalServiceId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    additionalService?: boolean | AdditionalServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAdditionalService"]>

  export type ProjectAdditionalServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    additionalServiceId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    additionalService?: boolean | AdditionalServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectAdditionalService"]>

  export type ProjectAdditionalServiceSelectScalar = {
    id?: boolean
    projectId?: boolean
    additionalServiceId?: boolean
    selectedMinPrice?: boolean
    selectedMaxPrice?: boolean
    createdAt?: boolean
  }

  export type ProjectAdditionalServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "additionalServiceId" | "selectedMinPrice" | "selectedMaxPrice" | "createdAt", ExtArgs["result"]["projectAdditionalService"]>
  export type ProjectAdditionalServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    additionalService?: boolean | AdditionalServiceDefaultArgs<ExtArgs>
  }
  export type ProjectAdditionalServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    additionalService?: boolean | AdditionalServiceDefaultArgs<ExtArgs>
  }
  export type ProjectAdditionalServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    additionalService?: boolean | AdditionalServiceDefaultArgs<ExtArgs>
  }

  export type $ProjectAdditionalServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectAdditionalService"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      additionalService: Prisma.$AdditionalServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      additionalServiceId: string
      selectedMinPrice: number
      selectedMaxPrice: number
      createdAt: Date
    }, ExtArgs["result"]["projectAdditionalService"]>
    composites: {}
  }

  type ProjectAdditionalServiceGetPayload<S extends boolean | null | undefined | ProjectAdditionalServiceDefaultArgs> = $Result.GetResult<Prisma.$ProjectAdditionalServicePayload, S>

  type ProjectAdditionalServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectAdditionalServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectAdditionalServiceCountAggregateInputType | true
    }

  export interface ProjectAdditionalServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectAdditionalService'], meta: { name: 'ProjectAdditionalService' } }
    /**
     * Find zero or one ProjectAdditionalService that matches the filter.
     * @param {ProjectAdditionalServiceFindUniqueArgs} args - Arguments to find a ProjectAdditionalService
     * @example
     * // Get one ProjectAdditionalService
     * const projectAdditionalService = await prisma.projectAdditionalService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectAdditionalServiceFindUniqueArgs>(args: SelectSubset<T, ProjectAdditionalServiceFindUniqueArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectAdditionalService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectAdditionalServiceFindUniqueOrThrowArgs} args - Arguments to find a ProjectAdditionalService
     * @example
     * // Get one ProjectAdditionalService
     * const projectAdditionalService = await prisma.projectAdditionalService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectAdditionalServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectAdditionalServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAdditionalService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceFindFirstArgs} args - Arguments to find a ProjectAdditionalService
     * @example
     * // Get one ProjectAdditionalService
     * const projectAdditionalService = await prisma.projectAdditionalService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectAdditionalServiceFindFirstArgs>(args?: SelectSubset<T, ProjectAdditionalServiceFindFirstArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectAdditionalService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceFindFirstOrThrowArgs} args - Arguments to find a ProjectAdditionalService
     * @example
     * // Get one ProjectAdditionalService
     * const projectAdditionalService = await prisma.projectAdditionalService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectAdditionalServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectAdditionalServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectAdditionalServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectAdditionalServices
     * const projectAdditionalServices = await prisma.projectAdditionalService.findMany()
     * 
     * // Get first 10 ProjectAdditionalServices
     * const projectAdditionalServices = await prisma.projectAdditionalService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectAdditionalServiceWithIdOnly = await prisma.projectAdditionalService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectAdditionalServiceFindManyArgs>(args?: SelectSubset<T, ProjectAdditionalServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectAdditionalService.
     * @param {ProjectAdditionalServiceCreateArgs} args - Arguments to create a ProjectAdditionalService.
     * @example
     * // Create one ProjectAdditionalService
     * const ProjectAdditionalService = await prisma.projectAdditionalService.create({
     *   data: {
     *     // ... data to create a ProjectAdditionalService
     *   }
     * })
     * 
     */
    create<T extends ProjectAdditionalServiceCreateArgs>(args: SelectSubset<T, ProjectAdditionalServiceCreateArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectAdditionalServices.
     * @param {ProjectAdditionalServiceCreateManyArgs} args - Arguments to create many ProjectAdditionalServices.
     * @example
     * // Create many ProjectAdditionalServices
     * const projectAdditionalService = await prisma.projectAdditionalService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectAdditionalServiceCreateManyArgs>(args?: SelectSubset<T, ProjectAdditionalServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectAdditionalServices and returns the data saved in the database.
     * @param {ProjectAdditionalServiceCreateManyAndReturnArgs} args - Arguments to create many ProjectAdditionalServices.
     * @example
     * // Create many ProjectAdditionalServices
     * const projectAdditionalService = await prisma.projectAdditionalService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectAdditionalServices and only return the `id`
     * const projectAdditionalServiceWithIdOnly = await prisma.projectAdditionalService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectAdditionalServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectAdditionalServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectAdditionalService.
     * @param {ProjectAdditionalServiceDeleteArgs} args - Arguments to delete one ProjectAdditionalService.
     * @example
     * // Delete one ProjectAdditionalService
     * const ProjectAdditionalService = await prisma.projectAdditionalService.delete({
     *   where: {
     *     // ... filter to delete one ProjectAdditionalService
     *   }
     * })
     * 
     */
    delete<T extends ProjectAdditionalServiceDeleteArgs>(args: SelectSubset<T, ProjectAdditionalServiceDeleteArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectAdditionalService.
     * @param {ProjectAdditionalServiceUpdateArgs} args - Arguments to update one ProjectAdditionalService.
     * @example
     * // Update one ProjectAdditionalService
     * const projectAdditionalService = await prisma.projectAdditionalService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectAdditionalServiceUpdateArgs>(args: SelectSubset<T, ProjectAdditionalServiceUpdateArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectAdditionalServices.
     * @param {ProjectAdditionalServiceDeleteManyArgs} args - Arguments to filter ProjectAdditionalServices to delete.
     * @example
     * // Delete a few ProjectAdditionalServices
     * const { count } = await prisma.projectAdditionalService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectAdditionalServiceDeleteManyArgs>(args?: SelectSubset<T, ProjectAdditionalServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAdditionalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectAdditionalServices
     * const projectAdditionalService = await prisma.projectAdditionalService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectAdditionalServiceUpdateManyArgs>(args: SelectSubset<T, ProjectAdditionalServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectAdditionalServices and returns the data updated in the database.
     * @param {ProjectAdditionalServiceUpdateManyAndReturnArgs} args - Arguments to update many ProjectAdditionalServices.
     * @example
     * // Update many ProjectAdditionalServices
     * const projectAdditionalService = await prisma.projectAdditionalService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectAdditionalServices and only return the `id`
     * const projectAdditionalServiceWithIdOnly = await prisma.projectAdditionalService.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectAdditionalServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectAdditionalServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectAdditionalService.
     * @param {ProjectAdditionalServiceUpsertArgs} args - Arguments to update or create a ProjectAdditionalService.
     * @example
     * // Update or create a ProjectAdditionalService
     * const projectAdditionalService = await prisma.projectAdditionalService.upsert({
     *   create: {
     *     // ... data to create a ProjectAdditionalService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectAdditionalService we want to update
     *   }
     * })
     */
    upsert<T extends ProjectAdditionalServiceUpsertArgs>(args: SelectSubset<T, ProjectAdditionalServiceUpsertArgs<ExtArgs>>): Prisma__ProjectAdditionalServiceClient<$Result.GetResult<Prisma.$ProjectAdditionalServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectAdditionalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceCountArgs} args - Arguments to filter ProjectAdditionalServices to count.
     * @example
     * // Count the number of ProjectAdditionalServices
     * const count = await prisma.projectAdditionalService.count({
     *   where: {
     *     // ... the filter for the ProjectAdditionalServices we want to count
     *   }
     * })
    **/
    count<T extends ProjectAdditionalServiceCountArgs>(
      args?: Subset<T, ProjectAdditionalServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectAdditionalServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectAdditionalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAdditionalServiceAggregateArgs>(args: Subset<T, ProjectAdditionalServiceAggregateArgs>): Prisma.PrismaPromise<GetProjectAdditionalServiceAggregateType<T>>

    /**
     * Group by ProjectAdditionalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAdditionalServiceGroupByArgs} args - Group by arguments.
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
      T extends ProjectAdditionalServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectAdditionalServiceGroupByArgs['orderBy'] }
        : { orderBy?: ProjectAdditionalServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectAdditionalServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectAdditionalServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectAdditionalService model
   */
  readonly fields: ProjectAdditionalServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectAdditionalService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectAdditionalServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    additionalService<T extends AdditionalServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdditionalServiceDefaultArgs<ExtArgs>>): Prisma__AdditionalServiceClient<$Result.GetResult<Prisma.$AdditionalServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectAdditionalService model
   */
  interface ProjectAdditionalServiceFieldRefs {
    readonly id: FieldRef<"ProjectAdditionalService", 'String'>
    readonly projectId: FieldRef<"ProjectAdditionalService", 'String'>
    readonly additionalServiceId: FieldRef<"ProjectAdditionalService", 'String'>
    readonly selectedMinPrice: FieldRef<"ProjectAdditionalService", 'Int'>
    readonly selectedMaxPrice: FieldRef<"ProjectAdditionalService", 'Int'>
    readonly createdAt: FieldRef<"ProjectAdditionalService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectAdditionalService findUnique
   */
  export type ProjectAdditionalServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAdditionalService to fetch.
     */
    where: ProjectAdditionalServiceWhereUniqueInput
  }

  /**
   * ProjectAdditionalService findUniqueOrThrow
   */
  export type ProjectAdditionalServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAdditionalService to fetch.
     */
    where: ProjectAdditionalServiceWhereUniqueInput
  }

  /**
   * ProjectAdditionalService findFirst
   */
  export type ProjectAdditionalServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAdditionalService to fetch.
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAdditionalServices to fetch.
     */
    orderBy?: ProjectAdditionalServiceOrderByWithRelationInput | ProjectAdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAdditionalServices.
     */
    cursor?: ProjectAdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAdditionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAdditionalServices.
     */
    distinct?: ProjectAdditionalServiceScalarFieldEnum | ProjectAdditionalServiceScalarFieldEnum[]
  }

  /**
   * ProjectAdditionalService findFirstOrThrow
   */
  export type ProjectAdditionalServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAdditionalService to fetch.
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAdditionalServices to fetch.
     */
    orderBy?: ProjectAdditionalServiceOrderByWithRelationInput | ProjectAdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectAdditionalServices.
     */
    cursor?: ProjectAdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAdditionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectAdditionalServices.
     */
    distinct?: ProjectAdditionalServiceScalarFieldEnum | ProjectAdditionalServiceScalarFieldEnum[]
  }

  /**
   * ProjectAdditionalService findMany
   */
  export type ProjectAdditionalServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectAdditionalServices to fetch.
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectAdditionalServices to fetch.
     */
    orderBy?: ProjectAdditionalServiceOrderByWithRelationInput | ProjectAdditionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectAdditionalServices.
     */
    cursor?: ProjectAdditionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectAdditionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectAdditionalServices.
     */
    skip?: number
    distinct?: ProjectAdditionalServiceScalarFieldEnum | ProjectAdditionalServiceScalarFieldEnum[]
  }

  /**
   * ProjectAdditionalService create
   */
  export type ProjectAdditionalServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectAdditionalService.
     */
    data: XOR<ProjectAdditionalServiceCreateInput, ProjectAdditionalServiceUncheckedCreateInput>
  }

  /**
   * ProjectAdditionalService createMany
   */
  export type ProjectAdditionalServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectAdditionalServices.
     */
    data: ProjectAdditionalServiceCreateManyInput | ProjectAdditionalServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectAdditionalService createManyAndReturn
   */
  export type ProjectAdditionalServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectAdditionalServices.
     */
    data: ProjectAdditionalServiceCreateManyInput | ProjectAdditionalServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAdditionalService update
   */
  export type ProjectAdditionalServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectAdditionalService.
     */
    data: XOR<ProjectAdditionalServiceUpdateInput, ProjectAdditionalServiceUncheckedUpdateInput>
    /**
     * Choose, which ProjectAdditionalService to update.
     */
    where: ProjectAdditionalServiceWhereUniqueInput
  }

  /**
   * ProjectAdditionalService updateMany
   */
  export type ProjectAdditionalServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectAdditionalServices.
     */
    data: XOR<ProjectAdditionalServiceUpdateManyMutationInput, ProjectAdditionalServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAdditionalServices to update
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * Limit how many ProjectAdditionalServices to update.
     */
    limit?: number
  }

  /**
   * ProjectAdditionalService updateManyAndReturn
   */
  export type ProjectAdditionalServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * The data used to update ProjectAdditionalServices.
     */
    data: XOR<ProjectAdditionalServiceUpdateManyMutationInput, ProjectAdditionalServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProjectAdditionalServices to update
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * Limit how many ProjectAdditionalServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectAdditionalService upsert
   */
  export type ProjectAdditionalServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectAdditionalService to update in case it exists.
     */
    where: ProjectAdditionalServiceWhereUniqueInput
    /**
     * In case the ProjectAdditionalService found by the `where` argument doesn't exist, create a new ProjectAdditionalService with this data.
     */
    create: XOR<ProjectAdditionalServiceCreateInput, ProjectAdditionalServiceUncheckedCreateInput>
    /**
     * In case the ProjectAdditionalService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectAdditionalServiceUpdateInput, ProjectAdditionalServiceUncheckedUpdateInput>
  }

  /**
   * ProjectAdditionalService delete
   */
  export type ProjectAdditionalServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
    /**
     * Filter which ProjectAdditionalService to delete.
     */
    where: ProjectAdditionalServiceWhereUniqueInput
  }

  /**
   * ProjectAdditionalService deleteMany
   */
  export type ProjectAdditionalServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectAdditionalServices to delete
     */
    where?: ProjectAdditionalServiceWhereInput
    /**
     * Limit how many ProjectAdditionalServices to delete.
     */
    limit?: number
  }

  /**
   * ProjectAdditionalService without action
   */
  export type ProjectAdditionalServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectAdditionalService
     */
    select?: ProjectAdditionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectAdditionalService
     */
    omit?: ProjectAdditionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectAdditionalServiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.PaymentType | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    tripayInvoiceId: string | null
    tripayInvoiceUrl: string | null
    paidAt: Date | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    type: $Enums.PaymentType | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    tripayInvoiceId: string | null
    tripayInvoiceUrl: string | null
    paidAt: Date | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    projectId: number
    type: number
    amount: number
    status: number
    tripayInvoiceId: number
    tripayInvoiceUrl: number
    paidAt: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    amount?: true
    status?: true
    tripayInvoiceId?: true
    tripayInvoiceUrl?: true
    paidAt?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    amount?: true
    status?: true
    tripayInvoiceId?: true
    tripayInvoiceUrl?: true
    paidAt?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    projectId?: true
    type?: true
    amount?: true
    status?: true
    tripayInvoiceId?: true
    tripayInvoiceUrl?: true
    paidAt?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    projectId: string
    type: $Enums.PaymentType
    amount: number
    status: $Enums.PaymentStatus
    tripayInvoiceId: string | null
    tripayInvoiceUrl: string | null
    paidAt: Date | null
    expiredAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    tripayInvoiceId?: boolean
    tripayInvoiceUrl?: boolean
    paidAt?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    tripayInvoiceId?: boolean
    tripayInvoiceUrl?: boolean
    paidAt?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    tripayInvoiceId?: boolean
    tripayInvoiceUrl?: boolean
    paidAt?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    projectId?: boolean
    type?: boolean
    amount?: boolean
    status?: boolean
    tripayInvoiceId?: boolean
    tripayInvoiceUrl?: boolean
    paidAt?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "type" | "amount" | "status" | "tripayInvoiceId" | "tripayInvoiceUrl" | "paidAt" | "expiredAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      type: $Enums.PaymentType
      amount: number
      status: $Enums.PaymentStatus
      tripayInvoiceId: string | null
      tripayInvoiceUrl: string | null
      paidAt: Date | null
      expiredAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly projectId: FieldRef<"Payment", 'String'>
    readonly type: FieldRef<"Payment", 'PaymentType'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly tripayInvoiceId: FieldRef<"Payment", 'String'>
    readonly tripayInvoiceUrl: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly expiredAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model ProjectFile
   */

  export type AggregateProjectFile = {
    _count: ProjectFileCountAggregateOutputType | null
    _avg: ProjectFileAvgAggregateOutputType | null
    _sum: ProjectFileSumAggregateOutputType | null
    _min: ProjectFileMinAggregateOutputType | null
    _max: ProjectFileMaxAggregateOutputType | null
  }

  export type ProjectFileAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type ProjectFileSumAggregateOutputType = {
    fileSize: number | null
  }

  export type ProjectFileMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    fileType: string | null
    uploadedAt: Date | null
  }

  export type ProjectFileMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    fileType: string | null
    uploadedAt: Date | null
  }

  export type ProjectFileCountAggregateOutputType = {
    id: number
    projectId: number
    fileName: number
    fileUrl: number
    fileSize: number
    fileType: number
    uploadedAt: number
    _all: number
  }


  export type ProjectFileAvgAggregateInputType = {
    fileSize?: true
  }

  export type ProjectFileSumAggregateInputType = {
    fileSize?: true
  }

  export type ProjectFileMinAggregateInputType = {
    id?: true
    projectId?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    fileType?: true
    uploadedAt?: true
  }

  export type ProjectFileMaxAggregateInputType = {
    id?: true
    projectId?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    fileType?: true
    uploadedAt?: true
  }

  export type ProjectFileCountAggregateInputType = {
    id?: true
    projectId?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    fileType?: true
    uploadedAt?: true
    _all?: true
  }

  export type ProjectFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectFile to aggregate.
     */
    where?: ProjectFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectFiles to fetch.
     */
    orderBy?: ProjectFileOrderByWithRelationInput | ProjectFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectFiles
    **/
    _count?: true | ProjectFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectFileMaxAggregateInputType
  }

  export type GetProjectFileAggregateType<T extends ProjectFileAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectFile[P]>
      : GetScalarType<T[P], AggregateProjectFile[P]>
  }




  export type ProjectFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectFileWhereInput
    orderBy?: ProjectFileOrderByWithAggregationInput | ProjectFileOrderByWithAggregationInput[]
    by: ProjectFileScalarFieldEnum[] | ProjectFileScalarFieldEnum
    having?: ProjectFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectFileCountAggregateInputType | true
    _avg?: ProjectFileAvgAggregateInputType
    _sum?: ProjectFileSumAggregateInputType
    _min?: ProjectFileMinAggregateInputType
    _max?: ProjectFileMaxAggregateInputType
  }

  export type ProjectFileGroupByOutputType = {
    id: string
    projectId: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt: Date
    _count: ProjectFileCountAggregateOutputType | null
    _avg: ProjectFileAvgAggregateOutputType | null
    _sum: ProjectFileSumAggregateOutputType | null
    _min: ProjectFileMinAggregateOutputType | null
    _max: ProjectFileMaxAggregateOutputType | null
  }

  type GetProjectFileGroupByPayload<T extends ProjectFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectFileGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectFileGroupByOutputType[P]>
        }
      >
    >


  export type ProjectFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectFile"]>

  export type ProjectFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectFile"]>

  export type ProjectFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectFile"]>

  export type ProjectFileSelectScalar = {
    id?: boolean
    projectId?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    fileType?: boolean
    uploadedAt?: boolean
  }

  export type ProjectFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "fileName" | "fileUrl" | "fileSize" | "fileType" | "uploadedAt", ExtArgs["result"]["projectFile"]>
  export type ProjectFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectFile"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      fileName: string
      fileUrl: string
      fileSize: number
      fileType: string
      uploadedAt: Date
    }, ExtArgs["result"]["projectFile"]>
    composites: {}
  }

  type ProjectFileGetPayload<S extends boolean | null | undefined | ProjectFileDefaultArgs> = $Result.GetResult<Prisma.$ProjectFilePayload, S>

  type ProjectFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectFileCountAggregateInputType | true
    }

  export interface ProjectFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectFile'], meta: { name: 'ProjectFile' } }
    /**
     * Find zero or one ProjectFile that matches the filter.
     * @param {ProjectFileFindUniqueArgs} args - Arguments to find a ProjectFile
     * @example
     * // Get one ProjectFile
     * const projectFile = await prisma.projectFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFileFindUniqueArgs>(args: SelectSubset<T, ProjectFileFindUniqueArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFileFindUniqueOrThrowArgs} args - Arguments to find a ProjectFile
     * @example
     * // Get one ProjectFile
     * const projectFile = await prisma.projectFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileFindFirstArgs} args - Arguments to find a ProjectFile
     * @example
     * // Get one ProjectFile
     * const projectFile = await prisma.projectFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFileFindFirstArgs>(args?: SelectSubset<T, ProjectFileFindFirstArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileFindFirstOrThrowArgs} args - Arguments to find a ProjectFile
     * @example
     * // Get one ProjectFile
     * const projectFile = await prisma.projectFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectFiles
     * const projectFiles = await prisma.projectFile.findMany()
     * 
     * // Get first 10 ProjectFiles
     * const projectFiles = await prisma.projectFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectFileWithIdOnly = await prisma.projectFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFileFindManyArgs>(args?: SelectSubset<T, ProjectFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectFile.
     * @param {ProjectFileCreateArgs} args - Arguments to create a ProjectFile.
     * @example
     * // Create one ProjectFile
     * const ProjectFile = await prisma.projectFile.create({
     *   data: {
     *     // ... data to create a ProjectFile
     *   }
     * })
     * 
     */
    create<T extends ProjectFileCreateArgs>(args: SelectSubset<T, ProjectFileCreateArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectFiles.
     * @param {ProjectFileCreateManyArgs} args - Arguments to create many ProjectFiles.
     * @example
     * // Create many ProjectFiles
     * const projectFile = await prisma.projectFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectFileCreateManyArgs>(args?: SelectSubset<T, ProjectFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectFiles and returns the data saved in the database.
     * @param {ProjectFileCreateManyAndReturnArgs} args - Arguments to create many ProjectFiles.
     * @example
     * // Create many ProjectFiles
     * const projectFile = await prisma.projectFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectFiles and only return the `id`
     * const projectFileWithIdOnly = await prisma.projectFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectFile.
     * @param {ProjectFileDeleteArgs} args - Arguments to delete one ProjectFile.
     * @example
     * // Delete one ProjectFile
     * const ProjectFile = await prisma.projectFile.delete({
     *   where: {
     *     // ... filter to delete one ProjectFile
     *   }
     * })
     * 
     */
    delete<T extends ProjectFileDeleteArgs>(args: SelectSubset<T, ProjectFileDeleteArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectFile.
     * @param {ProjectFileUpdateArgs} args - Arguments to update one ProjectFile.
     * @example
     * // Update one ProjectFile
     * const projectFile = await prisma.projectFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectFileUpdateArgs>(args: SelectSubset<T, ProjectFileUpdateArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectFiles.
     * @param {ProjectFileDeleteManyArgs} args - Arguments to filter ProjectFiles to delete.
     * @example
     * // Delete a few ProjectFiles
     * const { count } = await prisma.projectFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectFileDeleteManyArgs>(args?: SelectSubset<T, ProjectFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectFiles
     * const projectFile = await prisma.projectFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectFileUpdateManyArgs>(args: SelectSubset<T, ProjectFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectFiles and returns the data updated in the database.
     * @param {ProjectFileUpdateManyAndReturnArgs} args - Arguments to update many ProjectFiles.
     * @example
     * // Update many ProjectFiles
     * const projectFile = await prisma.projectFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectFiles and only return the `id`
     * const projectFileWithIdOnly = await prisma.projectFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectFile.
     * @param {ProjectFileUpsertArgs} args - Arguments to update or create a ProjectFile.
     * @example
     * // Update or create a ProjectFile
     * const projectFile = await prisma.projectFile.upsert({
     *   create: {
     *     // ... data to create a ProjectFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectFile we want to update
     *   }
     * })
     */
    upsert<T extends ProjectFileUpsertArgs>(args: SelectSubset<T, ProjectFileUpsertArgs<ExtArgs>>): Prisma__ProjectFileClient<$Result.GetResult<Prisma.$ProjectFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileCountArgs} args - Arguments to filter ProjectFiles to count.
     * @example
     * // Count the number of ProjectFiles
     * const count = await prisma.projectFile.count({
     *   where: {
     *     // ... the filter for the ProjectFiles we want to count
     *   }
     * })
    **/
    count<T extends ProjectFileCountArgs>(
      args?: Subset<T, ProjectFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectFileAggregateArgs>(args: Subset<T, ProjectFileAggregateArgs>): Prisma.PrismaPromise<GetProjectFileAggregateType<T>>

    /**
     * Group by ProjectFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFileGroupByArgs} args - Group by arguments.
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
      T extends ProjectFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectFileGroupByArgs['orderBy'] }
        : { orderBy?: ProjectFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectFile model
   */
  readonly fields: ProjectFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectFile model
   */
  interface ProjectFileFieldRefs {
    readonly id: FieldRef<"ProjectFile", 'String'>
    readonly projectId: FieldRef<"ProjectFile", 'String'>
    readonly fileName: FieldRef<"ProjectFile", 'String'>
    readonly fileUrl: FieldRef<"ProjectFile", 'String'>
    readonly fileSize: FieldRef<"ProjectFile", 'Int'>
    readonly fileType: FieldRef<"ProjectFile", 'String'>
    readonly uploadedAt: FieldRef<"ProjectFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectFile findUnique
   */
  export type ProjectFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * Filter, which ProjectFile to fetch.
     */
    where: ProjectFileWhereUniqueInput
  }

  /**
   * ProjectFile findUniqueOrThrow
   */
  export type ProjectFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * Filter, which ProjectFile to fetch.
     */
    where: ProjectFileWhereUniqueInput
  }

  /**
   * ProjectFile findFirst
   */
  export type ProjectFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * Filter, which ProjectFile to fetch.
     */
    where?: ProjectFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectFiles to fetch.
     */
    orderBy?: ProjectFileOrderByWithRelationInput | ProjectFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectFiles.
     */
    cursor?: ProjectFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectFiles.
     */
    distinct?: ProjectFileScalarFieldEnum | ProjectFileScalarFieldEnum[]
  }

  /**
   * ProjectFile findFirstOrThrow
   */
  export type ProjectFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * Filter, which ProjectFile to fetch.
     */
    where?: ProjectFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectFiles to fetch.
     */
    orderBy?: ProjectFileOrderByWithRelationInput | ProjectFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectFiles.
     */
    cursor?: ProjectFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectFiles.
     */
    distinct?: ProjectFileScalarFieldEnum | ProjectFileScalarFieldEnum[]
  }

  /**
   * ProjectFile findMany
   */
  export type ProjectFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * Filter, which ProjectFiles to fetch.
     */
    where?: ProjectFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectFiles to fetch.
     */
    orderBy?: ProjectFileOrderByWithRelationInput | ProjectFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectFiles.
     */
    cursor?: ProjectFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectFiles.
     */
    skip?: number
    distinct?: ProjectFileScalarFieldEnum | ProjectFileScalarFieldEnum[]
  }

  /**
   * ProjectFile create
   */
  export type ProjectFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectFile.
     */
    data: XOR<ProjectFileCreateInput, ProjectFileUncheckedCreateInput>
  }

  /**
   * ProjectFile createMany
   */
  export type ProjectFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectFiles.
     */
    data: ProjectFileCreateManyInput | ProjectFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectFile createManyAndReturn
   */
  export type ProjectFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectFiles.
     */
    data: ProjectFileCreateManyInput | ProjectFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectFile update
   */
  export type ProjectFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectFile.
     */
    data: XOR<ProjectFileUpdateInput, ProjectFileUncheckedUpdateInput>
    /**
     * Choose, which ProjectFile to update.
     */
    where: ProjectFileWhereUniqueInput
  }

  /**
   * ProjectFile updateMany
   */
  export type ProjectFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectFiles.
     */
    data: XOR<ProjectFileUpdateManyMutationInput, ProjectFileUncheckedUpdateManyInput>
    /**
     * Filter which ProjectFiles to update
     */
    where?: ProjectFileWhereInput
    /**
     * Limit how many ProjectFiles to update.
     */
    limit?: number
  }

  /**
   * ProjectFile updateManyAndReturn
   */
  export type ProjectFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * The data used to update ProjectFiles.
     */
    data: XOR<ProjectFileUpdateManyMutationInput, ProjectFileUncheckedUpdateManyInput>
    /**
     * Filter which ProjectFiles to update
     */
    where?: ProjectFileWhereInput
    /**
     * Limit how many ProjectFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectFile upsert
   */
  export type ProjectFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectFile to update in case it exists.
     */
    where: ProjectFileWhereUniqueInput
    /**
     * In case the ProjectFile found by the `where` argument doesn't exist, create a new ProjectFile with this data.
     */
    create: XOR<ProjectFileCreateInput, ProjectFileUncheckedCreateInput>
    /**
     * In case the ProjectFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectFileUpdateInput, ProjectFileUncheckedUpdateInput>
  }

  /**
   * ProjectFile delete
   */
  export type ProjectFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
    /**
     * Filter which ProjectFile to delete.
     */
    where: ProjectFileWhereUniqueInput
  }

  /**
   * ProjectFile deleteMany
   */
  export type ProjectFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectFiles to delete
     */
    where?: ProjectFileWhereInput
    /**
     * Limit how many ProjectFiles to delete.
     */
    limit?: number
  }

  /**
   * ProjectFile without action
   */
  export type ProjectFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectFile
     */
    select?: ProjectFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectFile
     */
    omit?: ProjectFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectFileInclude<ExtArgs> | null
  }


  /**
   * Model ProjectActivity
   */

  export type AggregateProjectActivity = {
    _count: ProjectActivityCountAggregateOutputType | null
    _min: ProjectActivityMinAggregateOutputType | null
    _max: ProjectActivityMaxAggregateOutputType | null
  }

  export type ProjectActivityMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    type: $Enums.ActivityType | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProjectActivityMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    type: $Enums.ActivityType | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ProjectActivityCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    type: number
    action: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ProjectActivityMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    type?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type ProjectActivityMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    type?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type ProjectActivityCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    type?: true
    action?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectActivity to aggregate.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectActivities
    **/
    _count?: true | ProjectActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectActivityMaxAggregateInputType
  }

  export type GetProjectActivityAggregateType<T extends ProjectActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectActivity[P]>
      : GetScalarType<T[P], AggregateProjectActivity[P]>
  }




  export type ProjectActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithAggregationInput | ProjectActivityOrderByWithAggregationInput[]
    by: ProjectActivityScalarFieldEnum[] | ProjectActivityScalarFieldEnum
    having?: ProjectActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectActivityCountAggregateInputType | true
    _min?: ProjectActivityMinAggregateInputType
    _max?: ProjectActivityMaxAggregateInputType
  }

  export type ProjectActivityGroupByOutputType = {
    id: string
    projectId: string
    userId: string | null
    type: $Enums.ActivityType
    action: string
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ProjectActivityCountAggregateOutputType | null
    _min: ProjectActivityMinAggregateOutputType | null
    _max: ProjectActivityMaxAggregateOutputType | null
  }

  type GetProjectActivityGroupByPayload<T extends ProjectActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectActivityGroupByOutputType[P]>
        }
      >
    >


  export type ProjectActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    type?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProjectActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["projectActivity"]>

  export type ProjectActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    type?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProjectActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["projectActivity"]>

  export type ProjectActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    type?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProjectActivity$userArgs<ExtArgs>
  }, ExtArgs["result"]["projectActivity"]>

  export type ProjectActivitySelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    type?: boolean
    action?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ProjectActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "type" | "action" | "description" | "metadata" | "createdAt", ExtArgs["result"]["projectActivity"]>
  export type ProjectActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProjectActivity$userArgs<ExtArgs>
  }
  export type ProjectActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProjectActivity$userArgs<ExtArgs>
  }
  export type ProjectActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | ProjectActivity$userArgs<ExtArgs>
  }

  export type $ProjectActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectActivity"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string | null
      type: $Enums.ActivityType
      action: string
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["projectActivity"]>
    composites: {}
  }

  type ProjectActivityGetPayload<S extends boolean | null | undefined | ProjectActivityDefaultArgs> = $Result.GetResult<Prisma.$ProjectActivityPayload, S>

  type ProjectActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectActivityCountAggregateInputType | true
    }

  export interface ProjectActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectActivity'], meta: { name: 'ProjectActivity' } }
    /**
     * Find zero or one ProjectActivity that matches the filter.
     * @param {ProjectActivityFindUniqueArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectActivityFindUniqueArgs>(args: SelectSubset<T, ProjectActivityFindUniqueArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectActivityFindUniqueOrThrowArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindFirstArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectActivityFindFirstArgs>(args?: SelectSubset<T, ProjectActivityFindFirstArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindFirstOrThrowArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectActivities
     * const projectActivities = await prisma.projectActivity.findMany()
     * 
     * // Get first 10 ProjectActivities
     * const projectActivities = await prisma.projectActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectActivityWithIdOnly = await prisma.projectActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectActivityFindManyArgs>(args?: SelectSubset<T, ProjectActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectActivity.
     * @param {ProjectActivityCreateArgs} args - Arguments to create a ProjectActivity.
     * @example
     * // Create one ProjectActivity
     * const ProjectActivity = await prisma.projectActivity.create({
     *   data: {
     *     // ... data to create a ProjectActivity
     *   }
     * })
     * 
     */
    create<T extends ProjectActivityCreateArgs>(args: SelectSubset<T, ProjectActivityCreateArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectActivities.
     * @param {ProjectActivityCreateManyArgs} args - Arguments to create many ProjectActivities.
     * @example
     * // Create many ProjectActivities
     * const projectActivity = await prisma.projectActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectActivityCreateManyArgs>(args?: SelectSubset<T, ProjectActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectActivities and returns the data saved in the database.
     * @param {ProjectActivityCreateManyAndReturnArgs} args - Arguments to create many ProjectActivities.
     * @example
     * // Create many ProjectActivities
     * const projectActivity = await prisma.projectActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectActivities and only return the `id`
     * const projectActivityWithIdOnly = await prisma.projectActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectActivity.
     * @param {ProjectActivityDeleteArgs} args - Arguments to delete one ProjectActivity.
     * @example
     * // Delete one ProjectActivity
     * const ProjectActivity = await prisma.projectActivity.delete({
     *   where: {
     *     // ... filter to delete one ProjectActivity
     *   }
     * })
     * 
     */
    delete<T extends ProjectActivityDeleteArgs>(args: SelectSubset<T, ProjectActivityDeleteArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectActivity.
     * @param {ProjectActivityUpdateArgs} args - Arguments to update one ProjectActivity.
     * @example
     * // Update one ProjectActivity
     * const projectActivity = await prisma.projectActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectActivityUpdateArgs>(args: SelectSubset<T, ProjectActivityUpdateArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectActivities.
     * @param {ProjectActivityDeleteManyArgs} args - Arguments to filter ProjectActivities to delete.
     * @example
     * // Delete a few ProjectActivities
     * const { count } = await prisma.projectActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectActivityDeleteManyArgs>(args?: SelectSubset<T, ProjectActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectActivities
     * const projectActivity = await prisma.projectActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectActivityUpdateManyArgs>(args: SelectSubset<T, ProjectActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectActivities and returns the data updated in the database.
     * @param {ProjectActivityUpdateManyAndReturnArgs} args - Arguments to update many ProjectActivities.
     * @example
     * // Update many ProjectActivities
     * const projectActivity = await prisma.projectActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectActivities and only return the `id`
     * const projectActivityWithIdOnly = await prisma.projectActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectActivity.
     * @param {ProjectActivityUpsertArgs} args - Arguments to update or create a ProjectActivity.
     * @example
     * // Update or create a ProjectActivity
     * const projectActivity = await prisma.projectActivity.upsert({
     *   create: {
     *     // ... data to create a ProjectActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectActivity we want to update
     *   }
     * })
     */
    upsert<T extends ProjectActivityUpsertArgs>(args: SelectSubset<T, ProjectActivityUpsertArgs<ExtArgs>>): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityCountArgs} args - Arguments to filter ProjectActivities to count.
     * @example
     * // Count the number of ProjectActivities
     * const count = await prisma.projectActivity.count({
     *   where: {
     *     // ... the filter for the ProjectActivities we want to count
     *   }
     * })
    **/
    count<T extends ProjectActivityCountArgs>(
      args?: Subset<T, ProjectActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectActivityAggregateArgs>(args: Subset<T, ProjectActivityAggregateArgs>): Prisma.PrismaPromise<GetProjectActivityAggregateType<T>>

    /**
     * Group by ProjectActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityGroupByArgs} args - Group by arguments.
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
      T extends ProjectActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectActivityGroupByArgs['orderBy'] }
        : { orderBy?: ProjectActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectActivity model
   */
  readonly fields: ProjectActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ProjectActivity$userArgs<ExtArgs> = {}>(args?: Subset<T, ProjectActivity$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectActivity model
   */
  interface ProjectActivityFieldRefs {
    readonly id: FieldRef<"ProjectActivity", 'String'>
    readonly projectId: FieldRef<"ProjectActivity", 'String'>
    readonly userId: FieldRef<"ProjectActivity", 'String'>
    readonly type: FieldRef<"ProjectActivity", 'ActivityType'>
    readonly action: FieldRef<"ProjectActivity", 'String'>
    readonly description: FieldRef<"ProjectActivity", 'String'>
    readonly metadata: FieldRef<"ProjectActivity", 'Json'>
    readonly createdAt: FieldRef<"ProjectActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectActivity findUnique
   */
  export type ProjectActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity findUniqueOrThrow
   */
  export type ProjectActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity findFirst
   */
  export type ProjectActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectActivities.
     */
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * ProjectActivity findFirstOrThrow
   */
  export type ProjectActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectActivities.
     */
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * ProjectActivity findMany
   */
  export type ProjectActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivities to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }

  /**
   * ProjectActivity create
   */
  export type ProjectActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectActivity.
     */
    data: XOR<ProjectActivityCreateInput, ProjectActivityUncheckedCreateInput>
  }

  /**
   * ProjectActivity createMany
   */
  export type ProjectActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectActivities.
     */
    data: ProjectActivityCreateManyInput | ProjectActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectActivity createManyAndReturn
   */
  export type ProjectActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectActivities.
     */
    data: ProjectActivityCreateManyInput | ProjectActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectActivity update
   */
  export type ProjectActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectActivity.
     */
    data: XOR<ProjectActivityUpdateInput, ProjectActivityUncheckedUpdateInput>
    /**
     * Choose, which ProjectActivity to update.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity updateMany
   */
  export type ProjectActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectActivities.
     */
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyInput>
    /**
     * Filter which ProjectActivities to update
     */
    where?: ProjectActivityWhereInput
    /**
     * Limit how many ProjectActivities to update.
     */
    limit?: number
  }

  /**
   * ProjectActivity updateManyAndReturn
   */
  export type ProjectActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * The data used to update ProjectActivities.
     */
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyInput>
    /**
     * Filter which ProjectActivities to update
     */
    where?: ProjectActivityWhereInput
    /**
     * Limit how many ProjectActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectActivity upsert
   */
  export type ProjectActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectActivity to update in case it exists.
     */
    where: ProjectActivityWhereUniqueInput
    /**
     * In case the ProjectActivity found by the `where` argument doesn't exist, create a new ProjectActivity with this data.
     */
    create: XOR<ProjectActivityCreateInput, ProjectActivityUncheckedCreateInput>
    /**
     * In case the ProjectActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectActivityUpdateInput, ProjectActivityUncheckedUpdateInput>
  }

  /**
   * ProjectActivity delete
   */
  export type ProjectActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter which ProjectActivity to delete.
     */
    where: ProjectActivityWhereUniqueInput
  }

  /**
   * ProjectActivity deleteMany
   */
  export type ProjectActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectActivities to delete
     */
    where?: ProjectActivityWhereInput
    /**
     * Limit how many ProjectActivities to delete.
     */
    limit?: number
  }

  /**
   * ProjectActivity.user
   */
  export type ProjectActivity$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ProjectActivity without action
   */
  export type ProjectActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectActivity
     */
    omit?: ProjectActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectActivityInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    recipientEmail: string | null
    recipientPhone: string | null
    subject: string | null
    body: string | null
    status: $Enums.NotificationStatus | null
    htmlBody: string | null
    projectId: string | null
    sentAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    recipientEmail: string | null
    recipientPhone: string | null
    subject: string | null
    body: string | null
    status: $Enums.NotificationStatus | null
    htmlBody: string | null
    projectId: string | null
    sentAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    recipientEmail: number
    recipientPhone: number
    subject: number
    body: number
    status: number
    htmlBody: number
    projectId: number
    metadata: number
    sentAt: number
    failedAt: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    recipientEmail?: true
    recipientPhone?: true
    subject?: true
    body?: true
    status?: true
    htmlBody?: true
    projectId?: true
    sentAt?: true
    failedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    recipientEmail?: true
    recipientPhone?: true
    subject?: true
    body?: true
    status?: true
    htmlBody?: true
    projectId?: true
    sentAt?: true
    failedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    recipientEmail?: true
    recipientPhone?: true
    subject?: true
    body?: true
    status?: true
    htmlBody?: true
    projectId?: true
    metadata?: true
    sentAt?: true
    failedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    recipientEmail: string
    recipientPhone: string | null
    subject: string
    body: string
    status: $Enums.NotificationStatus
    htmlBody: string | null
    projectId: string | null
    metadata: JsonValue | null
    sentAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    htmlBody?: boolean
    projectId?: boolean
    metadata?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    htmlBody?: boolean
    projectId?: boolean
    metadata?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    htmlBody?: boolean
    projectId?: boolean
    metadata?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    htmlBody?: boolean
    projectId?: boolean
    metadata?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "recipientEmail" | "recipientPhone" | "subject" | "body" | "status" | "htmlBody" | "projectId" | "metadata" | "sentAt" | "failedAt" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      recipientEmail: string
      recipientPhone: string | null
      subject: string
      body: string
      status: $Enums.NotificationStatus
      htmlBody: string | null
      projectId: string | null
      metadata: Prisma.JsonValue | null
      sentAt: Date | null
      failedAt: Date | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly recipientEmail: FieldRef<"Notification", 'String'>
    readonly recipientPhone: FieldRef<"Notification", 'String'>
    readonly subject: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly htmlBody: FieldRef<"Notification", 'String'>
    readonly projectId: FieldRef<"Notification", 'String'>
    readonly metadata: FieldRef<"Notification", 'Json'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly failedAt: FieldRef<"Notification", 'DateTime'>
    readonly errorMessage: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    countryCode: 'countryCode',
    phone: 'phone',
    companyName: 'companyName',
    companyWebsite: 'companyWebsite',
    contactMethod: 'contactMethod',
    contactTime: 'contactTime',
    referralSource: 'referralSource',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    icon: 'icon',
    basePrice: 'basePrice',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ComplexityOptionScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ComplexityOptionScalarFieldEnum = (typeof ComplexityOptionScalarFieldEnum)[keyof typeof ComplexityOptionScalarFieldEnum]


  export const AdditionalServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    icon: 'icon',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdditionalServiceScalarFieldEnum = (typeof AdditionalServiceScalarFieldEnum)[keyof typeof AdditionalServiceScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    referenceId: 'referenceId',
    clientId: 'clientId',
    projectName: 'projectName',
    description: 'description',
    projectType: 'projectType',
    status: 'status',
    timeline: 'timeline',
    timelineModifier: 'timelineModifier',
    estimatedMin: 'estimatedMin',
    estimatedMax: 'estimatedMax',
    finalPrice: 'finalPrice',
    bundleDiscount: 'bundleDiscount',
    budgetRangeMin: 'budgetRangeMin',
    budgetRangeMax: 'budgetRangeMax',
    submittedAt: 'submittedAt',
    reviewedAt: 'reviewedAt',
    dealingStartAt: 'dealingStartAt',
    startDate: 'startDate',
    estimatedCompletion: 'estimatedCompletion',
    completedAt: 'completedAt',
    cancelledAt: 'cancelledAt',
    revisionCount: 'revisionCount',
    maxRevisions: 'maxRevisions',
    additionalNotes: 'additionalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectServiceScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    serviceId: 'serviceId',
    complexityOptionId: 'complexityOptionId',
    selectedMinPrice: 'selectedMinPrice',
    selectedMaxPrice: 'selectedMaxPrice',
    createdAt: 'createdAt'
  };

  export type ProjectServiceScalarFieldEnum = (typeof ProjectServiceScalarFieldEnum)[keyof typeof ProjectServiceScalarFieldEnum]


  export const ProjectAdditionalServiceScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    additionalServiceId: 'additionalServiceId',
    selectedMinPrice: 'selectedMinPrice',
    selectedMaxPrice: 'selectedMaxPrice',
    createdAt: 'createdAt'
  };

  export type ProjectAdditionalServiceScalarFieldEnum = (typeof ProjectAdditionalServiceScalarFieldEnum)[keyof typeof ProjectAdditionalServiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    type: 'type',
    amount: 'amount',
    status: 'status',
    tripayInvoiceId: 'tripayInvoiceId',
    tripayInvoiceUrl: 'tripayInvoiceUrl',
    paidAt: 'paidAt',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ProjectFileScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    fileType: 'fileType',
    uploadedAt: 'uploadedAt'
  };

  export type ProjectFileScalarFieldEnum = (typeof ProjectFileScalarFieldEnum)[keyof typeof ProjectFileScalarFieldEnum]


  export const ProjectActivityScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    type: 'type',
    action: 'action',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ProjectActivityScalarFieldEnum = (typeof ProjectActivityScalarFieldEnum)[keyof typeof ProjectActivityScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    recipientEmail: 'recipientEmail',
    recipientPhone: 'recipientPhone',
    subject: 'subject',
    body: 'body',
    status: 'status',
    htmlBody: 'htmlBody',
    projectId: 'projectId',
    metadata: 'metadata',
    sentAt: 'sentAt',
    failedAt: 'failedAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContactMethod'
   */
  export type EnumContactMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactMethod'>
    


  /**
   * Reference to a field of type 'ContactMethod[]'
   */
  export type ListEnumContactMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactMethod[]'>
    


  /**
   * Reference to a field of type 'ContactTime'
   */
  export type EnumContactTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactTime'>
    


  /**
   * Reference to a field of type 'ContactTime[]'
   */
  export type ListEnumContactTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactTime[]'>
    


  /**
   * Reference to a field of type 'ServiceCategory'
   */
  export type EnumServiceCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceCategory'>
    


  /**
   * Reference to a field of type 'ServiceCategory[]'
   */
  export type ListEnumServiceCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceCategory[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectType[]'
   */
  export type ListEnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'TimelineType'
   */
  export type EnumTimelineTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimelineType'>
    


  /**
   * Reference to a field of type 'TimelineType[]'
   */
  export type ListEnumTimelineTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimelineType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


  /**
   * Reference to a field of type 'PaymentType[]'
   */
  export type ListEnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activities?: ProjectActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activities?: ProjectActivityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    activities?: ProjectActivityListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    fullName?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    countryCode?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    companyName?: StringNullableFilter<"Client"> | string | null
    companyWebsite?: StringNullableFilter<"Client"> | string | null
    contactMethod?: EnumContactMethodFilter<"Client"> | $Enums.ContactMethod
    contactTime?: EnumContactTimeFilter<"Client"> | $Enums.ContactTime
    referralSource?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    phone?: SortOrder
    companyName?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    contactMethod?: SortOrder
    contactTime?: SortOrder
    referralSource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    fullName?: StringFilter<"Client"> | string
    countryCode?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    companyName?: StringNullableFilter<"Client"> | string | null
    companyWebsite?: StringNullableFilter<"Client"> | string | null
    contactMethod?: EnumContactMethodFilter<"Client"> | $Enums.ContactMethod
    contactTime?: EnumContactTimeFilter<"Client"> | $Enums.ContactTime
    referralSource?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    phone?: SortOrder
    companyName?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    contactMethod?: SortOrder
    contactTime?: SortOrder
    referralSource?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    fullName?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    countryCode?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    companyName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    companyWebsite?: StringNullableWithAggregatesFilter<"Client"> | string | null
    contactMethod?: EnumContactMethodWithAggregatesFilter<"Client"> | $Enums.ContactMethod
    contactTime?: EnumContactTimeWithAggregatesFilter<"Client"> | $Enums.ContactTime
    referralSource?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    slug?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    category?: EnumServiceCategoryFilter<"Service"> | $Enums.ServiceCategory
    icon?: StringNullableFilter<"Service"> | string | null
    basePrice?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    complexityOptions?: ComplexityOptionListRelationFilter
    projectServices?: ProjectServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    icon?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    complexityOptions?: ComplexityOptionOrderByRelationAggregateInput
    projectServices?: ProjectServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    description?: StringNullableFilter<"Service"> | string | null
    category?: EnumServiceCategoryFilter<"Service"> | $Enums.ServiceCategory
    icon?: StringNullableFilter<"Service"> | string | null
    basePrice?: IntFilter<"Service"> | number
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    complexityOptions?: ComplexityOptionListRelationFilter
    projectServices?: ProjectServiceListRelationFilter
  }, "id" | "name" | "slug">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    icon?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    slug?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    category?: EnumServiceCategoryWithAggregatesFilter<"Service"> | $Enums.ServiceCategory
    icon?: StringNullableWithAggregatesFilter<"Service"> | string | null
    basePrice?: IntWithAggregatesFilter<"Service"> | number
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ComplexityOptionWhereInput = {
    AND?: ComplexityOptionWhereInput | ComplexityOptionWhereInput[]
    OR?: ComplexityOptionWhereInput[]
    NOT?: ComplexityOptionWhereInput | ComplexityOptionWhereInput[]
    id?: StringFilter<"ComplexityOption"> | string
    serviceId?: StringFilter<"ComplexityOption"> | string
    name?: StringFilter<"ComplexityOption"> | string
    slug?: StringFilter<"ComplexityOption"> | string
    description?: StringNullableFilter<"ComplexityOption"> | string | null
    minPrice?: IntFilter<"ComplexityOption"> | number
    maxPrice?: IntFilter<"ComplexityOption"> | number
    isActive?: BoolFilter<"ComplexityOption"> | boolean
    createdAt?: DateTimeFilter<"ComplexityOption"> | Date | string
    updatedAt?: DateTimeFilter<"ComplexityOption"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    projectServices?: ProjectServiceListRelationFilter
  }

  export type ComplexityOptionOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    projectServices?: ProjectServiceOrderByRelationAggregateInput
  }

  export type ComplexityOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId_slug?: ComplexityOptionServiceIdSlugCompoundUniqueInput
    AND?: ComplexityOptionWhereInput | ComplexityOptionWhereInput[]
    OR?: ComplexityOptionWhereInput[]
    NOT?: ComplexityOptionWhereInput | ComplexityOptionWhereInput[]
    serviceId?: StringFilter<"ComplexityOption"> | string
    name?: StringFilter<"ComplexityOption"> | string
    slug?: StringFilter<"ComplexityOption"> | string
    description?: StringNullableFilter<"ComplexityOption"> | string | null
    minPrice?: IntFilter<"ComplexityOption"> | number
    maxPrice?: IntFilter<"ComplexityOption"> | number
    isActive?: BoolFilter<"ComplexityOption"> | boolean
    createdAt?: DateTimeFilter<"ComplexityOption"> | Date | string
    updatedAt?: DateTimeFilter<"ComplexityOption"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    projectServices?: ProjectServiceListRelationFilter
  }, "id" | "serviceId_slug">

  export type ComplexityOptionOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ComplexityOptionCountOrderByAggregateInput
    _avg?: ComplexityOptionAvgOrderByAggregateInput
    _max?: ComplexityOptionMaxOrderByAggregateInput
    _min?: ComplexityOptionMinOrderByAggregateInput
    _sum?: ComplexityOptionSumOrderByAggregateInput
  }

  export type ComplexityOptionScalarWhereWithAggregatesInput = {
    AND?: ComplexityOptionScalarWhereWithAggregatesInput | ComplexityOptionScalarWhereWithAggregatesInput[]
    OR?: ComplexityOptionScalarWhereWithAggregatesInput[]
    NOT?: ComplexityOptionScalarWhereWithAggregatesInput | ComplexityOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ComplexityOption"> | string
    serviceId?: StringWithAggregatesFilter<"ComplexityOption"> | string
    name?: StringWithAggregatesFilter<"ComplexityOption"> | string
    slug?: StringWithAggregatesFilter<"ComplexityOption"> | string
    description?: StringNullableWithAggregatesFilter<"ComplexityOption"> | string | null
    minPrice?: IntWithAggregatesFilter<"ComplexityOption"> | number
    maxPrice?: IntWithAggregatesFilter<"ComplexityOption"> | number
    isActive?: BoolWithAggregatesFilter<"ComplexityOption"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ComplexityOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ComplexityOption"> | Date | string
  }

  export type AdditionalServiceWhereInput = {
    AND?: AdditionalServiceWhereInput | AdditionalServiceWhereInput[]
    OR?: AdditionalServiceWhereInput[]
    NOT?: AdditionalServiceWhereInput | AdditionalServiceWhereInput[]
    id?: StringFilter<"AdditionalService"> | string
    name?: StringFilter<"AdditionalService"> | string
    slug?: StringFilter<"AdditionalService"> | string
    description?: StringNullableFilter<"AdditionalService"> | string | null
    icon?: StringNullableFilter<"AdditionalService"> | string | null
    minPrice?: IntFilter<"AdditionalService"> | number
    maxPrice?: IntFilter<"AdditionalService"> | number
    isActive?: BoolFilter<"AdditionalService"> | boolean
    createdAt?: DateTimeFilter<"AdditionalService"> | Date | string
    updatedAt?: DateTimeFilter<"AdditionalService"> | Date | string
    projectAdditionalServices?: ProjectAdditionalServiceListRelationFilter
  }

  export type AdditionalServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectAdditionalServices?: ProjectAdditionalServiceOrderByRelationAggregateInput
  }

  export type AdditionalServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: AdditionalServiceWhereInput | AdditionalServiceWhereInput[]
    OR?: AdditionalServiceWhereInput[]
    NOT?: AdditionalServiceWhereInput | AdditionalServiceWhereInput[]
    description?: StringNullableFilter<"AdditionalService"> | string | null
    icon?: StringNullableFilter<"AdditionalService"> | string | null
    minPrice?: IntFilter<"AdditionalService"> | number
    maxPrice?: IntFilter<"AdditionalService"> | number
    isActive?: BoolFilter<"AdditionalService"> | boolean
    createdAt?: DateTimeFilter<"AdditionalService"> | Date | string
    updatedAt?: DateTimeFilter<"AdditionalService"> | Date | string
    projectAdditionalServices?: ProjectAdditionalServiceListRelationFilter
  }, "id" | "name" | "slug">

  export type AdditionalServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdditionalServiceCountOrderByAggregateInput
    _avg?: AdditionalServiceAvgOrderByAggregateInput
    _max?: AdditionalServiceMaxOrderByAggregateInput
    _min?: AdditionalServiceMinOrderByAggregateInput
    _sum?: AdditionalServiceSumOrderByAggregateInput
  }

  export type AdditionalServiceScalarWhereWithAggregatesInput = {
    AND?: AdditionalServiceScalarWhereWithAggregatesInput | AdditionalServiceScalarWhereWithAggregatesInput[]
    OR?: AdditionalServiceScalarWhereWithAggregatesInput[]
    NOT?: AdditionalServiceScalarWhereWithAggregatesInput | AdditionalServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdditionalService"> | string
    name?: StringWithAggregatesFilter<"AdditionalService"> | string
    slug?: StringWithAggregatesFilter<"AdditionalService"> | string
    description?: StringNullableWithAggregatesFilter<"AdditionalService"> | string | null
    icon?: StringNullableWithAggregatesFilter<"AdditionalService"> | string | null
    minPrice?: IntWithAggregatesFilter<"AdditionalService"> | number
    maxPrice?: IntWithAggregatesFilter<"AdditionalService"> | number
    isActive?: BoolWithAggregatesFilter<"AdditionalService"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AdditionalService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdditionalService"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    referenceId?: StringFilter<"Project"> | string
    clientId?: StringFilter<"Project"> | string
    projectName?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    projectType?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFilter<"Project"> | $Enums.TimelineType
    timelineModifier?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFilter<"Project"> | number
    estimatedMax?: IntFilter<"Project"> | number
    finalPrice?: IntNullableFilter<"Project"> | number | null
    bundleDiscount?: IntFilter<"Project"> | number
    budgetRangeMin?: IntFilter<"Project"> | number
    budgetRangeMax?: IntFilter<"Project"> | number
    submittedAt?: DateTimeFilter<"Project"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    dealingStartAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    estimatedCompletion?: DateTimeNullableFilter<"Project"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    revisionCount?: IntFilter<"Project"> | number
    maxRevisions?: IntFilter<"Project"> | number
    additionalNotes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    projectServices?: ProjectServiceListRelationFilter
    projectAdditionalServices?: ProjectAdditionalServiceListRelationFilter
    payments?: PaymentListRelationFilter
    files?: ProjectFileListRelationFilter
    activities?: ProjectActivityListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    referenceId?: SortOrder
    clientId?: SortOrder
    projectName?: SortOrder
    description?: SortOrder
    projectType?: SortOrder
    status?: SortOrder
    timeline?: SortOrder
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrderInput | SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    dealingStartAt?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    estimatedCompletion?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    projectServices?: ProjectServiceOrderByRelationAggregateInput
    projectAdditionalServices?: ProjectAdditionalServiceOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    files?: ProjectFileOrderByRelationAggregateInput
    activities?: ProjectActivityOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    clientId?: StringFilter<"Project"> | string
    projectName?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    projectType?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFilter<"Project"> | $Enums.TimelineType
    timelineModifier?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFilter<"Project"> | number
    estimatedMax?: IntFilter<"Project"> | number
    finalPrice?: IntNullableFilter<"Project"> | number | null
    bundleDiscount?: IntFilter<"Project"> | number
    budgetRangeMin?: IntFilter<"Project"> | number
    budgetRangeMax?: IntFilter<"Project"> | number
    submittedAt?: DateTimeFilter<"Project"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    dealingStartAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    estimatedCompletion?: DateTimeNullableFilter<"Project"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    revisionCount?: IntFilter<"Project"> | number
    maxRevisions?: IntFilter<"Project"> | number
    additionalNotes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    projectServices?: ProjectServiceListRelationFilter
    projectAdditionalServices?: ProjectAdditionalServiceListRelationFilter
    payments?: PaymentListRelationFilter
    files?: ProjectFileListRelationFilter
    activities?: ProjectActivityListRelationFilter
  }, "id" | "referenceId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    referenceId?: SortOrder
    clientId?: SortOrder
    projectName?: SortOrder
    description?: SortOrder
    projectType?: SortOrder
    status?: SortOrder
    timeline?: SortOrder
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrderInput | SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    dealingStartAt?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    estimatedCompletion?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
    additionalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    referenceId?: StringWithAggregatesFilter<"Project"> | string
    clientId?: StringWithAggregatesFilter<"Project"> | string
    projectName?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    projectType?: EnumProjectTypeWithAggregatesFilter<"Project"> | $Enums.ProjectType
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeWithAggregatesFilter<"Project"> | $Enums.TimelineType
    timelineModifier?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntWithAggregatesFilter<"Project"> | number
    estimatedMax?: IntWithAggregatesFilter<"Project"> | number
    finalPrice?: IntNullableWithAggregatesFilter<"Project"> | number | null
    bundleDiscount?: IntWithAggregatesFilter<"Project"> | number
    budgetRangeMin?: IntWithAggregatesFilter<"Project"> | number
    budgetRangeMax?: IntWithAggregatesFilter<"Project"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    dealingStartAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    estimatedCompletion?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    revisionCount?: IntWithAggregatesFilter<"Project"> | number
    maxRevisions?: IntWithAggregatesFilter<"Project"> | number
    additionalNotes?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectServiceWhereInput = {
    AND?: ProjectServiceWhereInput | ProjectServiceWhereInput[]
    OR?: ProjectServiceWhereInput[]
    NOT?: ProjectServiceWhereInput | ProjectServiceWhereInput[]
    id?: StringFilter<"ProjectService"> | string
    projectId?: StringFilter<"ProjectService"> | string
    serviceId?: StringFilter<"ProjectService"> | string
    complexityOptionId?: StringFilter<"ProjectService"> | string
    selectedMinPrice?: IntFilter<"ProjectService"> | number
    selectedMaxPrice?: IntFilter<"ProjectService"> | number
    createdAt?: DateTimeFilter<"ProjectService"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    complexityOption?: XOR<ComplexityOptionScalarRelationFilter, ComplexityOptionWhereInput>
  }

  export type ProjectServiceOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    serviceId?: SortOrder
    complexityOptionId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    complexityOption?: ComplexityOptionOrderByWithRelationInput
  }

  export type ProjectServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_serviceId_complexityOptionId?: ProjectServiceProjectIdServiceIdComplexityOptionIdCompoundUniqueInput
    AND?: ProjectServiceWhereInput | ProjectServiceWhereInput[]
    OR?: ProjectServiceWhereInput[]
    NOT?: ProjectServiceWhereInput | ProjectServiceWhereInput[]
    projectId?: StringFilter<"ProjectService"> | string
    serviceId?: StringFilter<"ProjectService"> | string
    complexityOptionId?: StringFilter<"ProjectService"> | string
    selectedMinPrice?: IntFilter<"ProjectService"> | number
    selectedMaxPrice?: IntFilter<"ProjectService"> | number
    createdAt?: DateTimeFilter<"ProjectService"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    complexityOption?: XOR<ComplexityOptionScalarRelationFilter, ComplexityOptionWhereInput>
  }, "id" | "projectId_serviceId_complexityOptionId">

  export type ProjectServiceOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    serviceId?: SortOrder
    complexityOptionId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectServiceCountOrderByAggregateInput
    _avg?: ProjectServiceAvgOrderByAggregateInput
    _max?: ProjectServiceMaxOrderByAggregateInput
    _min?: ProjectServiceMinOrderByAggregateInput
    _sum?: ProjectServiceSumOrderByAggregateInput
  }

  export type ProjectServiceScalarWhereWithAggregatesInput = {
    AND?: ProjectServiceScalarWhereWithAggregatesInput | ProjectServiceScalarWhereWithAggregatesInput[]
    OR?: ProjectServiceScalarWhereWithAggregatesInput[]
    NOT?: ProjectServiceScalarWhereWithAggregatesInput | ProjectServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectService"> | string
    projectId?: StringWithAggregatesFilter<"ProjectService"> | string
    serviceId?: StringWithAggregatesFilter<"ProjectService"> | string
    complexityOptionId?: StringWithAggregatesFilter<"ProjectService"> | string
    selectedMinPrice?: IntWithAggregatesFilter<"ProjectService"> | number
    selectedMaxPrice?: IntWithAggregatesFilter<"ProjectService"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectService"> | Date | string
  }

  export type ProjectAdditionalServiceWhereInput = {
    AND?: ProjectAdditionalServiceWhereInput | ProjectAdditionalServiceWhereInput[]
    OR?: ProjectAdditionalServiceWhereInput[]
    NOT?: ProjectAdditionalServiceWhereInput | ProjectAdditionalServiceWhereInput[]
    id?: StringFilter<"ProjectAdditionalService"> | string
    projectId?: StringFilter<"ProjectAdditionalService"> | string
    additionalServiceId?: StringFilter<"ProjectAdditionalService"> | string
    selectedMinPrice?: IntFilter<"ProjectAdditionalService"> | number
    selectedMaxPrice?: IntFilter<"ProjectAdditionalService"> | number
    createdAt?: DateTimeFilter<"ProjectAdditionalService"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    additionalService?: XOR<AdditionalServiceScalarRelationFilter, AdditionalServiceWhereInput>
  }

  export type ProjectAdditionalServiceOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    additionalServiceId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    additionalService?: AdditionalServiceOrderByWithRelationInput
  }

  export type ProjectAdditionalServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_additionalServiceId?: ProjectAdditionalServiceProjectIdAdditionalServiceIdCompoundUniqueInput
    AND?: ProjectAdditionalServiceWhereInput | ProjectAdditionalServiceWhereInput[]
    OR?: ProjectAdditionalServiceWhereInput[]
    NOT?: ProjectAdditionalServiceWhereInput | ProjectAdditionalServiceWhereInput[]
    projectId?: StringFilter<"ProjectAdditionalService"> | string
    additionalServiceId?: StringFilter<"ProjectAdditionalService"> | string
    selectedMinPrice?: IntFilter<"ProjectAdditionalService"> | number
    selectedMaxPrice?: IntFilter<"ProjectAdditionalService"> | number
    createdAt?: DateTimeFilter<"ProjectAdditionalService"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    additionalService?: XOR<AdditionalServiceScalarRelationFilter, AdditionalServiceWhereInput>
  }, "id" | "projectId_additionalServiceId">

  export type ProjectAdditionalServiceOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    additionalServiceId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectAdditionalServiceCountOrderByAggregateInput
    _avg?: ProjectAdditionalServiceAvgOrderByAggregateInput
    _max?: ProjectAdditionalServiceMaxOrderByAggregateInput
    _min?: ProjectAdditionalServiceMinOrderByAggregateInput
    _sum?: ProjectAdditionalServiceSumOrderByAggregateInput
  }

  export type ProjectAdditionalServiceScalarWhereWithAggregatesInput = {
    AND?: ProjectAdditionalServiceScalarWhereWithAggregatesInput | ProjectAdditionalServiceScalarWhereWithAggregatesInput[]
    OR?: ProjectAdditionalServiceScalarWhereWithAggregatesInput[]
    NOT?: ProjectAdditionalServiceScalarWhereWithAggregatesInput | ProjectAdditionalServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectAdditionalService"> | string
    projectId?: StringWithAggregatesFilter<"ProjectAdditionalService"> | string
    additionalServiceId?: StringWithAggregatesFilter<"ProjectAdditionalService"> | string
    selectedMinPrice?: IntWithAggregatesFilter<"ProjectAdditionalService"> | number
    selectedMaxPrice?: IntWithAggregatesFilter<"ProjectAdditionalService"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectAdditionalService"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    projectId?: StringFilter<"Payment"> | string
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    amount?: IntFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    tripayInvoiceId?: StringNullableFilter<"Payment"> | string | null
    tripayInvoiceUrl?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    tripayInvoiceId?: SortOrderInput | SortOrder
    tripayInvoiceUrl?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripayInvoiceId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    projectId?: StringFilter<"Payment"> | string
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    amount?: IntFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    tripayInvoiceUrl?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "tripayInvoiceId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    tripayInvoiceId?: SortOrderInput | SortOrder
    tripayInvoiceUrl?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    expiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    projectId?: StringWithAggregatesFilter<"Payment"> | string
    type?: EnumPaymentTypeWithAggregatesFilter<"Payment"> | $Enums.PaymentType
    amount?: IntWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    tripayInvoiceId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    tripayInvoiceUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type ProjectFileWhereInput = {
    AND?: ProjectFileWhereInput | ProjectFileWhereInput[]
    OR?: ProjectFileWhereInput[]
    NOT?: ProjectFileWhereInput | ProjectFileWhereInput[]
    id?: StringFilter<"ProjectFile"> | string
    projectId?: StringFilter<"ProjectFile"> | string
    fileName?: StringFilter<"ProjectFile"> | string
    fileUrl?: StringFilter<"ProjectFile"> | string
    fileSize?: IntFilter<"ProjectFile"> | number
    fileType?: StringFilter<"ProjectFile"> | string
    uploadedAt?: DateTimeFilter<"ProjectFile"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectFileOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectFileWhereInput | ProjectFileWhereInput[]
    OR?: ProjectFileWhereInput[]
    NOT?: ProjectFileWhereInput | ProjectFileWhereInput[]
    projectId?: StringFilter<"ProjectFile"> | string
    fileName?: StringFilter<"ProjectFile"> | string
    fileUrl?: StringFilter<"ProjectFile"> | string
    fileSize?: IntFilter<"ProjectFile"> | number
    fileType?: StringFilter<"ProjectFile"> | string
    uploadedAt?: DateTimeFilter<"ProjectFile"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectFileOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
    _count?: ProjectFileCountOrderByAggregateInput
    _avg?: ProjectFileAvgOrderByAggregateInput
    _max?: ProjectFileMaxOrderByAggregateInput
    _min?: ProjectFileMinOrderByAggregateInput
    _sum?: ProjectFileSumOrderByAggregateInput
  }

  export type ProjectFileScalarWhereWithAggregatesInput = {
    AND?: ProjectFileScalarWhereWithAggregatesInput | ProjectFileScalarWhereWithAggregatesInput[]
    OR?: ProjectFileScalarWhereWithAggregatesInput[]
    NOT?: ProjectFileScalarWhereWithAggregatesInput | ProjectFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectFile"> | string
    projectId?: StringWithAggregatesFilter<"ProjectFile"> | string
    fileName?: StringWithAggregatesFilter<"ProjectFile"> | string
    fileUrl?: StringWithAggregatesFilter<"ProjectFile"> | string
    fileSize?: IntWithAggregatesFilter<"ProjectFile"> | number
    fileType?: StringWithAggregatesFilter<"ProjectFile"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"ProjectFile"> | Date | string
  }

  export type ProjectActivityWhereInput = {
    AND?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    OR?: ProjectActivityWhereInput[]
    NOT?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    id?: StringFilter<"ProjectActivity"> | string
    projectId?: StringFilter<"ProjectActivity"> | string
    userId?: StringNullableFilter<"ProjectActivity"> | string | null
    type?: EnumActivityTypeFilter<"ProjectActivity"> | $Enums.ActivityType
    action?: StringFilter<"ProjectActivity"> | string
    description?: StringNullableFilter<"ProjectActivity"> | string | null
    metadata?: JsonNullableFilter<"ProjectActivity">
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProjectActivityOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProjectActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    OR?: ProjectActivityWhereInput[]
    NOT?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    projectId?: StringFilter<"ProjectActivity"> | string
    userId?: StringNullableFilter<"ProjectActivity"> | string | null
    type?: EnumActivityTypeFilter<"ProjectActivity"> | $Enums.ActivityType
    action?: StringFilter<"ProjectActivity"> | string
    description?: StringNullableFilter<"ProjectActivity"> | string | null
    metadata?: JsonNullableFilter<"ProjectActivity">
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectActivityOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectActivityCountOrderByAggregateInput
    _max?: ProjectActivityMaxOrderByAggregateInput
    _min?: ProjectActivityMinOrderByAggregateInput
  }

  export type ProjectActivityScalarWhereWithAggregatesInput = {
    AND?: ProjectActivityScalarWhereWithAggregatesInput | ProjectActivityScalarWhereWithAggregatesInput[]
    OR?: ProjectActivityScalarWhereWithAggregatesInput[]
    NOT?: ProjectActivityScalarWhereWithAggregatesInput | ProjectActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectActivity"> | string
    projectId?: StringWithAggregatesFilter<"ProjectActivity"> | string
    userId?: StringNullableWithAggregatesFilter<"ProjectActivity"> | string | null
    type?: EnumActivityTypeWithAggregatesFilter<"ProjectActivity"> | $Enums.ActivityType
    action?: StringWithAggregatesFilter<"ProjectActivity"> | string
    description?: StringNullableWithAggregatesFilter<"ProjectActivity"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"ProjectActivity">
    createdAt?: DateTimeWithAggregatesFilter<"ProjectActivity"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    recipientEmail?: StringFilter<"Notification"> | string
    recipientPhone?: StringNullableFilter<"Notification"> | string | null
    subject?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    htmlBody?: StringNullableFilter<"Notification"> | string | null
    projectId?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrderInput | SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    htmlBody?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    recipientEmail?: StringFilter<"Notification"> | string
    recipientPhone?: StringNullableFilter<"Notification"> | string | null
    subject?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    htmlBody?: StringNullableFilter<"Notification"> | string | null
    projectId?: StringNullableFilter<"Notification"> | string | null
    metadata?: JsonNullableFilter<"Notification">
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrderInput | SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    htmlBody?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    recipientEmail?: StringWithAggregatesFilter<"Notification"> | string
    recipientPhone?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    subject?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    htmlBody?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Notification">
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ProjectActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ProjectActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ProjectActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    fullName: string
    email: string
    countryCode?: string
    phone: string
    companyName?: string | null
    companyWebsite?: string | null
    contactMethod?: $Enums.ContactMethod
    contactTime?: $Enums.ContactTime
    referralSource?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    countryCode?: string
    phone: string
    companyName?: string | null
    companyWebsite?: string | null
    contactMethod?: $Enums.ContactMethod
    contactTime?: $Enums.ContactTime
    referralSource?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    contactTime?: EnumContactTimeFieldUpdateOperationsInput | $Enums.ContactTime
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    contactTime?: EnumContactTimeFieldUpdateOperationsInput | $Enums.ContactTime
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    fullName: string
    email: string
    countryCode?: string
    phone: string
    companyName?: string | null
    companyWebsite?: string | null
    contactMethod?: $Enums.ContactMethod
    contactTime?: $Enums.ContactTime
    referralSource?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    contactTime?: EnumContactTimeFieldUpdateOperationsInput | $Enums.ContactTime
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    contactTime?: EnumContactTimeFieldUpdateOperationsInput | $Enums.ContactTime
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    complexityOptions?: ComplexityOptionCreateNestedManyWithoutServiceInput
    projectServices?: ProjectServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    complexityOptions?: ComplexityOptionUncheckedCreateNestedManyWithoutServiceInput
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complexityOptions?: ComplexityOptionUpdateManyWithoutServiceNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complexityOptions?: ComplexityOptionUncheckedUpdateManyWithoutServiceNestedInput
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplexityOptionCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutComplexityOptionsInput
    projectServices?: ProjectServiceCreateNestedManyWithoutComplexityOptionInput
  }

  export type ComplexityOptionUncheckedCreateInput = {
    id?: string
    serviceId: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutComplexityOptionInput
  }

  export type ComplexityOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutComplexityOptionsNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutComplexityOptionNestedInput
  }

  export type ComplexityOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutComplexityOptionNestedInput
  }

  export type ComplexityOptionCreateManyInput = {
    id?: string
    serviceId: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplexityOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplexityOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdditionalServiceCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutAdditionalServiceInput
  }

  export type AdditionalServiceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutAdditionalServiceInput
  }

  export type AdditionalServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutAdditionalServiceNestedInput
  }

  export type AdditionalServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutAdditionalServiceNestedInput
  }

  export type AdditionalServiceCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdditionalServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdditionalServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    projectServices?: ProjectServiceCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
    files?: ProjectFileCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
    files?: ProjectFileUncheckedCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceCreateInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectServicesInput
    service: ServiceCreateNestedOneWithoutProjectServicesInput
    complexityOption: ComplexityOptionCreateNestedOneWithoutProjectServicesInput
  }

  export type ProjectServiceUncheckedCreateInput = {
    id?: string
    projectId: string
    serviceId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutProjectServicesNestedInput
    complexityOption?: ComplexityOptionUpdateOneRequiredWithoutProjectServicesNestedInput
  }

  export type ProjectServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    complexityOptionId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceCreateManyInput = {
    id?: string
    projectId: string
    serviceId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    complexityOptionId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceCreateInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectAdditionalServicesInput
    additionalService: AdditionalServiceCreateNestedOneWithoutProjectAdditionalServicesInput
  }

  export type ProjectAdditionalServiceUncheckedCreateInput = {
    id?: string
    projectId: string
    additionalServiceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectAdditionalServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectAdditionalServicesNestedInput
    additionalService?: AdditionalServiceUpdateOneRequiredWithoutProjectAdditionalServicesNestedInput
  }

  export type ProjectAdditionalServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    additionalServiceId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceCreateManyInput = {
    id?: string
    projectId: string
    additionalServiceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectAdditionalServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    additionalServiceId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    type: $Enums.PaymentType
    amount: number
    status?: $Enums.PaymentStatus
    tripayInvoiceId?: string | null
    tripayInvoiceUrl?: string | null
    paidAt?: Date | string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    projectId: string
    type: $Enums.PaymentType
    amount: number
    status?: $Enums.PaymentStatus
    tripayInvoiceId?: string | null
    tripayInvoiceUrl?: string | null
    paidAt?: Date | string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    projectId: string
    type: $Enums.PaymentType
    amount: number
    status?: $Enums.PaymentStatus
    tripayInvoiceId?: string | null
    tripayInvoiceUrl?: string | null
    paidAt?: Date | string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectFileCreateInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFilesInput
  }

  export type ProjectFileUncheckedCreateInput = {
    id?: string
    projectId: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type ProjectFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFilesNestedInput
  }

  export type ProjectFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectFileCreateManyInput = {
    id?: string
    projectId: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type ProjectFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateInput = {
    id?: string
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivitiesInput
    user?: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ProjectActivityUncheckedCreateInput = {
    id?: string
    projectId: string
    userId?: string | null
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput
    user?: UserUpdateOneWithoutActivitiesNestedInput
  }

  export type ProjectActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateManyInput = {
    id?: string
    projectId: string
    userId?: string | null
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type?: $Enums.NotificationType
    recipientEmail: string
    recipientPhone?: string | null
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    htmlBody?: string | null
    projectId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type?: $Enums.NotificationType
    recipientEmail: string
    recipientPhone?: string | null
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    htmlBody?: string | null
    projectId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type?: $Enums.NotificationType
    recipientEmail: string
    recipientPhone?: string | null
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    htmlBody?: string | null
    projectId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    htmlBody?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProjectActivityListRelationFilter = {
    every?: ProjectActivityWhereInput
    some?: ProjectActivityWhereInput
    none?: ProjectActivityWhereInput
  }

  export type ProjectActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumContactMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodFilter<$PrismaModel> | $Enums.ContactMethod
  }

  export type EnumContactTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTime | EnumContactTimeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTimeFilter<$PrismaModel> | $Enums.ContactTime
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    contactMethod?: SortOrder
    contactTime?: SortOrder
    referralSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    contactMethod?: SortOrder
    contactTime?: SortOrder
    referralSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    countryCode?: SortOrder
    phone?: SortOrder
    companyName?: SortOrder
    companyWebsite?: SortOrder
    contactMethod?: SortOrder
    contactTime?: SortOrder
    referralSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumContactMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodWithAggregatesFilter<$PrismaModel> | $Enums.ContactMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactMethodFilter<$PrismaModel>
    _max?: NestedEnumContactMethodFilter<$PrismaModel>
  }

  export type EnumContactTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTime | EnumContactTimeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTimeWithAggregatesFilter<$PrismaModel> | $Enums.ContactTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTimeFilter<$PrismaModel>
    _max?: NestedEnumContactTimeFilter<$PrismaModel>
  }

  export type EnumServiceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceCategory | EnumServiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceCategoryFilter<$PrismaModel> | $Enums.ServiceCategory
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

  export type ComplexityOptionListRelationFilter = {
    every?: ComplexityOptionWhereInput
    some?: ComplexityOptionWhereInput
    none?: ComplexityOptionWhereInput
  }

  export type ProjectServiceListRelationFilter = {
    every?: ProjectServiceWhereInput
    some?: ProjectServiceWhereInput
    none?: ProjectServiceWhereInput
  }

  export type ComplexityOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type EnumServiceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceCategory | EnumServiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ServiceCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceCategoryFilter<$PrismaModel>
    _max?: NestedEnumServiceCategoryFilter<$PrismaModel>
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

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ComplexityOptionServiceIdSlugCompoundUniqueInput = {
    serviceId: string
    slug: string
  }

  export type ComplexityOptionCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplexityOptionAvgOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type ComplexityOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplexityOptionMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ComplexityOptionSumOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type ProjectAdditionalServiceListRelationFilter = {
    every?: ProjectAdditionalServiceWhereInput
    some?: ProjectAdditionalServiceWhereInput
    none?: ProjectAdditionalServiceWhereInput
  }

  export type ProjectAdditionalServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdditionalServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdditionalServiceAvgOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type AdditionalServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdditionalServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdditionalServiceSumOrderByAggregateInput = {
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type EnumTimelineTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimelineType | EnumTimelineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineTypeFilter<$PrismaModel> | $Enums.TimelineType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ProjectFileListRelationFilter = {
    every?: ProjectFileWhereInput
    some?: ProjectFileWhereInput
    none?: ProjectFileWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    clientId?: SortOrder
    projectName?: SortOrder
    description?: SortOrder
    projectType?: SortOrder
    status?: SortOrder
    timeline?: SortOrder
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    dealingStartAt?: SortOrder
    startDate?: SortOrder
    estimatedCompletion?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
    additionalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    clientId?: SortOrder
    projectName?: SortOrder
    description?: SortOrder
    projectType?: SortOrder
    status?: SortOrder
    timeline?: SortOrder
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    dealingStartAt?: SortOrder
    startDate?: SortOrder
    estimatedCompletion?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
    additionalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    clientId?: SortOrder
    projectName?: SortOrder
    description?: SortOrder
    projectType?: SortOrder
    status?: SortOrder
    timeline?: SortOrder
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    submittedAt?: SortOrder
    reviewedAt?: SortOrder
    dealingStartAt?: SortOrder
    startDate?: SortOrder
    estimatedCompletion?: SortOrder
    completedAt?: SortOrder
    cancelledAt?: SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
    additionalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    timelineModifier?: SortOrder
    estimatedMin?: SortOrder
    estimatedMax?: SortOrder
    finalPrice?: SortOrder
    bundleDiscount?: SortOrder
    budgetRangeMin?: SortOrder
    budgetRangeMax?: SortOrder
    revisionCount?: SortOrder
    maxRevisions?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumTimelineTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimelineType | EnumTimelineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimelineType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimelineTypeFilter<$PrismaModel>
    _max?: NestedEnumTimelineTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ComplexityOptionScalarRelationFilter = {
    is?: ComplexityOptionWhereInput
    isNot?: ComplexityOptionWhereInput
  }

  export type ProjectServiceProjectIdServiceIdComplexityOptionIdCompoundUniqueInput = {
    projectId: string
    serviceId: string
    complexityOptionId: string
  }

  export type ProjectServiceCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    serviceId?: SortOrder
    complexityOptionId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectServiceAvgOrderByAggregateInput = {
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
  }

  export type ProjectServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    serviceId?: SortOrder
    complexityOptionId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectServiceMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    serviceId?: SortOrder
    complexityOptionId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectServiceSumOrderByAggregateInput = {
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
  }

  export type AdditionalServiceScalarRelationFilter = {
    is?: AdditionalServiceWhereInput
    isNot?: AdditionalServiceWhereInput
  }

  export type ProjectAdditionalServiceProjectIdAdditionalServiceIdCompoundUniqueInput = {
    projectId: string
    additionalServiceId: string
  }

  export type ProjectAdditionalServiceCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    additionalServiceId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAdditionalServiceAvgOrderByAggregateInput = {
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
  }

  export type ProjectAdditionalServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    additionalServiceId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAdditionalServiceMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    additionalServiceId?: SortOrder
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAdditionalServiceSumOrderByAggregateInput = {
    selectedMinPrice?: SortOrder
    selectedMaxPrice?: SortOrder
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    tripayInvoiceId?: SortOrder
    tripayInvoiceUrl?: SortOrder
    paidAt?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    tripayInvoiceId?: SortOrder
    tripayInvoiceUrl?: SortOrder
    paidAt?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    tripayInvoiceId?: SortOrder
    tripayInvoiceUrl?: SortOrder
    paidAt?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ProjectFileCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ProjectFileAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type ProjectFileMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ProjectFileMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    fileType?: SortOrder
    uploadedAt?: SortOrder
  }

  export type ProjectFileSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectActivityCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    action?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectActivityMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
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

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    htmlBody?: SortOrder
    projectId?: SortOrder
    metadata?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    htmlBody?: SortOrder
    projectId?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    htmlBody?: SortOrder
    projectId?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type ProjectActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type ProjectActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutUserInput | ProjectActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutUserInput | ProjectActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutUserInput | ProjectActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput> | ProjectActivityCreateWithoutUserInput[] | ProjectActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutUserInput | ProjectActivityCreateOrConnectWithoutUserInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutUserInput | ProjectActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectActivityCreateManyUserInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutUserInput | ProjectActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutUserInput | ProjectActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumContactMethodFieldUpdateOperationsInput = {
    set?: $Enums.ContactMethod
  }

  export type EnumContactTimeFieldUpdateOperationsInput = {
    set?: $Enums.ContactTime
  }

  export type ProjectUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput> | ProjectCreateWithoutClientInput[] | ProjectUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutClientInput | ProjectCreateOrConnectWithoutClientInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutClientInput | ProjectUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProjectCreateManyClientInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutClientInput | ProjectUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutClientInput | ProjectUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ComplexityOptionCreateNestedManyWithoutServiceInput = {
    create?: XOR<ComplexityOptionCreateWithoutServiceInput, ComplexityOptionUncheckedCreateWithoutServiceInput> | ComplexityOptionCreateWithoutServiceInput[] | ComplexityOptionUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ComplexityOptionCreateOrConnectWithoutServiceInput | ComplexityOptionCreateOrConnectWithoutServiceInput[]
    createMany?: ComplexityOptionCreateManyServiceInputEnvelope
    connect?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
  }

  export type ProjectServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectServiceCreateWithoutServiceInput, ProjectServiceUncheckedCreateWithoutServiceInput> | ProjectServiceCreateWithoutServiceInput[] | ProjectServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutServiceInput | ProjectServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectServiceCreateManyServiceInputEnvelope
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
  }

  export type ComplexityOptionUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ComplexityOptionCreateWithoutServiceInput, ComplexityOptionUncheckedCreateWithoutServiceInput> | ComplexityOptionCreateWithoutServiceInput[] | ComplexityOptionUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ComplexityOptionCreateOrConnectWithoutServiceInput | ComplexityOptionCreateOrConnectWithoutServiceInput[]
    createMany?: ComplexityOptionCreateManyServiceInputEnvelope
    connect?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
  }

  export type ProjectServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProjectServiceCreateWithoutServiceInput, ProjectServiceUncheckedCreateWithoutServiceInput> | ProjectServiceCreateWithoutServiceInput[] | ProjectServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutServiceInput | ProjectServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ProjectServiceCreateManyServiceInputEnvelope
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
  }

  export type EnumServiceCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ServiceCategory
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComplexityOptionUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ComplexityOptionCreateWithoutServiceInput, ComplexityOptionUncheckedCreateWithoutServiceInput> | ComplexityOptionCreateWithoutServiceInput[] | ComplexityOptionUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ComplexityOptionCreateOrConnectWithoutServiceInput | ComplexityOptionCreateOrConnectWithoutServiceInput[]
    upsert?: ComplexityOptionUpsertWithWhereUniqueWithoutServiceInput | ComplexityOptionUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ComplexityOptionCreateManyServiceInputEnvelope
    set?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    disconnect?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    delete?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    connect?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    update?: ComplexityOptionUpdateWithWhereUniqueWithoutServiceInput | ComplexityOptionUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ComplexityOptionUpdateManyWithWhereWithoutServiceInput | ComplexityOptionUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ComplexityOptionScalarWhereInput | ComplexityOptionScalarWhereInput[]
  }

  export type ProjectServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectServiceCreateWithoutServiceInput, ProjectServiceUncheckedCreateWithoutServiceInput> | ProjectServiceCreateWithoutServiceInput[] | ProjectServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutServiceInput | ProjectServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectServiceUpsertWithWhereUniqueWithoutServiceInput | ProjectServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectServiceCreateManyServiceInputEnvelope
    set?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    disconnect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    delete?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    update?: ProjectServiceUpdateWithWhereUniqueWithoutServiceInput | ProjectServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectServiceUpdateManyWithWhereWithoutServiceInput | ProjectServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
  }

  export type ComplexityOptionUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ComplexityOptionCreateWithoutServiceInput, ComplexityOptionUncheckedCreateWithoutServiceInput> | ComplexityOptionCreateWithoutServiceInput[] | ComplexityOptionUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ComplexityOptionCreateOrConnectWithoutServiceInput | ComplexityOptionCreateOrConnectWithoutServiceInput[]
    upsert?: ComplexityOptionUpsertWithWhereUniqueWithoutServiceInput | ComplexityOptionUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ComplexityOptionCreateManyServiceInputEnvelope
    set?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    disconnect?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    delete?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    connect?: ComplexityOptionWhereUniqueInput | ComplexityOptionWhereUniqueInput[]
    update?: ComplexityOptionUpdateWithWhereUniqueWithoutServiceInput | ComplexityOptionUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ComplexityOptionUpdateManyWithWhereWithoutServiceInput | ComplexityOptionUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ComplexityOptionScalarWhereInput | ComplexityOptionScalarWhereInput[]
  }

  export type ProjectServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProjectServiceCreateWithoutServiceInput, ProjectServiceUncheckedCreateWithoutServiceInput> | ProjectServiceCreateWithoutServiceInput[] | ProjectServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutServiceInput | ProjectServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ProjectServiceUpsertWithWhereUniqueWithoutServiceInput | ProjectServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProjectServiceCreateManyServiceInputEnvelope
    set?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    disconnect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    delete?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    update?: ProjectServiceUpdateWithWhereUniqueWithoutServiceInput | ProjectServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProjectServiceUpdateManyWithWhereWithoutServiceInput | ProjectServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutComplexityOptionsInput = {
    create?: XOR<ServiceCreateWithoutComplexityOptionsInput, ServiceUncheckedCreateWithoutComplexityOptionsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutComplexityOptionsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ProjectServiceCreateNestedManyWithoutComplexityOptionInput = {
    create?: XOR<ProjectServiceCreateWithoutComplexityOptionInput, ProjectServiceUncheckedCreateWithoutComplexityOptionInput> | ProjectServiceCreateWithoutComplexityOptionInput[] | ProjectServiceUncheckedCreateWithoutComplexityOptionInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutComplexityOptionInput | ProjectServiceCreateOrConnectWithoutComplexityOptionInput[]
    createMany?: ProjectServiceCreateManyComplexityOptionInputEnvelope
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
  }

  export type ProjectServiceUncheckedCreateNestedManyWithoutComplexityOptionInput = {
    create?: XOR<ProjectServiceCreateWithoutComplexityOptionInput, ProjectServiceUncheckedCreateWithoutComplexityOptionInput> | ProjectServiceCreateWithoutComplexityOptionInput[] | ProjectServiceUncheckedCreateWithoutComplexityOptionInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutComplexityOptionInput | ProjectServiceCreateOrConnectWithoutComplexityOptionInput[]
    createMany?: ProjectServiceCreateManyComplexityOptionInputEnvelope
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
  }

  export type ServiceUpdateOneRequiredWithoutComplexityOptionsNestedInput = {
    create?: XOR<ServiceCreateWithoutComplexityOptionsInput, ServiceUncheckedCreateWithoutComplexityOptionsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutComplexityOptionsInput
    upsert?: ServiceUpsertWithoutComplexityOptionsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutComplexityOptionsInput, ServiceUpdateWithoutComplexityOptionsInput>, ServiceUncheckedUpdateWithoutComplexityOptionsInput>
  }

  export type ProjectServiceUpdateManyWithoutComplexityOptionNestedInput = {
    create?: XOR<ProjectServiceCreateWithoutComplexityOptionInput, ProjectServiceUncheckedCreateWithoutComplexityOptionInput> | ProjectServiceCreateWithoutComplexityOptionInput[] | ProjectServiceUncheckedCreateWithoutComplexityOptionInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutComplexityOptionInput | ProjectServiceCreateOrConnectWithoutComplexityOptionInput[]
    upsert?: ProjectServiceUpsertWithWhereUniqueWithoutComplexityOptionInput | ProjectServiceUpsertWithWhereUniqueWithoutComplexityOptionInput[]
    createMany?: ProjectServiceCreateManyComplexityOptionInputEnvelope
    set?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    disconnect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    delete?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    update?: ProjectServiceUpdateWithWhereUniqueWithoutComplexityOptionInput | ProjectServiceUpdateWithWhereUniqueWithoutComplexityOptionInput[]
    updateMany?: ProjectServiceUpdateManyWithWhereWithoutComplexityOptionInput | ProjectServiceUpdateManyWithWhereWithoutComplexityOptionInput[]
    deleteMany?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
  }

  export type ProjectServiceUncheckedUpdateManyWithoutComplexityOptionNestedInput = {
    create?: XOR<ProjectServiceCreateWithoutComplexityOptionInput, ProjectServiceUncheckedCreateWithoutComplexityOptionInput> | ProjectServiceCreateWithoutComplexityOptionInput[] | ProjectServiceUncheckedCreateWithoutComplexityOptionInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutComplexityOptionInput | ProjectServiceCreateOrConnectWithoutComplexityOptionInput[]
    upsert?: ProjectServiceUpsertWithWhereUniqueWithoutComplexityOptionInput | ProjectServiceUpsertWithWhereUniqueWithoutComplexityOptionInput[]
    createMany?: ProjectServiceCreateManyComplexityOptionInputEnvelope
    set?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    disconnect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    delete?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    update?: ProjectServiceUpdateWithWhereUniqueWithoutComplexityOptionInput | ProjectServiceUpdateWithWhereUniqueWithoutComplexityOptionInput[]
    updateMany?: ProjectServiceUpdateManyWithWhereWithoutComplexityOptionInput | ProjectServiceUpdateManyWithWhereWithoutComplexityOptionInput[]
    deleteMany?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
  }

  export type ProjectAdditionalServiceCreateNestedManyWithoutAdditionalServiceInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput> | ProjectAdditionalServiceCreateWithoutAdditionalServiceInput[] | ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput | ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput[]
    createMany?: ProjectAdditionalServiceCreateManyAdditionalServiceInputEnvelope
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
  }

  export type ProjectAdditionalServiceUncheckedCreateNestedManyWithoutAdditionalServiceInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput> | ProjectAdditionalServiceCreateWithoutAdditionalServiceInput[] | ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput | ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput[]
    createMany?: ProjectAdditionalServiceCreateManyAdditionalServiceInputEnvelope
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
  }

  export type ProjectAdditionalServiceUpdateManyWithoutAdditionalServiceNestedInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput> | ProjectAdditionalServiceCreateWithoutAdditionalServiceInput[] | ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput | ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput[]
    upsert?: ProjectAdditionalServiceUpsertWithWhereUniqueWithoutAdditionalServiceInput | ProjectAdditionalServiceUpsertWithWhereUniqueWithoutAdditionalServiceInput[]
    createMany?: ProjectAdditionalServiceCreateManyAdditionalServiceInputEnvelope
    set?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    disconnect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    delete?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    update?: ProjectAdditionalServiceUpdateWithWhereUniqueWithoutAdditionalServiceInput | ProjectAdditionalServiceUpdateWithWhereUniqueWithoutAdditionalServiceInput[]
    updateMany?: ProjectAdditionalServiceUpdateManyWithWhereWithoutAdditionalServiceInput | ProjectAdditionalServiceUpdateManyWithWhereWithoutAdditionalServiceInput[]
    deleteMany?: ProjectAdditionalServiceScalarWhereInput | ProjectAdditionalServiceScalarWhereInput[]
  }

  export type ProjectAdditionalServiceUncheckedUpdateManyWithoutAdditionalServiceNestedInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput> | ProjectAdditionalServiceCreateWithoutAdditionalServiceInput[] | ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput | ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput[]
    upsert?: ProjectAdditionalServiceUpsertWithWhereUniqueWithoutAdditionalServiceInput | ProjectAdditionalServiceUpsertWithWhereUniqueWithoutAdditionalServiceInput[]
    createMany?: ProjectAdditionalServiceCreateManyAdditionalServiceInputEnvelope
    set?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    disconnect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    delete?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    update?: ProjectAdditionalServiceUpdateWithWhereUniqueWithoutAdditionalServiceInput | ProjectAdditionalServiceUpdateWithWhereUniqueWithoutAdditionalServiceInput[]
    updateMany?: ProjectAdditionalServiceUpdateManyWithWhereWithoutAdditionalServiceInput | ProjectAdditionalServiceUpdateManyWithWhereWithoutAdditionalServiceInput[]
    deleteMany?: ProjectAdditionalServiceScalarWhereInput | ProjectAdditionalServiceScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    connect?: ClientWhereUniqueInput
  }

  export type ProjectServiceCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectServiceCreateWithoutProjectInput, ProjectServiceUncheckedCreateWithoutProjectInput> | ProjectServiceCreateWithoutProjectInput[] | ProjectServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutProjectInput | ProjectServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectServiceCreateManyProjectInputEnvelope
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
  }

  export type ProjectAdditionalServiceCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutProjectInput, ProjectAdditionalServiceUncheckedCreateWithoutProjectInput> | ProjectAdditionalServiceCreateWithoutProjectInput[] | ProjectAdditionalServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutProjectInput | ProjectAdditionalServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAdditionalServiceCreateManyProjectInputEnvelope
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutProjectInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ProjectFileCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectFileCreateWithoutProjectInput, ProjectFileUncheckedCreateWithoutProjectInput> | ProjectFileCreateWithoutProjectInput[] | ProjectFileUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectFileCreateOrConnectWithoutProjectInput | ProjectFileCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectFileCreateManyProjectInputEnvelope
    connect?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
  }

  export type ProjectActivityCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type ProjectServiceUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectServiceCreateWithoutProjectInput, ProjectServiceUncheckedCreateWithoutProjectInput> | ProjectServiceCreateWithoutProjectInput[] | ProjectServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutProjectInput | ProjectServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectServiceCreateManyProjectInputEnvelope
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
  }

  export type ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutProjectInput, ProjectAdditionalServiceUncheckedCreateWithoutProjectInput> | ProjectAdditionalServiceCreateWithoutProjectInput[] | ProjectAdditionalServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutProjectInput | ProjectAdditionalServiceCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectAdditionalServiceCreateManyProjectInputEnvelope
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ProjectFileUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectFileCreateWithoutProjectInput, ProjectFileUncheckedCreateWithoutProjectInput> | ProjectFileCreateWithoutProjectInput[] | ProjectFileUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectFileCreateOrConnectWithoutProjectInput | ProjectFileCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectFileCreateManyProjectInputEnvelope
    connect?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
  }

  export type ProjectActivityUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type EnumTimelineTypeFieldUpdateOperationsInput = {
    set?: $Enums.TimelineType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProjectsInput
    upsert?: ClientUpsertWithoutProjectsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProjectsInput, ClientUpdateWithoutProjectsInput>, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectServiceUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectServiceCreateWithoutProjectInput, ProjectServiceUncheckedCreateWithoutProjectInput> | ProjectServiceCreateWithoutProjectInput[] | ProjectServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutProjectInput | ProjectServiceCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectServiceUpsertWithWhereUniqueWithoutProjectInput | ProjectServiceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectServiceCreateManyProjectInputEnvelope
    set?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    disconnect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    delete?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    update?: ProjectServiceUpdateWithWhereUniqueWithoutProjectInput | ProjectServiceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectServiceUpdateManyWithWhereWithoutProjectInput | ProjectServiceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
  }

  export type ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutProjectInput, ProjectAdditionalServiceUncheckedCreateWithoutProjectInput> | ProjectAdditionalServiceCreateWithoutProjectInput[] | ProjectAdditionalServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutProjectInput | ProjectAdditionalServiceCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAdditionalServiceUpsertWithWhereUniqueWithoutProjectInput | ProjectAdditionalServiceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAdditionalServiceCreateManyProjectInputEnvelope
    set?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    disconnect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    delete?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    update?: ProjectAdditionalServiceUpdateWithWhereUniqueWithoutProjectInput | ProjectAdditionalServiceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAdditionalServiceUpdateManyWithWhereWithoutProjectInput | ProjectAdditionalServiceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAdditionalServiceScalarWhereInput | ProjectAdditionalServiceScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProjectInput | PaymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProjectInput | PaymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProjectInput | PaymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProjectFileUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectFileCreateWithoutProjectInput, ProjectFileUncheckedCreateWithoutProjectInput> | ProjectFileCreateWithoutProjectInput[] | ProjectFileUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectFileCreateOrConnectWithoutProjectInput | ProjectFileCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectFileUpsertWithWhereUniqueWithoutProjectInput | ProjectFileUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectFileCreateManyProjectInputEnvelope
    set?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    disconnect?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    delete?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    connect?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    update?: ProjectFileUpdateWithWhereUniqueWithoutProjectInput | ProjectFileUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectFileUpdateManyWithWhereWithoutProjectInput | ProjectFileUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectFileScalarWhereInput | ProjectFileScalarWhereInput[]
  }

  export type ProjectActivityUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutProjectInput | ProjectActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutProjectInput | ProjectActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutProjectInput | ProjectActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectServiceCreateWithoutProjectInput, ProjectServiceUncheckedCreateWithoutProjectInput> | ProjectServiceCreateWithoutProjectInput[] | ProjectServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectServiceCreateOrConnectWithoutProjectInput | ProjectServiceCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectServiceUpsertWithWhereUniqueWithoutProjectInput | ProjectServiceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectServiceCreateManyProjectInputEnvelope
    set?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    disconnect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    delete?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    connect?: ProjectServiceWhereUniqueInput | ProjectServiceWhereUniqueInput[]
    update?: ProjectServiceUpdateWithWhereUniqueWithoutProjectInput | ProjectServiceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectServiceUpdateManyWithWhereWithoutProjectInput | ProjectServiceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
  }

  export type ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectAdditionalServiceCreateWithoutProjectInput, ProjectAdditionalServiceUncheckedCreateWithoutProjectInput> | ProjectAdditionalServiceCreateWithoutProjectInput[] | ProjectAdditionalServiceUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectAdditionalServiceCreateOrConnectWithoutProjectInput | ProjectAdditionalServiceCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectAdditionalServiceUpsertWithWhereUniqueWithoutProjectInput | ProjectAdditionalServiceUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectAdditionalServiceCreateManyProjectInputEnvelope
    set?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    disconnect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    delete?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    connect?: ProjectAdditionalServiceWhereUniqueInput | ProjectAdditionalServiceWhereUniqueInput[]
    update?: ProjectAdditionalServiceUpdateWithWhereUniqueWithoutProjectInput | ProjectAdditionalServiceUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectAdditionalServiceUpdateManyWithWhereWithoutProjectInput | ProjectAdditionalServiceUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectAdditionalServiceScalarWhereInput | ProjectAdditionalServiceScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProjectInput | PaymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProjectInput | PaymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProjectInput | PaymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProjectFileUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectFileCreateWithoutProjectInput, ProjectFileUncheckedCreateWithoutProjectInput> | ProjectFileCreateWithoutProjectInput[] | ProjectFileUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectFileCreateOrConnectWithoutProjectInput | ProjectFileCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectFileUpsertWithWhereUniqueWithoutProjectInput | ProjectFileUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectFileCreateManyProjectInputEnvelope
    set?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    disconnect?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    delete?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    connect?: ProjectFileWhereUniqueInput | ProjectFileWhereUniqueInput[]
    update?: ProjectFileUpdateWithWhereUniqueWithoutProjectInput | ProjectFileUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectFileUpdateManyWithWhereWithoutProjectInput | ProjectFileUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectFileScalarWhereInput | ProjectFileScalarWhereInput[]
  }

  export type ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutProjectInput | ProjectActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutProjectInput | ProjectActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutProjectInput | ProjectActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectServicesInput = {
    create?: XOR<ProjectCreateWithoutProjectServicesInput, ProjectUncheckedCreateWithoutProjectServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectServicesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutProjectServicesInput = {
    create?: XOR<ServiceCreateWithoutProjectServicesInput, ServiceUncheckedCreateWithoutProjectServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ComplexityOptionCreateNestedOneWithoutProjectServicesInput = {
    create?: XOR<ComplexityOptionCreateWithoutProjectServicesInput, ComplexityOptionUncheckedCreateWithoutProjectServicesInput>
    connectOrCreate?: ComplexityOptionCreateOrConnectWithoutProjectServicesInput
    connect?: ComplexityOptionWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectServicesNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectServicesInput, ProjectUncheckedCreateWithoutProjectServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectServicesInput
    upsert?: ProjectUpsertWithoutProjectServicesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectServicesInput, ProjectUpdateWithoutProjectServicesInput>, ProjectUncheckedUpdateWithoutProjectServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutProjectServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutProjectServicesInput, ServiceUncheckedCreateWithoutProjectServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProjectServicesInput
    upsert?: ServiceUpsertWithoutProjectServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutProjectServicesInput, ServiceUpdateWithoutProjectServicesInput>, ServiceUncheckedUpdateWithoutProjectServicesInput>
  }

  export type ComplexityOptionUpdateOneRequiredWithoutProjectServicesNestedInput = {
    create?: XOR<ComplexityOptionCreateWithoutProjectServicesInput, ComplexityOptionUncheckedCreateWithoutProjectServicesInput>
    connectOrCreate?: ComplexityOptionCreateOrConnectWithoutProjectServicesInput
    upsert?: ComplexityOptionUpsertWithoutProjectServicesInput
    connect?: ComplexityOptionWhereUniqueInput
    update?: XOR<XOR<ComplexityOptionUpdateToOneWithWhereWithoutProjectServicesInput, ComplexityOptionUpdateWithoutProjectServicesInput>, ComplexityOptionUncheckedUpdateWithoutProjectServicesInput>
  }

  export type ProjectCreateNestedOneWithoutProjectAdditionalServicesInput = {
    create?: XOR<ProjectCreateWithoutProjectAdditionalServicesInput, ProjectUncheckedCreateWithoutProjectAdditionalServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectAdditionalServicesInput
    connect?: ProjectWhereUniqueInput
  }

  export type AdditionalServiceCreateNestedOneWithoutProjectAdditionalServicesInput = {
    create?: XOR<AdditionalServiceCreateWithoutProjectAdditionalServicesInput, AdditionalServiceUncheckedCreateWithoutProjectAdditionalServicesInput>
    connectOrCreate?: AdditionalServiceCreateOrConnectWithoutProjectAdditionalServicesInput
    connect?: AdditionalServiceWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectAdditionalServicesNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectAdditionalServicesInput, ProjectUncheckedCreateWithoutProjectAdditionalServicesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectAdditionalServicesInput
    upsert?: ProjectUpsertWithoutProjectAdditionalServicesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectAdditionalServicesInput, ProjectUpdateWithoutProjectAdditionalServicesInput>, ProjectUncheckedUpdateWithoutProjectAdditionalServicesInput>
  }

  export type AdditionalServiceUpdateOneRequiredWithoutProjectAdditionalServicesNestedInput = {
    create?: XOR<AdditionalServiceCreateWithoutProjectAdditionalServicesInput, AdditionalServiceUncheckedCreateWithoutProjectAdditionalServicesInput>
    connectOrCreate?: AdditionalServiceCreateOrConnectWithoutProjectAdditionalServicesInput
    upsert?: AdditionalServiceUpsertWithoutProjectAdditionalServicesInput
    connect?: AdditionalServiceWhereUniqueInput
    update?: XOR<XOR<AdditionalServiceUpdateToOneWithWhereWithoutProjectAdditionalServicesInput, AdditionalServiceUpdateWithoutProjectAdditionalServicesInput>, AdditionalServiceUncheckedUpdateWithoutProjectAdditionalServicesInput>
  }

  export type ProjectCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type ProjectUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentsInput
    upsert?: ProjectUpsertWithoutPaymentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPaymentsInput, ProjectUpdateWithoutPaymentsInput>, ProjectUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProjectCreateNestedOneWithoutFilesInput = {
    create?: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFilesInput
    upsert?: ProjectUpsertWithoutFilesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFilesInput, ProjectUpdateWithoutFilesInput>, ProjectUncheckedUpdateWithoutFilesInput>
  }

  export type ProjectCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivitiesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type ProjectUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivitiesInput
    upsert?: ProjectUpsertWithoutActivitiesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutActivitiesInput, ProjectUpdateWithoutActivitiesInput>, ProjectUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumContactMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodFilter<$PrismaModel> | $Enums.ContactMethod
  }

  export type NestedEnumContactTimeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTime | EnumContactTimeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTimeFilter<$PrismaModel> | $Enums.ContactTime
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

  export type NestedEnumContactMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactMethod | EnumContactMethodFieldRefInput<$PrismaModel>
    in?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactMethod[] | ListEnumContactMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumContactMethodWithAggregatesFilter<$PrismaModel> | $Enums.ContactMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactMethodFilter<$PrismaModel>
    _max?: NestedEnumContactMethodFilter<$PrismaModel>
  }

  export type NestedEnumContactTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactTime | EnumContactTimeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContactTime[] | ListEnumContactTimeFieldRefInput<$PrismaModel>
    not?: NestedEnumContactTimeWithAggregatesFilter<$PrismaModel> | $Enums.ContactTime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTimeFilter<$PrismaModel>
    _max?: NestedEnumContactTimeFilter<$PrismaModel>
  }

  export type NestedEnumServiceCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceCategory | EnumServiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceCategoryFilter<$PrismaModel> | $Enums.ServiceCategory
  }

  export type NestedEnumServiceCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceCategory | EnumServiceCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceCategory[] | ListEnumServiceCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ServiceCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceCategoryFilter<$PrismaModel>
    _max?: NestedEnumServiceCategoryFilter<$PrismaModel>
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

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumTimelineTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TimelineType | EnumTimelineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineTypeFilter<$PrismaModel> | $Enums.TimelineType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumTimelineTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimelineType | EnumTimelineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimelineType[] | ListEnumTimelineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTimelineTypeWithAggregatesFilter<$PrismaModel> | $Enums.TimelineType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimelineTypeFilter<$PrismaModel>
    _max?: NestedEnumTimelineTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentType[] | ListEnumPaymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
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

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type ProjectActivityCreateWithoutUserInput = {
    id?: string
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivitiesInput
  }

  export type ProjectActivityUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityCreateOrConnectWithoutUserInput = {
    where: ProjectActivityWhereUniqueInput
    create: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput>
  }

  export type ProjectActivityCreateManyUserInputEnvelope = {
    data: ProjectActivityCreateManyUserInput | ProjectActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectActivityWhereUniqueInput
    update: XOR<ProjectActivityUpdateWithoutUserInput, ProjectActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectActivityCreateWithoutUserInput, ProjectActivityUncheckedCreateWithoutUserInput>
  }

  export type ProjectActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectActivityWhereUniqueInput
    data: XOR<ProjectActivityUpdateWithoutUserInput, ProjectActivityUncheckedUpdateWithoutUserInput>
  }

  export type ProjectActivityUpdateManyWithWhereWithoutUserInput = {
    where: ProjectActivityScalarWhereInput
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectActivityScalarWhereInput = {
    AND?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
    OR?: ProjectActivityScalarWhereInput[]
    NOT?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
    id?: StringFilter<"ProjectActivity"> | string
    projectId?: StringFilter<"ProjectActivity"> | string
    userId?: StringNullableFilter<"ProjectActivity"> | string | null
    type?: EnumActivityTypeFilter<"ProjectActivity"> | $Enums.ActivityType
    action?: StringFilter<"ProjectActivity"> | string
    description?: StringNullableFilter<"ProjectActivity"> | string | null
    metadata?: JsonNullableFilter<"ProjectActivity">
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
  }

  export type ProjectCreateWithoutClientInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
    files?: ProjectFileCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutClientInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
    files?: ProjectFileUncheckedCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutClientInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectCreateManyClientInputEnvelope = {
    data: ProjectCreateManyClientInput | ProjectCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
    create: XOR<ProjectCreateWithoutClientInput, ProjectUncheckedCreateWithoutClientInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutClientInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutClientInput, ProjectUncheckedUpdateWithoutClientInput>
  }

  export type ProjectUpdateManyWithWhereWithoutClientInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutClientInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    referenceId?: StringFilter<"Project"> | string
    clientId?: StringFilter<"Project"> | string
    projectName?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    projectType?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFilter<"Project"> | $Enums.TimelineType
    timelineModifier?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFilter<"Project"> | number
    estimatedMax?: IntFilter<"Project"> | number
    finalPrice?: IntNullableFilter<"Project"> | number | null
    bundleDiscount?: IntFilter<"Project"> | number
    budgetRangeMin?: IntFilter<"Project"> | number
    budgetRangeMax?: IntFilter<"Project"> | number
    submittedAt?: DateTimeFilter<"Project"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    dealingStartAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    estimatedCompletion?: DateTimeNullableFilter<"Project"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    revisionCount?: IntFilter<"Project"> | number
    maxRevisions?: IntFilter<"Project"> | number
    additionalNotes?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ComplexityOptionCreateWithoutServiceInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceCreateNestedManyWithoutComplexityOptionInput
  }

  export type ComplexityOptionUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutComplexityOptionInput
  }

  export type ComplexityOptionCreateOrConnectWithoutServiceInput = {
    where: ComplexityOptionWhereUniqueInput
    create: XOR<ComplexityOptionCreateWithoutServiceInput, ComplexityOptionUncheckedCreateWithoutServiceInput>
  }

  export type ComplexityOptionCreateManyServiceInputEnvelope = {
    data: ComplexityOptionCreateManyServiceInput | ComplexityOptionCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectServiceCreateWithoutServiceInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectServicesInput
    complexityOption: ComplexityOptionCreateNestedOneWithoutProjectServicesInput
  }

  export type ProjectServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    projectId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectServiceCreateOrConnectWithoutServiceInput = {
    where: ProjectServiceWhereUniqueInput
    create: XOR<ProjectServiceCreateWithoutServiceInput, ProjectServiceUncheckedCreateWithoutServiceInput>
  }

  export type ProjectServiceCreateManyServiceInputEnvelope = {
    data: ProjectServiceCreateManyServiceInput | ProjectServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ComplexityOptionUpsertWithWhereUniqueWithoutServiceInput = {
    where: ComplexityOptionWhereUniqueInput
    update: XOR<ComplexityOptionUpdateWithoutServiceInput, ComplexityOptionUncheckedUpdateWithoutServiceInput>
    create: XOR<ComplexityOptionCreateWithoutServiceInput, ComplexityOptionUncheckedCreateWithoutServiceInput>
  }

  export type ComplexityOptionUpdateWithWhereUniqueWithoutServiceInput = {
    where: ComplexityOptionWhereUniqueInput
    data: XOR<ComplexityOptionUpdateWithoutServiceInput, ComplexityOptionUncheckedUpdateWithoutServiceInput>
  }

  export type ComplexityOptionUpdateManyWithWhereWithoutServiceInput = {
    where: ComplexityOptionScalarWhereInput
    data: XOR<ComplexityOptionUpdateManyMutationInput, ComplexityOptionUncheckedUpdateManyWithoutServiceInput>
  }

  export type ComplexityOptionScalarWhereInput = {
    AND?: ComplexityOptionScalarWhereInput | ComplexityOptionScalarWhereInput[]
    OR?: ComplexityOptionScalarWhereInput[]
    NOT?: ComplexityOptionScalarWhereInput | ComplexityOptionScalarWhereInput[]
    id?: StringFilter<"ComplexityOption"> | string
    serviceId?: StringFilter<"ComplexityOption"> | string
    name?: StringFilter<"ComplexityOption"> | string
    slug?: StringFilter<"ComplexityOption"> | string
    description?: StringNullableFilter<"ComplexityOption"> | string | null
    minPrice?: IntFilter<"ComplexityOption"> | number
    maxPrice?: IntFilter<"ComplexityOption"> | number
    isActive?: BoolFilter<"ComplexityOption"> | boolean
    createdAt?: DateTimeFilter<"ComplexityOption"> | Date | string
    updatedAt?: DateTimeFilter<"ComplexityOption"> | Date | string
  }

  export type ProjectServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProjectServiceWhereUniqueInput
    update: XOR<ProjectServiceUpdateWithoutServiceInput, ProjectServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<ProjectServiceCreateWithoutServiceInput, ProjectServiceUncheckedCreateWithoutServiceInput>
  }

  export type ProjectServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProjectServiceWhereUniqueInput
    data: XOR<ProjectServiceUpdateWithoutServiceInput, ProjectServiceUncheckedUpdateWithoutServiceInput>
  }

  export type ProjectServiceUpdateManyWithWhereWithoutServiceInput = {
    where: ProjectServiceScalarWhereInput
    data: XOR<ProjectServiceUpdateManyMutationInput, ProjectServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProjectServiceScalarWhereInput = {
    AND?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
    OR?: ProjectServiceScalarWhereInput[]
    NOT?: ProjectServiceScalarWhereInput | ProjectServiceScalarWhereInput[]
    id?: StringFilter<"ProjectService"> | string
    projectId?: StringFilter<"ProjectService"> | string
    serviceId?: StringFilter<"ProjectService"> | string
    complexityOptionId?: StringFilter<"ProjectService"> | string
    selectedMinPrice?: IntFilter<"ProjectService"> | number
    selectedMaxPrice?: IntFilter<"ProjectService"> | number
    createdAt?: DateTimeFilter<"ProjectService"> | Date | string
  }

  export type ServiceCreateWithoutComplexityOptionsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutComplexityOptionsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutComplexityOptionsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutComplexityOptionsInput, ServiceUncheckedCreateWithoutComplexityOptionsInput>
  }

  export type ProjectServiceCreateWithoutComplexityOptionInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectServicesInput
    service: ServiceCreateNestedOneWithoutProjectServicesInput
  }

  export type ProjectServiceUncheckedCreateWithoutComplexityOptionInput = {
    id?: string
    projectId: string
    serviceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectServiceCreateOrConnectWithoutComplexityOptionInput = {
    where: ProjectServiceWhereUniqueInput
    create: XOR<ProjectServiceCreateWithoutComplexityOptionInput, ProjectServiceUncheckedCreateWithoutComplexityOptionInput>
  }

  export type ProjectServiceCreateManyComplexityOptionInputEnvelope = {
    data: ProjectServiceCreateManyComplexityOptionInput | ProjectServiceCreateManyComplexityOptionInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithoutComplexityOptionsInput = {
    update: XOR<ServiceUpdateWithoutComplexityOptionsInput, ServiceUncheckedUpdateWithoutComplexityOptionsInput>
    create: XOR<ServiceCreateWithoutComplexityOptionsInput, ServiceUncheckedCreateWithoutComplexityOptionsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutComplexityOptionsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutComplexityOptionsInput, ServiceUncheckedUpdateWithoutComplexityOptionsInput>
  }

  export type ServiceUpdateWithoutComplexityOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutComplexityOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ProjectServiceUpsertWithWhereUniqueWithoutComplexityOptionInput = {
    where: ProjectServiceWhereUniqueInput
    update: XOR<ProjectServiceUpdateWithoutComplexityOptionInput, ProjectServiceUncheckedUpdateWithoutComplexityOptionInput>
    create: XOR<ProjectServiceCreateWithoutComplexityOptionInput, ProjectServiceUncheckedCreateWithoutComplexityOptionInput>
  }

  export type ProjectServiceUpdateWithWhereUniqueWithoutComplexityOptionInput = {
    where: ProjectServiceWhereUniqueInput
    data: XOR<ProjectServiceUpdateWithoutComplexityOptionInput, ProjectServiceUncheckedUpdateWithoutComplexityOptionInput>
  }

  export type ProjectServiceUpdateManyWithWhereWithoutComplexityOptionInput = {
    where: ProjectServiceScalarWhereInput
    data: XOR<ProjectServiceUpdateManyMutationInput, ProjectServiceUncheckedUpdateManyWithoutComplexityOptionInput>
  }

  export type ProjectAdditionalServiceCreateWithoutAdditionalServiceInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectAdditionalServicesInput
  }

  export type ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput = {
    id?: string
    projectId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectAdditionalServiceCreateOrConnectWithoutAdditionalServiceInput = {
    where: ProjectAdditionalServiceWhereUniqueInput
    create: XOR<ProjectAdditionalServiceCreateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput>
  }

  export type ProjectAdditionalServiceCreateManyAdditionalServiceInputEnvelope = {
    data: ProjectAdditionalServiceCreateManyAdditionalServiceInput | ProjectAdditionalServiceCreateManyAdditionalServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAdditionalServiceUpsertWithWhereUniqueWithoutAdditionalServiceInput = {
    where: ProjectAdditionalServiceWhereUniqueInput
    update: XOR<ProjectAdditionalServiceUpdateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedUpdateWithoutAdditionalServiceInput>
    create: XOR<ProjectAdditionalServiceCreateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedCreateWithoutAdditionalServiceInput>
  }

  export type ProjectAdditionalServiceUpdateWithWhereUniqueWithoutAdditionalServiceInput = {
    where: ProjectAdditionalServiceWhereUniqueInput
    data: XOR<ProjectAdditionalServiceUpdateWithoutAdditionalServiceInput, ProjectAdditionalServiceUncheckedUpdateWithoutAdditionalServiceInput>
  }

  export type ProjectAdditionalServiceUpdateManyWithWhereWithoutAdditionalServiceInput = {
    where: ProjectAdditionalServiceScalarWhereInput
    data: XOR<ProjectAdditionalServiceUpdateManyMutationInput, ProjectAdditionalServiceUncheckedUpdateManyWithoutAdditionalServiceInput>
  }

  export type ProjectAdditionalServiceScalarWhereInput = {
    AND?: ProjectAdditionalServiceScalarWhereInput | ProjectAdditionalServiceScalarWhereInput[]
    OR?: ProjectAdditionalServiceScalarWhereInput[]
    NOT?: ProjectAdditionalServiceScalarWhereInput | ProjectAdditionalServiceScalarWhereInput[]
    id?: StringFilter<"ProjectAdditionalService"> | string
    projectId?: StringFilter<"ProjectAdditionalService"> | string
    additionalServiceId?: StringFilter<"ProjectAdditionalService"> | string
    selectedMinPrice?: IntFilter<"ProjectAdditionalService"> | number
    selectedMaxPrice?: IntFilter<"ProjectAdditionalService"> | number
    createdAt?: DateTimeFilter<"ProjectAdditionalService"> | Date | string
  }

  export type ClientCreateWithoutProjectsInput = {
    id?: string
    fullName: string
    email: string
    countryCode?: string
    phone: string
    companyName?: string | null
    companyWebsite?: string | null
    contactMethod?: $Enums.ContactMethod
    contactTime?: $Enums.ContactTime
    referralSource?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutProjectsInput = {
    id?: string
    fullName: string
    email: string
    countryCode?: string
    phone: string
    companyName?: string | null
    companyWebsite?: string | null
    contactMethod?: $Enums.ContactMethod
    contactTime?: $Enums.ContactTime
    referralSource?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutProjectsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectServiceCreateWithoutProjectInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    service: ServiceCreateNestedOneWithoutProjectServicesInput
    complexityOption: ComplexityOptionCreateNestedOneWithoutProjectServicesInput
  }

  export type ProjectServiceUncheckedCreateWithoutProjectInput = {
    id?: string
    serviceId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectServiceCreateOrConnectWithoutProjectInput = {
    where: ProjectServiceWhereUniqueInput
    create: XOR<ProjectServiceCreateWithoutProjectInput, ProjectServiceUncheckedCreateWithoutProjectInput>
  }

  export type ProjectServiceCreateManyProjectInputEnvelope = {
    data: ProjectServiceCreateManyProjectInput | ProjectServiceCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectAdditionalServiceCreateWithoutProjectInput = {
    id?: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
    additionalService: AdditionalServiceCreateNestedOneWithoutProjectAdditionalServicesInput
  }

  export type ProjectAdditionalServiceUncheckedCreateWithoutProjectInput = {
    id?: string
    additionalServiceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectAdditionalServiceCreateOrConnectWithoutProjectInput = {
    where: ProjectAdditionalServiceWhereUniqueInput
    create: XOR<ProjectAdditionalServiceCreateWithoutProjectInput, ProjectAdditionalServiceUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAdditionalServiceCreateManyProjectInputEnvelope = {
    data: ProjectAdditionalServiceCreateManyProjectInput | ProjectAdditionalServiceCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutProjectInput = {
    id?: string
    type: $Enums.PaymentType
    amount: number
    status?: $Enums.PaymentStatus
    tripayInvoiceId?: string | null
    tripayInvoiceUrl?: string | null
    paidAt?: Date | string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutProjectInput = {
    id?: string
    type: $Enums.PaymentType
    amount: number
    status?: $Enums.PaymentStatus
    tripayInvoiceId?: string | null
    tripayInvoiceUrl?: string | null
    paidAt?: Date | string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutProjectInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput>
  }

  export type PaymentCreateManyProjectInputEnvelope = {
    data: PaymentCreateManyProjectInput | PaymentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectFileCreateWithoutProjectInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type ProjectFileUncheckedCreateWithoutProjectInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type ProjectFileCreateOrConnectWithoutProjectInput = {
    where: ProjectFileWhereUniqueInput
    create: XOR<ProjectFileCreateWithoutProjectInput, ProjectFileUncheckedCreateWithoutProjectInput>
  }

  export type ProjectFileCreateManyProjectInputEnvelope = {
    data: ProjectFileCreateManyProjectInput | ProjectFileCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectActivityCreateWithoutProjectInput = {
    id?: string
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ProjectActivityUncheckedCreateWithoutProjectInput = {
    id?: string
    userId?: string | null
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityCreateOrConnectWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    create: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput>
  }

  export type ProjectActivityCreateManyProjectInputEnvelope = {
    data: ProjectActivityCreateManyProjectInput | ProjectActivityCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutProjectsInput = {
    update: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
    create: XOR<ClientCreateWithoutProjectsInput, ClientUncheckedCreateWithoutProjectsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProjectsInput, ClientUncheckedUpdateWithoutProjectsInput>
  }

  export type ClientUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    contactTime?: EnumContactTimeFieldUpdateOperationsInput | $Enums.ContactTime
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactMethod?: EnumContactMethodFieldUpdateOperationsInput | $Enums.ContactMethod
    contactTime?: EnumContactTimeFieldUpdateOperationsInput | $Enums.ContactTime
    referralSource?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectServiceWhereUniqueInput
    update: XOR<ProjectServiceUpdateWithoutProjectInput, ProjectServiceUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectServiceCreateWithoutProjectInput, ProjectServiceUncheckedCreateWithoutProjectInput>
  }

  export type ProjectServiceUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectServiceWhereUniqueInput
    data: XOR<ProjectServiceUpdateWithoutProjectInput, ProjectServiceUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectServiceUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectServiceScalarWhereInput
    data: XOR<ProjectServiceUpdateManyMutationInput, ProjectServiceUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectAdditionalServiceUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectAdditionalServiceWhereUniqueInput
    update: XOR<ProjectAdditionalServiceUpdateWithoutProjectInput, ProjectAdditionalServiceUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectAdditionalServiceCreateWithoutProjectInput, ProjectAdditionalServiceUncheckedCreateWithoutProjectInput>
  }

  export type ProjectAdditionalServiceUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectAdditionalServiceWhereUniqueInput
    data: XOR<ProjectAdditionalServiceUpdateWithoutProjectInput, ProjectAdditionalServiceUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectAdditionalServiceUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectAdditionalServiceScalarWhereInput
    data: XOR<ProjectAdditionalServiceUpdateManyMutationInput, ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutProjectInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutProjectInput, PaymentUncheckedUpdateWithoutProjectInput>
    create: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutProjectInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutProjectInput, PaymentUncheckedUpdateWithoutProjectInput>
  }

  export type PaymentUpdateManyWithWhereWithoutProjectInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutProjectInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    projectId?: StringFilter<"Payment"> | string
    type?: EnumPaymentTypeFilter<"Payment"> | $Enums.PaymentType
    amount?: IntFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    tripayInvoiceId?: StringNullableFilter<"Payment"> | string | null
    tripayInvoiceUrl?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    expiredAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ProjectFileUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectFileWhereUniqueInput
    update: XOR<ProjectFileUpdateWithoutProjectInput, ProjectFileUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectFileCreateWithoutProjectInput, ProjectFileUncheckedCreateWithoutProjectInput>
  }

  export type ProjectFileUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectFileWhereUniqueInput
    data: XOR<ProjectFileUpdateWithoutProjectInput, ProjectFileUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectFileUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectFileScalarWhereInput
    data: XOR<ProjectFileUpdateManyMutationInput, ProjectFileUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectFileScalarWhereInput = {
    AND?: ProjectFileScalarWhereInput | ProjectFileScalarWhereInput[]
    OR?: ProjectFileScalarWhereInput[]
    NOT?: ProjectFileScalarWhereInput | ProjectFileScalarWhereInput[]
    id?: StringFilter<"ProjectFile"> | string
    projectId?: StringFilter<"ProjectFile"> | string
    fileName?: StringFilter<"ProjectFile"> | string
    fileUrl?: StringFilter<"ProjectFile"> | string
    fileSize?: IntFilter<"ProjectFile"> | number
    fileType?: StringFilter<"ProjectFile"> | string
    uploadedAt?: DateTimeFilter<"ProjectFile"> | Date | string
  }

  export type ProjectActivityUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    update: XOR<ProjectActivityUpdateWithoutProjectInput, ProjectActivityUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput>
  }

  export type ProjectActivityUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    data: XOR<ProjectActivityUpdateWithoutProjectInput, ProjectActivityUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectActivityUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectActivityScalarWhereInput
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutProjectServicesInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
    files?: ProjectFileCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectServicesInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
    files?: ProjectFileUncheckedCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectServicesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectServicesInput, ProjectUncheckedCreateWithoutProjectServicesInput>
  }

  export type ServiceCreateWithoutProjectServicesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    complexityOptions?: ComplexityOptionCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProjectServicesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: $Enums.ServiceCategory
    icon?: string | null
    basePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    complexityOptions?: ComplexityOptionUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProjectServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProjectServicesInput, ServiceUncheckedCreateWithoutProjectServicesInput>
  }

  export type ComplexityOptionCreateWithoutProjectServicesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutComplexityOptionsInput
  }

  export type ComplexityOptionUncheckedCreateWithoutProjectServicesInput = {
    id?: string
    serviceId: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ComplexityOptionCreateOrConnectWithoutProjectServicesInput = {
    where: ComplexityOptionWhereUniqueInput
    create: XOR<ComplexityOptionCreateWithoutProjectServicesInput, ComplexityOptionUncheckedCreateWithoutProjectServicesInput>
  }

  export type ProjectUpsertWithoutProjectServicesInput = {
    update: XOR<ProjectUpdateWithoutProjectServicesInput, ProjectUncheckedUpdateWithoutProjectServicesInput>
    create: XOR<ProjectCreateWithoutProjectServicesInput, ProjectUncheckedCreateWithoutProjectServicesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectServicesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectServicesInput, ProjectUncheckedUpdateWithoutProjectServicesInput>
  }

  export type ProjectUpdateWithoutProjectServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ServiceUpsertWithoutProjectServicesInput = {
    update: XOR<ServiceUpdateWithoutProjectServicesInput, ServiceUncheckedUpdateWithoutProjectServicesInput>
    create: XOR<ServiceCreateWithoutProjectServicesInput, ServiceUncheckedCreateWithoutProjectServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutProjectServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutProjectServicesInput, ServiceUncheckedUpdateWithoutProjectServicesInput>
  }

  export type ServiceUpdateWithoutProjectServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complexityOptions?: ComplexityOptionUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProjectServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumServiceCategoryFieldUpdateOperationsInput | $Enums.ServiceCategory
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    complexityOptions?: ComplexityOptionUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ComplexityOptionUpsertWithoutProjectServicesInput = {
    update: XOR<ComplexityOptionUpdateWithoutProjectServicesInput, ComplexityOptionUncheckedUpdateWithoutProjectServicesInput>
    create: XOR<ComplexityOptionCreateWithoutProjectServicesInput, ComplexityOptionUncheckedCreateWithoutProjectServicesInput>
    where?: ComplexityOptionWhereInput
  }

  export type ComplexityOptionUpdateToOneWithWhereWithoutProjectServicesInput = {
    where?: ComplexityOptionWhereInput
    data: XOR<ComplexityOptionUpdateWithoutProjectServicesInput, ComplexityOptionUncheckedUpdateWithoutProjectServicesInput>
  }

  export type ComplexityOptionUpdateWithoutProjectServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutComplexityOptionsNestedInput
  }

  export type ComplexityOptionUncheckedUpdateWithoutProjectServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutProjectAdditionalServicesInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    projectServices?: ProjectServiceCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
    files?: ProjectFileCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectAdditionalServicesInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
    files?: ProjectFileUncheckedCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectAdditionalServicesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectAdditionalServicesInput, ProjectUncheckedCreateWithoutProjectAdditionalServicesInput>
  }

  export type AdditionalServiceCreateWithoutProjectAdditionalServicesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdditionalServiceUncheckedCreateWithoutProjectAdditionalServicesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdditionalServiceCreateOrConnectWithoutProjectAdditionalServicesInput = {
    where: AdditionalServiceWhereUniqueInput
    create: XOR<AdditionalServiceCreateWithoutProjectAdditionalServicesInput, AdditionalServiceUncheckedCreateWithoutProjectAdditionalServicesInput>
  }

  export type ProjectUpsertWithoutProjectAdditionalServicesInput = {
    update: XOR<ProjectUpdateWithoutProjectAdditionalServicesInput, ProjectUncheckedUpdateWithoutProjectAdditionalServicesInput>
    create: XOR<ProjectCreateWithoutProjectAdditionalServicesInput, ProjectUncheckedCreateWithoutProjectAdditionalServicesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectAdditionalServicesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectAdditionalServicesInput, ProjectUncheckedUpdateWithoutProjectAdditionalServicesInput>
  }

  export type ProjectUpdateWithoutProjectAdditionalServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectAdditionalServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AdditionalServiceUpsertWithoutProjectAdditionalServicesInput = {
    update: XOR<AdditionalServiceUpdateWithoutProjectAdditionalServicesInput, AdditionalServiceUncheckedUpdateWithoutProjectAdditionalServicesInput>
    create: XOR<AdditionalServiceCreateWithoutProjectAdditionalServicesInput, AdditionalServiceUncheckedCreateWithoutProjectAdditionalServicesInput>
    where?: AdditionalServiceWhereInput
  }

  export type AdditionalServiceUpdateToOneWithWhereWithoutProjectAdditionalServicesInput = {
    where?: AdditionalServiceWhereInput
    data: XOR<AdditionalServiceUpdateWithoutProjectAdditionalServicesInput, AdditionalServiceUncheckedUpdateWithoutProjectAdditionalServicesInput>
  }

  export type AdditionalServiceUpdateWithoutProjectAdditionalServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdditionalServiceUncheckedUpdateWithoutProjectAdditionalServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutPaymentsInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    projectServices?: ProjectServiceCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutProjectInput
    files?: ProjectFileCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPaymentsInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput
    files?: ProjectFileUncheckedCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPaymentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
  }

  export type ProjectUpsertWithoutPaymentsInput = {
    update: XOR<ProjectUpdateWithoutPaymentsInput, ProjectUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPaymentsInput, ProjectUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProjectUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutFilesInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    projectServices?: ProjectServiceCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFilesInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFilesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
  }

  export type ProjectUpsertWithoutFilesInput = {
    update: XOR<ProjectUpdateWithoutFilesInput, ProjectUncheckedUpdateWithoutFilesInput>
    create: XOR<ProjectCreateWithoutFilesInput, ProjectUncheckedCreateWithoutFilesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFilesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFilesInput, ProjectUncheckedUpdateWithoutFilesInput>
  }

  export type ProjectUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutActivitiesInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutProjectsInput
    projectServices?: ProjectServiceCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
    files?: ProjectFileCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutActivitiesInput = {
    id?: string
    referenceId: string
    clientId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectServices?: ProjectServiceUncheckedCreateNestedManyWithoutProjectInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
    files?: ProjectFileUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutActivitiesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type ProjectUpsertWithoutActivitiesInput = {
    update: XOR<ProjectUpdateWithoutActivitiesInput, ProjectUncheckedUpdateWithoutActivitiesInput>
    create: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutActivitiesInput, ProjectUncheckedUpdateWithoutActivitiesInput>
  }

  export type ProjectUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutProjectsNestedInput
    projectServices?: ProjectServiceUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateManyUserInput = {
    id?: string
    projectId: string
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ProjectActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyClientInput = {
    id?: string
    referenceId: string
    projectName: string
    description: string
    projectType?: $Enums.ProjectType
    status?: $Enums.ProjectStatus
    timeline?: $Enums.TimelineType
    timelineModifier?: Decimal | DecimalJsLike | number | string
    estimatedMin: number
    estimatedMax: number
    finalPrice?: number | null
    bundleDiscount?: number
    budgetRangeMin: number
    budgetRangeMax: number
    submittedAt?: Date | string
    reviewedAt?: Date | string | null
    dealingStartAt?: Date | string | null
    startDate?: Date | string | null
    estimatedCompletion?: Date | string | null
    completedAt?: Date | string | null
    cancelledAt?: Date | string | null
    revisionCount?: number
    maxRevisions?: number
    additionalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutProjectNestedInput
    projectAdditionalServices?: ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
    files?: ProjectFileUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    timeline?: EnumTimelineTypeFieldUpdateOperationsInput | $Enums.TimelineType
    timelineModifier?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMin?: IntFieldUpdateOperationsInput | number
    estimatedMax?: IntFieldUpdateOperationsInput | number
    finalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    bundleDiscount?: IntFieldUpdateOperationsInput | number
    budgetRangeMin?: IntFieldUpdateOperationsInput | number
    budgetRangeMax?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dealingStartAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedCompletion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisionCount?: IntFieldUpdateOperationsInput | number
    maxRevisions?: IntFieldUpdateOperationsInput | number
    additionalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplexityOptionCreateManyServiceInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    minPrice: number
    maxPrice: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectServiceCreateManyServiceInput = {
    id?: string
    projectId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ComplexityOptionUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUpdateManyWithoutComplexityOptionNestedInput
  }

  export type ComplexityOptionUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectServices?: ProjectServiceUncheckedUpdateManyWithoutComplexityOptionNestedInput
  }

  export type ComplexityOptionUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectServicesNestedInput
    complexityOption?: ComplexityOptionUpdateOneRequiredWithoutProjectServicesNestedInput
  }

  export type ProjectServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    complexityOptionId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    complexityOptionId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceCreateManyComplexityOptionInput = {
    id?: string
    projectId: string
    serviceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectServiceUpdateWithoutComplexityOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutProjectServicesNestedInput
  }

  export type ProjectServiceUncheckedUpdateWithoutComplexityOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceUncheckedUpdateManyWithoutComplexityOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceCreateManyAdditionalServiceInput = {
    id?: string
    projectId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectAdditionalServiceUpdateWithoutAdditionalServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectAdditionalServicesNestedInput
  }

  export type ProjectAdditionalServiceUncheckedUpdateWithoutAdditionalServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceUncheckedUpdateManyWithoutAdditionalServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceCreateManyProjectInput = {
    id?: string
    serviceId: string
    complexityOptionId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type ProjectAdditionalServiceCreateManyProjectInput = {
    id?: string
    additionalServiceId: string
    selectedMinPrice: number
    selectedMaxPrice: number
    createdAt?: Date | string
  }

  export type PaymentCreateManyProjectInput = {
    id?: string
    type: $Enums.PaymentType
    amount: number
    status?: $Enums.PaymentStatus
    tripayInvoiceId?: string | null
    tripayInvoiceUrl?: string | null
    paidAt?: Date | string | null
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectFileCreateManyProjectInput = {
    id?: string
    fileName: string
    fileUrl: string
    fileSize: number
    fileType: string
    uploadedAt?: Date | string
  }

  export type ProjectActivityCreateManyProjectInput = {
    id?: string
    userId?: string | null
    type: $Enums.ActivityType
    action: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectServiceUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutProjectServicesNestedInput
    complexityOption?: ComplexityOptionUpdateOneRequiredWithoutProjectServicesNestedInput
  }

  export type ProjectServiceUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    complexityOptionId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectServiceUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    complexityOptionId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    additionalService?: AdditionalServiceUpdateOneRequiredWithoutProjectAdditionalServicesNestedInput
  }

  export type ProjectAdditionalServiceUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    additionalServiceId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectAdditionalServiceUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    additionalServiceId?: StringFieldUpdateOperationsInput | string
    selectedMinPrice?: IntFieldUpdateOperationsInput | number
    selectedMaxPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    tripayInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
    tripayInvoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectFileUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectFileUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectFileUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    fileType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivitiesNestedInput
  }

  export type ProjectActivityUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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