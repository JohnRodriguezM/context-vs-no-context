export interface PropsBase {
  theme?: string;
  setTheme?: Function;
  title: string;
}

export type PartialBase = Partial<PropsBase>;

export interface HeaderProps extends PropsBase {}
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
export interface FooterProps extends Omit<PropsBase, "title"> {}

/*
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;*/
