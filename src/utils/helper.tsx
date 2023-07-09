class Helper {
  /**
   * Return a boolean whether if it is production using env
   */
  static isProd = (): boolean => {
    return process.env.NODE_ENV === "production";
  };
}

export default Helper;
