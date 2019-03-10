export const verifyTokenWithAPI = function (payload) {
    return {
      type: "VERIFY_TOKEN_WITH_API",
      payload
    }
  }