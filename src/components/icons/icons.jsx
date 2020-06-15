import * as React from 'react';
import Icon from './icon-wrapper';

export const IconSun = (props) => (
  <Icon
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Icon>
);

export const IconMoon = (props) => (
  <Icon
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);

export const IconTrash = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconFavorite = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconBrush = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M15.213 1.018a.572.572 0 01.756.05.57.57 0 01.057.746C15.085 3.082 12.044 7.107 9.6 9.55c-.71.71-1.42 1.243-1.952 1.596-.508.339-1.167.234-1.599-.197-.416-.416-.53-1.047-.212-1.543.346-.542.887-1.273 1.642-1.977 2.521-2.35 6.476-5.44 7.734-6.411z" />
  </Icon>
);

export const IconFilter = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z" />
    <path
      fillRule="evenodd"
      d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconPensil = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconSearch = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconList = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M2 2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5H2zM3 3H2v1h1V3z"
      clipRule="evenodd"
    />
    <path d="M5 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.5 7a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 4a.5.5 0 000 1h9a.5.5 0 000-1h-9z" />
    <path
      fillRule="evenodd"
      d="M1.5 7a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H2zm1 .5H2v1h1v-1z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconCheck = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconCheckAll = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z"
      clipRule="evenodd"
    />
    <path d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z" />
  </Icon>
);

export const IconText = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconPlus = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
      clipRule="evenodd"
    />
  </Icon>
);

export const IconCard = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
<path
      fill-rule="evenodd"
      d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
    />
    <path
      fill-rule="evenodd"
      d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
    />
  </Icon>
);
export const IconFox = (props) => (
  <Icon
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path d="M922.757 679.722c-9.278-52.003-24.544-99.516-43.39-139.068 0.091-0.137 0.182-0.275 0.275-0.408 0.847 0.258 1.696 0.508 2.541 0.773-0.422-0.883-0.863-1.76-1.292-2.643 12.366-18.578 22.399-39.972 29.136-66.647 3.516-13.909 6.145-29.263 7.783-46.397 0.818-8.569 1.389-17.584 1.698-27.092 0.156-4.751 0.246-9.626 0.269-14.633 0.022-5.002-0.022-10.14-0.133-15.402 0.081-10.857-0.111-21.828-0.471-32.944-0.359-11.116-0.885-22.367-1.475-33.786-1.178-22.837-2.604-46.319-3.434-70.643-1.523-34.468-1.834-70.638-2.67-105.163-19.341 6.757-39.436 15.327-59.56 25.448-81.158 40.989-166.211 107.387-215.76 191.069-1.042 1.655-2.046 3.322-3.049 4.986-38.35-10.217-79.226-15.743-121.656-15.743-43.438 0-85.243 5.795-124.381 16.487-0.939-1.447-1.869-2.891-2.834-4.33-53.276-84.088-134.112-149.982-215.583-191.043-20.062-10.118-40.164-18.696-59.515-25.452-0.839 34.537-1.153 70.724-2.677 105.213-1.663 48.665-5.701 93.985-5.376 137.427-1.778 83.493 13.639 133.437 39.644 171.555-0.142 0.303-0.294 0.602-0.437 0.905 0.139-0.038 0.277-0.075 0.416-0.112-18.356 39.116-33.223 85.823-42.326 136.86-2.678 15.010-4.747 29.82-6.254 44.359 65.632 10.539 144.907 36.168 225.818 75.514 55.879 27.177 105.924 57.687 147.427 88.735 3.259 3.722 7.779 7.212 12.852 10.232 5.65 3.36 11.912 6.11 17.756 7.969 2.927 0.931 5.759 1.64 8.428 2.108 1.336 0.237 2.633 0.412 3.885 0.526 0.625 0.052 1.241 0.096 1.846 0.115 0.605 0.021 1.2 0.027 1.78 0.018 11.043-0.218 22.754-6.308 32.935-14.805h0.439c43.386-33.658 97.033-66.961 157.499-96.36 80.923-39.35 160.207-64.979 225.863-75.526-1.484-13.815-3.485-27.877-6.022-42.109zM682.665 760.403c-54.102 27.67-102.101 59.014-140.921 90.693h-0.392c-9.11 7.996-19.587 13.728-29.469 13.934-0.52 0.007-1.052 0.003-1.594-0.017-0.541-0.021-1.090-0.059-1.652-0.109-1.121-0.106-2.282-0.27-3.476-0.495-2.389-0.442-4.923-1.108-7.54-1.985-5.229-1.75-10.831-4.338-15.887-7.5-4.539-2.842-8.584-6.126-11.5-9.63-37.133-29.222-81.911-57.936-131.909-83.515-72.395-37.033-143.325-61.151-202.047-71.073 1.348-13.683 3.2-27.623 5.597-41.749 7.070-41.692 18.023-80.317 31.533-113.864 11.924-1.751 24.096-2.671 36.471-2.671 143.697 0 261.084 115.913 274.521 266.783h0.074c1.127 17.839 12.971 31.877 27.428 31.877 15.201 0 27.523-15.518 27.523-34.659 0-2.258-0.177-4.463-0.505-6.602 19.173-146.753 126.643-260.464 267.536-260.464 13.608 0 26.973 1.105 40.032 3.213 14.126 34.29 25.577 74.068 32.88 117.121 2.272 13.395 4.061 26.629 5.39 39.631-58.742 9.924-129.68 34.047-202.086 71.082z" />
  </Icon>
);
