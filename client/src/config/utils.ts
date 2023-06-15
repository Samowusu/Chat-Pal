export const BASE_URL = "http://127.0.0.1:8000";

export type MessagesType = {
  sender: string;
  blobUrl: string;
};

export const BOT_NAME = "nkb";

export const DUMMY_MESSAGES: MessagesType[] = [
  { sender: "me", blobUrl: "url" },
  { sender: "nkb", blobUrl: "url" },
  { sender: "me", blobUrl: "url" },
  { sender: "nkb", blobUrl: "url" },
  { sender: "me", blobUrl: "url" },
  { sender: "nkb", blobUrl: "url" },
  { sender: "me", blobUrl: "url" },
  { sender: "nkb", blobUrl: "url" },
  { sender: "me", blobUrl: "url" },
];
