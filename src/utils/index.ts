import { ClientRequestOptions } from "@/types";

export function getCookie(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts?.pop()?.split(";").shift();
  }
  return null;
}

export function parseCookies(cookie, sep?, eq?) {
  sep = sep || /;\s*/;
  eq = eq || "=";

  return (cookie || "").split(sep).reduce((result, entry) => {
    const [key, value] = entry.split(eq, 2);
    result[key] = decodeURIComponent(value);
    return result;
  }, {});
}

export function setCookie(name: string, val: string | boolean, session: boolean) {
  const date = new Date();
  const value = val;

  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  if (session) {
    document.cookie = name + "=" + value + "; expires=" + "Session" + "; path=/";
  } else {
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
  }
}

export function removeCookie(name: string) {
  const date = "Thu, 01 Jan 1970 00:00:00 UTC";

  document.cookie = `${name}=; expires=${date}; path=/;`;
}

export function removeCookieOnReaload(name: string) {
  const date = "Thu, 01 Jan 1970 00:00:00 UTC";

  window.onunload = window.onbeforeunload = function () {
    document.cookie = name + "=;" + "expires=" + date + ";";
  };
}

export function buildClientRequestUrl(path: string, options?: ClientRequestOptions) {
  let url = `/api/client${path}`;

  if (options) {
    if (url.includes("?")) {
      url += "&";
    } else {
      url += "?";
    }

    url += `options=${encodeURIComponent(JSON.stringify(options))}`;
  }

  return url;
}

export function blurBackground() {
  if (typeof document !== "undefined") {
    document?.getElementById("main")?.classList?.add("blur-sm");
    document?.getElementById("header")?.classList?.add("blur-sm");
    document?.getElementById("footer")?.classList?.add("blur-sm");
  }
}

export function removeBlur() {
  if (typeof document !== "undefined") {
    document?.getElementById("main")?.classList?.remove("blur-sm");
    document?.getElementById("header")?.classList?.remove("blur-sm");
    document?.getElementById("footer")?.classList?.remove("blur-sm");
  }
}
