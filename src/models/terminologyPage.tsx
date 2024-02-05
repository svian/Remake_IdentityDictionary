export interface TermListItem {
  term: string;
  pronunciation: string;
  definition: string;
  flag: string;
}

export interface TermPageData {
  title: string;
  definition: string;
  hasList: boolean;
  list?: Array<TermListItem>;
}
