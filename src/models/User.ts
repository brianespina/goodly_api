// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an ' + 
  'object with the appropriate user keys.';

export enum UserRoles {
  admin,
  client,
}


// **** Types **** //

export interface IUser {
  id: number;
  email: string;
  pwdHash?: string;
  role: UserRoles;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  email?: string,
  role?: UserRoles,
  pwdHash?: string,
  id?: number, // id last cause usually set by db
): IUser {
  return {
    id: (id ?? -1),
    email: (email ?? ''),
    role: (role ?? UserRoles.client),
    pwdHash: (pwdHash ?? ''),
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IUser {
  // Check is user
  if (!isUser(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get user instance
  const p = param as IUser;
  return new_(p.email, p.role, p.pwdHash, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'email' in arg &&
    'role' in arg
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isUser,
} as const;
