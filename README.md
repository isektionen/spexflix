# YouFlix

## Get started

1. `git clone https://github.com/vmorsell/react-youflix`
1. Create the file .env with the desired settings, see [Environment variables](#environment-variables)
1. `yarn`
1. `yarn start`

## Environment variables

| Name | Description |
| --- | --- |
| `REACT_APP_SITE_NAME` | Site name |
| `REACT_APP_COPYRIGHT_YEAR_FROM`| Starting year for copyright |
| `REACT_APP_YOUTUBE_API_KEY` | Google Cloud API Key with `YouTube Data API v3` enabled. Learn how to create your own [here](https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key) |
| `REACT_APP_YOUTUBE_CHANNEL_ID`| YouTube channel to fetch public playlists from |
| `REACT_APP_YOUTUBE_UNLISTED_PLAYLISTS_IDS` | Comma separated string with ID's of unlisted playlists to include |
| `REACT_APP_YOUTUBE_FEATURED_VIDEO_ID` | ID of featured video |

## Shoutout

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
