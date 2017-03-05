declare interface IUserDetailsStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'userDetailsStrings' {
  const strings: IUserDetailsStrings;
  export = strings;
}
