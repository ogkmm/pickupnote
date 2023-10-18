import React from 'react';
import { spotifyApi } from '../auth/spotify-login';
import useAuth from '../hooks/useAuth';

interface DashBoardProps {
  code: string;
}

interface UserProps {
  displayName: string | undefined;
  followerCount: number | undefined;
  pageLink: string | undefined;
  avatar: string | undefined;
}

const UserInfo: React.FC<UserProps> = (props: UserProps) => {
  return (
    <>
      <div className="flex flex-row p-3">
        <img className="pr-4" src={props.avatar} alt="User Avatar" />
        <div className="flex flex-col text-left">
          <h4 className="font-bold">{props.displayName}</h4>
          <p>Followers: {props.followerCount}</p>
          <a className="" href={props.pageLink}>
            {'--> Go to home page.'}
          </a>
        </div>
      </div>
    </>
  );
};

const DashBoard: React.FC<DashBoardProps> = ({ code }: DashBoardProps) => {
  const [accessToken] = useAuth(code);
  const [userProfile, setUserProfile] =
    React.useState<SpotifyApi.CurrentUsersProfileResponse>();

  const uInfo: UserProps = {
    displayName: userProfile?.display_name,
    followerCount: userProfile?.followers?.total,
    pageLink: userProfile?.external_urls.spotify,
    avatar: userProfile?.images?.[0].url
  };

  React.useEffect(() => {
    if (!accessToken) return;

    let ignore = false;
    // Setting up the spotifyApi with access token
    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getMe()
      .then((data) => {
        if (!ignore) {
          console.log(data);
          setUserProfile(data.body);
        }
      })
      .catch((err) => {
        if (!ignore) {
          console.error(err);
        }
      });

    return () => {
      ignore = true;
    };
  }, [accessToken]);

  return (
    <>
      <div className="flex flex-col">
        <div className="text-2xl">DashBoard Page.</div>
        {userProfile ? <UserInfo {...uInfo} /> : 'Loading...'}
      </div>
    </>
  );
};

export default DashBoard;
