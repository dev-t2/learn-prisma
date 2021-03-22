export type GetLengthType = (text: string) => number;

export type DataType = {
  message: string;
  status: string;
};

export type useAxiosType = (
  url: string
) => [boolean, DataType | undefined, Error | undefined];

export type loadDataType = (url: string) => void;
