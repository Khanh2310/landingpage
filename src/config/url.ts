export class AuthUrlApi {
  public static readonly LOGIN = '/auth/login'

  public static readonly REGISTER = '/auth/register'

  public static readonly REFRESH_TOKEN = '/auth/refresh-token'
}

export class UrlApi {
  public static readonly PROFILE = '/profile'

  public static readonly GENERATE_QR = '/transaction/generate-qr'

  public static readonly CONFIRM_TRANSACTION = '/transaction/confirm'
}

export const privateServerAPI = {
  authUrlApi: {
    Login: "/auth/login",
    Register: "/auth/register",
  },
  userUrlApi: {
    Profile: '/user/profile',
    RefreshToken: '/auth/refresh-token',

    transaction: {
      generateQR: '/transactions-history/generate-qr',
      confirm: '/transactions-history/confirm-transactions',
    }
  }
}
