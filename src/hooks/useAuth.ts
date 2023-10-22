import { useEffect, useState } from 'react';
import axios from 'axios';

const url: string = 'http://localhost:8000/getToken';
let isFetchingToken: boolean = false;

const fetchToken = async (
  code: string | null,
  signal: AbortSignal,
  handle: ((...args: undefined[]) => void)[]
) => {
  if (!code) return;

  const [setAT, setET, setRT] = handle;

  isFetchingToken = true;
  await axios
    .post(url, { code }, { signal })
    .then((res) => {
      window.history.pushState({}, '', '/');

      setAT(res.data.accessToken);
      setET(res.data.expiresTime);
      setRT(res.data.refreshToken);
    })
    .catch((err) => {
      // If fail, then redirect to home page
      // window.location.assign("/")
      console.error(err);
    });
  isFetchingToken = false;
};

export default function useAuth(code: string | null) {
  const [accessToken, setAccessToken] = useState();
  const [expiresTime, setExpiresTime] = useState();
  const [refreshToken, setRefreshToken] = useState();

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;

    if (!isFetchingToken) {
      fetchToken(code, signal, [
        setAccessToken,
        setExpiresTime,
        setRefreshToken
      ]);
    }
  }, [code]);

  return [accessToken, expiresTime, refreshToken];
}
