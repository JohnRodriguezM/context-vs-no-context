export interface PropsBase {
  theme?: string;
  setTheme?: Function;
  setLanguage?: Function;
  title?: string;
}
export type PartialBase = Partial<PropsBase>;

export interface HeaderProps extends PropsBase {
  titleInitial?: string;
}
export interface MainProps extends Partial<PropsBase> {
  children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[];
}
export interface FooterProps extends Omit<PropsBase, "title"> {
  footerTitle?: string;
}

/*
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;*/
